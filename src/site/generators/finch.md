---
title: finch
repo: roddyyaga/finch
homepage: https://roddyyaga.github.io/finch/
language:
  - OCaml
license:
  - MIT
templates:
  - Jingoo
description: A really fast and simple static site generator in OCaml
---

Finch is a simple static site generator written in OCaml. It builds sites from content in the standard Markdown plus
YAML frontmatter format, with the OCaml version of Jinja for templating. It is very fast: about twice the speed of Hugo
to build a simple site with ~100k pages in informal benchmarking.