---
title: Trio
repo: 4awpawz/trio
homepage: https://gettriossg.com
language:
  - JavaScript
license:
  - MIT
templates: []
description: A fast, simple yet powerful JavaScript-driven static site generator.
twitter: gettriossg
---

### About

Trio is a fast, simple yet powerful **JavaScript-driven static site
generator that runs on Node**.

Trio caches every project asset per build, and only generates stale
assets when building incrementally, which **dramatically reduces build times**.

Trio has almost zero configuration, includes common build-time utilities
in its toolchain, and **doesn't require frameworks or templating languages**.

Trio **uses the JavaScript Node modules that you write to augment your pages
with dynamic content**. You have all the latest ES6+ goodies to work with
without having to transpile your code.

```javascript
/**
 * append the current date and time to the HTML tag
 */

module.exports = ({ $tag }) => {
    $tag.append(new Date().toDateString());
};
```

#### Features

##### Integrity Checking

Checks your project's chains of dependencies and notifies you when assets can't be resolved.

##### Incremental Builds

Dramatically reduces project build times by limiting processing to only stale assets.

##### Built-In Toolchain

Trio's built-in toolchain beautifies generated markup, compiles your Sass with vendor prefixes and minification, generates CSS maps during development, and can optionally cache bust your project for release.

##### Blogging Platform

Trio is built from the ground up to help you create modern-day blogs with the features your readers have come to expect, such as categories, tags, article pages, category pages, tag pages, landing pages, archive pages, and link navigation.

##### Configuration

Trio was designed with the lofty goal of minimizing the amount of configuration that it requires to almost zero. Who likes configuration anyway, right?

##### Command Line

Trio provides extensive command line functionality for getting help, building and serving your sites. It was crafted with the iterative code and test process in mind.

##### Get Started

Install Trio `$ npm i -g @4awpawz/trio`, then create a new project `$ trio new my-new-project/`, and you are good to go!
