---
title: Basildon
repo: samwilson/basildon
homepage: https://basildon.netlify.app/
language:
  - PHP
license:
  - GPL-3.0-or-later
templates:
  - Twig
description: Generates HTML, PDF (via LaTeX), and any other text output from Markdown content and Twig templates.
---

Basildon has three key differences from other similar static site generators that are based around Markdown and Yaml frontmatter:
it loads all frontmatter into a SQLite database, which can then be queried in the templates;
it produces PDF output via LaTeX (the LaTeX source is generated in the same way that the HTML pages are);
and it can pull in data (including images) from Wikimedia Commons, Wikidata, and Flickr.

To use it you need PHP installed, and should be familiar with Twig and SQL
(as well as whatever output formats you want to use, such as HTML, LaTeX, CSV, RSS, etc.). 
