---
title: pycowrite
repo: vrgio/pycowrite
homepage: https://github.com/vrgio/pycowrite
language:
  - Python
license:
  - MIT
templates:
  - HTML
  - Jinja2
description: Very very small site generator (less than 50 LOC).
---

# pycowrite

Very *very* small site generator (less than 50 LOC).

Create markdown files and let it convert it to html. It does nothing more than that.

## Usage

+ Install requirements `pip install -r requirements.txt`
+ Create markdown files inside `posts` directory
+ Throw static files (css, js, pics) anywhere in the `build` dir
+ Optionally edit templates in `tpl` directory
+ Run `python pycowrite.py`
+ Generated static site is in `build` directory
