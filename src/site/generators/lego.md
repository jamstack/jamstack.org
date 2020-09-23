---
title: lego
repo: astronomersiva/lego
homepage: https://github.com/astronomersiva/lego
language:
  - JavaScript
license:
  - MIT
templates:
  - Liquid
  - Markdown
  - Nunjucks
description: A fast Static Site Generator that generates optimised, performant websites.
---

lego is a static site generator built with the goal of producing an optimised website.

- Minifies HTML, JS and CSS files
- Inlines critical CSS
- Optimises images
- Revisions assets
- Build time code highlighting
- Sitemap and RSS feed generation

And lots more!

## Install

```sh
$ npm i -g @astronomersiva/lego
$ lego g myAwesomeSite
```

## Build

To start the development server,

```sh
lego s
```

To create a production build,

```sh
lego b
```
