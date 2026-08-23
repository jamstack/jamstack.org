---
title: microfolio
repo: aker-dev/microfolio
homepage: https://aker-dev.github.io/microfolio/
language:
  - JavaScript
license:
  - MIT
templates:
  - Svelte
  - Markdown
description: A modern static portfolio generator for creatives, built with SvelteKit and a file-based Markdown CMS.
---

microfolio is a static portfolio generator built with SvelteKit 2 and Tailwind CSS 4. It is aimed at designers, artists, architects and other creatives who want to publish their work elegantly without running a database or a backend.

Content lives entirely on the file system: one folder per project, a Markdown file for the description, front matter for the metadata, and the images alongside them. The site is prerendered with `adapter-static`, so the output is a plain set of files you can host anywhere.

Features include:

* Grid, list and map views, with geolocated projects rendered through MapLibre GL on an OpenStreetMap basemap, in both light and dark styles
* Tag filtering with counters and a collapsible tag list, plus pagination and sorting by date, title, type or location
* Shareable URLs — filter, search, sort and pagination state is synced to query params
* An image lightbox with keyboard and arrow navigation, showing EXIF/IPTC metadata extracted at build time
* WebP thumbnails and sharing images generated as part of the build
* Dark mode with a persistent preference, following the system setting by default
* Internationalization in English and French via `svelte-i18n`, ready for RTL
* Open Graph and Twitter tags with absolute URLs, canonical links, and `sitemap.xml` and `robots.txt` generated from the projects
* No cookies, no trackers, and therefore no consent banner

Version 1.0 comes with a stability promise: the content structure and the core API stay valid until 2.0, so a portfolio built today keeps building tomorrow.
