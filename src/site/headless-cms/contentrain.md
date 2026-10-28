---
title: Contentrain
repo: Contentrain/ai
homepage: https://contentrain.io/
twitter: Contentrain_io
opensource: "Yes"
typeofcms: "Git-based"
supportedgenerators:
  - Astro
  - Nuxt
  - Next.js
  - SvelteKit
  - Vue
  - React
  - All
description: Content governance for teams and AI agents. Content lives as JSON and Markdown in your Git repository; agents work through MCP tools, editors review in Studio.
---

## Contentrain

Contentrain is a content governance ecosystem for teams and AI agents. Content lives as JSON and Markdown in your own Git repository, defined by models and checked by validation, so every change, whether a person or an agent made it, is a reviewable diff.

- **MCP server**: 27 tools that let coding agents (Claude Code, Cursor, Windsurf and others) create and change models and content within your rules.
- **CLI**: `npx contentrain init` sets up a `.contentrain/` workspace; `npx contentrain serve` opens a local review UI. No account or cloud needed.
- **Query SDK**: `contentrain generate` writes a typed client for any JavaScript framework, and `@contentrain/query/astro` provides an Astro content layer loader.
- **Studio**: the team operating surface for governed content, with structured editing, roles, media, and branch review. Self-host the AGPL-3.0 core or use the managed cloud.

The developer packages are MIT-licensed: [github.com/Contentrain/ai](https://github.com/Contentrain/ai).

## Get started

```bash
npx contentrain init
npx contentrain serve
```

Documentation: [ai.contentrain.io](https://ai.contentrain.io)
