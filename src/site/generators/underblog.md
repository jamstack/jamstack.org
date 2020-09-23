---
title: underblog
repo: freetonik/underblog
homepage: https://github.com/freetonik/underblog/
language:
  - Go
license:
  - MIT
templates:
  - Go
description: Simple static blog generator
twitter: freetonik
---

An extremely simple, fast static blog generator.

You only need 4 things:

1. `index.html` template for blog's index page.
2. `post.html` template for single post.
3. `css/styles.css` for CSS styles.
4. `markdown` folder.

There is no front-matter. **Date** and **slug** are derived from the filename. **Title** is derived from the first line of markdown file. Make sure the first line starts with `#`.
