---
title: Bagatto
homepage: https://bagatto.co
language:
  - Janet
license:
  - BSD-3
templates:
  - Temple
description: A transparent, extensible static site generator.
---

![Il Mago](https://git.sr.ht/~subsetpark/bagatto/blob/master/assets/logo-trans.png)

## A transparent, extensible static site generator

Bagatto is a static site generator written in [Janet][janet].

It is inspired most directly by Garrett Smith's [LambdaPad][lp], a SSG
in Erlang. LambdaPad falls more to code side of the config--code
spectrum, and Bagatto follows that philosophy. Thus, it's designed to
expose the full expressive power and extensiblity of the language it's
written in. Janet is a lisp that's designed for simplicity and ease of
embedding, and thus it's a very good fit for this model.

[janet]: https://janet-lang.org/index.html
[lp]: https://github.com/gar1t/lambdapad

To create a Bagatto website, you should create a single Janet source
file. Because you're writing normal source code, you have the full
power of the Janet language at your disposal. Bagatto tries to keep
the "magic" to a minimum; in all cases, it tries to make the process
of loading source files and of generating new files completely
transparent, inspectable and extensible.

