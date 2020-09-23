---
title: Templer
repo: skx/templer
homepage: http://steve.org.uk/Software/templer/
language:
  - Perl
license:
  - GPL-2.0-only
  - GPL-3.0-only
  - Artistic-2.0
templates:
  - HTML::Template
description: Templer is a modular extensible static-site-generator written in perl.
---

Templer is a modular extensible static-site-generator written in perl.

### Templer

Templer is an extensible static-site-generator which is written in Perl,
and may be extended via plugins.

By default it will render HTML, but if you have the appropriate modules
installed you can write your input pages in Markdown or Textile.

Variables may be defined on a per-page or per-site basis, and may include:

- The output of shell commands.
- The output of various local files.
- Loops refering to filenames.
  - Allowing simple galleries to be made, for example.

Finally you may define a layout on a per-page basis, allowing you to give
different areas of your site an entirely different look and feel.
