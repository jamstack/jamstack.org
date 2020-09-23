---
title: Frog
repo: greghendershott/frog
homepage: https://github.com/greghendershott/frog
language:
  - Racket
license:
  - MIT
templates:
  - Racket
description: Frog is a static web site generator implemented in Racket, targeting Bootstrap.
---

Frog is a static web site generator written in [Racket](http://www.racket-lang.org/).

You write content in [Markdown](http://daringfireball.net/projects/markdown/syntax) or [Scribble](http://docs.racket-lang.org/scribble/index.html). You generate
files. To deploy, you push them to a GitHub Pages repo (or copy them
to Amazon S3, or whatever).

Posts get a variety of automatic blog features.

You can also create non-post pages.

The generated site uses [Bootstrap](http://getbootstrap.com/), which is [responsive](https://en.wikipedia.org/wiki/Responsive_web_design),
automatically adapting to various screen sizes.

Yes, it's very much like Octopress and others. But Frog doesn't
require installing Ruby. Installing Racket is typically waaaay
simpler and faster.

The only non-Racket part is optionally using [Pygments](http://pygments.org/) to do syntax
highlighting.

Q: "Frog"?  
A: Frozen blog.
