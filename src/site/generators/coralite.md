---
title: Coralite
repo: tjdav/coralite
homepage: https://coralite.dev
language:
  - JavaScript
license:
  - MPL-2.0
templates:
  - HTML
  - Web Components
description: Static site generator built on HTML modules and native Web Components.
---

Coralite is a static site generator that compiles HTML modules and Web Components into static HTML and scoped CSS at build time with zero client-side JavaScript by default. When pages need dynamic data or interactivity, Coralite supports server-side rendering (SSR), selective client hydration, and SPA routing using standard HTML, CSS, and JavaScript.

Key features:

* Single-file HTML components (`.html` with `<template>`, `<style>`, and ESM `<script type="module">`)
* Zero-JS static output by default, with selective client hydration (`no-hydration` opt-out)
* Light DOM scoped CSS without Shadow DOM overhead
* Build-time `server()` data fetching stripped from browser bundles
* Form-Associated Custom Elements (`formControl`) and W3C Context Protocol (`provide` / `consume`)
* Built-in static validation (`coralite check` / `coralite fix`), plugin API (`definePlugin`), and AI agent scaffolding (`coralite init-agent`)
