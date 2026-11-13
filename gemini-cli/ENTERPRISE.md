# Ultiwrite Forensics enterprise integration

This guide covers connector release 1.0.12 for the separate document-forensics product at https://ultiwrite.co. Start with [INSTALL.md](INSTALL.md), [platform compatibility](PLATFORM-COMPATIBILITY.md), and the [reviewer journey](REVIEWER-GUIDE.md). Hosted runtime availability and actual capabilities are discovered at connection time; a prepared package does not activate the service or establish directory approval.

## Choose the integration boundary

| Need | Interface | Identity and authority |
|---|---|---|
| Analyst examines an authorized original in an assistant | Remote MCP, `https://mcp.ultiwrite.co/mcp` | User signs in through first-party OAuth and approves named scopes |
| Backend automates document intake and report collection | REST, `https://ultiwrite.co/api/v1` | Customer creates a scoped API key in the developer console; store it on the server |
| Team uses a shared balance with private member examinations | Product workspace | Active membership and member budget remain authoritative; histories stay attributed to their submitting member |
| Operator manages a customer account or investigates a usage problem | Product admin interface | Explicit operator authorization; a customer API key never grants operator access |

Ultiwrite Forensics API access is available to product users; examinations still require available analysis units and operational service configuration. A connection or key does not create credits. The product's current developer console and [API reference](https://ultiwrite.co/docs) define key scopes, expiration and controls. REST key scopes and MCP consent scopes are separate contracts. Neither accepts a key, session, balance or subscription from dwsoffshorepartners.com.

## Onboard an organization

1. Create the Forensics account, verify its mailbox, and sign in. Verify which workspace, membership and usage balance the console displays. Assign only the roles each teammate needs through the supported team controls.
2. Decide whether analysts use MCP, backend systems use REST, or both. Use separate keys and assistant connections for each responsible person or service. Do not put a shared owner's credentials into client configuration or document content.
3. For MCP, install one connector per host/workspace and authenticate on ultiwrite.co. Read consent before approving. `forensics:read` permits account, examination and report reads; `forensics:analyze` permits starting examinations and upload authorizations; `forensics:delete` permits deletion. Host and product restrictions may narrow these permissions further.
4. For REST, create a descriptive key in https://ultiwrite.co/developers with the minimum required scopes, expiration and available usage controls. Copy its secret once into the backend secret manager. Keep an owner accountable for rotation and revocation.
5. Complete the synthetic acceptance journey in [REVIEWER-GUIDE.md](REVIEWER-GUIDE.md) before supplying customer originals. Capture result states and artifact hashes without logging source content or credentials.
6. Document your own download retention and assistant-conversation handling. The service's deletion windows do not delete copies retained in your systems or assistant history.

The repository does not establish SAML/SCIM, a private deployment, a custom data region, a contractual SLA, SOC 2 certification, a signed DPA, or unlimited capacity. Confirm any procurement requirement with support before relying on it; do not infer it from enterprise integration documentation.

## Roles, credential privileges and usage controls

Workspace roles and credential scopes compose; neither substitutes for the other. Member examination visibility remains tied to the submitting identity. A workspace owner does not obtain another member's document contents merely by owning the wallet.

| Workspace role | Membership authority | Key authority |
|---|---|---|
| Owner | Manage admin/member invitations and member roles, status and budgets; owner membership is protected | Inspect and manage workspace keys; a key still acts for its attributed creator |
| Admin | Invite/manage members within the supported team controls; cannot promote to admin or change owner/admin peers | Manage own attributed keys; admin role alone does not expose another member's keys |
| Member | Use active workspace membership within assigned usage budget | Create/manage own attributed keys and choose scopes; cannot administer the team |
| Platform operator | Separately provisioned product administration | Operator status is separate from workspace roles and is never conferred by a customer API key |

REST keys have independent `forensics:read`, `forensics:analyze`, `forensics:artifacts`, `forensics:usage`, and `forensics:delete` scopes. For a reporting service, choose read/artifacts and optionally usage. Add analyze only for an intake service, and delete only when deletion is part of its intended job. MCP consent uses its separately published three scopes and does not inherit the five-scope REST key contract.

The developer console supports descriptive key names, 30/90/365-day expiration, at most five active keys across the workspace, atomic replacement, revocation, scope updates, a cumulative examination-unit cap, and a key request rate from 1 to 60 per minute. The account-wide API request ceiling remains 60 per minute across keys. Key lifetime consumption plus outstanding reservations counts against its cap; `0` blocks new billable work, and an empty/unset cap means no extra credential cap. Workspace available units and member budgets still apply, including when no key cap is set. Lowering a cap does not refund completed work or cancel existing accepted jobs. Status and downloads remain reads and do not spend another examination unit.

Suspending or removing a member revokes their workspace keys through the membership controls. A removed actor cannot regain that workspace by retaining a token, supplying an account ID or editing a client config. Treat a new or rotated key as a new credential, review its configured scopes/cap/rate, and keep budget ownership explicit.

## Processing contract

An examination operates on one original: supported PDF, Office, RTF, image, or ZIP of supported originals, when admitted by live capabilities. The documented ceilings are 48 MiB for the browser/attachment/direct-upload path, 3 MiB inline tool payloads, and 40 PDF pages. Query `ultiwrite_forensics_capabilities_get` before selecting a transport. Capabilities and tool input schemas take precedence if limits differ.

The workflow is account/capability check → authorized original → stable submission request key → durable status polling → findings and coverage → artifact download. Use a UUID request key for each intended examination and reuse it with unchanged bytes after an uncertain response. Do not silently replace the key after a timeout. A ZIP is submitted as one original and preserves its child provenance; it is not permission to create separate billable examinations for every child.

Polling and retrieving existing results do not consume additional examination units. Read both status and billing state. An interrupted examination may publish partial evidence; incomplete checks are not clean checks. If partial evidence is locked, explain the one-unit unlock and obtain explicit user authorization before `ultiwrite_forensics_evidence_unlock`. Unlocking does not rerun or complete the failed examination.

Successful examinations expose a Document Forensics Report PDF (`pdf`), a separate Metadata Analytics Report PDF (`metadata_analytics`), structured export (`result`), artifact manifest (`manifest`), and convenience ZIP (`bundle`). Preserve the returned SHA-256 values with your own downloaded copies. Findings express evidence and limitations; they do not certify authenticity, prove fraud, or verify an EIN directly with the IRS.

## Data handling and external services

**No permanent document retention.** Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.

Only send originals you are authorized to process. Prefer exact bytes or a host-provided supported attachment. A sandbox filename, attachment ID, or local path is not a downloadable source. If the host cannot expose the original, use the exact signed first-party upload handoff returned by `ultiwrite_forensics_upload_link_create`; do not publish a document to make it reachable.

Public-record comparisons are optional, require explicit opt-in and current capability support, and send selected business fields to supported public registries. They remain separate evidence, not an authenticity verdict. The AI examiner is capability-dependent and runs in the canonical service. Do not invent external checks or a completed examiner result when a capability is unavailable.

## Operate and support

Use [OPERATIONS.md](OPERATIONS.md) for rotation, disconnects, partial results, expiration and incident handoff. Public policy references are [privacy](https://ultiwrite.co/privacy), [security](https://ultiwrite.co/security), [retention](https://ultiwrite.co/data-retention), and [terms](https://ultiwrite.co/terms). Contact support@dwsoffshorepartners.com with the product name, UTC time, host/version, connector version, sanitized error code, request/analysis identifier and expected behavior. Never email originals, API keys, refresh tokens, passwords or unredacted report findings as the first diagnostic step.

## Programming languages and API reference

Use the [searchable customer API reference](https://ultiwrite.co/docs/reference) with its global selector for cURL, JavaScript, TypeScript, Python, Java, C#/.NET, Go, PHP and Ruby. The [language integration guide](https://ultiwrite.co/docs/languages) provides downloadable source clients for direct and multipart intake, durable reconciliation, bounded polling and all report formats. Read request/response schemas, required scopes, idempotency and errors for every endpoint before integration. Source clients use a customer REST key; MCP uses the separate first-party OAuth connection described above. A signed original-byte transfer uses only its returned method and headers, without sending the REST bearer to storage. Locally validated examples are not proof of live host acceptance or directory approval.
