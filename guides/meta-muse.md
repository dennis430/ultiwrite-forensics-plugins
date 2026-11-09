# Meta Muse

Partner intake (platform.muse.ai/docs). Tool classification for the questionnaire:

- `ultiwrite_forensics_account_get`: Read (forensics:read)
- `ultiwrite_forensics_capabilities_get`: Read (forensics:read)
- `ultiwrite_forensics_upload_link_create`: Write (forensics:analyze)
- `ultiwrite_forensics_analysis_start`: Write (forensics:analyze)
- `ultiwrite_forensics_analyses_list`: Read (forensics:read)
- `ultiwrite_forensics_analysis_status`: Read (forensics:read)
- `ultiwrite_forensics_findings_get`: Read (forensics:read)
- `ultiwrite_forensics_report_get`: Read (forensics:read)
- `ultiwrite_forensics_analysis_delete`: Sensitive write (forensics:delete)

Offer read-only connection: approve only `forensics:read` on the consent screen.

No permanent document retention: Your files are processed temporarily for your forensic analysis and automatically deleted. Originals are kept for at most one hour and reports for up to 24 hours. We keep no permanent archive of customer documents or reports; account and billing records are separate. Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted.
