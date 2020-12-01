---
title: sblg
repo: kristapsdz/sblg
homepage: http://kristaps.bsd.lv/sblg
language:
  - C
license:
  - ISC
templates: []
description: simple off-line blog utility
---

sblg is a blog tool for UNIX users.
It uses [libexpat](http://expat.sourceforge.net/) to merge content and
templates, both usually in HTML, into formatted HTML articles or Atom
feeds.
There are no other dependencies.

sblg is built to be driven by a Makefile just like any other development
tool: articles are like sources compiled into standalone pages, then
linked into blog pages.
See [sblg(1)](http://kristaps.bsd.lv/sblg/sblg.1.html) for details.
