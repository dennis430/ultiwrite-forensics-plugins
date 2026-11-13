# Meta Muse Connector Platform review packet

Prepared for Ultiwrite Forensics 1.0.12 against the official [Meta Muse Connector Platform](https://platform.muse.ai/) and [connector guidelines](https://platform.muse.ai/docs), retrieved November 13, 2026. Meta's [Connect recap](https://developers.meta.com/blog/meta-connect-recap/) links the Muse platform. This identifies the actual program; it is separate from the native [Muse Code MCP setup](muse-code/README.md).

Status: prepared documentation and tool-classification proposal. No portal submission, business verification, reviewer-account provisioning, native Muse invocation or approval is claimed. The public connector endpoint is `https://mcp.ultiwrite.co/mcp`. The current runtime's capability tool determines operational availability.

## Overview and complete task scope

**Publisher:** DWS Offshore Fund. **Product:** Ultiwrite Forensics, https://ultiwrite.co. **Public source:** https://github.com/dennis430/ultiwrite-forensics-plugins. **Support:** support@dwsoffshorepartners.com.

Intended users are analysts examining originals they are authorized to process. Compared with browsing public pages, the connector exposes private account/examination state, source-bound findings, metadata, coverage and downloadable deliverables, with stable retries and explicit failure recovery. It is not a public-page wrapper or general business-investigation connector.

The submitted task is: verify the connected account and capabilities → submit one authorized original using supported attachment bytes or a resumable first-party upload handoff → poll authoritative status → read actual findings and coverage → retrieve the Document Forensics Report PDF, separate Metadata Analytics Report PDF, structured result and manifest → support deletion and recoverable errors. Preserve progress through sign-in or original upload. Do not call an upload link, pending state or failed job a completed examination. Reuse the same intended submission key after an uncertain response.

The read-only option supports reviewing an existing account/examination and obtaining available reports as the outcome. It does not start a new examination, create an upload authorization, spend a unit or delete data. Do not advertise buying credits, payments, subscriptions, account administration, trades, financial transfers, public authenticity certificates, or a direct IRS EIN lookup as MCP tasks: these tools do not offer them. Examination of a financial document is document analysis, not financial money movement.

Restrictions disclosed before use: a separate verified Forensics account, correct active workspace membership, sufficient units for billable actions, supported original/size/page limits, configured operational service, temporary report availability and capability-dependent optional checks. Connecting and key creation do not create units. See [ENTERPRISE.md](ENTERPRISE.md) for exact role and credential boundaries.

## Authentication and read-only connection

Use first-party OAuth with PKCE S256 and dynamic client registration where supported. Issuer: `https://mcp.ultiwrite.co`. Protected resource: `https://mcp.ultiwrite.co/mcp`.

| Scope | Meaning |
|---|---|
| `forensics:read` | Read account/usage, capabilities, owned examination status, findings, metadata and available reports |
| `forensics:analyze` | Create temporary upload permissions, start examinations and explicitly authorized one-unit partial-evidence unlocks |
| `forensics:delete` | Request deletion of the connected actor's examination evidence |

Offer read-only account access with **only `forensics:read`**. Select additional scopes only for the submitted write tasks. A customer API key is a separate backend credential, not an OAuth token or a reason to bypass user consent.

The official guidelines request environment-specific authentication details but do not establish a universal Muse callback URI, public OAuth client ID, client secret or API-key header. Obtain the exact callback and client requirements from the authenticated portal and register/review those exact values using the established product process. Never fabricate a callback or put credentials in this repository, a tool response, a URL or a demo recording.

## Tool classification and approval

`tools.json` contains actual input schemas, outputs described by the registered tools, scopes and MCP annotations. `meta-muse-review.json` is a **product-owned review worksheet**, not an official Meta manifest or acceptance receipt. It derives proposed classifications from the real registry. A mixed read/write tool is a write even if some calls only read.

| Tool suffix | Proposed review classification | Side effect and approval detail |
|---|---|---|
| `account_get`, `capabilities_get`, `analyses_list`, `analysis_status`, `findings_get`, `report_get` | Read | Reads authenticated account/examination information or existing artifacts; starts no examination and consumes no additional unit |
| `upload_link_create` | Sensitive write, conservative proposal | Creates a private, temporary, actor-bound upload authorization; does not itself spend a unit; browser confirmation remains required |
| `analysis_start` | Sensitive write | Submits private original bytes, creates/resumes one examination and reserves one unit; optional public-record comparison requires explicit opt-in |
| `evidence_unlock` | Sensitive write | After explicit authorization, consumes one unit to unlock available partial evidence; does not rerun or complete the failed examination |
| `analysis_delete` | Sensitive write | Requests irreversible evidence deletion/cancellation; completed work remains charged |

Meta reviews the final classification. Its current controls allow first-use approval and optional **Always allow** for reads/non-sensitive writes. **Sensitive writes require approval every use and cannot use Always allow**, including through saved settings. Explain the exact original/action, any one-unit charge, deletion consequence and external-check choice before requesting approval. A changed price, target, original or scope requires fresh approval; connection consent and a previous approval do not authorize an unrelated action. Do not disable or bypass host approval controls.

The official tool-annotation portal feature was marked coming soon when these guidelines were retrieved. Include this table and the worksheet in the tool documentation now, and use the actual portal's annotation fields when available. A declared worksheet does not itself configure or prove the host's approval behavior.

## Data-processing questionnaire draft

Review these answers against the deployed environment and current [privacy](https://ultiwrite.co/privacy), [retention](https://ultiwrite.co/data-retention), [security](https://ultiwrite.co/security) and [terms](https://ultiwrite.co/terms) before submitting. Do not invent processor attestations, data regions, certification or contractual commitments.

| Requested disclosure | Product evidence and answer to verify |
|---|---|
| What data and why? | Authorized original/reference bytes for requested document examination; metadata/findings and derived reports for results; account, usage, credential and content-free operational/payment records for authentication, allocation, security and support |
| Minimum necessary data and permitted purpose | The connector must use only data needed for the approved request and permitted connector operation. Meta prohibits secondary unrelated advertising/profiling, inference of sensitive characteristics and model training. Product privacy states documents are not sold, used for advertising or used to train models/build a research corpus. Confirm questionnaire answers and any future feature match both the policy and actual implementation |
| Providers and sharing | Public privacy identifies Vercel, Cloudflare, Neon, Stripe, Resend and optional Google sign-in in their respective roles. Optional public-record comparisons send selected business fields to GLEIF/IRS TEOS only by opt-in; not original document bytes. Optional model processing depends on verified configuration and updated disclosures; do not claim it is enabled or that a provider offers zero retention |
| Protection | First-party OAuth, scoped/revocable credentials, product/workspace/actor isolation, encrypted transport, private temporary processing and content-free operational database controls; no certification inferred |
| Document/report retention | Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted. A restart may remove temporary copies earlier. Account/payment/necessary operational records have a separate lifecycle; do not give them the document-retention deadline |
| Deletion and revocation | Explicit tool/API/web deletion requests require actual confirmation; pending is not complete. Revocation stops future access; it cannot recall customer downloads or assistant conversation copies. Explain remaining necessary records and request handling in the questionnaire |
| Host and customer copies | Findings read by Muse and customer-downloaded reports follow those recipients' handling policies; service deletion does not delete those copies |

## Reviewer account, demo and evidence

Provide a dedicated accessible test account, sign-in instructions, approved scopes, sufficient authorized fixture units, harmless representative files, expected output and a complete demo through the portal's protected credential fields. Keep it accessible throughout review. No password, API key, refresh token, customer document or live card belongs in the public packet. This repository does not create the account or grant units.

Use [REVIEWER-GUIDE.md](REVIEWER-GUIDE.md), including read-only denial, wrong-tenant denial, per-use sensitive-write approval, original-byte handoff, stable retries, partial evidence, separate PDFs, revocation and deletion. Keep a versioned pass/fail/not-run record. A successful schema validation, installed plugin or HTTP probe is not native Muse QA.

## Publisher intake, incident response and review

The owner must supply the actual business-verification evidence, authority to use the brand, consistent listing details, authorized assets, privacy/terms links, security/support contacts and a named maintenance developer, and accept applicable developer terms. Do not guess government identifiers, certification, brand ownership proof or portal acceptance.

The retrieved guidelines require notification to Meta at `vendor-incident@meta.com` within **48 hours** of a security incident involving user data and cooperation with investigation, under the applicable platform terms. This is a publisher obligation to review and operationalize before submission, not evidence that an incident occurred or authorization for this agent to send a message.

Meta's stated review stages are risk assessment, per-tool review, then end-to-end QA. Only approved tools are covered. Approval does not guarantee featuring, ranking or traffic; placement is separate and can change. Prepare and review the packet first, then submit only with the owner's applicable portal authority. No upstream submission or directory acceptance is performed by the build/export process.

No permanent document retention: Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.
