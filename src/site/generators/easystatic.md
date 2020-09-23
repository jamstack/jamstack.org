---
title: Easystatic
repo: easystatic/easystatic
homepage: https://easystatic.com/
language:
  - JavaScript
license:
  - Apache-2.0
templates:
  - EJS
description: Static site generator powered by Markdown It, Postcss, Babel, Browsersync
---

Easystatic uses [Markdown It](https://markdown-it.github.io/) for web pages,
[EJS](http://ejs.co/) and [PostCSS](http://postcss.org/) +
[Autoprefixer](https://github.com/postcss/autoprefixer) for layout,
[Browsersync](https://browsersync.io/) for cross-device testing...

### Why use Easystatic?

1. It advocates convention over configuration
2. It's JavaScript-based, no need to have Ruby/Go/PHP installed
3. It's build around modern mainstream front-end tools such as PostCSS, Babel, Browsersync
4. It contains a build-in development server with "live reload"
5. It can scaffold the basic site layout for you based on [Material Design Lite](http://getmdl.io/) (MDL)

### How to Use

```sh
$ npm install -g easystatic
$ es start <path>
```

...where `<path>` is the folder with `*.md` files, or an empty folder. For example:

```sh
$ es start mysite.com
```

This command launches your site in a browser and starts watching for modifications in source files
(`<path>/*.md`, `<path>/assets/*.*`).

### How to Deploy

Here is an example of how you can deploy your site to GitHub Pages:

```sh
$ es deploy mysite.com --repo=username/mysite.com --domain=mysite.com
```

For more info, please visit [www.easystatic.com](https://easystatic.com)
