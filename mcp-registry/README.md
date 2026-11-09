# MCP Registry entry

Publish with `mcp-publisher` after verifying the `ultiwrite.co` namespace (DNS TXT on the apex, or HTTP at https://ultiwrite.co/.well-known/mcp-registry-auth served by this app from MCP_REGISTRY_AUTH):

```bash
mcp-publisher validate
mcp-publisher login dns --domain ultiwrite.co --private-key "$PRIVATE_KEY"
mcp-publisher publish
```

No permanent document retention: Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.
