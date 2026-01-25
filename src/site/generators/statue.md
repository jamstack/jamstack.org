---
title: Statue SSG
repo: accretional/statue
homepage: https://statue.dev/
language:
  - Svelte
license:
  - MIT
templates:
  - Svelte
  - Markdown
description: Fast, single-command static site generation via Sveltekit + Markdown. Perfect for agents.
---

Statue is a wicked-fast static site generator based on Markdown, Svelte, Tailwind, Pagefind, and reusable components.

**One-line setup! (requires npm):**
```bash
yes | npx sv create statue-site --template minimal --types ts --no-add-ons --install npm && cd statue-site && npm install statue-ssg && npx statue init && npm install && npm run build && npm run preview
```

<details>
<summary>setup via bun, pnpm, yarn, windows</summary>
  
**bun**:

```bash
yes | npx sv create statue-site --template minimal --types ts --no-add-ons --install bun && cd statue-site && bun add statue-ssg && npx statue init && bun install && bun run build && bun run preview
```

**pnpm**:

```bash
yes | npx sv create statue-site --template minimal --types ts --no-add-ons --install pnpm && cd statue-site && pnpm add statue-ssg && npx statue init && pnpm install && pnpm run build && pnpm run preview
```

**yarn**:

```bash
yes | npx sv create statue-site --template minimal --types ts --no-add-ons --install yarn && cd statue-site && yarn add statue-ssg && npx statue init && yarn install && yarn run build && yarn run preview
```

**Windows**: Support for Windows is provided on a best-effort basis. Statue's dev team lacks regular Windows users, so we cannot easily keep Statue working seemlessly for Windows: contact us if you'd like to help maintain Statue support for Windows! The above commands should work, but you may run into pathing issues and other incompatibilities during or after setup.

---
</details>

Content like blogs and docs are added and changed directly through `.md` files. Other parts of the Statue site are based on Svelte components and the site's config. Statue sites are fully static, so **development is straightforward, management is simple, and hosting is ~free!**

## What is Statue

Statue is a static site generator with built in support, and a strong default set of choices for:

* Components
* Templates
* Themes
* Full-site search and search indexing
* Agentic Site Generation

The official site and docs are at [statue.dev](https://statue.dev), the github repo is at [github.com/accretional/statue](https://github.com/accretional/statue), and the discord is at [discord.gg/accretional](https://discord.gg/accretional)

## Why Statue?
Statue is **Fast, Simple, and Flexible from start to finish**. One-line setup, then fast builds, fast deploys, and a fast site.

- **Markdown-first**: Write your site's content in simple `.md` files: no coding required.
- **Zero Config, Zero Cost Search:** Start with your own full-site search index: no setup, totally free and yours.
- **Powered by Great Tools**: 0->1 setup with SvelteKit, Tailwind, Pagefind, and components fully integrated.
- **Simple yet Powerful**: Statue's Declarative Component Model makes customization easy, intuitive, and flexible.
- **Ultra-cheap hosting**: Deploy static sites to free and low-cost hosts like Netlify, Vercel, Cloudflare, and GitHub Pages.
- **Low Maintenance**: Static sites are ~maintenance-free; Statue keeps sites simple with less to break.

Statue helps you build the site you want, without battling the tools you use to build it.
