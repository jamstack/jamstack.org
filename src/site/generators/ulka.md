---
title: Ulka
repo: ulkajs/ulka
homepage: https://ulka.js.org
language:
  - JavaScript
license:
  - MIT
templates:
  - Ulka
twitter: coderosh
description: A simpler static site generator written in JavaScript to transform static data to html.
---

A simpler static site generator written in JavaScript to transform static data to html.

### Installation

```bash
npx ulka create my_portfolio

cd my_portfolio
npm run develop
```

### Default templating engine.

By default ulka supports [ulka-parser](https://github.com/ulkajs/ulka-parser) (A new templating engine specifically built for ulkajs). Adding a support for new templating engine is very easy. All you have to do is register the render function through ulka's plugin system. Example: [ulka-source-ejs](https://github.com/ulkajs/ulka-plugins/tree/main/ulka-source-ejs)

### Markdown support

Ulka uses [remarkable](https://github.com/jonschlinkert/remarkable) and supports all remarkable plugins.

### Plugins

Ulka is pluggable. You can extend or add new feature using ulka's plugin system. You can even change how ulka works. Official plugins made by ulka are maintained in [this repo](https://github.com/ulkajs/ulka-plugins).

