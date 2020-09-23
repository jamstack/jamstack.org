---
title: mkws(1)
repo: adriangrigore/mkws
homepage: https://mkws.sh
language:
  - Bash
license:
  - ISC
templates:
  - Bash
description: POSIX compliant, sh(1) static site generator
---

fast, extensible, simple static site generator


## Simple

[`mkws(1)`](https://mkws.sh) is as simple as it gets when it comes to
static site generators
while staying very powerful, it uses [`pp(1)`](https://mkws.sh/pp.html)
under the hood which leverages the power of the
[`sh(1)`](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/sh.html)
command language interpreter.

## One Language

Forget custom languages, custom templates,
<abbr title="Cascading Style Sheet">CSS</abbr>
preprocessing languages, write all your 
<abbr title="HyperText Markup Language">HTML</abbr> 
templates, unpreprocessed
<abbr title="Cascading Style Sheet">CSS</abbr> or any other templating
needs in [POSIX](https://pubs.opengroup.org/onlinepubs/9699919799)
compliant
[`sh(1)`](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/sh.html).
For <small>small</small>, simple websites, it's enough.

## Blazing Fast

Blazing fast both in rendering and development speed. Because
[`pp(1)`](https://mkws.sh/pp.html) uses
[`sh(1)`](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/sh.html)
you already have a
<abbr title="Read Eval Print Loop">REPL</abbr>
in your terminal, that means you can
test your commands there and just paste them in your templates. Also,
your experience with the
<abbr title="Uniplexed Information and Computing Service">UNIX</abbr>
environment will translate. Rendering
means just translating your templates to
[`sh(1)`](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/sh.html).
code and running it.

## Highly Extensible

Running on
[`pp(1)`](https://mkws.sh/pp.html) templates,
[`mkws(1)`](https://mkws.sh) can use any
<abbr title="Uniplexed Information and Computing Service">UNIX</abbr>
utility inside its templates. You can use existing ones, or write your
own. Also, you can modify the generator or extend it yourself, in fact
it's recommended.

## Minimal Dependencies

[`mkws(1)`](https://mkws.sh)'s only dependencies are
[`pp(1)`](https://mkws.sh/pp.html)
and 
[OpenBSD](https://openbsd.org/)
[`stat(1)`](https://man.openbsd.org/stat.1)
both of which are included in the download archives as statically
compiled portable binaries.

## POSIX Compliant*

 [`mkws(1)`](https://mkws.sh) is POSIX compliant and highly portable.

\* The only non portable component is [OpenBSD](https://openbsd.org/)
[`stat(1)`](https://man.openbsd.org/stat.1) which comes bundled
in the download archive statically compiled.