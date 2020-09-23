---
title: Blacksmith
repo: flatiron/blacksmith
homepage: https://github.com/flatiron/blacksmith
language:
  - JavaScript
license:
  - MIT
templates:
  - Plates
description: A generic static site generator built using flatiron, plates, and marked.
---

A generic static site generator built using `flatiron`, `plates`, and `marked`.

Blacksmith sites have a specific directory structure for storing the various parts of your site: settings, layout, partials, pages, and content. Content exists in two forms:

- Markdown files that `blacksmith` will render.
- Supporting content such as css and images.

All content will be rendered into `/public`. To render a blacksmith site:

### Components

Each `blacksmith` site defines a hierarchical set of components which can be composed **to create any type of site you want!** A couple of examples:

- A Blog
- A Documentation Site
- A Custom Splash Page or Content Site
