---
title: Waffel
repo: moonwave99/waffel
homepage: http://moonwave99.github.io/waffel/
language:
  - JavaScript
license:
  - MIT
templates:
  - Nunjucks
description: Static site generation done tasty.
---

![Waffel](https://moonwave99.github.io/waffel/images/waffel.svg)

I built Waffel because I missed a JavaScript static generator that featured:

- content localisation for different languages;
- grouping of entities by properties (categories/tags);
- pagination of collections;
- ease of writing custom template filters/helpers.

Check the [brunch-with-waffel](https://github.com/moonwave99/brunch-with-waffel) skeleton in order to run a local example.

## Philosophy

**Waffel** was born as a simple script to generate [my website](http://www.diegocaponera.com/) and a couple of [other](http://www.shoegaze.it/) [pages](http://www.dreampop.it/), and eventually my company's homepage. I thought it was worth releasing, basically because I plan to reuse it a lot in the close future, best as a companion to a content management tool I hope to release very soon.

I think that having a full web stack for a blog/portfolio/small business showcase site is really an overkill today: you need a lot of services running in order to serve content, you will be the very only one to change in a deterministic way.
Now that all our pathetic `comments.php` efforts have been teared apart by Disqus/social commenting facilities, why should we store our thoughts in a database, instead of on good ol' text files, editable in the way we find more comfortable?
