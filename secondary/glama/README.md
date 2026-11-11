# Glama direct remote connector

Official FAQ: https://glama.ai/mcp/faq (checked November 10, 2026). This prepares a direct remote connector listing. It does not adopt Glama Gateway proxying, full-payload logging or hosted copies of private server code.

Dennis, after submission approval, open https://glama.ai/mcp/connectors, choose **Add Server → Hosted endpoint**, and supply:

- Name: Ultiwrite Forensics.
- Description: authorized document forensics with source-bound evidence, a Document Forensics Report PDF and separate Metadata Analytics Report PDF; expiring artifacts; optional stages follow live capabilities.
- URL: https://mcp.ultiwrite.co/mcp (HTTPS Streamable HTTP).
- Publisher/contact: DWS Offshore Fund; Dennis Liu, dennisl@ultiwrite.co.

Claim ownership using the exact provider-issued claim token. Choose the actual documented endpoint/domain proof returned by Glama, including a public `/.well-known/glama.json` claim file or `_glama-claim` TXT if selected. Domain-based registry namespaces prove the corresponding owned domain. GitHub identity does not prove `co.ultiwrite` ownership. No claim token or DNS record is invented here; publishing a proof/deploying a route still requires the applicable authorization.

Under **Admin → Test Profile**, select **OAuth 2.0** and use a dedicated isolated synthetic account with least privilege. The profile must not expose live customer data and must not permit billable tool operations. Grant only `forensics:read` for metadata health checks; verify server-side that examination is refused without analyze scope. If the portal's OAuth flow cannot request that least-privilege grant, stop that profile setup and resolve the host capability rather than weakening production auth. Dynamic client registration alone creates a client and does not authorize the user; authorize the test account separately through the normal flow. Never put credentials in public listing fields, support chat, archives or source.

Glama health checks initialize the connection and list tools/prompts/resources; they do not invoke tools or read resource contents. Those metadata requests are non-billable in this service. Healthy indexing, ownership, native-client interoperability and public acceptance are separate results. No Glama submission, ownership proof publication or authenticated health profile has been completed by this preparation.
