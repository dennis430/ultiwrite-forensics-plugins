---
name: connect-ultiwrite-forensics
description: Connect or check the Ultiwrite Forensics account. Use when the user wants to connect Ultiwrite Forensics, asks which account is connected, how many analysis units remain, or wants to reconnect or use a different account.
---

# Connect Ultiwrite Forensics

1. Call `ultiwrite_forensics_account_get`. Report the connected account (email when shown), available and reserved analysis units, and the granted permissions.
2. If the call fails with an authorization error, tell the user to connect Ultiwrite Forensics in this app. The server is `https://mcp.ultiwrite.co/mcp`; sign-in and approval happen on ultiwrite.co.
3. To use a different account, the user reconnects and chooses **Use a different account** on the Ultiwrite Forensics approval screen. Connections are managed and revoked at https://ultiwrite.co/developers#mcp-connections.
4. A connection never adds usage. Units come from the account's own purchases or its one complimentary credit; manage usage at https://ultiwrite.co/billing.

Ultiwrite Forensics is separate from the main Ultiwrite platform at dwsoffshorepartners.com: accounts, balances and connections are not shared.
