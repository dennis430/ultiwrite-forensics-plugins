# Cline official Marketplace contribution

Official contribution: https://github.com/cline/marketplace/blob/main/CONTRIBUTING.md (checked November 10, 2026). Schema, tags and upstream license are pinned from commit `6969aa8505f2be81bb3627e47ab0037d234aeaf7`. The pinned upstream package version is `0.0.0`; its check is `npm run validate` (`node scripts/generate.mjs --check`).

Contribution source: `registry/mcps/ultiwrite-forensics/entry.json`. Copy that one entry directory into a clean checkout of the current official Cline marketplace. Review any upstream changes, regenerate with `npm run generate`, then run `npm run validate`. Only after explicit submission approval, open the upstream contribution PR. This is a remote MCP entry, not a renamed plugin ZIP. `verified` remains false until Cline reviews it.

Native installation command:

```sh
cline mcp install ultiwrite-forensics --transport http https://mcp.ultiwrite.co/mcp
```

Use Cline's OAuth flow with your own Forensics account. Confirm live capabilities/allowance, authorize one synthetic document examination, use the secure browser handoff when local/chat attachment bytes are not accessible, poll status, inspect evidence and download both separate PDFs. Record Cline version, endpoint, UTC timestamp, case outcomes and artifact hashes. Native testing has not been performed by preparing this entry.

For uninstall, remove this MCP server through Cline's installed-server management and revoke its grant on Ultiwrite Forensics `/developers`. Do not delete another client's configuration. Check Cline's current CLI help before using an uninstall command; none is invented here.

The two schemas and tags.json are unmodified upstream validation inputs, licensed under the included UPSTREAM-LICENSE. Ultiwrite's public distribution license remains separate.
