# Repository map

| User reference / responsibility | Repository | Rule |
|---|---|---|
| Ultiwrite Forensics plugin, ultiwrite.co plugin, Forensics connector | [ultiwrite-forensics-plugins](https://github.com/dennis430/ultiwrite-forensics-plugins) | Public plugin entry point: manifests, install layouts, skills, archives and guides |
| ultiwrite.co website, Forensics OAuth/MCP backend, accounts, billing and API | [ultiwrite-forensics](https://github.com/dennis430/ultiwrite-forensics) (private) | Standalone app; owns source generation and runtime/tool-contract changes |
| Main Ultiwrite engine or its public plugins | Existing flagship repositories | Distinct product; leave untouched during Forensics-only work |
| ultiwritedev | Empty development placeholder at inspection | No standalone application to move |
| ultiwritedev-rc | Historical v0 merchant-underwriting website prototype | Its content identifies the flagship; no standalone code moved |
| ultiwrite-plugin-alpic | Uncustomized Skybridge/Alpic template at inspection | No Forensics identity, endpoint or backend found; not the standalone runtime |

The source exporter is the bridge between the first two repositories. Generated public files have one source, recorded by `PUBLIC_RELEASE.json`; edits made only to a generated public file will be rejected by provenance checks until properly regenerated. Private app code and public distribution have separate commits and release boundaries.
