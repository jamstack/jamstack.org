---
title: BookGen
repo: webmaster442/BookGen
homepage: https://github.com/webmaster442/BookGen
language:
  - C#
license:
  - MIT
templates:
  - HTML
description: A static site generator inspired by the GitBook toolchain.
---

[BookGen](https://github.com/webmaster442/BookGen) is a command line toolchain for writing books and documentation in markdown. It was inspired by GitBook. 

It is designed to be cross platform, but It's developed and tested under Windows. It features a web based, cross platform Markdown editor.

# Features

- Written in C#, targets .NET Core 3.1
- Extremely fast, compared to GitBook and other NodeJs stuff
- It hasn't got a template engine, so you don't have to learn a new template language. However it's extendable via shortcodes, like wordpress
- Can be extended with Scripting API
- Can be extended with NodeJs Scripts
- Many output formats: 
    - Static website with Bootstrap template
    - Printable or Word processor importable plain HTML
    - EPub v. 3.0
    - Wordpress compatible XML export file
