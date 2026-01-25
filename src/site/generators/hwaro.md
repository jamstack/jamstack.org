---
title: Hwaro
repo: hahwul/hwaro
homepage: https://hwaro.hahwul.com
language:
  - Crystal
license:
  - MIT
templates:
  - Jinja2
description: Hwaro (화로) is a lightweight and fast static site generator written in Crystal.
---

Hwaro is a lightweight static site generator written in Crystal, focused on speed and simplicity. It provides a straightforward workflow for building high-performance websites using Markdown and Jinja2 templates.

The tool processes Markdown content with TOML front matter and utilizes the Crinja engine (a Jinja2 implementation for Crystal) to offer flexible layout management, including template inheritance and includes. To optimize build times, Hwaro incorporates parallel processing and a caching mechanism.

Core Features:
* Content & Templating: Supports Markdown-based content creation with Jinja2-compatible templating for full design control.
* Build Hooks: Supports custom commands before and after the site build process, allowing users to integrate asset minification, deployment scripts, or other pipeline tasks.
* Modern Standards: Automatically generates essential files for modern web discovery, including Sitemaps, RSS feeds, llms.txt, and AGENTS.md.
* Built-in SEO: Includes native support for OpenGraph tags and other metadata to improve search engine and social media visibility.
* Performance: Built with Crystal to ensure fast build cycles through concurrent execution.

Hwaro is designed for developers who need a reliable and efficient tool for managing blogs, documentation, or personal project sites without unnecessary complexity.
