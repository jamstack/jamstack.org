---
title: Stapy
homepage: https://www.stapy.net
language:
  - Python
license:
  - BSD-2-Clause
templates:
  - HTML
description: A Static Site Generator that can generate a Website without a command line.
---
# Presentation

Stapy works with Python on any operating system without additional packages.

Download the last release archive, extract it and launch the server to start editing the website.

- A Windows user can serve and build a site without a command line.
- Generate the site for multiple environments: production, development, preview...
- Page data is stored in JSON format.
- Include variables and blocks anywhere with simple template syntax.
- Plugins allow to write Python code for rendering blocks.
- You are free to use the frontend technologies you like!

# Templating

```html
<!-- Display var -->
{{ title }}

<!-- Include block -->
{% block.header %}

<!-- Include block with arguments -->
{% block.author firstname:"John" lastname:"Doe" %}

<!-- Include block with specific page data -->
{% block.article + blog/my-first-post.html %}

<!-- Loop on block with JSON query -->
{% block.article ~ tags:post date:desc 1:10 %}

<!-- Plugin rendering -->
{: date.current_date format:"%m/%d/%Y %H:%M" :}
```