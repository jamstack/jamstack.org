---
title: Rustyll
repo: betterwebinit/rustyll
homepage: https://github.com/betterwebinit/rustyll
language:
  - Rust
license:
  - AGPL
templates:
  - Liquid (Jekyll-compatible)
description: A high-performance, Jekyll-compatible static site generator built in Rust.
twitter: matbrgz
---

Rustyll is a fast, modern, Jekyll-compatible static site generator written in Rust.  
It was created to solve performance challenges in extremely large Jekyll projects, offering the same workflow and folder structure developers already know — but powered by Rust’s speed, safety, and parallelism.

Like Jekyll, Rustyll takes Markdown, collections, front matter, and Liquid templates, then outputs a fully static website that can be deployed anywhere: Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any HTTP server.

### Philosophy

Rustyll follows a simple principle: **keep Jekyll’s ecosystem, remove its bottlenecks**.

It does not introduce unnecessary abstractions, and it avoids configuration bloat. Instead, it focuses on:

- **High performance**, ideal for very large sites with tens or hundreds of thousands of pages  
- **Maximum compatibility** with existing Jekyll conventions and Liquid templates  
- **Zero runtime dependencies**, producing a single, portable binary  
- **Transparency**, giving users control without magic or hidden behavior  

Rustyll aims to stay out of the user’s way — just like Jekyll — while delivering the power needed for modern, large-scale static sites.

Contributions are welcome as Rustyll moves toward its 1.0 release.
