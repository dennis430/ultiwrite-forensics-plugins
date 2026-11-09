# Ultiwrite Forensics plugin authority

This repository, `dennis430/ultiwrite-forensics-plugins`, is the canonical **public plugin home** for Ultiwrite Forensics / ultiwrite.co. Requests mentioning “Ultiwrite Forensics plugin”, “ultiwrite.co plugin”, “Forensics MCP connector”, installation packages, skills or directory metadata start here.

## Route by responsibility

- Public connectors, installation files, skills, package archives, directory instructions and public plugin documentation: this repository.
- Standalone website, OAuth/token handling, MCP runtime, account isolation, usage credits, API and billing: private `dennis430/ultiwrite-forensics`.
- Shared forensic implementation is an existing dependency. Do not change the main engine, flagship public plugin repository or their registrations as part of a standalone plugin request.
- `ultiwritedev`, `ultiwritedev-rc` and `ultiwrite-plugin-alpic` are not established standalone backends. Do not route here by name similarity or move their contents without evidence.

## Generated source and synchronization

Runtime-aligned identity, skills and builders are versioned in the private app's `distribution/`, `scripts/build-distribution.ts` and `lib/mcp/tools.ts`. Public repo documentation/validator templates live under `distribution/public-repository/`. `PUBLIC_RELEASE.json` pins the source commit and hashes the public export. Work here to inspect and validate the plugin; update those source paths and regenerate to make durable changes.

In a clean private app checkout: `npm run distribution:build`, `npm run distribution:validate`, then `npm run distribution:export`. Run `npm run distribution:publish -- --repo-path /path/to/ultiwrite-forensics-plugins` to create a review PR in this public repository. The publisher refuses another repository, dirty checkouts, unvalidated packages and unexpected file replacement. It does not deploy the app or submit marketplace listings. Initial public setup was explicitly authorized by Dennis; future substantive releases follow the user's current authorization.

Never copy application routes, migrations, forensic algorithms, private infrastructure receipts, credentials or customer content into this repository. Only the exporter allowlist belongs in a publication. Keep existing historical public releases unchanged. Respect the separate Forensics OAuth resource, tool prefix and account/usage boundary. Consult live capabilities before claiming an optional examination stage is available.

## Validation

Run `node scripts/validate.mjs` and `node --test scripts/validate.test.mjs`. Hash/provenance validation is independent of host acceptance. Hosted GitHub Actions may be unavailable; run the same checks locally and report that distinction. A GitHub push is not permission for a production deployment, billing change, DNS move or directory submission.
