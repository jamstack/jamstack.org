---
title: Spunto CMS
homepage: https://cms.spunto.net
twitter: SpuntoDotNet
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: A team workspace (boards, tables, block pages) whose content is served over a REST API, with an OpenAPI spec you can generate a typed client from.
---
## Spunto CMS

Spunto CMS is a workspace where a team writes and organises content — lists of cards shown as tables, boards or lists, with a block editor for page bodies — and the same rows are what a website reads over REST. There is no publish step that copies content elsewhere.

### What a developer gets

- A REST API described by a committed OpenAPI file, from which `openapi-typescript` and `openapi-fetch` give you a typed client.
- API keys scoped to one workspace and one role, fixed when the key is issued.
- An event log and HMAC-signed webhooks, for example to revalidate pages when a card changes.
- Attachments served by the API itself rather than from public URLs.
- An import endpoint that is safe to run twice, for content moved from elsewhere (a Notion database, for instance).

### Worth knowing

There is no draft / published split, no full-text search over page bodies, and the application's own interface is in French (the API and documentation are in English). The full list is at [cms.spunto.net/docs/limits](https://cms.spunto.net/docs/limits).

A step-by-step guide for Next.js: [cms.spunto.net/docs/guides/nextjs](https://cms.spunto.net/docs/guides/nextjs).
