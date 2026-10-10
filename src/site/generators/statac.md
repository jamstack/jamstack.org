---
title: Statac
repo: statac-ssg/statac
homepage: https://statac.dev
language:
  - Rust
license:
  - MIT
  - Apache-2.0
templates:
  - Jinja2
description: The friendly static site generator.
---

Statac makes a website from a folder of writing. You write pages in Markdown, choose how they look with templates, and run `statac build`. It is one program in one file, with no plugins.

Statac explains itself. When something in the site is wrong, it shows the file, the line and the exact text, offers a fix where it has a good one, and links to a page about that kind of problem.

### Features

- Broken links caught: every link within the site is followed before anything is published, down to the heading it points at
- Pictures in several sizes, as AVIF with a JPEG behind it, from an ordinary Markdown picture
- Sharing cards drawn for every page, from a layout you set
- Sass, coloured code, feeds and a sitemap built in
- Every template is a file in your site, and `statac new --update` replaces only the ones you never changed
- `statac import` brings a Hugo, Jekyll, Zola or Eleventy site across, and lists what it couldn't
- No JavaScript on a page unless you put it there
