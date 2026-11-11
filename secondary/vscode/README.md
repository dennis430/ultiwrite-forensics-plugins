# VS Code / GitHub Copilot custom MCP installation

Official source: https://code.visualstudio.com/docs/agent-customization/mcp-servers (checked November 10, 2026). This is a custom MCP profile, separate from a Microsoft 365 app package or public marketplace listing.

Review `.vscode/mcp.json`, then merge the named server into your workspace `.vscode/mcp.json` without replacing other servers. Alternatively run **MCP: Add Server**, choose the remote HTTP option and enter `https://mcp.ultiwrite.co/mcp`. Review trust and OAuth prompts in VS Code; complete browser authorization for your Forensics account. No secret or header token belongs in the checked-in profile.

In a clean test profile, confirm capabilities and allowance, authorize one synthetic examination, use the service's secure browser handoff if attachment bytes are not accessible, poll the existing job, inspect source-bound findings and retrieve the Document Forensics Report PDF and Metadata Analytics Report PDF. Test expired credentials, another account, expired report links and reconnect. Record exact VS Code/Copilot version and UTC evidence. This profile has not been native-host verified.

Uninstall by removing only `servers.ultiwrite-forensics` from the file or using VS Code's MCP server management. Revoke the matching OAuth grant on Ultiwrite Forensics `/developers`. This does not erase downloaded files or assistant conversations.
