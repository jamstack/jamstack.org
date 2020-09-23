---
title: Sitio
repo: fiatjaf/sitio
homepage: https://github.com/fiatjaf/sitio
language:
  - JavaScript
license:
  - MIT
templates:
  - React
description: An imperative static site generator built with React and browserify
---

Take any sources -- Markdown or other documents, API calls, databases, headless CMSs --, process them using **sitio** helpers or on your own way, then render pages. No need to adjust your files to some predefined pattern or tree structure, place them wherever you want and write your own code that finds them (although some helpers are provided).

You can write dynamic components and embed them in the pages, like placing SPA-like functionality in a section of your site, or embedding maps, pickers, dynamic forms or other kinds of functionality in the middle of a blog article.

Since everythings is statically rendered, the generated site works on environments without JavaScript (except, of course, dynamic components), but if JavaScript is present the browsing experience will be super smooth and fast, without full page reloads.

Also, only the skeleton (basic components and code) of the site/app is loaded statically, all the data specific for each page is loaded asynchronously and dinamically while the visitor is browsing.
