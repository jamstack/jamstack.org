---
title: Cleaver
homepage: https://usecleaver.com/
repo: aschmelyun/cleaver
language:
  - PHP
license:
  - MIT
templates:
  - Blade
description: A blazing-fast static site generator using Laravel's Blade templating engine
---

Cleaver is a fast and simplistic static site generator written in PHP and using Laravel's Blade templating engine.

Content is organized in a single directory whose internal structure doesn't reflect the rendered site's. Instead, the final page path is determined by a variable in each content file.

Cleaver makes use of either Markdown files for content-heavy pages, or JSON files for more data-driven sites.

Each moderately-sized page on a website renders on average in two-digit milliseconds.

## Installation

`composer create-project aschmelyun/cleaver`

## Usage

`npm install`  
`npm run dev`  
`npm run production`
