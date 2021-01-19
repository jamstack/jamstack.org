---
title: Statiq
repo: statiqdev/Statiq.Web
homepage: https://statiq.dev/web/
language:
  - .Net
license:
  - Prosperity Public License
templates:
  - Razor
  - Markdown
description: Statiq Web is a flexible static site generator written in .NET
---


Statiq Web is a powerful static web site generation toolkit suitable for most use cases. It's built on top of [Statiq Framework](https://statiq.dev/framework/) so you can always extend or customize it beyond those base capabilities as well.

Statiq is powerful because it combines a few simple building blocks that can be rearranged and used in limitless combinations. Think of it like LEGO® for static generation.

* Content and data can come from a variety of sources including **input files**, **databases**, and **services**.
* [Documents](https://statiq.dev/framework/documents/) are created that each contain **content** and **metadata**.
* The documents are processed by [pipelines](https://statiq.dev/framework/pipelines/).
* Each pipeline consists of one or more [modules](https://statiq.dev/framework/pipelines/modules/) that manipulate the documents given to it by transforming, aggregating, filtering, or producing entirely new documents.
* The final output of each pipeline is made available to other pipelines and may be written to output files or deployed to hosting services.


### Templating Choice

Different types of content require different types of templates, and Statiq has you covered with support for Markdown and Razor (along with plain HTML) with more languages like Handlebars/Mustache and Liquid coming soon.

### Data Agility

Statiq understands a variety of data formats like YAML, JSON, and XML and is designed to plug any data format into any usage. From data files to front matter use the data format you're most comfortable in.

### Ultimate Flexibility

Statiq is designed from the ground up to provide a simple and easy "happy path" through applications like [Statiq Web](https://statiq.dev/web/) while providing complete control when needed by extending them or using the full [Statiq Framework](https://statiq.dev/framework/). You shouldn't have to compromise your vision because of your static generator.

### Deployment Built-In

What good is awesome tooling if figuring out how to deploy your site is a pain in the neck? Statiq comes with deployment capabilities built-in for popular scenarios such as Netlify and Azure App Service with GitHub Pages, AWS, and others coming soon.
