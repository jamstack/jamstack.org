---
title: hadley
repo: mkorun/hadley
homepage: https://hadley.sh
language:
  - TypeScript
license:
  - ISC
templates:
  - galley
description: A static site generator built to be understood as a whole, with its own formats for content, metadata and templates.
---

hadley builds a site from bundles: each page is a folder with its text, its pictures and its versions in other languages. Its parts are its own: content in Markanto, a Markdown variant with one canonical form per meaning; metadata in Lima, a small specified frontmatter format; templates in galley; and quad formats the HTML it writes. Vite, sharp, Shiki and Pagefind do what they do best.

## Features

- Several languages as one site, each page linked to its versions
- Front matter keys in the author's own language, as aliases in `config.lima`
- Images in the widths and formats the theme asks for, with AI-generated pictures labelled from their metadata
- og images, a feed, a sitemap, `llms.txt` and a Markdown twin of every page
- Search with Pagefind, an index for each language
- Notes, drawings, a maintenance mode, and comments through a small service of its own
- A dev server with live reload and an editor for the page in the browser
- Two themes to start from, hems for writing and punch for a personal site, which become the site's own
- One program for Linux, macOS and Windows, or the npm package on Node.js and Bun
