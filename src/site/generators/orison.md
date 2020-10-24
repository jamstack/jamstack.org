---
title: OrisonJS
repo: megazear7/orison
homepage: https://orison.alexlockhart.me
language:
  - JavaScript
license:
  - GPL-3.0-only
templates:
  - lit-html
description: Create pages, layouts, partials, and contextual data using lit-html
startertemplaterepo: https://github.com/megazear7/orison-netlify-starter-kit
---

OrisonJS is a static site generator built on top of lit-html.
It provides a server for easy development, a preview server for previewing the built site, and a build command for building a static site from your source.
The build command can be carefully configured to only rebuild the portions of the site that you want. This makes it indefinitely scalable for websites with a large number of pages or with a large number of rebuilds from content updates.
Layouts are contextually applied to pages based upon their location in the site hierarchy and partials allow reuse of common elements.

Pages files, layouts, and partials are all JavaScript files that export an async function.
This function is provided contextual data about it's location in the site hierarchy, it's path, and accessor methods for crawling up the site heirachy with `parent` methods or crawling down the site hierarchy with `child` methods.
This enables rich contextual functionality. These JavaScript files can also call third party services to pull in dynamic content, and can be hooked up to web hooks for rebuilding the site as content changes.
Pages can also be declared as a list, so a single page file produces a list of pages on your site, useful for generating a list of blog posts or product pages by connecting to a CMS, for example.

All pages also produce fragments. These are html files with the same content as the full page but without the layout applied. This makes implementing single page application style redirects easy to implement, and the template projects do just this.

Projects can be initialized for use with Netlify, Firebase, or GitHub Pages, and can be easily configured for any hosting service.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/megazear7/orison-netlify-starter-kit)
