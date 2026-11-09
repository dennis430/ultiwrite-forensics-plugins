# Mistral Le Chat / Vibe

Le Chat: Connectors → + Add Connector → Custom MCP Connector → name `ultiwrite_forensics`, URL `https://mcp.ultiwrite.co/mcp` → Connect (OAuth 2.1 with dynamic registration is auto-detected).

Vibe CLI `config.toml`:

```toml
[[mcp_servers]]
name = "ultiwrite_forensics"
transport = "streamable-http"
url = "https://mcp.ultiwrite.co/mcp"

[mcp_servers.auth]
type = "oauth"
scopes = ["forensics:read", "forensics:analyze", "forensics:delete"]
```

Then `/mcp login ultiwrite_forensics`. No public directory submission route is documented.

No permanent document retention: Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.
