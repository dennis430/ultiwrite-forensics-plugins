---
name: get-forensic-report
description: Retrieve the Ultiwrite Forensics PDF report or the structured metadata JSON for an examination. Use when the user wants to download, save, share or attach the forensic report or its metadata.
---

# Get the deliverables

1. For the PDF, call `ultiwrite_forensics_report_get` with `format: "pdf"`. It returns the actual PDF as an embedded `application/pdf` resource plus a signed-in web link (`reportUrl`). Offer the file to the user; if your app cannot show embedded files, give them `reportUrl` and explain that it opens after signing in to the same Ultiwrite Forensics account.
2. For machine-readable results, call it with `format: "metadata"` to get the full structured report and document metadata as JSON.
3. A PDF exists only for `completed` examinations. For `partial` results, offer the metadata JSON and explain that the examination did not complete.
4. Repeated downloads are free. Remind the user to save what they need: reports are deleted 24 hours after creation.
