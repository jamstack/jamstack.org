---
title: Slick
repo: ChrisPenner/slick
homepage: https://github.com/ChrisPenner/slick
language:
  - Haskell
license:
  - BSD-3-Clause
templates:
  - Mustache
description: Slick is a static site generator written and configured using Haskell. It's the spiritual successor to my previous static-site generator project SitePipe; but is faster, simpler, and more easily used in combination with other tools.
---

Slick provides a small set of tools and combinators for building static
websites on top of the [Shake](https://shakebuild.com/) build system. Shake is
adaptable, fast, reliable, and caches aggressively so it's a sensible tool for
static-site builds, but figuring out how to get started can be a bit abstract. Slick aims to answer the question of
'how do I get a site building?' while giving you the necessary tools and examples to figure out how to accomplish your
goals.

Here's a quick overview of what Slick can do:

- Slick uses the Shake build tool; the same used by ghcide! We recommend using `Development.Shake.Forward`; it auto-discovers which resources it should cache as you go! This means a blazing fast static site builder without all the annoying dependency tracking.
- Slick provides helpers for loading in blog-post-like things using Pandoc under the hood;
  - This means that if Pandoc can read it, you can use it with Slick!
  - Write your blog posts in Markdown or LaTeX and render it to
        syntax-highlighted HTML!
  - Slick processes Pandoc (and LaTeX) metadata into a usable form (as an
        [Aeson](https://hackage.haskell.org/package/aeson) Value object) which you can manipulate as you please.
- Slick provides combinators for rendering [Mustache templates](https://mustache.github.io/)
  - Slick wraps Justus Adam's [Mustache](http://hackage.haskell.org/package/mustache-2.3.0/docs/Text-Mustache.html)
        library and provides cached template rendering with awareness of changes to templates, partials, and Mustache
        objects.
  - It's a thin wrapper so you can still use things like Mustache functions, etc. if you like!
- Provides only the individual tools without opinions about how to wire them up; if you want to load blog posts from
    a database and render them out using Blaze html; well go ahead, we can help with that!
- Provides caching of arbitrary (JSON serializable) objects using Shake resulting in super-fast rebuild times!
