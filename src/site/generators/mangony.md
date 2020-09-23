---
title: Mangony
repo: Sebastian-Fitzner/mangony
homepage: http://mangony.veams.org/
language:
  - JavaScript
license:
  - MIT
templates:
  - Handlebars
description: Yet another static site generator for Grunt, Gulp and Node.js - fast, simple and powerful.
---

![image](https://www.veams.org/downloads/logo.svg)

Mangony fulfills just one task: It takes handlebars templates and compiles them to an output directory.

### Why Mangony?

_Think of Assemble ([grunt-assemble](https://github.com/assemble/grunt-assemble)) with a smooth mango juice - yummy._

1. Mangony can be used in Grunt, Gulp or standalone as npm module. It is easy to setup.
2. By using the provided development server ([express](https://github.com/expressjs/express)) every change is completed in no time, no matter how many pages you have in your project.
3. Only changed pages get compiled.
4. Creation of deep ids is possible for all types.
5. For every type (data, partials, layouts, pages) Mangony adds a watcher ([chokidar](https://github.com/paulmillr/chokidar)).
6. [HJSON](https://github.com/laktak/hjson) is available.
7. [Handlebars](https://github.com/wycats/handlebars.js/) version 4.x is integrated.
8. Markdown pages with handlebars are supported.
9. [Markdown-it](https://github.com/markdown-it/markdown-it), [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) and [markdown-it-named-headers](https://github.com/leff/markdown-it-named-headers) are available.
10. Mangony provides many handlebars-helpers:

- [handlebars-helpers](https://github.com/assemble/handlebars-helpers/)
- [mangony-hbs-helpers](https://github.com/Sebastian-Fitzner/mangony-hbs-helpers)
- [mangony-hbs-helper-wrap-with](https://github.com/Sebastian-Fitzner/mangony-hbs-helper-wrap-with)
