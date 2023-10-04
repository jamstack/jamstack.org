---
title: Fornax
repo: ionide/Fornax
homepage: https://ionide.io/Tools/fornax.html
language:
  - F#
license:
  - MIT
templates:
  - Type Safe F# DSL
description: Scriptable static site generator using type safe F# DSL to define page templates.
---

Fornax is a scriptable static site generator using type safe F# DSL to define page layouts.

## Working features

* Creating custom data loaders using `.fsx` files, meaning you can use anything you can imagine as a source of data for your site, not only predefined `.md` or `.yml` files
* Creating custom generators using `.fsx` files, meaning you can generate any type of output you want
* Dynamic configuration using `.fsx` file
* Watch mode that rebuilds your page whenever you change data, or any script file.
