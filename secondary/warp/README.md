# Warp local and Oz cloud

Official sources (checked November 11, 2026):

- https://docs.warp.dev/guides/external-tools/using-mcp-servers-with-warp
- https://docs.warp.dev/agents/capabilities/mcp/

## Local Warp

Review and merge `.warp/.mcp.json` into your project, preserving other servers. Warp detects the file but project-scoped servers require explicit approval; start the server through Settings → Agents → MCP servers. Its first spawn opens the OAuth authentication modal. Authorize your own Forensics account. The profile uses only the remote URL; it launches no shell or local package.

Use a clean profile to check capabilities/allowance, authorize one synthetic document examination, use the service's secure upload handoff when necessary, poll status, inspect findings and retrieve both the Document Forensics Report PDF and Metadata Analytics Report PDF. Test another account, expired credentials/downloads and reconnect. Record current Warp version and actual evidence. Local native verification remains pending.

Uninstall by removing only `mcpServers.ultiwrite-forensics` from the project file or deleting that server through Warp MCP settings. Revoke the corresponding OAuth grant on the Forensics `/developers` page.

## Oz cloud

An OAuth-only raw URL configuration without an Authorization header cannot log in mid-run in a cloud agent. Open the Oz web application's **Integrations** page, create an authorized managed MCP installation for `https://mcp.ultiwrite.co/mcp`, and complete the ordinary browser OAuth flow with the intended Forensics account. Use the actual returned managed installation identifier (`warp_id`) through the current Oz interface/configuration. This package contains no invented identifier and no cloud config with a placeholder that appears ready to run.

The official guide documents `oz mcp list` for configured shared MCP UUIDs. Inspect that output in the authorized account and select the intended installation; do not publish identifiers or credentials. Follow the current cloud guide at https://docs.warp.dev/factories/mcp/ for the exact selected installation format. Cloud native testing and any public directory process are separate; no public submission directory was established in these references.
