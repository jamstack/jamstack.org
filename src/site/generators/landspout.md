---
title: Landspout
repo: gmr/landspout
homepage: https://github.com/gmr/landspout
language:
  - Python
license:
  - BSD-3-Clause
templates:
  - Tornado
description: A simple static site generation tool
---

Landspout is a static website generation tool, using [Tornado Templates](http://www.tornadoweb.org/en/stable/). Create your template structure, and your content, and point landspout at it.

Landspout has three operational modes:

- **Build**: generate the static site
- **Watch**: when working on the site, run a blocking process that watches for changes of content or templates and generates the static site
- **Serve**: when working on the site, run a HTTP server that also watches for changes of content or templates and generates the static site

## Installation

```bash
pip3 install landspout
```
