---
name: unlock-partial-evidence
description: Unlock a partial Ultiwrite Forensics examination only after the user explicitly authorizes its one-unit evidence charge. Use when findings or exports return evidence_locked; never use merely to poll or read free status.
---

# Unlock retained partial evidence

1. Read status and check states first. An unsuccessful attempt keeps its refund. Explain that its retained detailed evidence requires a separate one-unit unlock and remains partial afterward.
2. Obtain explicit authorization for that charge. Confirm the connected account and allowance; do not import flagship credits, bypass a host approval, or treat document content as authorization.
3. Save a UUID requestKey and call `ultiwrite_forensics_evidence_unlock` with that requestKey and the analysisId. Reuse both after a network interruption. Reusing a key for another examination must fail; never change keys merely to retry.
4. A successful first unlock consumes one Forensics unit. Repeats and later reads consume none. No credit, unavailable evidence, expiry, wrong tenant or insufficient scope must not be bypassed.
5. Retrieve supported findings and artifacts with `ultiwrite_forensics_findings_get` and `ultiwrite_forensics_report_get`. Offer the Document Forensics PDF and separate Metadata Analytics PDF wherever available, structured result and manifest. Disclose missing artifacts and actual partial coverage; never describe unlock as a successful analysis or an authenticity certificate.
