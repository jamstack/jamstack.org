---
title: HydePHP
repo: hydephp/hyde
homepage: https://hydephp.com
language:
  - PHP
license:
  - MIT
templates:
  - Blade, Markdown
description: Elegant and Powerful Static Site Generator
twitter: HydeFramework
---

Create websites, blogs, documentation sites, and more, with the power of Laravel and the simplicity of Markdown. Your next website is minutes away from becoming a reality.

### About HydePHP

HydePHP is a content-first Laravel-powered console application that allows you to create static HTML pages, blog posts, and documentation sites,
using your choice of Markdown and/or Blade - the tools you already know and love.

Build sites in record-time with a full batteries-included TailwindCSS frontend that just works without any fuzz.

### Speed & simplicity first, full control when you need it.

Hyde is all about letting you get started quickly by giving you a full-featured frontend starter kit, while also giving you the power and freedom of doing things the way you want to.

Markdown purist? That's all you need. Blade artisan? Go for it.
Hyde comes with hand-crafted frontend templates, so you can focus on your content.
You don't _need_ to customize anything. But you _can_ customize everything.

See the documentation and learn more at https://hydephp.com/docs


## Features

### Content Creation

- Create blog posts using Markdown and Front Matter.
- Create documentation pages from plain Markdown, no front matter needed!
- Create simple pages using Markdown, or create advanced ones using Laravel Blade.
- You can scaffold blog posts and Markdown pages to automatically fill in the front matter.
- You can also scaffold Blade pages to automatically use the default layout.

### Built-in Frontend

- Hyde comes with a TailwindCSS starter kit, so you can start making content right away.
- The starter kit is fully responsive, has a dark mode theme, and is customizable.
- The frontend is accessible to screen-readers and rich with semantic HTML and microdata.
- Hyde automatically chooses the right layout to use depending on the content being rendered.
- Hyde also fills in and creates content like navigation menus and sidebars automatically.

### Easy Asset Managing

- The Hyde starter comes with [HydeFront](https://github.com/hydephp/hydefront) to serve the base stylesheet and JavaScript through the jsDelivr CDN.
- Hyde ships with precompiled and minified TailwindCSS styles in the app.css file, you can also load them through the CDN.
- This means that all the styles you need are already installed. However, if you want to customize the included Tailwind config, or if you add new Tailwind classes through Blade files, you can simply run the `npm run dev` command to recompile the styles using the pre-configured Laravel Mix package.

### Customization

- You don't need to configure anything as Hyde is shipped with sensible defaults.
- You can, however, customize nearly everything. Here are just a few out of many examples:
- All frontend components and page layouts are created with Blade, so you
  can publish the vendor views, just like in Laravel.
- Override many of the dynamic content features like the menus and footer.


## Getting Started - High-level overview

> See [Installation Guide](https://hydephp.com/docs/1.x/installation) and [Getting Started](https://hydephp.com/docs/1.x/getting-started) for the full details.

It's a breeze to get started with Hyde. Create a new Hyde project using Composer:

```bash
composer create-project hyde/hyde
```

Next, place your Markdown files in one of the content directories:  `_posts`, `_docs`, and `_pages` which also accepts Blade files. You can also use the `hyde:make` commands to scaffold them.

When you're ready, run the build command to compile your static site which will save your HTML files in the `_site` directory.

```bash
php hyde build
```
