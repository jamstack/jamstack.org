---
title: Statue SSG
repo: https://github.com/accretional/statue
homepage: https://statue.dev/
language:
  - Svelte
license:
  - MIT
templates:
  - Svelte
  - Markdown
description: Extremely fast and simple Static Site generation with Sveltekit and Markdown
---
Statue is a blazingly-fast static site generator based on Sveltekit, Markdown, Tailwind, and a bundled component library.

One-line is all it takes to start building your site with Statue!

```bash
yes | npx sv create . --template minimal --types ts --no-add-ons --install npm && npm install statue-ssg && npx statue init && npm install && npm run dev
```

## Why Statue?
Above all else, Statue is **Fast, Simple, and Flexible from start to finish**. It takes only one command to get started, builds and deployments are fast, hosting is simple, sites are extensible, and developing a Statue site is about building what you want rather than battling, learning, and conforming to the tool itself.

- **Markdown-first**: Build out your site content by writing `.md` files: no coding required.
- **Powered by SvelteKit**: Familiar Svelte features and ecosystem, based on an elegant declarative model ideal for static sites.
- **Tailwind + Components**: Customize the UI easily with Tailwind CSS, and a library of included components.
- **Easy to Use and Extend**: The Declarative Component Model is easy to use, and with LLMs, easy for even non-technical users to work with.
- **Ultra-cheap hosting**: Deploy static output to Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.
- **Low Maintenance**: Static sites are almost maintenance-free, and Statue itself is much less complex than other web tools.

Statue meets the needs of multiple kinds of use cases and users. Even non-developers can write markdown files and use AI to build and customize Statue sites. Statue's design is intentionally highly structured, self-contained, and based on simple-yet-familiar web technologies, so that LLMs could productively contribute to it even when guided by non-technical users. That same commitment to order and constrained complexity makes it great for developers, too: they can spend less time on the tool itself, and more time building.

## Templates

Statue's default template is intended to model a SaaS landing page. To create a Statue site using a blog-based template, try running

```bash
npx statue init --template blog
```

## Components

Statue includes a web component library that can be used independently of Statue's static site generation features. You can find a full list of supported components in Statue's github repo at [src/lib/components](https://github.com/accretional/statue/tree/main/src/lib/components)

To use Statue Svelte components, run ```npm install statue-ssg``` and then add it to your .svelte file:

```svelte
<script lang="ts">
import {BuiltBy} from 'statue-ssg';
// your typescript
</script>
<!-- your svelte -->
<BuiltBy builtInIcon={"/favicon.png"} />
<!-- the rest of your svelte -->
```

Contributions to Statue's ssg functionality, templates, and component library are welcomed and very much appreciated!
