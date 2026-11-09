# Connect Ultiwrite Forensics

Add the Streamable HTTP URL `https://mcp.ultiwrite.co/mcp` to your MCP client, choose OAuth, and sign in to **Ultiwrite Forensics** on ultiwrite.co. Check the account and requested permissions before approving. Choose “Use a different account” on the consent screen to switch accounts. Manage/revoke connections at https://ultiwrite.co/developers#mcp-connections.

## Repository installation

Claude Code:

```sh
claude plugin marketplace add dennis430/ultiwrite-forensics-plugins
claude plugin install ultiwrite-forensics@ultiwrite-forensics
```

Gemini CLI:

```sh
gemini extensions install https://github.com/dennis430/ultiwrite-forensics-plugins
```

Cursor reads the root `mcp.json`; Codex can use `config.toml.example` and `codex mcp login ultiwrite-forensics`. Only install one connector/plugin per workspace to avoid duplicate tools. Browser clients can use the remote URL directly; no npm package is required.

Other host files are in `chatgpt/`, `codex/`, `claude/`, `cursor/`, `gemini-cli/`, `antigravity/`, `microsoft-365/` and `mcp-registry/`. `release/manifest.json` indexes validated ZIPs. The combined ZIP is an offline handoff, not a host-specific submission format. Microsoft requires its portal OAuth reference. Publishing `server.json` to the MCP Registry requires proving ownership of ultiwrite.co and a separate publication instruction.

## Account and workflow

Use `ultiwrite_forensics_account_get` and `ultiwrite_forensics_capabilities_get`, submit an authorized original with `ultiwrite_forensics_analysis_start` or its signed browser handoff, poll `ultiwrite_forensics_analysis_status`, then read findings and retrieve the report. Examinations spend standalone analysis units. Polling and downloads are free. Flagship Ultiwrite subscriptions and OAuth tokens do not confer access.

The live tool descriptions and [MCP setup guide](https://ultiwrite.co/docs/mcp) are authoritative for limits and availability. Findings do not certify authenticity. See [privacy](https://ultiwrite.co/privacy) and [retention](https://ultiwrite.co/data-retention) before submitting files.
