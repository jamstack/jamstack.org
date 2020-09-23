---
title: Sphinx
repo: sphinx-doc/sphinx
homepage: http://www.sphinx-doc.org/
language:
  - Python
license:
  - BSD-2-Clause
templates:
  - Jinja2
description: A tool that makes it easy to create intelligent and beautiful documentation, written by Georg Brandl.
---

Sphinx is a tool that makes it easy to create intelligent and beautiful documentation, written by Georg Brandl and
licensed under the BSD license.

It was originally created for the new Python documentation, and it has excellent facilities for the documentation of
Python projects, but C/C++ is already supported as well, and it is planned to add special support for other languages as
well. Of course, this site is also created from reStructuredText sources using Sphinx! The following features should be highlighted:

- **Output formats**: HTML (including Windows HTML Help), LaTeX (for printable PDF versions), ePub, Texinfo, manual pages, plain text
- **Extensive cross-references**: semantic markup and automatic links for functions, classes, citations, glossary terms and similar pieces of information
- **Hierarchical structure**: easy definition of a document tree, with automatic links to siblings, parents and children
- **Automatic indices**: general index as well as a language-specific module indices
- **Code handling**: automatic highlighting using the Pygments highlighter
- **Extensions**: automatic testing of code snippets, inclusion of docstrings from Python modules (API docs), and more
- **Contributed extensions**: more than 50 extensions contributed by users in a second repository; most of them installable from PyPI

Sphinx uses reStructuredText as its markup language, and many of its strengths come from the power and straightforwardness of reStructuredText and its parsing and translating suite, the Docutils.
