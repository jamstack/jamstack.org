---
title: Madoko
repo: koka-lang/madoko
homepage: https://www.madoko.net
language:
  - JavaScript
license:
  - Apache-2.0
templates:
  - HTML
description: A fast processor for high quality academic and technical articles from Markdown and LaTeX.
---

The main design goal of Madoko is to enable light-weight creation of
high-quality scholarly and industrial documents for the web and print,
while maintaining John Gruber's Markdown philosophy of simplicity and
focus on plain text readability.

With Madoko you can write full-blown academic articles with internal references, mathematical formulas, and bibliographies completely in Markdown and LaTex to get beautiful PDF or HTML output.

Supports "including" source files and referencing both CSS and javascript. Read the [reference manual] to learn more. An easy way to manage a large project is to split up the content and have one `index.md` including the chuncks:

```md
css : lib/style.css

script: lib/myAweseomScriptsAndAnalytics.js

[INCLUDE="whyWeDoIt.md"]

[INCLUDE="HowWeDoIt.md"]

[INCLUDE="WhatWeDo.md"]
```

To learn more about Madoko, check out the [reference manual]. To use it, simply:

- Install with:

```sh
npm install madoko -g
```

- Translating a Markdown document to HTML is as simple as:

```sh
madoko mydoc.mdk
```

- To also generate a PDF file, use:

```sh
madoko --pdf --odir=out mydoc
```

[reference manual]: http://madoko.org/reference.html
