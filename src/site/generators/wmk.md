---
title: wmk
repo: bk/wmk
homepage: https://wmk.baldr.net
language:
  - Python
license:
  - MIT
templates:
  - Mako
description: A flexible and versatile static site generator
---

wmk is suitable for building any small or medium-sized static website (up to a few hundred pages).

### Features

- The normal input format is Markdown or HTML content with YAML metadata in
  the frontmatter. However, via Pandoc, many other input formats are also supported,
  namely LaTeX, Org, RST, Textile, man, JATS, TEI, Docbook, RTF, DOCX, ODT and EPUB.
- The optional Pandoc integration also gives you access to other features such
  as LaTeX math markup, academic citations, and non-HTML output formats.
- Themeable, with a few themes already available.
- Built-in Sass/SCSS support (via libsass). More extensive assets handling (e.g.
  using Webpack or similar) can be easily configured.
- Can automatically generate a search index for use by Lunr.js.
- Additional data for the site may be loaded from separate YAML files – or even
  (with a small amount of Python/Mako code) from other data sources such as CSV
  files, SQL databases or REST/graphql APIs.
- "Stand-alone" templates – i.e. templates that are not used for presenting
  (markdown-based) content – are also rendered if present. This can e.g. be used
  for list pages or content based on external sources (such as a database).
- Shortcodes for more expressive and extensible content. The shortcode system
  is considerably more powerful than that of most static site generators. For
  instance, among the default shortcodes are an image thumbnailer and a page
  list component. A shortcode is just a Mako component, so if you know some
  Python you can easily build your own.
