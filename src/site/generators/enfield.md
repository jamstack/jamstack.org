---
title: Enfield
repo: fortes/enfield
homepage: https://github.com/fortes/enfield
language:
  - CoffeeScript
license:
  - MIT
templates:
  - Liquid
description: Node.js Jekyll Port
---

Jekyll-like static site generator for node.js that aims to be as compatible as possible with [Jekyll](https://github.com/jekyll/jekyll).

## Features

Core functionality is identical to Jekyll:

- Blog aware static site generator
- Compatible with the Jekyll directory and file structure
- Use Markdown for posts
- Code highlighting via Pygments or Highlight.js
- Layouts written using Liquid template engine
- Server / Auto-regenerate
- Extension-less page URLs (i.e. `/example/` from `/example.html` via `pretty_urls` configuration variable)

There are a few bonus features not present in the default install of Jekyll:

- Jekyll-like plugin model, with CoffeeScript/JS instead of Ruby
- Use Markdown within includes
- Compile and minify CoffeeScript & LESS
- Support post and page URL aliases via redirects

Finally, there are a few missing features:

- Textile support
- Importing tools
