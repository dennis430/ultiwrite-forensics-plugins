# Ultiwrite Forensics in Meta Muse Code

Connector 1.0.12 uses the documented native [Muse Code MCP configuration](https://dev.meta.ai/docs/muse-code/extending#mcp), separate from the consumer [Muse Connector Platform review](../META-MUSE-REVIEW.md).

Merge [settings.json.example](settings.json.example) into `~/.config/muse/settings.json`, preserving your other configuration. The file must include `"schema_version": 1`; the official [configuration reference](https://dev.meta.ai/docs/muse-code/configuration.md) says a present file without it fails startup. Do not overwrite an existing settings file blindly.

The example declares one server named `ultiwrite-forensics`, with `transport: "streamable_http"`, endpoint `https://mcp.ultiwrite.co/mcp`, `enabled: true` and `mode: "optional"`. Optional mode lets Muse Code warn and continue if this server is unavailable; required mode aborts the run on server startup failure. The example adds no secrets, headers, shell command or invented OAuth callback.

Authenticate using the documented native commands:

```sh
muse mcp login ultiwrite-forensics
# Inside Muse Code, use /mcp to inspect the connected inventory.
# Disconnect when finished:
muse mcp logout ultiwrite-forensics
```

OAuth dynamic client registration is on by default in the documented client. The setting `mcp_oauth_dynamic_client_registration: false` disables it; do not turn it off merely to bypass a connection error. Use the client's normal protected OAuth flow, confirm the product account/scopes and never paste a customer API key into a prompt.

Check `ultiwrite_forensics_account_get` and `ultiwrite_forensics_capabilities_get` before intake. Then use the [synthetic reviewer journey](../REVIEWER-GUIDE.md) for exact original-byte transport or resumable first-party browser upload, stable retries, private actor boundaries, distinct PDFs, revocation and deletion. This prepared configuration has not been exercised in a native Muse Code session; record real host outcomes before claiming acceptance. Muse Code connection does not submit or approve a consumer Muse directory listing.
