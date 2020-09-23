---
title: tumblelog
repo: john-bokma/tumblelog
homepage: http://johnbokma.com/articles/tumblelog/
language:
  - Perl
license:
  - MIT
templates:
  - HTML
description: Simple static site generator with the focus on a tumbleblog
---

`tumblelog` is a simple static site generator with the focus on generating a
rich and complete tumblelog or micro blog with various ways to navigate to
archived blog posts. `tumblelog` comes with several styles and it's easy to
either modify an existing one or create your own.

The input is a single "Markdown" file divided into pages by starting a line with
a date followed by a title. Each date page can further be split up into multiple
articles using a single % on a line by itself.

Parameters to control the blog are given via command line arguments. The program
creates the blog HTML5 pages and both a JSON and RSS feed.

The home page has extensive documentation on how to get started and how to have
your own blog or site up in a very short time.
