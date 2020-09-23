---
title: Halwa
repo: mhlakhani/halwa
homepage: https://github.com/mhlakhani/halwa
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
description: Halwa is a single file static site generator written in Python.
---

Halwa is a single file static site generator written in Python. It's light-weight and the only dependencies are jinja2, hamlish-jinja, and markdown.

Using Halwa is as easy as it should be; install it, then create a configuration file and point Halwa to it!

Halwa is organized around two main things, content and processors. A piece of content is a data source (static HTML, HAML, or Markdown) which is eventually converted into an output page (or pages). Halwa uses the following workflow:

1. Initialize a global data dictionary.
2. Load each piece of content specified in sources.
3. Run each of the processors specified in processors, generating output that goes into the data dictionary.
4. Update each piece of content with the contents of the data dictionary.
5. Render each piece of content, writing it out to the output folder.
