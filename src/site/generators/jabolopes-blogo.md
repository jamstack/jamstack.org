---
title: blogo
repo: jabolopes/blogo
homepage: https://github.com/jabolopes/blogo
language:
  - Go
license:
  - BSD-3-Clause
templates:
  - Go templates
  - CSS
  - HTML
description: A simple blog generator with an easy management flow.
---

A simple program to create blogs.

* Markdown is first class - blogo generates posts from Markdown only.

* Timestamps are stored inside the the Markdown post so they are easy
  to manage and they are not lost. It also makes it easy to import old
  posts.

* Clear file organization - blogo organizes the files in clear
  subdirectories and the Markdown post files are clearly separated
  from the rest of files, in particular the output directory, the
  template files, and the generational programs.

* Reproducible generation / builds - the generational (or build)
  process is as deterministic as possible so that it can always be
  (re)generated from the posts.
