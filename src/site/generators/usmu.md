---
title: Usmu
repo: usmu/usmu
homepage: http://usmu.io
language:
  - Ruby
license:
  - MIT
templates:
  - Slim
  - Markdown
description: A small, extensible, static site generator.
---

Usmu is a small, simple but extensible static site generator. It takes your input files in Markdown and Slim and translates them to HTML files suitable for hosting virtually anywhere with built-in support for S3 or Github Pages.

### Philosophy

Usmu Core is designed to be small and do the bare minimum possible - turn your files into HTML. Everything else is provided by plugins that are typically small and incredibly easy to implement. Various deployment options are available as well as other plugins that add other features to your website like automatically generated sitemaps. Plugins are easy to install - just install the gem.

### Templates

Usmu makes use of the Tilt templating API to provide as many options as possible as easily as possible. All you need to do to use a different language is install the relevant gem and then it is immediately available. Want to use Sass or LESS to write your CSS? Coffeescript? No problem. Tilt are open to community-managed interfaces for supporting template languages they don't yet officially support so nothing is impossible.
