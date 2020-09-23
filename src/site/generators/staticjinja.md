---
title: staticjinja
repo: Ceasar/staticjinja
homepage: http://staticjinja.readthedocs.org/en/latest/
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
description: Effortlessly deploy static sites with Jinja2.
---

staticjinja is a library for easily deploying static sites using the jinja2 templating language.

Most static site generators are cumbersome to use. Nevertheless, when deploying a static website that could benefit from factored out data or modular html pages (especially convenient when prototyping), a templating engine can be invaluable. (jinja2 is an extremely powerful tool in this regard.)

staticjinja is designed to be lightweight, easy-to-use, and highly extensible, enabling you to focus on simply making your site.

```sh
$ mkdir templates
$ vim templates/index.html
$ python -m staticjinja
Building index.html...
Templates built.
Watching 'templates' for changes...
Press Ctrl+C to stop.
```
