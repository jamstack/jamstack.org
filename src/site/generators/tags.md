---
title: Tags
repo: braceio/tags
homepage: http://tags.brace.io/
language:
  - Python
license:
  - MIT
templates:
  - Tags
description: The simplest static site generator
---

Brace Tags is a static site generator focused on simplicity. It does one thing:
solves the problem of having to repeat the same HTML code on several web pages.
(In other words, it provides "partials")

The template language provided by Brace Tags has only two tags, `include` and
`is`.

### Static site generation 101

You can use Brace Tags to build a multi-page static website without
duplicating navigation or footer code. Here's generally how it works:

1. Find duplicated code snippets in your HTML files. Extract them into separate
   files called "partials".

2. Replace each duplicated code snippet with a special placeholder tag. The tag
   looks like: `{% include mypartial.html %}`. This is where the content from a
   partial will be injected.

3. Run the `tags build` command to assemble the website from your source code.
   You can put the generated site online using any static site hosting provider.
