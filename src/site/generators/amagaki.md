---
title: Amagaki
repo: blinkk/amagaki
homepage: https://amagaki.dev
language:
  - TypeScript
license:
  - MIT
templates:
  - Nunjucks
  - React
  - Closure Templates
startertemplaterepo: https://github.com/blinkk/amagaki-starter
description: A TypeScript site generator for hand-coding interactive marketing sites.
---

Amagaki is a TypeScript site generator specifically made for hand-coding high fidelity interactive marketing sites. It's smaller than Next.js or Gatsby, and offers more than Jekyll. It facilitates best practices for building content-heavy marketing sites, and it's fast.

## Key concepts

- TypeScript and Node
- Minimal core dependencies
- Inbuilt build metrics (memory usage, generated file size, routes, locales, translations)
- A static site generator (not a frontend framework)
- Renders pages at request time (unlike other static generators which watch and rebuild)
- Localization is an inbuilt feature
- Custom YAML types for extending the content layer
- Benchmarking inbuilt
- Separate your content (YAML, Markdown) from your templates with ease

## Plugin system

- Extensive hook system for adding steps throughout the lifecycle
- Multiple template languages (Nunjucks as default, React, Closure Templates plugins available)
- Supports CMS integration via dynamic routing
- Google Sheets plugin for managing content within Google Sheets

## Quick start

Amagaki is distributed as an npm package. We recommend using our starter when building marketing websites from scratch.

```shell
git clone https://github.com/blinkk/amagaki-starter
npm install

# Start the dev server
npm run dev

# Build the site
npm run build
```

If you are integrating into an existing project, you can install Amagaki directly.

```shell
# Install Amagaki
npm install --save @amagaki/amagaki

# Start the dev server
npx amagaki serve

# Build the site
npx amagaki build
```

Check out the full documentation at [amagaki.dev](https://amagaki.dev/).
