---
title: StaGen
repo: wiztools/stagen
homepage: https://github.com/wiztools/stagen
language:
  - Java
license:
  - Apache-2.0
templates:
  - StringTemplate
description: StaGen is the static site generator behind WizTools.org
---

StaGen is the static site generator behind [WizTools.org](http://www.wiztools.org/).

StaGen is written in Java 8, and supports:

- [Markdown](https://daringfireball.net/projects/markdown/) for content.
- [StringTemplate 4](http://www.stringtemplate.org/) for templating.
- [JSON](http://www.json.org/) for storing configuration.

Read the [tutorial](https://github.com/wiztools/stagen/wiki/Tutorial).

### Extensible

At the core of StaGen engine, Guice is used for wiring the implementations with the interfaces. StaGen can be easily extended to support any new format.

### Deliberately Minimalist

This static site generator was developed for maintaining a site like [WizTools.org](http://www.wiztools.org/). This is best suited for sites that have few pages generated out of few templates. We do not support themes or blog-like-static-pages. Of course, by nature of flexibility of StaGen, support for themes and blogs can be easily hacked into a StaGen site.

Read the [tutorial](https://github.com/wiztools/stagen/wiki/Tutorial) to get started.
