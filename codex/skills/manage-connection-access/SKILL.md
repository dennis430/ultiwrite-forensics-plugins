---
name: manage-connection-access
description: Explain or recover Ultiwrite Forensics account, workspace and connector access; help a user find API key creation, rotation, usage limits, role controls or connection revocation in the first-party product. Use for wrong-account connections, least-privilege setup and organization onboarding without requesting secrets.
---

# Manage account and connection access

1. For the currently connected identity, call `ultiwrite_forensics_account_get` only when an account lookup is needed. Explain the actual account/workspace, balance and granted permissions returned. Do not infer administration or membership from an email address, a paid balance or a different product's connection.
2. Explain the interface boundary. MCP connections use first-party OAuth consent with `forensics:read`, `forensics:analyze` and `forensics:delete`. REST API keys are created separately at https://ultiwrite.co/developers and have their own scopes, expiry and usage controls. Product users can obtain API access; examinations require available units and an operational runtime. A key or connection never creates credits or main-platform access.
3. For key creation, rotation, revocation or available usage controls, direct the user to the signed-in developer console. The current MCP registry has no key-administration tool; do not claim to have created, rotated or limited a key. The secret is shown once in the product. Tell the user to store it in their backend secret manager and never paste it into the conversation, a public config or an OAuth consent page.
4. For wrong-account access, use the host's connection flow and **Use a different account** on the first-party consent screen. Confirm the new identity using the account tool. For workspace roles and membership, use the supported product team controls with an authorized owner/administrator; do not change a role by supplying a workspace identifier to an analysis tool.
5. For decommissioning, point to https://ultiwrite.co/developers#mcp-connections and the host's connection settings. Revocation and removing a host config are separate steps. Neither action proves the examination files were deleted; use the explicit deletion workflow when requested.
6. If the user needs a permission the connected scope lacks, explain the missing permission and reconnect through normal consent with only the needed scope. Do not bypass it with another tenant, a shared owner's key, an engine secret or an external upload.

For organization deployment, use the package's ENTERPRISE.md and REVIEWER-GUIDE.md. Never promise unsupported SSO/SCIM, certification, contractual uptime or directory acceptance. Distinguish product configuration, native host proof and production deployment.
