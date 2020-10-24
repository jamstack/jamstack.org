---
title: empress-blog
repo: empress/empress-blog
homepage: https://github.com/empress/empress-blog
language:
  - JavaScript
license:
  - MIT
templates:
  - Ember
  - Markdown
description: Fully-functional, SEO friendly static site implementation of a blog system built on Ember
startertemplaterepo: https://github.com/empress/empress-blog-netlify-casper-template
---

This project is designed to be a fully-functional, static site implementation of a blog system that is mostly compatible with [Ghost](https://ghost.org/) and is built on EmberJS with fully working out of the box SEO friendly output.

## Features

- Fast no-reload page changes
- No web-development skills required to get up and running
- Uses Markdown to author content
- RSS implementation
- Automatic image resizing
- Built on Ember and uses ember-cli, the best frontend cli on the market right now!

## Templates

empress-blog supports the use of shallow forks of Ghost themes and currently supports

- [empress-blog Casper Template](https://github.com/empress/empress-blog-casper-template) which is a shallow fork of the official [Casper Template](https://github.com/TryGhost/Casper)
- [empress-blog Attila Template](https://github.com/empress/empress-blog-attila-template) which is a shallow fork of [Attila](https://github.com/zutrinken/attila)

As Ghost uses handlebars it is not too difficult to port an existing template to use Ember templates.

We now support a Template Generator that allows you to get started very quickly with a barebones template based on the Ghost Starer template. To find out more check out the [documentation for create-empress-blog-template](https://github.com/empress/create-empress-blog-template#create-empress-blog-template).

## Examples

The default output can be seen deployed on Netlify here: https://empress-blog.netlify.com/

If you want an example of the this "in production" then check out the [Stone Circle
Blog](https://blog.stonecircle.io). If you use this in production let us know [on
Twitter](https://twitter.com/stonecircle_co) and we can add a "built with
empress-blog-casper-template" wiki.

You do not need to be a web developer to be able to use this system. You just write markdown files
and the rest of the work is performed by EmberJS' build system.
