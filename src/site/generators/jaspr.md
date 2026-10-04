---
title: Jaspr
repo: schultek/jaspr
homepage: https://jaspr.site/
language:
  - Dart
license:
  - MIT
templates:
  - Dart
  - Markdown
description: A modern web framework for building websites in Dart, with support for client-side rendering, server-side rendering and static site generation.
---

Jaspr is a web framework written in Dart that uses a component model similar to Flutter widgets, but renders normal HTML and CSS instead of drawing to a canvas.

In static mode, `jaspr build` pre-renders every route at build time into static HTML and CSS files that can be hosted on any static hosting provider, and can optionally generate a sitemap.

For content-driven sites such as documentation, blogs or marketing pages, the `jaspr_content` package loads, parses and renders Markdown files and generates routes for them automatically. The Jaspr website and documentation are built with Jaspr itself.
