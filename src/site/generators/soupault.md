---
title: soupault
repo: dmbaturin/soupault
homepage: https://soupault.neocities.org
language:
  - OCaml
license:
  - MIT
templates:
  - HTML
description: Website generator based on HTML rewriting instead of template processing. Single binary, extensible with Lua plugins.
---

Soupault is a static website generator and HTML processor based on element tree rewriting,
similar to DOM manipulation, but without a browser. Instead of using a template processsor,
it parses your HTML and transforms it.

You can tell it where to insert content using CSS3 selectors. The workflow is defined in a single configuration file
in the TOML format, `soupault.conf`. HTML transformation "widgets" form a pipeline where output of one widget can be used
as input for another, and you can specify their execution order explicitly. You can also limit widgets to specific pages
or sections.

For example, this snippet will insert the content of `includes/menu.html` inside `<div id="menu">` in every page that has that element,
except `404.html` and `splash.html`:

```
[widgets.navigation-menu]
  widget = "include"
  file = "includes/menu.html"
  selector = "div#menu"
  exclude_page = ["404.html", "splash.html"]
```

You can also tell it to extract content from elements, again using CSS selectors, and use it to create a site index or a blog.
Extracted data can be rendered using built-in Mustache templates, or exported to JSON and fed to an external script.

The generator part (assembling a page from its body and an empty page template) is optional, you can use it as a post-processor
for existing pages.

What else it can do:

- Create clean URLs for pages, or preserve the file paths and names exactly.
- Generate tables of contents, footnotes, and breadcrumbs.
- Insert a file, program output, or an HTML snippet into any element identified by a CSS selector.
- Automatically call preprocessors for pages in formats other than HTML.

Built-in functionality can be extended with Lua plugins that have full access to the element tree.

Soupault is a native, self-contained executable. Precompiled binaries are available for Linux, Windows, and macOS.
