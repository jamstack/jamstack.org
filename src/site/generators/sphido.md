---
title: Sphido
repo: sphido/sphido
homepage: https://sphido.org/
language:
  - JavaScript
license:
  - MIT
templates:
  - Nunjucks
description: A rocket fast, lightweight, static site generator.
twitter: ozzyczech
---

Sphido is pure **static site generator** written with speed, simplicity and flexibility in mind.

## Installation

```bash
$ npm i @sphido/core @sphido/frontmatter @sphido/marked @sphido/meta @sphido/nunjucks
```

## Usage

```javascript
const globby = require('globby')
const { getPages } = require('@sphido/core')
const { save } = require('@sphido/nunjucks')

;(async () => {
  // 1. get list of pages
  const pages = await getPages(
    await globby('content/**/*.md'),
    ...[
      require('@sphido/frontmatter'),
      require('@sphido/marked'),
      require('@sphido/meta'),
      { save },
    ]
  )

  // 2. save them (with default template)
  for await (const page of pages) {
    await page.save(page.dir.replace('content', 'public'))
  }
})()
```

[See more examples](https://github.com/sphido/examples) on GitHub.

## Supports

- YAML front-matter
- html/markdown source
- custom extenders
- Nunjucks templates
