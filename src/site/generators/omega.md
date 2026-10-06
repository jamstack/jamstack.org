---
title: OMEGA
repo: Omega-JS-Stack/omega
homepage: https://omegajs.dev
language:
  - JavaScript
license:
  - Elastic-2.0
templates:
  - Liquid
  - Markdown
description: An Eleventy-based framework that builds a static marketing site and the backend, desktop app and browser extension around it from one config file.
startertemplaterepo: https://github.com/Omega-JS-Stack/brand-template
---

OMEGA is a JavaScript framework built on Eleventy 3 and LiquidJS. Its web package builds a static site into `dist/`: hashed assets, Markdown and Liquid pages, a section and component library, and layered themes.

The same project and config file can add a Firebase backend, an Electron desktop app and a browser extension, so the static site and the services behind it ship together.

Core Features:
* Content & Templating: Markdown and Liquid pages, with sections and themes layered instead of copied.
* Machine Files: every build emits a sitemap, RSS and JSON feeds, llms.txt, robots.txt and a search catalog.
* Asset Pipeline: esbuild, Sass and PurgeCSS, with hashed file names and font preloads read from the CSS.
* Starter: a GitHub template repo and a short wizard set up a new site with one `npm start`.
