---
title: Harp
repo: sintaxi/harp
homepage: http://harpjs.com/
language:
  - JavaScript
license:
  - MIT
templates:
  - EJS
  - Jade
description: Harp is a static web server that can also compile your project down to static assets.
twitter: HarpWebServer
---

Harp is a static web server that also serves Jade, Markdown, EJS, Less, Stylus, Sass, and CoffeeScript **as** HTML, CSS, and JavaScript without any configuration. It supports the beloved layout/partial paradigm and it has flexible metadata and global objects for traversing the file system and injecting custom data into templates. Optionally, Harp can also compile your project down to static assets for hosting behind any valid HTTP server.

### Why?

Pre-compilers are becoming extremely powerful and shipping front-ends as static assets has many upsides. It's simple, it's easy to maintain, it's low risk, easy to scale, and requires low cognitive overhead. I wanted a lightweight web server that was powerful enough for me to abandon web frameworks for dead simple front-end publishing.

### Features

- easy installation, easy to use
- fast and lightweight
- robust (clean urls, intelligent path redirects)
- built in pre-processing
- first-class layout and partial support
- built in LRU caching in production mode
- can export assets to HTML/CSS/JS
- does not require a build steps or grunt task
- fun to use

### Supported Pre-Processors

|                | Language Superset                                                 | Whitespace Sensitive                                                                    |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **HTML**       | [EJS](http://embeddedjs.com/)                                     | [Jade](http://jade-lang.com/), [Markdown](http://daringfireball.net/projects/markdown/) |
| **CSS**        | [LESS](http://lesscss.org/), [Sass (SCSS)](http://sass-lang.com/) | [Stylus](http://learnboost.github.io/stylus/)                                           |
| **JavaScript** | (TBD)                                                             | [CoffeeScript](http://coffeescript.org/)                                                |

### Resources

- **Server Documentation** - [harpjs.com/docs/](http://harpjs.com/docs/)
- **Platform Documentation** - [harp.io/docs](https://harp.io/docs)
- **Source Code** - [github.com/sintaxi/harp](https://github.com/sintaxi/harp)
