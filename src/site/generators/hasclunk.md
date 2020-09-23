---
title: HasClunk
repo: jellehermsen/HasClunk
homepage: https://github.com/jellehermsen/HasClunk
language:
  - Haskell
license:
  - BSD-3-Clause
templates:
  - HTML
description: Simple dependency light blog generator
---

`HasClunk` is a very lightweight blog generator made in Haskell. It supports
posts, pages, categories and RSS. You can write your posts in whatever format
you like and setup your conversion shell command in the config. Templating is
simple, just a header.html and a footer.html that will sandwich your posts and
pages. You can use special tags like {base_url} to refer to the blog's url that
is setup in your config file.

The Haskell code is clean, well-documented and uses very little dependencies (to
avoid Cabal Hell). All the internally generated HTML5 is put in one Haskell
file (Html.hs), which you can edit, but you'll probably find that editing the
default css and template will fit your needs.
