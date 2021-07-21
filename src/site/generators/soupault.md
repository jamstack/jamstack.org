---
title: soupault
repo: dmbaturin/soupault
homepage: https://soupault.app
language:
  - OCaml
license:
  - MIT
templates:
  - HTML
  - Jingoo
description: Website generator based on HTML rewriting instead of template processing. Single binary, extensible with Lua plugins.
startertemplaterepo: https://github.com/dmbaturin/soupault-sample-blog
---

## Based on element tree rewriting

Soupault is an automated HTML _editor_ rather than a just _generator_. It can parse HTML into an element tree,
manipulate it and save to a file. Like DOM manipulation, but without a browser.

You can use it as a website generator and insert different content into a "template"—an empty page.
However, it can also be a post-processor for a hand-written website or for output of another HTML generator.

## Static binary, extensible with plugins

Soupault is a single, static binary with no dependencies. Precompiled binaries are available for Linux, Windows, and macOS.

However, it has a built-in Lua interpreter and provides an element tree API somewhat similar to the JavaScript DOM API.
Plugins have access to the page element tree and to the metadata extracted from pages, so you can do everything
you could do with JavaScript and more, but statically.

## UNIX way

Soupault can pipe the content of HTML elements through external programs and read the output. You have options
to replace the original element with that output or just add the output to the page.

For example, you can statically render equations with KaTeX, or do syntax highligting with any tool of your choice.

You can also set preprocessors for specific file extensions. For example, pipe `.md` files through a Markdown
to HTML convertor of your choice before parsing and processing.

## No front matter

Soupault can extract metadata from pages using CSS3 selectors, in the spirit of microformats and web scraping libraries.
You can create your own content model and tell soupault what to extract.

Then you can render the site index into HTML using built-in Jingoo template processor (syntax similar to Jinja2)
or an external script. You can also export the site index to JSON for further processing.

## Built-in functionality

Some things soupault can do out of the box:

* Create a (fully static) ToC from the page headings.
* Insert external files or external program outputs into pages.
* Create footnotes, LaTeX style.
* Add breadcrumbs.

## Example

This config snippet will insert the content of `includes/menu.html` inside a `<div id="menu">` in every page that has that element,
except `404.html` and `splash.html`:

```
[widgets.navigation-menu]
  widget = "include"
  file = "includes/menu.html"
  selector = "div#menu"
  exclude_page = ["404.html", "splash.html"]
```
