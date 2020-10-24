---
title: Middleman
repo: middleman/middleman
homepage: http://middlemanapp.com
language:
  - Ruby
license:
  - MIT
templates:
  - ERB
  - Tilt
  - Haml
description: Hand-crafted, modern frontend development.
startertemplaterepo: https://github.com/wallin/middleman-template
twitter: middlemanapp
---

**Middleman** is a static site generator using all the shortcuts and tools in modern web development. Check out [middlemanapp.com](http://middlemanapp.com/) for detailed tutorials, including a [getting started guide](http://middlemanapp.com/basics/getting-started/). You can also follow [@middlemanapp](https://twitter.com/middlemanapp) for updates.

### Why Middleman?

The last few years have seen an explosion in the amount and variety of tools developers can use to build web applications. Ruby on Rails selects a handful of these tools:

- [Sass](http://sass-lang.com/) for DRY stylesheets
- [CoffeeScript](http://coffeescript.org/) for safer and less verbose javascript
- Multiple asset management solutions, including [Sprockets](https://github.com/sstephenson/sprockets)
- [ERb](http://ruby-doc.org/stdlib-2.0.0/libdoc/erb/rdoc/ERB.html) & [Haml](http://haml.info/) for dynamic pages and simplified HTML syntax

**Middleman** gives the stand-alone developer access to all these tools and many, many more. Why would you use a stand-alone framework instead of Ruby on Rails?

These days, many websites are built with an API in mind. Rather than package the frontend and the backend together, both can be built and deployed independently using the public API to pull data from the backend and display it on the frontend. Static websites are incredibly fast and require very little RAM. A front-end built to stand-alone can be deployed directly to the cloud or a CDN. Many designers and developers simply deliver static HTML/JS/CSS to their clients.
