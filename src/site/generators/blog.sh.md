---
title: blog.sh
repo: thalios1973/blog.sh
homepage: https://github.com/thalios1973/blog.sh
language:
  - Bash
license:
  - MIT
templates:
  - Custom
description: A simple static blog generation tool in bash that supports markdown.
---

blog.sh is a relatively simple static blog generation tool written in bash. It supports markdown (via pandoc, but other converters could be used) and a very basic templating system. It is designed for simplicity and easy of hacking.

## Features

- Create new
- Save to draft
- Edit existing or draft
- Complete rebuild of site (good for updating template)
- Basic templating
- RSS 2.0

## Planned (aka things I haven't found time for)

- Default .config file
- Default basic template (one doesn't exist)
- Static page support
- Document classes and ids available for CSS
- Delete post

blog.sh was heavily inspired by Carlos Fenollosa's [bashblog](https://github.com/cfenollosa/bashblog).
