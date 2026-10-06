---
title: genko.me
homepage: https://genko.me/en
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: A Japanese headless CMS with a quiet writing screen and a REST delivery API.
---
## genko.me

[genko.me](https://genko.me/en) is a headless CMS built in Japan. The editor is deliberately plain — the writing surface is the page, and the settings stay out of the way until they are needed. Content is delivered over a plain REST API, so any framework or language can read it.

The developer documentation is available in English at [docs.genko.me/en](https://docs.genko.me/en). Every page is also published as Markdown, with an `llms.txt` index.

### Delivery API

A REST API with filtering, ordering, pagination and field selection. Nothing about it is framework-specific: `@genko-me/sdk` is a TypeScript client with zero runtime dependencies that runs in the browser, Node.js and edge runtimes, and the same endpoints work from PHP, Ruby or Go with only a standard HTTP client.

### Component packages

Optional rendering packages for React, Vue, Svelte and standard custom elements, all built on one shared core so the same content renders the same markup whichever you use. Guides are published for Next.js, React, Nuxt, Vue, SvelteKit, Svelte, Astro, plain HTML, JavaScript, PHP, Ruby and Go.

### Draft preview

Saved drafts are readable through the normal detail page by passing a `draftKey`, so a preview needs no separate environment.

### Scheduled publishing and webhooks

Entries can be published and unpublished on a schedule. Webhooks are signed with HMAC-SHA256 so the receiver can verify them, and are used to revalidate a statically generated site when content changes.

### Images

Uploaded images are served through a transformation endpoint that takes width, height, fit and format, including automatic format negotiation.

### For AI agents

The documentation is published as Markdown alongside the HTML, with `llms.txt`, an MCP server and an agent skill, so an assistant can read the API reference directly.
