---
title: Zensical
repo: zensical/zensical
homepage: https://zensical.org/
language:
  - Rust
  - Python
license:
  - MIT
templates:
  - Jinja2
  - Markdown
description: A modern static site generator built by the creators of Material for MkDocs.
---

Zensical is a static site generator for project documentation, built by the team behind Material for MkDocs and sharing its "batteries included" philosophy.

It is written in Rust and Python and distributed as a Python package on PyPI (`pip install zensical`). Content is written in Markdown, and templates are rendered with MiniJinja, a Rust implementation of the Jinja2 template language.

Projects are configured with a `zensical.toml` file, and existing MkDocs projects can be migrated gradually. Generated sites are searchable, customizable and available in more than 60 languages.
