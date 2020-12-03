---
title: Weaver
repo: davidsiaw/weaver
homepage: https://davidsiaw.github.io/weaver-docs
language:
  - Ruby
license:
  - MIT
templates:
description: A simple DSL-based web generator
---

## About

Weaver is a simple Ruby-based DSL that allows you to create a static website using Ruby code and has shortcuts for many bootstrap idioms and jquery plugins.

It uses Sinatra to allow you to preview your site as you change it, and then lets you build it for deploying.

Take advantage of being able to use Ruby to generate your blog, search page, listing, basically anything you would do in a static website!

## How to use

Simply install weaver using `gem install weaver`

Then, `weaver create my-site`

Then, `cd my-site && bundle install && bundle exec weaver`

And then view your site at `http://localhost:4567`

Once you are done, `bundle exec weaver build` to generate your website's code into the `build` directory and copy it to your static host or CDN!

## Philosophy

Weaver tries to make writing rich static websites as easy and predictably possible by using a DSL. Images are stored in a special images folder because images are quite special, freeing you from constantly copy pasting the directory structure. Generating code should be as painless as possible, and even making forms should be easy. The weaver documentation is written in weaver itself.
