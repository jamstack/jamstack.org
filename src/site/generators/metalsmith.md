---
title: Metalsmith
repo: segmentio/metalsmith
homepage: http://www.metalsmith.io/
language:
  - JavaScript
license:
  - MIT
templates:
  - Handlebars
  - Any JS
description: An extremely simple, pluggable static site generator.
startertemplaterepo: https://github.com/andreasvirkus/metalsmith-boilerplate
---

An extremely simple, _pluggable_ static site generator.

In Metalsmith, all of the logic is handled by plugins. You simply chain them together.

### How does it work?

Metalsmith works in three simple steps:

1. Read all the files in a source directory.
2. Invoke a series of plugins that manipulate the files.
3. Write the results to a destination directory!

Each plugin is invoked with the contents of the source directory, and each file can contain YAML front-matter that will be attached as metadata, so a simple file like...

    ---
    title: A Catchy Title
    date: 2014-12-01
    ---

    An informative article.

...would be parsed into...

```js
{
  'path/to/my-file.md': {
    title: 'A Catchy Title',
    date: new Date('2014-12-01'),
    contents: new Buffer('An informative article.')
  }
}
```

...which any of the plugins can then manipulate however they want. And writing the plugins is incredibly simple, just take a look at the [example drafts plugin](https://github.com/segmentio/metalsmith-drafts/blob/master/lib/index.js).

Of course they can get a lot more complicated too. That's what makes Metalsmith powerful; the plugins can do anything you want!

### The secret...

We keep referring to Metalsmith as a "static site generator", but it's a lot more than that. Since everything is a plugin, the core library is actually just an abstraction for manipulating a directory of files.
