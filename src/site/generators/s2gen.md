---
title: s2gen
repo: denisftw/s2gen
homepage: http://appliedscala.com/s2gen/
language:
  - Scala
license:
  - MIT
templates:
  - Freemarker
description: A dead-simple Scala-based site generator
---

**s2gen** is a simple static site generator written in Scala. It assumes that you write the content in Markdown and use Freemarker as a template engine. The generator supports watching for file changes and is completely unopinionated about organizing front-end assets.

Check out [the home page](http://appliedscala.com/s2gen/) for more information about the project including the motivation behind it. You can find the latest documentation [on GitHub](https://github.com/denisftw/s2gen).

### Features

**s2gen** currently supports:

- Parsing content from Markdown files
- Rendering HTML using Freemarker templates
- Project skeleton generation
- Monitoring for file changes
- Adding `target="_blank"` to external links
- Generating post URLs without html extensions

The latest version is available on GitHub [release page](https://github.com/denisftw/s2gen/releases/latest).
