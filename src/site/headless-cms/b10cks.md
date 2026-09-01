---
title: b10cks
repo: b10cks/cms
homepage: https://www.b10cks.com
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: An opinionated open-source headless CMS with block-based content modeling, visual editing, real-time collaboration and a cached REST delivery API. Built on Laravel and Vue, self-hostable with Docker.
images:
  - path: /img/cms/b10cks.png
    alt: The b10cks editor with the content tree, a live preview of the page, and the list of blocks that make it up
---

b10cks is an AGPL-3.0 headless CMS built on Laravel and Vue. You model content as reusable blocks, edit it visually with your team in real time, and deliver it over a fast, cached REST API. The self-hosted build is the complete product: no enterprise edition, no license keys, no feature gates.

## Get started

On any machine with Docker:

```bash
curl -fsSL https://get.b10cks.com | sh
```

A Docker Compose stack, an archive for shared hosting, and a manual install are also available. There is a managed cloud at [app.b10cks.com](https://app.b10cks.com) if you would rather not run it yourself.

## Features

- Block-based content modeling with reusable component schemas
- Visual editing and live preview
- Real-time collaboration: presence, co-editing down to individual blocks, and comments
- Git-like content history, with an author and a message on every save and schema-aware diffs
- Releases with atomic publishing and scheduled publication
- Hierarchical asset library with on-the-fly image transformations to WebP and AVIF
- Content localization with language fallback
- Query API with 16 filter operators, sorting on your own content fields, and revision-based caching
- Multi-tenant spaces with isolated per-space databases

### Resources

[Website](https://www.b10cks.com) | [Documentation](https://www.b10cks.com/docs) | [GitHub](https://github.com/b10cks/cms) | [Docker Hub](https://hub.docker.com/r/b10cks/cms) | [Discord](https://discord.gg/mdcDktFFcp)
