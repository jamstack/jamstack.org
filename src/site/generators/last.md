---
title: Last
repo: franzwilding/last
homepage: https://github.com/franzwilding/last
language:
  - PHP
license:
  - MIT
templates:
  - Twig
  - PHP
  - Any Symfony
description: Zero Configuration, Static Site Generator for any Symfony project.
---

Last is a minimalistic static site generator for Symfony 4 applications. Once installed, Last provides a command that will simply create requests for all of your routes and dumps the result as a static file to a dist folder.

## Install

Just add it to your existing symfony application and you are good to go!

```sh
composer require fw/last-bundle
```

## Build

Thats it! No configuration needed, just dump your Symfony application to ./dist

```sh
bin/console last:dump
```

## More advanced applications

Last can also handle more advanced applications with dynamic routes and more
complex stuff. Please see the [Github Repo](https://github.com/franzwilding/last) repo for more information.
