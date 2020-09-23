---
title: Monkeyman
repo: wspringer/monkeyman
homepage: https://github.com/wspringer/monkeyman
language:
  - Scala
license:
  - GPL-2.0-only
templates:
  - Haml
description: 'Simple static site generator for Scala and middleman lovers'
---

Monkeyman is a Scala static web site generator, similar to
Middleman. At this stage, it doesn't even come close to the features
Middleman has to offer, but it has one major advantage for Scala
programmers: it's written in Scala.

Monkeyman was created out of unease with the existing blogging
solutions. I know, that sounds weird, because there's an abundance of
Blogging solutions out there, and this certainly isn't the first
static web site generator. However, this tool would not have been
created if there _would_ have been a solution that supports:

- Layouts in HAML (or in this case, SCAML)
- Content pages in Markdown
- Nice permalinks
- Offline editing and preview
- Scala extensions

If ever such a solution arrives, then there is a chance Monkeyman will
no longer be maintained.

### Features

- Jade, HAML (SCAML), Mustache, SSP for layouts
- LESS and ZUSS to CSS transformation
- Live preview (web server running on port 4567)
- Live updates (monitoring file system changes)
- Static web site generation
- Content management through tags
