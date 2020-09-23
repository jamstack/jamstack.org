---
title: Asimov
repo: adamrenklint/asimov-static
homepage: http://www.asimovjs.org/
language:
  - JavaScript
license:
  - MIT
templates:
  - Handlebars
description: Static site generator, powered by asimov.js and asimov-server.
---

Static site generator for asimov.js and asimov-server

asimov.js is at its core only two simple things: a command line interface that loads and executes command scripts in your project and node_modules folder, and a plugin interface for adding initializers and extend the app lifecycle.

On it's own, asimov.js doesn't really do much - it leaves all the heavy lifting to plugins. The two most basic ones are asimov-server and asimov-static. Together you get an awesome static site generator with extendable, chained processing and a high-performance clustered server, with express-compatible middleware.

Or you roll your own plugin in a just a few seconds.
