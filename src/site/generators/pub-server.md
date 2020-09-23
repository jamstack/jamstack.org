---
title: pub-server
repo: jldec/pub-server
homepage: http://jldec.github.io/pub-doc/
language:
  - JavaScript
license:
  - MIT
templates:
  - Handlebars
description: static HTML generator + editor with npm-based themes
---

## pub-server

**pub-server**, or **pub** for short is an HTML generator+editor entirely written in javascript.

The generator+editor can run in-browser, providing a serverless-CMS for non-technical users to edit markdown _source_ text fragments, and instantly preview the generated HTML, without first having to install pub-server themselves.

When you publish onto a static hosting service like [**netlify**](https://www.netlify.com/), you can include the generator+editor together with the published HTML.

To see this in action, check out the docs at http://jldec.github.io/pub-doc/. The editor appears when you click on the [edit](http://jldec.github.io/pub-doc/pub/?page=%2F) button at the top right.
Feel free to play around - in this instance, your changes will not be recorded.

Other examples include a [presentation theme](https://github.com/jldec/pub-sample-deck), a [flexbox design](https://github.com/jldec/pub-theme-brief), and a [blog](http://blog.pubblz.com/).

### installation

running **pub-server** locally requires node.js.

```sh
npm install -g pub-server
```

OSX and Linux are working, Windows support is coming - PRs welcome.

### usage

- `pub` (with no options) serves `*.md` in the current directory or looks for a `pub-config.js`. The default theme is useful for previewing Github README.md files. The server will watch for changes and update http://localhost:3001/ whenever markdown files or CSS or other static files are saved.

- `pub -O` generates .html and other static files (including generator + editor) to `./out`.

- `pub -S <dir>` serves static files from any directory. It will mimic the behavior of Github Pages, looking for index.html files in folders, and redirecting from /folder-name to /folder-name/

- `pub -h` shows usage summary.
