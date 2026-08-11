---
title: eziwiki
repo: i3months/eziwiki
homepage: https://eziwiki.vercel.app
language:
  - TypeScript
license:
  - MIT
templates:
  - React
  - Markdown
description: 'An easy-to-use wiki and documentation site generator built with Next.js'
---

eziwiki turns a folder of Markdown files into a documentation site or a personal wiki. It supports wikilink-style references between notes, backlinks, a graph view of how pages connect, and full-text search, so the published site keeps the structure you wrote in your editor.

### Installation

Scaffold a new site with `create-eziwiki`:

```bash
npx create-eziwiki my-wiki
```

Then add Markdown files and run the dev server. The generated site is a Next.js app, so it can be deployed anywhere Next.js static exports are supported.
