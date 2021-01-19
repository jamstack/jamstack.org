---
title: WPWMM4
repo: uzsolt/wpwmm4
homepage: http://git.uzsolt.hu/wpwmm4/
language:
  - M4
  - Make
license:
  - BSD-2-Clause
templates: []
description: Web Page With Make and M4
---

With wpwmm4 can create web pages with simply 'make' and 'm4'.

Requirements:

- make (BSD's make, use bmake package of your distro)
- m4 (compatible with BSD's m4 and GNU's m4 too)
- some knowledge about HTML and programming

Features:

- incremental build (with make)
- automatically generated pages (similar webpage with different content)
- layouts
- expandable, programmable via m4 or can insert output of any program

Nutshell:

- convert items of ${TARGETS}: ${SRC*DIR}/*.m4 -> \${DEST*DIR}/*.html
- create items of \${TARGETS_MANUAL}: use own programs, scripts
- create items of ${VIRTUALS}: use templates from ${VIRT_DIR}
- can call scripts from scripts/ directory and use their outputs

Example web page is [uzsolt.hu](http://uzsolt.hu/) (only hungarian language). It has multi-level menu (without Javascript,
only pure HTML), automatically generated pages (for example [galleries](http://uzsolt.hu/pict/personal/summer2014/)
with `next` and `prev` buttons). Its source is available at [github](https://github.com/uzsolt/wpwmm4-uzsolt.hu)
or [own git repo](http://git.uzsolt.hu/wpwmm4-uzsolt.hu/).
