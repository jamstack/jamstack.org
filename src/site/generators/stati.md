---
title: Stati
repo: jfoucher/stati
homepage: https://stati.jfoucher.com
language:
  - PHP
license:
  - MIT
templates:
  - Liquid
description: Stati is an extensible PHP static site generator that can work with existing Jekyll sites.
---

Stati is an extensible PHP static site generator that can generate your existing Jekyll sites.

Jekyll is one of the most popular static site generator, but unfortunately for those of
us not proficient in ruby, it cannot be extended that easily.

Stati solves that, with it's clear plugin architecture based on the Symfony Event Dispatcher component, your plugin can hook
at various points in the site generation lifecycle to modify the output any way you can dream of.

Built on Symfony components, it is robust, and while not as fast as Jekyll, it should be bearable for most purposes.

This is still at an early stage of develompent, but it should already be able to build most Jekyll sites.
