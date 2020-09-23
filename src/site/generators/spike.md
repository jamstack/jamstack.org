---
title: Spike
repo: static-dev/spike
homepage: 'https://spike.js.org/'
language:
  - JavaScript
license:
  - MIT
templates:
  - Reshape
description: 'An opinionated static build tool, powered by webpack'
---

## Why should you care?

[We](https://github.com/carrot) [❤](http://giphy.com/gifs/steve-carell-cute-the-office-Yb8ebQV8Ua2Y0/tile) [static](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/).

If you're building a website or client-side app – then :cactus: spike is probably for you. Spike aims to be simple, efficient, and a pleasure to use.

Spike certainly is not the only [static site generator](https://www.staticgen.com/) out there, but in our opinion, it's the most powerful and easiest to use.

> Spike is from the same [team](https://github.com/carrot) that brought you [Roots](http://roots.cx). The thinking behind moving past Roots is explained in [this article](https://medium.com/@jescalan/eaa10c75eb22). Please feel free to comment and contribute.

### The Stack

Spike is fairly strict in enforcing a default stack. However, the stack allows for quite a large amount of flexibility as both the css and js parsers are able to accept plugins. Also spike's core compiler is [Webpack](https://github.com/webpack/webpack), so you can customize your project with [loaders](https://webpack.js.org/loaders/) and [plugins](https://webpack.github.io/docs/plugins.html). The inflexibility of the stack means faster compiles and better stability. We use...

- [Webpack](https://webpack.github.io/) as the core compiler and javascript bundler
- [Postcss](http://postcss.org/) for css
- [Reshape](https://github.com/reshape/reshape) for html
- [Babel](http://babeljs.io/) for javascript
