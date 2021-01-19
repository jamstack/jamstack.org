---
title: Elder.js
repo: elderjs/elderjs
homepage: https://elderguide.com/tech/elderjs/
language:
  - JavaScript
license:
  - MIT
templates:
  - Svelte
description: An opinionated, SEO focused, static site generator for Svelte.
---

## What's Elder.js?

Elder.js was designed from the ground up by a small team of SEOs and developers to solve the unique challenges and complexities of building flagship SEO sites with 10-100k+ pages.

### Features:

- [**Build hooks**](https://elderguide.com/tech/elderjs/#hooks-how-to-customize-elderjs) allow you to plug into any part of entire page generation process and build process and customize as needed.
- **A Highly Optimized Build Process:** that will span as many CPU cores as you can throw at it to make building your site as fast as possible. For reference Elder.js easily generates a data intensive 18,000 page site in 8 minutes using a budget 4 core VM.
- **Straightforward Data Flow:** By simply associating a `data.js` file with your route, you have complete control over how you fetch, prepare, and manipulate data before sending it to your Svelte template.  Anything you can do in Node.js, you can do to fetch your data. Multiple data sources, no problem.
- **Partial Hydration:** Only hydrate the client with what needs to be interactive using partial hydration. This allows you to ship less data to the browser but still get all of the Svelte interactive goodness you love.
- **Community Plugins:** Easily extend what your Elder.js site can do by adding [prebuilt plugins](https://github.com/Elderjs/plugins) to your site.


### Great For Sites BIG & small

While Elder.js was built to power large sites the [Elder.js template](https://github.com/Elderjs/template) makes it incredibly easily to get a personal blog up and running in no time.
