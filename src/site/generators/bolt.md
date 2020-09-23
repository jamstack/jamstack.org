---
title: Bolt
repo: argyleink/bolt
homepage: http://argyleink.github.io/Bolt
language:
  - JavaScript
license:
  - MIT
templates:
  - Jade
  - Any JS
description: ⚡ is a fast, organized, mobile first Grunt seed project for fast static apps.
---

### Why use Bolt?

1. Dev builds are extremely legible, source mapped, and ready for debugging with your tools `grunt`
1. Production builds squish the crap out [images,css,html,js,svg] `grunt --prod`
1. Dev and Prod builds have their own output directory, they don't share a `dist/` folder
1. Very fast concurrent Grunt builds with jit a plugin for really fast watch task running
1. Concise [Grunt main file](https://github.com/argyleink/Bolt/blob/master/gruntfile.coffee)
1. [Grunt tasks](https://github.com/argyleink/Bolt/tree/master/tasks) are individual, short, easy as hell to read
1. [Configuration file](https://github.com/argyleink/Bolt/blob/master/app.coffee) keeps project assets and plugins centralized
1. Bower libs go straight into jade and stylus for you
1. [BrowserSync](http://www.browsersync.io) dev server syncs all your clicks, scrolls, and more during development
1. BrowserSync live reload and hot css pushes for really rad fast front end crafting
1. BrowserSync Weinre remote inspect built in
1. Externally accessible server
1. Proper [Jade inheritance](https://github.com/paulyoung/jade-inheritance) compilation, so 1 file changed doesn't require the whole project to compile
1. [Auto generated](https://github.com/argyleink/Bolt/blob/master/tasks/manifest.coffee) HTML5 appcache for production builds
1. Autoprefixed stylus
1. 2 powerful stylus mixin libraries [Nib](https://github.com/stylus/nib) and [Axis](http://axis.netlify.com) (will never bloat your file with crap you aren't using)
1. Git tagging and releasing `grunt bump`
1. Easily create custom [build notifications](https://github.com/argyleink/Bolt/blob/master/tasks/notify.coffee)
1. Customize your crunched files comment banner
1. Ready to run custom [shell commands](https://github.com/argyleink/Bolt/blob/master/tasks/shell.coffee)
1. Concurrent image crunching
1. [Sublime project file](https://github.com/argyleink/Bolt/blob/master/app.sublime-project) for easy project editing and standards establishment
1. Grunt [Heroku](https://github.com/argyleink/Bolt/wiki/Deployments) task for easy CI integration `grunt heroku`
1. [CLI](https://github.com/argyleink/Bolt-cli) for easy setup of new projects `bolt new my_app`

## Goal

Offer a FAST, Grunt based, rather un-opinionated build system. Use it for whatever. The project seed I've made here is a cache heavy, smart loading, mobile first, front end static site project for ya. It comes with [Jade](http://jade-lang.com/) & [Stylus](http://learnboost.github.io/stylus/) as defaults, but swap it for whatever you want, easily. Or want more than 1 preprocessor, it's ready. At the end of the day, it's [Grunt](http://gruntjs.com/), do whatever you want.

This project's default setup is for creating static sites to be hosted somewhere on the web. This could be a webview hybrid app, single page app, marketing site, who cares. This tool comes with all the tips, tricks, meta data, and automated tasks that help you build quick and efficient front ends across browsers.
