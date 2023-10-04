---
title: Uriel
repo: ratherlargerobot/uriel
homepage: https://nathanrosenquist.com/uriel/
language:
  - Python
license:
  - GPL-3.0-or-later
templates:
  - Custom
description: Minimalistic, stable, feature complete static site generator.
---

Uriel is a minimalistic, stable, feature complete static site generator,
written in Python.

Built to last for years without requiring any maintenance. It is feature
complete, and only depends on python3 and rsync, with no third-party module
dependencies. That means that it won't break unexpectedly years from now,
after you've built a site around it.

As long as you can still get a working copy of python3 and rsync, your site
will still build the same way in the future.

### Features

- Extensible template system
- Built-in substitution parameter support in content nodes and templates
- Write arbitrary Python code, and call it from content nodes and templates
- Write arbitrary Python code, and have it generate pages dynamically
- Possible to build a basic site without writing any Python code
- Flat URL support to make some or all content nodes top-level URLs
- Static file linking lets you catch potential 404 errors at build time
- Static file hash linking support for dynamically generated CSS/JavaScript file includes
- Content node metadata inheritance system
- Built-in tag index system
- RSS feed support
- sitemap.xml support
- Creates basic robots.txt file
- Useful error messages
- Stable, feature complete platform
- Almost entirely self-contained, only depends on python3 and rsync
