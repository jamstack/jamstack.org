---
disabled: true
# Repo no longer exists, overriding the tags will opt out of listing
tags: []
title: simple-website
repo: alexanderte/simple-website
homepage: https://github.com/alexanderte/simple-website
language:
  - Go
license:
  - MIT
templates:
  - Markdown
description: simple-website is a static site generator written in Go
---

simple-website is a static site generator written in Go. It takes Markdown as input, and gives you a static, simple, and responsive website as output. Posts and pages are supported.

simple-website has been designed with technical simplicity and readability in mind – there are no configuration options and no themes to choose from. The workflow is simple – initialize a website using `simple-website`, create and/or edit Markdown files, run `simple-website` again – and publish.

## Get it

    go get github.com/alexanderte/simple-website

## Initialize website

    mkdir title-of-website
    cd title-of-website
    $GOPATH/bin/simple-website

## Create content

    $EDITOR _sections/header.md
    $EDITOR _posts/YYYY-MM-DD-title-of-post.md
    $EDITOR _pages/title-of-page.md

## Regenerate

    $GOPATH/bin/simple-website

## MIT License

Copyright © 2018 Alexander Teinum

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
