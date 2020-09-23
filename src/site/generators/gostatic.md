---
title: Gostatic
repo: piranha/gostatic
homepage: https://github.com/piranha/gostatic#speed
language:
  - Go
license:
  - ISC
templates:
  - Go
description: A fast static site generator written in Go.
---

Gostatic is a static site generator. What differs it from most of other tools is
that it's written in Go and tracks changes, which means it should work
reasonably [fast](#speed).

Features include:

- No run-time dependencies, just a single binary - download it and run
- Dependency tracking and re-rendering only changed pages
- Markdown support
- Flexible [filter system](#processors)
- Simple [config syntax](#configuration)
- HTTP server and watcher (instant rendering on changes)

### Quick Start

Run `gostatic -i my-site` to generate basic site in directory `name`. It will
have a basic `config` file, which you should edit to put relevant variables at
the top - it also contains description of how files in your `src` directory are
treated.

`src` directory obviously contains sources of your site (name of this directory
can be changed in `config`). You can follow general idea of this directory to
create new blog posts or new pages. All files, which are not mentioned in
`config`, are just copied over. Run `gostatic -fv config` to see how your `src`
is processed.

`site.html` is a file that defines templates your are able to use for your
pages. You can see those templates mentioned in `config`.

And, finally, there is a `Makefile`, just for convenience. Run `make` to build
your site once or `make w` to run watcher and server, to see your site changes
in real time.

Also, you could look at [my site](https://github.com/piranha/solovyov.net) for
an example of advanced usage.

Good luck! And remember, your contributions either to gostatic or to
documentation (even if it's just this `README.md`) are always very welcome!
