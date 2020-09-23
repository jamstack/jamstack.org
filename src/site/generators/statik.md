---
title: Statik
repo: thanethomson/statik
homepage: https://getstatik.com/
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
  - Mustache
description: A simple, generic, static web site generator for developers.
---

Statik aims to be a simple, generic, static web site generator for developers.
It has been born out of a need for something more generic than most other
static web site generators, which mostly cater for building blogs. It allows
for a generic data model, and provides a SQLite interface for you to be able to
perform relatively complex queries from your views. Its templating engine is
based on the popular Jinja2, so if you come from a Django background, it is
very easy to pick up. Alternatively, you could opt for Mustache templating.

Ultimately, it generates a set of flat HTML files that should be able to be
served directly by your web server.
