---
title: Log4brains
repo: thomvaill/log4brains
homepage: https://github.com/thomvaill/log4brains
language:
  - JavaScript
license:
  - Apache-2.0
templates:
  - Markdown
description: Docs-as-code knowledge base to manage Architecture Decision Records (ADR) for your project and publish them automatically as a static website
---

Log4brains is a docs-as-code knowledge base for your development and infrastructure projects.
It enables you to write and manage [Architecture Decision Records](https://adr.github.io/) (ADR) right from your IDE, and to publish them automatically as a static website.

It performs Static Site Generation from markdown files thanks to [Next.js](https://jamstack.org/generators/next/).

## Install

From your project's root directory:

```sh
npm install -g log4brains
log4brains init
```

## Local preview

```sh
log4brains preview
```

## Build and deploy

```sh
log4brains build
```

See [Log4brains documentation](https://github.com/thomvaill/log4brains) for more information.

## Example

[Log4brains' own architecture knowledge base](https://thomvaill.github.io/log4brains/adr/)
