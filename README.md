# Ultiwrite Forensics plugins

The public connector repository for **Ultiwrite Forensics**, the document-forensics and metadata product at [ultiwrite.co](https://ultiwrite.co).

**MCP endpoint:** `https://mcp.ultiwrite.co/mcp` · **Connector package version:** 1.0.2

Connect with OAuth using your own Ultiwrite Forensics account. Connecting grants no analysis units; examinations use this product's balance. The separate Ultiwrite business-diligence product and its registrations remain independent.

| Client | Install |
|---|---|
| Claude Code | `claude plugin marketplace add dennis430/ultiwrite-forensics-plugins`, then `claude plugin install ultiwrite-forensics@ultiwrite-forensics` |
| Claude | Add `https://mcp.ultiwrite.co/mcp` in Settings → Connectors → Add custom connector |
| Cursor | Use the root `mcp.json` or the [Cursor files](cursor/) |
| ChatGPT | Add the remote endpoint as an OAuth custom app where developer mode is available; [review package](chatgpt/) |
| Codex | Use [config.toml.example](config.toml.example), then `codex mcp login ultiwrite-forensics` |
| Gemini CLI | `gemini extensions install https://github.com/dennis430/ultiwrite-forensics-plugins`, then `/mcp auth ultiwrite-forensics` |
| VS Code / GitHub Copilot | [Setup guide](guides/vscode-github-copilot.md) |
| Other clients | [Installation guide](INSTALL.md) and [MCP documentation](https://ultiwrite.co/docs/mcp) |

The Claude marketplace and root Cursor/Codex/Gemini manifests are installable repository layouts. The [release folder](release/) contains eight host packages, an offline handoff bundle and SHA-256 checksums. Microsoft 365 requires a portal-issued OAuth reference before submission. A public GitHub repository is **not** evidence of marketplace listing, native-host acceptance or a new backend deployment. The connector version and the running server version can differ.

## What it does

Submit an authorized original, follow its status, read document findings and metadata, and retrieve its forensic report. Optional public-record comparisons require explicit opt-in and live capability support. Findings are evidence to assess, not authenticity certificates. The live capability tool determines supported formats, limits and optional-stage availability.

**No permanent document retention.** Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted. Files downloaded by customers and results read into assistant conversations follow their own handling policies.

## Development and repository routing

When the request says **“Ultiwrite Forensics plugin”**, **“ultiwrite.co plugin”** or **“Forensics connector”**, start here. Read [AGENTS.md](AGENTS.md) and [REPOSITORIES.md](REPOSITORIES.md).

This is a thin public distribution. Its checked export comes from the private standalone app's `distribution/` source and real tool registry; engine algorithms, account data, billing credentials and application source do not belong here. To change generated connectors, make the source change there and run the documented export/publish command; do not maintain a second set of identity strings.

Run `node scripts/validate.mjs` and `node --test scripts/validate.test.mjs`. The [provenance manifest](PUBLIC_RELEASE.json) records the exact source revision and every managed file hash.

[Website](https://ultiwrite.co) · [MCP setup](https://ultiwrite.co/docs/mcp) · [API](https://ultiwrite.co/docs) · [Privacy](https://ultiwrite.co/privacy) · [Retention](https://ultiwrite.co/data-retention) · [Terms](https://ultiwrite.co/terms) · [Support](https://ultiwrite.co/support)
