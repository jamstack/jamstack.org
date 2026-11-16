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
description: A static site generator with an editor on the page, versions without Git and comments of its own. Open source, free and private.
---

hadley builds a site from bundles: each page is a folder with its text, its pictures and its versions in other languages. You write in Markanto, Markdown as you know it with a few things more, and front matter in Lima, the part of YAML that front matter needs. Its own template engine (galley) and HTML formatter (quad) do the rest; Vite, sharp, Shiki and Pagefind do what they do best.

## Features

- An editor on the page in the browser: double-click a block and write; the Markdown stays in its file
- Versions of every page without Git, whoever changed it, with undo, a word-by-word comparison and restore
- Comments through a small service of its own: no account for visitors, moderated on your own machine, published as files of the article; `hadley dev` fetches the service the first time
- Its themes load nothing from other servers, set no cookies and read the same without JavaScript; photos lose their location and camera before they are published
- Several languages as one site, and front matter keys in the writer's own language, as aliases in `config.lima`
- Images in the widths and formats the theme asks for, with AI-generated pictures labelled from their metadata
- og images, a feed, a sitemap, `llms.txt` and a Markdown twin of every page; search with Pagefind, an index for each language
- Notes beside articles, drawings the theme colours, and a maintenance mode
- An optional chat with the coding agent you already use (Claude Code or Codex) beside the page; what it would do waits for your Allow
- Two themes to start from, hems for writing and punch for a personal site, which become the site's own
- One program for Linux, macOS and Windows, or the npm package on Node.js and Bun
