---
title: Fossfolio
repo: fossworx-labs/fossfolio
homepage: http://fossworx-labs.github.io/fossfolio
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
description: Probably the simplest static site generator in the world!
---

FOSSFolio is a Free and Open Source Software (FOSS) meant for developers to create their own static websites (mostly portfolios), with fine-grained control. It's built on Python 3.9 with Markdown and Jinja2 templating support, with minimal dependencies.
Intended for developers who want a quick setup for their static sites, FOSSFolio offers an intuitive, easy to understand and (possibly) limitless extensibility.

## Spotlight

- **Fully Hackable(!)**
- **Plugins to extend functionalities of basic templates:** A plugin can be anything- from replacing a simple placeholder with some simple value, to some complex JavaScript embedding beast, you can do anything with plugins, as long as you follow the rules for [Plugin Development](https://github.com/fossworx-labs/fossfolio/blob/main/README.md#plugin-development) 
- **Seamless Jinja2 templating (under development):** You can use the full power of Jinja templating for all your themes, as well as create themes based on it!
- **Flexible page structure:** Whatever page structure you want, you can have it 😃, as long as you place it inside the `content/` folder, directly or indirectly. You just need to have a theme for it (or customize your theme accordingly).
- **Automatic sitemap generation on-the-fly**: Yes, I know that getting the SEO right is a pain. So I implemented an automated sitemap generator, which generates readable sitemaps (to the best of my knowledge) that can be easily crawled by Search Engine Bots 🥳.
