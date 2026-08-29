---
title: Sourcey
repo: sourcey/sourcey
homepage: https://sourcey.com/oss
language:
  - TypeScript
license:
  - AGPL-3.0
templates:
  - Markdown
description: Static documentation generator for OpenAPI, MCP, Doxygen, godoc, rustdoc, and Markdown
---

Sourcey builds documentation sites from API specifications, source-code documentation, and written guides. It accepts OpenAPI and MCP descriptions, Doxygen XML, godoc and rustdoc data, MkDocs projects, and Markdown pages in one navigation structure.

The production build writes static HTML with client-side search, generated social images, and `llms.txt` context files. The output has no framework runtime and can be deployed to any static host.

Sourcey includes a local development server with hot reload and can be run through npm, Homebrew, Docker, or Nix. See the [documentation](https://sourcey.com/docs/introduction) for configuration and deployment examples.
