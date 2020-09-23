---
title: SiteGen
repo: altlimit/sitegen
homepage: https://github.com/altlimit/sitegen
language:
  - Go
license:
  - MIT
templates:
  - Go
description: A simple but flexible static site generator.
---

Sitegen is a simple and flexible static site generator written in Go.

Bundled with the executables in the [releases](https://github.com/altlimit/sitegen/releases) section is a sample website that you can start with. Extract the zip file then run the command below.

```bash
# Run dev server & start editing site contents
sitegen -serve
# Run final build, defaults to public dir
sitegen
# Build for github pages
sitegen -public ./docs -minify
# For more options
sitegen -help
```