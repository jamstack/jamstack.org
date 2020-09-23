---
title: Kulfon
repo: kulfonjs/kulfon
homepage: https://kulfon.org
language:
  - JavaScript
license:
  - Apache-2.0
templates:
  - Nunjucks
  - Org Mode
  - Markdown
description: Kulfon is a static site generator written in JavaScript and inspired by Hugo.
twitter: kulfonjs
---

Kulfon /kuːl fəʊn/ is a static site generator for the rest of us. It combines data sources with templates to tranform them into HTML pages at once.

### Features

There is a ton of static site generators out there. Here are few points to
convince you to try **Kulfon**

- one-command tool, similar to [Hugo][3], but written in [JavaScript][6], so
  it's easier to integrate additional JavaScript libraries or stylesheets
- Simple [npm][11] installation
- Solid foundation with carefully selected tools to produce **smaller** websites
  **faster** as [The Average Webpage Is Now the Size of the Original Doom][8]
- [Rollup][7] for bundling javascripts
- [Sass][2] for stylesheets
- [Nunjucks][1] for views (a simple, designer friendly HTML-based syntax)
- Written in ES6/ES2015
- [Org Mode][16] support
- [Markdown][15] support
- Unified approach to external dependencies management with either [unpkg][13] or [Yarn][4]
- [HTTP/2][14] ready

### Supported Pre-Processors

|          | Language Superset | Whitespace Sensitive                          |
| -------- | ----------------- | --------------------------------------------- |
| **HTML** | [Nunjucks][1]     | [Markdown][15]                                |
| **CSS**  | [Sass (SCSS)][2]  | [Stylus](http://learnboost.github.io/stylus/) |

### Resources

- **Server Documentation** - [Readme](https://github.com/zaiste/kulfon/blob/master/README.md)
- **Source Code** - [github.com/zaiste/kulfon](https://github.com/zaiste/kulfon/)

[1]: https://mozilla.github.io/nunjucks/
[2]: http://sass-lang.com/
[3]: https://gohugo.io/
[4]: https://yarnpkg.com/
[6]: https://en.wikipedia.org/wiki/JavaScript
[7]: http://rollupjs.org/
[8]: https://www.wired.com/2016/04/average-webpage-now-size-original-doom/
[11]: https://www.npmjs.com/
[13]: https://unpkg.com/#/
[14]: https://en.wikipedia.org/wiki/HTTP/2
[15]: https://en.wikipedia.org/wiki/Markdown
[16]: https://orgmode.org/
