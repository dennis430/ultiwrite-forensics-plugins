---
name: get-forensic-report
description: Retrieve the Ultiwrite Forensics PDF report or the structured metadata JSON for an examination. Use when the user wants to download, save, share or attach the forensic report or its metadata.
---

# Get the deliverables

1. For the Document Forensics Report PDF, call `ultiwrite_forensics_report_get` with `format: "pdf"`. For the separate Metadata Analytics Report PDF, use `format: "metadata_analytics"`. Each returns the file plus a signed-in web link (`reportUrl`). If your app cannot show embedded files, give the user `reportUrl`.
2. For the structured export use `format: "result"`. For the artifact manifest use `format: "manifest"`. `format: "bundle"` is a zip of both PDFs, the export, and the manifest. It does not replace the separate downloads. `format: "metadata"` remains the published engine JSON.
3. The forensic PDF exists for `completed` examinations. A partial examination can still return the metadata analytics PDF and the export, marked partial. Say that it did not complete.
4. Repeated downloads are free. Remind the user to save what they need: reports are deleted 24 hours after creation. Coverage states stay distinct. Do not describe a failed or empty metadata read as stripped or clean, and do not state a fraud probability.
