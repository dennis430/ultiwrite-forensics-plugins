import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, rm, readFile, writeFile, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validatePublic, sha } from './validate.mjs';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
async function fixture(run) {
  const target = await mkdtemp(join(tmpdir(), 'uf-public-test-'));
  try { await cp(root, target, { recursive: true, filter: (path) => !path.split('/').includes('.git') }); await run(target); }
  finally { await rm(target, { recursive: true, force: true }); }
}
async function revise(root, path, content) {
  await writeFile(join(root, path), content);
  const manifest = JSON.parse(await readFile(join(root, 'PUBLIC_RELEASE.json'), 'utf8'));
  manifest.files[path] = sha(Buffer.from(content));
  await writeFile(join(root, 'PUBLIC_RELEASE.json'), JSON.stringify(manifest));
}
test('published export passes provenance, native layout and package validation', async () => { const manifest = JSON.parse(await readFile(join(root, 'release/manifest.json'), 'utf8')); assert.equal((await validatePublic(root)).packages, Object.keys(manifest.packages).length); });
test('a changed artifact is rejected even when metadata is unchanged', () => fixture(async (root) => {
  const path = join(root, 'release/manifest.json'); await writeFile(path, '{}'); await assert.rejects(validatePublic(root), /provenance/);
}));
test('rehashed flagship endpoint substitution is still rejected', () => fixture(async (root) => {
  const path = 'mcp.json'; const doc = JSON.parse(await readFile(join(root, path), 'utf8'));
  doc.mcpServers['ultiwrite-forensics'].url = 'https://mcp.dwsoffshorepartners.com/mcp';
  await revise(root, path, JSON.stringify(doc)); await assert.rejects(validatePublic(root));
}));
test('unmanaged private files and symlinks cannot enter a public release', () => fixture(async (root) => {
  await writeFile(join(root, '.env'), 'private'); await assert.rejects(validatePublic(root)); await rm(join(root, '.env'));
  await symlink('/etc/passwd', join(root, 'untrusted-link')); await assert.rejects(validatePublic(root), /Symlink/);
}));

test('rehashing an injected private source or modified host tree cannot bypass archive parity', () => fixture(async (root) => {
  await revise(root, 'chatgpt/private-engine.ts', 'synthetic private source marker');
  await assert.rejects(validatePublic(root), /Private file type|validated.*ZIP/);
}));
test('rehashing a portable profile cannot substitute another product endpoint or broader OAuth authority', () => fixture(async (root) => {
  const path = 'connection-profile.json';
  const original = JSON.parse(await readFile(join(root, path), 'utf8'));
  const changedEndpoint = structuredClone(original);
  changedEndpoint.endpoint = 'https://mcp.dwsoffshorepartners.com/mcp';
  await revise(root, path, JSON.stringify(changedEndpoint));
  await assert.rejects(validatePublic(root), /Portable profile endpoint/);
  const changedScopes = structuredClone(original);
  changedScopes.authentication.scopes.push('platform:admin');
  await revise(root, path, JSON.stringify(changedScopes));
  await assert.rejects(validatePublic(root), /Portable profile cannot widen/);
}));
test('rehashing native Muse Code settings cannot omit the schema or route to another product', () => fixture(async (root) => {
  const path = 'muse-code/settings.json.example';
  const original = JSON.parse(await readFile(join(root, path), 'utf8'));
  const noSchema = structuredClone(original); delete noSchema.schema_version;
  await revise(root, path, JSON.stringify(noSchema));
  await assert.rejects(validatePublic(root), /Muse Code requires explicit/);
  const otherProduct = structuredClone(original);
  otherProduct.mcp_servers['ultiwrite-forensics'].url = 'https://mcp.dwsoffshorepartners.com/mcp';
  await revise(root, path, JSON.stringify(otherProduct));
  await assert.rejects(validatePublic(root), /Muse Code endpoint/);
}));
test('rehashing Meta review classifications cannot grant saved approval for consequential writes', () => fixture(async (root) => {
  const path = 'meta-muse-review.json';
  const doc = JSON.parse(await readFile(join(root, path), 'utf8'));
  const deletion = doc.tools.find((tool) => tool.name === 'ultiwrite_forensics_analysis_delete');
  deletion.proposedClassification = 'read'; deletion.approval = 'always_allow';
  await revise(root, path, JSON.stringify(doc));
  await assert.rejects(validatePublic(root), /Meta proposed tool privileges/);
}));
test('rehashing changed host documentation still requires exact validated archive content', () => fixture(async (root) => {
  await revise(root, 'chatgpt/README.md', '# changed after package validation');
  await assert.rejects(validatePublic(root), /Export content differs from validated ZIP/);
}));

test('unapproved JavaScript module spellings cannot bypass the explicit validator-script allowlist', () => fixture(async (root) => {
  for (const path of ['chatgpt/PRIVATE.MJS', 'chatgpt/private.cjs']) {
    await revise(root, path, 'synthetic source marker');
    await assert.rejects(validatePublic(root), /Unapproved source file|validated.*ZIP/);
    await rm(join(root, path));
    const release = JSON.parse(await readFile(join(root, 'PUBLIC_RELEASE.json'), 'utf8'));
    delete release.files[path]; await writeFile(join(root, 'PUBLIC_RELEASE.json'), JSON.stringify(release));
  }
}));
