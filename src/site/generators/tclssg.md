---
title: Tclssg
repo: tclssg/tclssg
homepage: https://github.com/tclssg/tclssg
language:
  - Tcl
license:
  - MIT
templates:
  - Custom
description: A static site generator that uses Tcl for both code and templates.
---

Tclssg is a static site generator written in Tcl that uses Markdown for content markup, Bootstrap for layout (with Bootstrap theme support) and Tcl code embedded in HTML for templating.

### Features

- Markdown, Bootstrap themes, Tcl templates;
- Distinguishes between plain old pages and blog posts;
- RSS feeds;
- SEO and usability features: sitemaps, canonical and previous/next links, `noindex` where appropriate.
- Valid HTML5 and CSS level 3 output;
- Deployment over FTP;
- Deployment over SCP and other protocols with a custom deployment command;
- Support for external comment engines;
- Relative links in the HTML output that make it suitable for viewing over _file://_;
- Reasonably fast (can process 500 input pages into 650 HTML files in about 35 seconds on a laptop with an SSD);
- Few dependencies.
- Can be used as a library from Tcl.

### Page example

```markdown
{
title {Test page}
blogPost 1
tags {test {a long tag with spaces}}
date 2014-01-02
hideDate 1
}
**Lorem ipsum** reprehenderit _ullamco deserunt sit eiusmod_ ut minim in id
voluptate proident enim eu aliqua sit.

<!-- more -->

Mollit ex cillum pariatur anim [exemplum](http://example.com) tempor
exercitation sed eu Excepteur dolore deserunt cupidatat aliquip irure in
fugiat eu laborum est.
```
