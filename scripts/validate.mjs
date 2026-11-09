import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, readdir, lstat } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function files(root, dir = root) {
  const paths = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const path = join(dir, entry.name);
    assert.ok(!(await lstat(path)).isSymbolicLink(), `Symlink not allowed: ${path}`);
    if (entry.isDirectory()) paths.push(...await files(root, path));
    else paths.push(relative(root, path).replaceAll('\\', '/'));
  }
  return paths.sort();
}
export const sha = (bytes) => createHash('sha256').update(bytes).digest('hex');

export async function validatePublic(directory) {
  const root = resolve(directory);
  const json = async (path) => JSON.parse(await readFile(join(root, path), 'utf8'));
  const identity = await json('identity.json');
  assert.equal(identity.displayName, 'Ultiwrite Forensics');
  assert.equal(identity.slug, 'ultiwrite-forensics');
  assert.equal(identity.homepage, 'https://ultiwrite.co');
  assert.equal(identity.mcpUrl, 'https://mcp.ultiwrite.co/mcp');
  assert.equal(identity.oauth.issuer, 'https://mcp.ultiwrite.co');
  assert.equal(identity.oauth.resource, identity.mcpUrl);
  assert.equal(identity.packages.publicRepository.name, 'dennis430/ultiwrite-forensics-plugins');
  assert.equal(identity.packages.publicRepository.status, 'published');
  assert.equal(identity.capabilities.sharedEntitlements, false);
  assert.equal(identity.capabilities.businessDiligence, false);
  const release = await json('PUBLIC_RELEASE.json');
  assert.equal(release.repository, identity.packages.publicRepository.name);
  assert.equal(release.version, identity.version);
  assert.match(release.source.revision, /^[a-f0-9]{40}$/);
  assert.equal(release.source.repository, 'dennis430/ultiwrite-forensics');
  const actual = (await files(root)).filter((p) => p !== 'PUBLIC_RELEASE.json');
  assert.deepEqual(actual, Object.keys(release.files).sort(), 'Unexpected or missing public files');
  const forbidden = [/sk_(?:live|test)_[A-Za-z0-9]{12}/, /whsec_[A-Za-z0-9]{12}/, /ufm_(?:at|rt)_[A-Za-z0-9_-]{20}/, /ufk_[A-Za-z0-9_-]{20}/, /BEGIN [A-Z ]*PRIVATE KEY/, /(?:DATABASE_URL|ENGINE_MACHINE_SECRET|NEXTAUTH_SECRET)\s*=/];
  for (const path of actual) {
    assert.ok(!path.startsWith('/') && !path.split('/').includes('..'), `Unsafe path ${path}`);
    assert.doesNotMatch(path, /^(app|lib|migrations|deployment|workers|artifacts)\//, 'Private application material');
    assert.doesNotMatch(path, /(^|\/)\.env|\.(?:pem|key|pdf|sql)$/i, 'Private file type');
    const body = await readFile(join(root, path));
    assert.equal(sha(body), release.files[path], `Stale provenance: ${path}`);
    if (!/\.(png|zip)$/.test(path)) for (const pattern of forbidden) assert.doesNotMatch(body.toString('utf8'), pattern, path);
  }
  const mcp = async (path, field = 'mcpServers', urlField = 'url') => {
    const servers = (await json(path))[field];
    assert.deepEqual(Object.keys(servers), [identity.slug], path);
    assert.equal(servers[identity.slug][urlField], identity.mcpUrl, path);
  };
  for (const path of ['mcp.json', '.mcp.json', 'chatgpt/mcp.json', 'cursor/mcp.json', 'codex/.mcp.json', `claude/plugins/${identity.slug}/.mcp.json`]) await mcp(path);
  await mcp('gemini-extension.json', 'mcpServers', 'httpUrl');
  const marketplace = await json('.claude-plugin/marketplace.json');
  assert.equal(marketplace.name, identity.slug);
  assert.deepEqual(marketplace.plugins.map((p) => [p.name, p.source]), [[identity.slug, `./claude/plugins/${identity.slug}`]]);
  for (const path of ['.cursor-plugin/plugin.json', '.codex-plugin/plugin.json']) {
    const plugin = await json(path); assert.equal(plugin.name, identity.slug); assert.equal(plugin.version, identity.version);
  }
  const registry = await json('server.json');
  assert.equal(registry.name, identity.registry.name); assert.equal(registry.remotes[0].url, identity.mcpUrl);
  const tools = await json('tools.json');
  assert.ok(tools.length > 0);
  assert.equal(new Set(tools.map((tool) => tool.name)).size, tools.length);
  for (const tool of tools) {
    assert.ok(tool.name.startsWith(identity.toolPrefix)); assert.ok(identity.oauth.scopes.includes(tool.scope));
    assert.equal(tool.run, undefined, 'Public catalog must contain descriptors only');
  }
  const packages = await json('release/manifest.json');
  const validation = await json('release/validation.json');
  assert.equal(packages.version, identity.version);
  assert.equal(validation.version, identity.version);
  assert.equal(validation.manifestSha256, sha(await readFile(join(root, 'release/manifest.json'))));
  assert.ok(Object.values(validation.results).every((v) => v.ok));
  for (const [target, pkg] of Object.entries(packages.packages)) {
    const path = join(root, 'release', pkg.file.split('/').pop());
    assert.equal(sha(await readFile(path)), pkg.sha256);
    execFileSync('unzip', ['-tqq', path]);
    const inside = JSON.parse(execFileSync('unzip', ['-p', path, target === 'plugin-bundle' ? `${identity.slug}/identity.json` : 'identity.json'], { encoding: 'utf8' }));
    assert.deepEqual(inside, identity, target);
  }
  return { version: identity.version, files: actual.length, packages: Object.keys(packages.packages).length, externalDependencies: validation.externalDependencies };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(await validatePublic(process.argv[2] ?? resolve(fileURLToPath(new URL('..', import.meta.url)))), null, 2));
}
