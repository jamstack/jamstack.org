---
title: Glayu
repo: pablomartinezalvarez/glayu
homepage: http://www.glayu.com/
language:
  - Elixir
license:
  - MIT
templates:
  - EEx
description: A static site generator for mid-sized sites.
---

Glayu is a static site generator focused on mid-sized sites that generate daily content like magazines and newspapers.

What makes Glayu different from other static site generators is the way it structures the source folder: when you publish an article using Glayu, the markdown file is placed inside a subfolder of the source directory following the permalink definition. Glayu takes advance of this folder organization to enable the concurrent and partial generation of the site.

### Features

- Partial site generation.
- Well organized source folder.
- Fast, thanks to Elixir and the Erlang VM.
