# Ultiwrite Forensics for ChatGPT

Examine an original PDF, Office file or image for construction, typography, layout, metadata and retained editing evidence. Each examination returns source-bound findings, document metadata and a forensic PDF report. No permanent document retention: your files are processed temporarily and automatically deleted; there is no permanent archive of your documents or reports.

**No permanent document retention.** Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.

## What it does

Connects ChatGPT to your own Ultiwrite Forensics account at https://ultiwrite.co through the remote MCP server `https://mcp.ultiwrite.co/mcp`. You can submit one authorized original per examination (PDF, Office, RTF, images or one ZIP of those, up to 3 MiB), follow its status, read source-bound findings and document metadata, and download the forensic PDF report.

## Install

Upload this ZIP at https://platform.openai.com/plugins (organization owner or Apps Management Write). Until the listing is published, a workspace with developer mode can add the server URL as a custom app with OAuth.

Sign in on ultiwrite.co and approve the connection. Choose **Use a different account** there to connect another account. Manage or revoke connections at https://ultiwrite.co/developers#mcp-connections.

## Data sent

The documents you choose to submit, and requests for your own examinations. OAuth tokens are issued by Ultiwrite Forensics and stored hashed. Examinations use your account's analysis units; connecting adds none. Results your assistant reads become part of that conversation.

## Workflow

connect → choose an authorized original → `ultiwrite_forensics_analysis_start` (or `ultiwrite_forensics_upload_link_create`) → `ultiwrite_forensics_analysis_status` → `ultiwrite_forensics_findings_get` → `ultiwrite_forensics_report_get`

Findings are evidence to assess, not an authenticity certificate or fraud verdict.

## Links

- Setup guide: https://ultiwrite.co/docs/mcp
- Data retention: https://ultiwrite.co/data-retention
- Privacy: https://ultiwrite.co/privacy
- Terms: https://ultiwrite.co/terms
- Support: support@dwsoffshorepartners.com

Publisher: DWS Offshore Fund. Ultiwrite Forensics is separate from the main Ultiwrite platform (dwsoffshorepartners.com); accounts, balances and connections are not shared.
