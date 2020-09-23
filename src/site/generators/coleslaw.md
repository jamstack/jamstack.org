---
title: Coleslaw
repo: kingcons/coleslaw
homepage: https://github.com/kingcons/coleslaw
language:
  - Lisp
license:
  - BSD-2-Clause
templates:
  - Closure Templates
description: Flexible Lisp Blogware.
---

Coleslaw aims to be flexible blog software suitable for replacing a single-user static site compiler such as Jekyll.

### Features

- Git for storage
- RSS and Atom feeds!
- Markdown Support with Code Highlighting provided by [colorize](http://www.cliki.net/colorize).
  - Currently supports: Common Lisp, Emacs Lisp, Scheme, C, C++, Java, Python, Erlang, Haskell, Obj-C, Diff.
- [Multi-site publishing](http://rmoritz.github.io/articles/coleslaw-multi-site/) support.

- A [Plugin API](http://github.com/redline6561/coleslaw/blob/master/docs/plugin-api.md) and [**plugins**](http://github.com/redline6561/coleslaw/blob/master/docs/plugin-use.md) for...

  - Comments via Disqus
  - Analytics via Google
  - Hosting via Github Pages
  - Deploying to Amazon S3
  - Using LaTeX (inside pairs of \$\$) via Mathjax
  - Using ReStructured Text
  - Sitemap generation
  - Importing posts from wordpress

- There is also a [Heroku buildpack](https://github.com/jsmpereira/coleslaw-heroku) maintained by Jose Pereira.
- Example sites: [redlinernotes](http://redlinernotes.com/blog/), [kenan-bolukbasi.log](http://kenanb.com/), and [Nothing Really Matters](http://ironhead.xs4all.nl/).

### Hacking

A core goal of _coleslaw_ is to be both pleasant to read and easy to hack on and extend. If you want to understand the internals and bend _coleslaw_ to do new and interesting things, I strongly encourage you to read the [Hacker's Guide to Coleslaw](https://github.com/redline6561/coleslaw/blob/master/docs/hacking.md).

### Theming

Two themes are provided: hyde and readable (based on [bootswatch readable](http://bootswatch.com/readable/)). Hyde is the default. A guide to creating themes for coleslaw lives [here](https://github.com/redline6561/coleslaw/blob/master/docs/themes.md).
