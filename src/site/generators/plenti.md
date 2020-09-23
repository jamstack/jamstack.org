---
title: Plenti
repo: plentico/plenti
homepage: https://plenti.co/
language:
  - Go
license:
  - Apache-2.0
templates:
  - Svelte
description: Dead simple SSG that lets you focus on being productive.
---

Plenti is a static site generator with fast build times and a flexible
frontend framework for designing ambitious user experiences. The CLI
tool is written in Go, so it's fast and is downloaded as a single 
binary that doesn't require dependencies. The templating is done in 
Svelte so you can create an SPA with minimal overhead being sent to 
your browser and the syntax is easy to pick up for beginners.

Routing is setup out-of-the-box based on your content source. You
can override this by "ejecting" core files and customizing them to
your liking.

No bundler is needed, Plenti pulls in ESM support for your NPM 
dependencies.

Every route gets an HTML fallback for better initial page load performance, 
a consistent experience with javascript disabled, and improved SEO. All 
endpoints automatically hydrate into an SPA.

The local dev server automatically watches your project for changes and 
rebuilds so you can write code without having to restart anything.

A flexible content source allows you to define whatever field structure you'd 
like, without any restrictions. There are no required or protected keys.
