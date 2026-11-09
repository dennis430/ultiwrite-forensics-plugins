---
name: explain-retention
description: Explain Ultiwrite Forensics temporary processing and document deletion, report expiry and deletion. Use when the user asks how long documents or reports are kept, whether files are stored or used for training, why a report expired, or how to delete an examination.
---

# No permanent document retention

- Your documents are analyzed, then deleted. Source files are deleted after processing, at the latest one hour after upload.
- Reports, findings, metadata and the PDF stay available for up to 24 hours from report creation, then they are deleted. A service restart can remove them sooner. An `expired` state means the report is gone and cannot be recovered; submit the original again for a new examination.
- There is no permanent archive of documents or reports, no research-corpus contribution and no model training on documents.
- To delete sooner, call `ultiwrite_forensics_analysis_delete` (only when the user asks) or use My Documents on ultiwrite.co.
- Account, payment, usage and connection records are kept separately and contain no document content. Temporary processing is not a claim that no data is ever stored. Browser selection, downloaded files and other providers have their own handling boundaries; follow the current linked policies.
- Results brought into this conversation are governed by this AI app's own data policies.

Policy: https://ultiwrite.co/data-retention · Privacy: https://ultiwrite.co/privacy
