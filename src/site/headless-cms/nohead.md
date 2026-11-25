---
title: Nohead
homepage: https://nohead.io
twitter: nohead_io
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: An API-first headless CMS and data layer. Model your content once, edit it in a friendly editor, and serve it through a REST API, SDKs, a CLI and an MCP server.
images:
  - path: https://nohead.io/opengraph-image.png
---

[Nohead](https://nohead.io) holds the content and data behind sites and apps. You define collections of typed fields, people edit them in a web editor, and your code reads and writes them through a REST API, SDKs for [TypeScript](https://github.com/nohead-io/nohead-typescript), [Python](https://github.com/nohead-io/nohead-python) and [Ruby](https://github.com/nohead-io/nohead-ruby), a [CLI](https://docs.nohead.io/cli) or an [MCP server](https://docs.nohead.io/guides/mcp) for agents. Everything the editor does with content and schema can also be done through the API.

## What's included

- Collections of typed fields, with relations checked on save
- Drafts, publishing and scheduling, with the history of every change to records and to the schema
- Roles for the people who edit, and API keys with scopes, including keys that read published content only
- File storage behind a CDN, with [images resized and converted by URL](https://docs.nohead.io/guides/images)
- Search with typo tolerance and filters, [from your server](https://docs.nohead.io/guides/api-search) or [straight from the browser](https://docs.nohead.io/guides/public-search)
- [Webhooks](https://docs.nohead.io/guides/webhooks) to rebuild a static site or refresh cached pages when content is published
- The content model as a YAML file, [pushed and pulled with the CLI](https://docs.nohead.io/guides/schema-as-code)
- `nohead export`, which writes all of it out as plain files

## With any site generator

A site reads Nohead like any other API, at build time or on request. For Astro, [@nohead/astro](https://docs.nohead.io/adapters/astro) adds a content loader and an image service. Two starters show complete sites:

- [Portfolio with Astro](https://github.com/nohead-io/starter-portfolio-astro) ([live demo](https://starter-portfolio.nohead.io))
- [Job board with Next.js](https://github.com/nohead-io/starter-jobs-nextjs) ([live demo](https://starter-jobs.nohead.io))

## Get started

```bash
npm install -g @nohead/cli   # or: brew install nohead-io/tap/nohead
nohead login
nohead collections create posts
nohead fields add posts title --type text --required
nohead fields add posts body --type rich_text
```

```ts
import { Nohead } from "@nohead/sdk"

const nohead = new Nohead() // reads NOHEAD_API_KEY

for await (const post of nohead.records.list("posts")) {
  console.log(post.data.title)
}
```

- [Quickstart](https://docs.nohead.io/quickstart)
- [Docs](https://docs.nohead.io)
- [Pricing](https://nohead.io/pricing), including a Free plan
