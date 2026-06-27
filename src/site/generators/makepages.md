---
title: MakePages
repo: Athlon1600/makepages
homepage: https://makepages.dev
language:
  - TypeScript
  - JavaScript
license:
  - MIT
templates:
  - Nunjucks
  - HTML
  - Vue
description: MakePages is a simple static site generator written in TypeScript.
---

MakePages is a new, easy-to-use static site generator for Node.js.

It was built as a simpler alternative to other popular site generators that often:

- require too much additional configuration
- have a steep learning curve
- limit pages to Markdown language only

## How it works

- Uses file-system based routing
- Write pages in plain HTML, and with the help of Nunjucks templating engine.
- JavaScript and CSS assets referenced in your pages are compiled using esbuild 
- Everything is output to a single `dist/` folder for easy deployment


![Build process](https://raw.githubusercontent.com/Athlon1600/makepages/refs/heads/master/.github/folder_structure.png)

