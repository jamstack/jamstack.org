---
title: verless
repo: verless/verless
language:
  - Go
license:
  - Apache-2.0
templates:
  - Go
description: A simple and lightweight Static Site Generator.
---

verless (pronounced like serverless) is a Static Site Generator designed for
Markdown-based content with focus on simplicity and performance. It reads your
Markdown files, applies your HTML templates and renders them as a website.

### Flexible theming

Themes define the HTML templates as well as styles and scripts for your frontend.
Initializing a new theme can be done within a single command, and setting it as
active requires a single line of configuration. Since verless provides pre-defined
template variables, themes are interchangeable.

### Rapid development

Just like themes, new projects can be created using a single command. Local development
requires no third-party webserver as verless comes with a built-in webserver and rebuilds
your project when something changes.

### High performance

Generating a static site typically is a matter of milliseconds. To keep build times short,
verless lets you choose and explicitly enable features you need - only generate RSS feeds
or overview pages for tags if you want to.

### Focus on simplicity

Global information, page types, plugins and other settings are configured in a central
configuration file inside your project. We try to keep things small and simple, and if
your project isn't simple, verless probably isn't a good fit.