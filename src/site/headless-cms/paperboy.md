---
title: Paperboy
repo: hybriden/paperboy
homepage: https://github.com/hybriden/paperboy
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Paperboy is an open-source, self-hosted headless CMS on TypeScript and PostgreSQL, with a page tree, visual on-page editing and a built-in MCP server so AI agents can edit and publish content.
---

Paperboy is an open-source (MIT), self-hosted headless CMS. One `docker compose up` gives you the API, the React admin and PostgreSQL on your own machine, with no SaaS account and no per-seat pricing.

<img src="https://raw.githubusercontent.com/hybriden/paperboy/main/docs/brand/social-preview.png" alt="Paperboy" />

Editors work in a page tree with content areas, live side-by-side preview and visual on-page editing. Developers get a GET-only Delivery API with a typed SDK (`@paperboycms/client`) and ETag caching. A reference [Astro starter](https://github.com/hybriden/paperboy-astro-starter) and a Next.js 15 frontend with Draft Mode show the contract end to end.

### Highlights

- Content types are data: pages, blocks and globals, with shared and inline blocks, versioning, drafts, scheduled publishing and localization
- Generated SEO: meta, Open Graph, canonical, schema.org JSON-LD, sitemap.xml, robots.txt and llms.txt
- Forms whose submissions stay in your own PostgreSQL, with real retention and a spam honeypot
- Per-site redirects with automatic 301s when URLs change
- Multisite, role-based access and section scopes, 2FA, audit log, signed webhooks
- A built-in MCP server (stdio or Streamable HTTP with OAuth 2.1), so Claude and other agents create, edit and publish content as a real user with that user's permissions
