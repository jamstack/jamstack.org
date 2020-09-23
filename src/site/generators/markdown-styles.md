---
title: markdown-styles
repo: mixu/markdown-styles
homepage: https://github.com/mixu/markdown-styles
language:
  - JavaScript
license:
  - BSD-3-Clause
templates:
  - Handlebars
description: Markdown to static HTML generator and multiple CSS themes for Markdown
---

Converts Markdown files to HTML, with over a dozen builtin themes.

## Features

- Includes 15+ ready-made CSS stylesheets for Markdown, see the bottom of the readme for screenshots.
- Reuse the stylesheets or use the `generate-md` tool to convert a folder of Markdown files to HTML using one of the built-in layouts or a custom layout.
- Completely static output is easy to host anywhere.
- Metadata support: Each file can include additional metadata in a header section, such as the page title and author name which can then be used in the layout.

### Layout features

- Built in support for code syntax highlighting via highlight.js; all layouts include a Github-style code highlighting theme by default.
- Built in table of contents generation from Markdown headings, fully customizable by replacing the `{{> toc}}` partial in custom layout.
- Built in header id and anchor generation for headings written in Markdown; all layouts support revealing the URL via header hover links.
- Support for custom logic for rendering code blocks via `--highlight-*`; this can be used to implement custom blocks that render the content of the code block in some interesting way.
- Automatically detects the document title from the first heading in the Markdown markup.
- Create your own layout based on an existing layout via `--layout` with:
  - Full [Handlebars](http://handlebarsjs.com/) support for layouts, helpers and partials
  - Fully customizable table of contents template via the `toc` partial
  - Support for relative path generation via the `{{asset 'path'}}` helper
