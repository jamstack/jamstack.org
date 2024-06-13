---
title: bob
repo: ericselin/deno-ssg-bob
homepage: https://bobsite.io/
language:
  - TypeScript
  - JavaScript (Deno)
license:
  - LGPL3
templates:
  - TSX
  - JSX
description: A static site generator for the dynamic web
---

`bob` is a static site generator built on top of the [Deno](https://deno.land) runtime. It is designed for creating extremely performant websites that require near-instant content updating and network edge personalization. All with best-in-class developer experience.

### 🚀 Extremely performant websites

- **No JavaScript on page load** - Network-edge personalization means no client-side JavaScript is needed in order to construct pages for the user.

- **Minimal CSS footprint** - Include only the CSS needed for each page to keep CSS size as small as possible. Inline CSS for optimal first load.

### ⚡ Near-instant content updating

- **Incremental builds (currently experimental)** - Build only what is needed in order to be extremely fast.

- **Incremental deploy (coming soon)** - Deploy only changed content.

### 🌐 Network-edge personalization

- **Personalize pages on the edge, without client-side Javascript (coming soon)** - Create complex rules and change the page based on request parameters, such as visitor country or cookie values. Use this to create A/B tests, GDPR banners, or product recommendations. This requires the Cloudflare hosting plugin.

### 🤓 Best-in-class developer experience

- **Fully typed using TypeScript and TSX** - Intellisense and type checking in layout templates.

- **Highly modular** - Layouts are just TSX components. Import any additional components or libraries as you wish.

- **Easily create client-side components (coming soon)** - Create client-side code right in your layout files.
