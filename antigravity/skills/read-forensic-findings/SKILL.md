---
name: read-forensic-findings
description: Explain Ultiwrite Forensics findings and document metadata. Use after an examination finishes, or when the user asks what was found, which checks ran, what the metadata shows, or how confident the result is.
---

# Read findings and metadata

1. Call `ultiwrite_forensics_findings_get` with the `analysisId` (or `handoffId`).
2. Present, in this order:
   - The state: `completed`, or `partial` (the examination stopped early; the unit was released and the evidence is incomplete).
   - When `decisionSupport` is present: the selected profile/materiality, decision question, executive interpretation, practical consequence, credible alternatives, and the highest-priority next-evidence request with why it would help. Keep the profile interpretation separate from source observations.
   - Each finding's id, severity, explanation and evidence references, with page or region references from `observations` when present.
   - When `productionExplanation` is present: its support category, source-bound interpretation, benign/data-process/adverse alternatives actually returned, dependent-versus-independent evidence, and discriminating request. Support is not probability, materiality, authorization, intent, or authenticity.
   - Document metadata (producer, creator, dates and other recorded fields) and any timeline or revision observations.
   - Coverage: completed checks separately from unassessed checks and their reasons. A quiet completed check is not the same as a check that did not run.
   - Examiner status and the stated limitations.
3. Findings are evidence to assess, not a fraud verdict. "No material finding" does not establish authenticity. A quiet profile result should still explain completed scope, unavailable checks, and practical meaning. Do not invent confidence percentages or scores; use only the severities and wording returned.
4. Optional document-bound public-record comparisons are off by default. When externalCoherence is present, read its separate status, source links, retrieval times, compared values and limitations. Do not turn agreement into authenticity verification or an unavailable/inconclusive lookup into contradiction.

If partial evidence is locked, show its free status/check states and explain that detailed findings and exports require an explicit one-unit unlock. Use `ultiwrite_forensics_evidence_unlock` only after the user authorizes that charge; a request to read findings alone does not authorize it. Reuse the same saved UUID requestKey after an uncertain unlock response.
