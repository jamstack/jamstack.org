---
title: Simplified Saaze
repo: eklausme/saaze
homepage: https://eklausmeier.goip.de/blog/2021/10-31-simplified-saaze/
language:
  - PHP
license:
  - MIT
templates:
  - PHP
description: An easy-to-use generator supporting MathJax and other embeds, faster than Hugo and Zola
twitter: eklausmeier
startertemplaterepo: https://github.com/eklausme/saaze-example
---

_Simplified Saaze_ is a static site generator. I.e., it takes Markdown files as input and generates fixed HTML files. _Simplified Saaze_ is a simplified version of [Saaze](https://saaze.dev) from [Gilbert Pellegrom](https://gilbitron.me). Large parts of this document are taken from the [Saaze documentation](https://saaze.dev/docs). _Simplified Saaze_ is roughly 90% compatible with Saaze. _Simplified Saaze_ is built on below principles.

__1. Easy to run.__ _Simplified Saaze_ is built in PHP with some small parts in C. PHP is roughly used by 80% of all web-sites on the internet. _Simplified Saaze_ needs _no_ other PHP framework and only one PECL library.

__2. Easy to host.__ Static sites are great for being fast and easy to deploy. However, sometimes you need dynamic aspects to your site (e.g., contact forms, custom scripts, etc). _Simplified Saaze_ gives you the choice depending on what makes most sense.

__3. Easy to edit.__ Markdown has become the de-facto way to edit content for the internet. It's simple to understand and write. So _Simplified Saaze_ uses Markdown with a sprinkle of Yaml frontmatter to manage your content.

__4. Easy to theme.__ _Simplified Saaze_ uses plain PHP/HTML to theme. Any PHP code is a valid theme and can be checked with `php -l`.

__5. Fast and secure.__ _Simplified Saaze_ works with ordinay files in your filesystem. No database required. This means less setup and maintenance, better security and more speed. Generating static files is faster than Hugo or Zola by a [factor](https://eklausmeier.goip.de/blog/2021/11-13-performance-comparison-saaze-vs-hugo-vs-zola/), it is therefore faster than Eleventy by an order of magnitude.

__6. Simple to understand.__ _Simplified Sazze_ deliberately has a stupidly simple architecture: Everything is a collection of entries. Pages, posts, docs, recipes, whatever. It all works in the same, simple way. Supports multiple blogs under the same URL out of the box.

__7. All-inclusive.__ Developing your site should be painless. No external tools required.

_Simplified Saaze_ defines some special tags for various social media. Furthermore, [MathJax](https://www.mathjax.org) is fully supported.

Nr | Function        | Syntax                     | Example
---|-----------------|----------------------------|---------
 1 | YouTube         | `[youtube] xxx [/youtube]` | `[youtube]nvlAW6P5PmE[/youtube]`
 2 | Vimeo           | `[vimeo] xxx [/vimeo]`     | `[vimeo]126529871[/vimeo]`
 3 | Twitter         | `[twitter] xxx [/twitter]` | `[twitter]https://twitter.com/eklausmeier/status/1352896936051937281[/twitter]`
 4 | CodePen         | `[codepen] user/hash [/codepen]` | `[codepen] thebabydino/eJrPoa [/codepen]`
 5 | WordPress Video | `[wpvideo] code w=x h=y ]` | `[wpvideo RLkLgz2V w=400 h=224]`
 6 | [Mermaid](https://mermaid-js.github.io/mermaid)         | `[mermaid] xxx [/mermaid]`, where xxx is the Mermaid code | `[mermaid]flowchart LR Start --> Stop[/mermaid]`
 7 | Inline math     | `$ formula $`              | `$a^2+b^2=c^2$`
 8 | Display math    | `$$ display formula $$`    | `$$ \int_1^\infty {1\over x^2} $$`




