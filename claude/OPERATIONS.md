# Connector operations and customer recovery

These procedures apply to Ultiwrite Forensics connector 1.0.11. They preserve the connected workspace boundary and the user's intended examination. Runtime documentation: https://ultiwrite.co/docs/mcp and https://ultiwrite.co/docs.

## Before intake

Call `ultiwrite_forensics_account_get`, confirm the expected account/workspace and available units, then call `ultiwrite_forensics_capabilities_get`. Stop if the account is wrong, examinations are unavailable, the file type is unsupported, or units are insufficient. Resolve those conditions through the product UI or support; never substitute another tenant or a flagship key.

Keep a local job record in your own system containing the host, product, workspace identifier when returned, stable request key, analysis/handoff identifier, last known status, billing state, report deadline, and artifact hashes. Do not put originals, secrets or report contents into operational logs. Determine whether retaining identifiers is appropriate under your own privacy policy.

## Recovery playbook

| Observation | Action | Completion evidence |
|---|---|---|
| Sign-in or consent opens the wrong account | Use **Use a different account** on first-party consent; reconnect and call `account_get` | Correct product identity and intended workspace are returned |
| Revoked/expired connection or authorization error | Reauthenticate with the host's OAuth connection controls; review requested scopes | A fresh authorized account read succeeds; old credentials remain invalid |
| Missing scope | Review and reconnect with only the needed permission; do not send an API key to a tool | The intended operation succeeds and unrelated privileges remain absent |
| Host cannot retrieve the original | Create a browser handoff and return its exact upload URL | The user uploads, and status resolves through the saved handoff identifier |
| Submission times out | Query status using saved analysisId/handoffId; if unknown, list recent analyses; retry only the same original and request key | One intended examination and one reservation/settlement |
| Conflicting idempotency request | Compare original/option selection with the saved intended submission | Resolve the conflict without silently billing a second examination |
| Still processing | Poll about every ten seconds; honor any returned delay; keep the existing identifier | Authoritative completed, partial, failed or deleted state |
| Rate/concurrency limit | Honor Retry-After or tool guidance; reduce concurrent requests and use bounded retries | Existing work remains discoverable; retry creates no duplicate |
| Partial examination | Explain completed versus unassessed checks and actual billing state | User understands that partial evidence is not a completed clean result |
| Locked partial evidence | Explain one-unit charge; obtain explicit authorization, then unlock with a saved UUID request key | Same unlock request can be retried without another debit |
| Insufficient units or account restriction | Open the signed-in billing/account flow or contact an authorized administrator | Available balance/account state permits intended processing |
| Expired/unavailable report | Explain actual availability; retrieve an already downloaded local copy under the customer's policy, or request a new examination | No restoration claim; fresh work starts only when requested |
| Deletion requested | Confirm the user's intent, call `analysis_delete`, then inspect actual state | Deleted state or durable pending deletion; never invent a receipt |
| Integration unavailable or provider outage | Preserve identifiers and show the actual unavailable state; retry after recovery | Existing accepted work resumes or returns authoritative failure |

## Key and connection lifecycle

Manage customer API keys and MCP connections at https://ultiwrite.co/developers. API key rotation returns the replacement secret once; update the backend secret manager and verify a harmless scoped read before removing the previous secret from your infrastructure. Revocation should prevent the old credential from making another authorized call. A new key must have the correct scope, workspace, expiry and usage controls; rotating a credential does not grant units or broader roles.

For MCP, revoke the product connection and remove the host configuration when decommissioning a client. If the host keeps a stale refresh token, reconnect through its normal sign-in flow rather than editing or exposing tokens. When a member leaves, use the supported workspace membership controls and revoke any independently created service credentials still under their responsibility.

## Outage and release handoff

GitHub Actions or Vercel outages do not invalidate a source review, package hash or local check. They do prevent claims that hosted checks ran, a deployment completed or the new runtime was exercised in production. Keep source merge, package preparation, directory acceptance and deployment as separately evidenced states. After service recovery, verify the intended existing project/source revision, migrations and runtime configuration through the authorized deployment workflow, then repeat the synthetic journey against the deployed service.

When escalating, provide product name, connector version 1.0.11, host/version, time with timezone, sanitized error code, saved request/analysis identifier, last known status and whether the failure was before or after acceptance. Use a protected channel if support later requests sensitive evidence. Never include secrets or customer files in GitHub issues or directory submissions.

## Service and customer retention boundaries

Source files are deleted after processing, at the latest one hour after upload. Reports stay available for download for up to 24 hours, then they are deleted. Deletion of service copies does not delete the customer original, report downloads, copied findings, screenshots or assistant conversation. Account/payment/audit records have separate lifecycles. Confirm an actual deletion state or receipt before stating service deletion is complete. Removing a plugin configuration alone does not request document deletion.
