---
title: Rosid
repo: electerious/Rosid
homepage: http://rosid.electerious.com/
language:
  - JavaScript
license:
  - MIT
templates:
  - Any JS
description: Just-in-time development server and static site exporter.
---

Just-in-time development server and static site exporter written in Node.js. Rosid invokes functions before serving files to the browser. This allows you to pre-process anything on-the-fly, without saving it.

### What is Rosid?

Rosid is a framework that focus on two features:

1. A **development server with live-reloading**, which transforms files as soon as you request them.
2. A **static site generator**, which transforms files using defined transform-functions.

### Why Rosid?

- It doesn't force you to use a defined directory structure
- It's build on popular modules like [Browsersync](https://www.browsersync.io)
- It integrates nicely with tools you are are already using to transform your files (e.g. [Gulp](http://gulpjs.com), [Grunt](http://gruntjs.com) or Vanilla JS)
- It's lightweight and only includes what it really needs
- Transformed files don't need to be saved along their source files
- It lets you compile code to static files to host them anywhere

### How does it work?

Rosid starts a server and compares requested URLs with user-defined patterns. A associated file handler will be executed when a pattern matches. The handler receives information about the request and can transform the file, which will be send to the browser.
