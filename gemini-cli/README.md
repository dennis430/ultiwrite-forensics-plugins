# Ultiwrite Forensics for Gemini CLI

Examine an original PDF, Office file, RTF, image, or supported ZIP for construction, typography, layout, metadata and retained editing evidence. Decision profiles for invoice/AP, contract/diligence, and pre-sharing assurance turn the same source-bound evidence into a focused question, consequence, credible alternatives, and ranked next-evidence requests without starting a broader business investigation. Each completed examination returns source-bound findings, a Document Forensics Report PDF, a separate Metadata Analytics Report PDF, a structured export, and an artifact manifest. No permanent document retention: your files are processed temporarily and automatically deleted; there is no permanent archive of your documents or reports.

**No permanent document retention.** Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.

## What it does

Connects Gemini CLI to your own Ultiwrite Forensics account at https://ultiwrite.co through the remote MCP server `https://mcp.ultiwrite.co/mcp`. You can submit one authorized original per examination (PDF, Office, RTF, images or one ZIP of those, up to 48 MiB via browser upload or app attachment retrieval; inline tool payloads stay limited to 3 MiB), optionally compare an earlier PDF when live capabilities admit it, choose a general, invoice/AP, contract/diligence, or pre-sharing decision profile, follow status, read source-bound findings and decision consequences, and download both the Document Forensics Report PDF and the separate Metadata Analytics Report PDF, structured export and artifact manifest.

## Install

```bash
gemini extensions install https://github.com/dennis430/ultiwrite-forensics-plugins
# or directly:
gemini mcp add --transport http ultiwrite-forensics https://mcp.ultiwrite.co/mcp
```

Then run `/mcp auth ultiwrite-forensics`.

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
