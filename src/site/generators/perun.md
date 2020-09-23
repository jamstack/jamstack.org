---
title: Perun
repo: hashobject/perun
homepage: https://perun.io/
language:
  - Clojure
license:
  - EPL-1.0
templates:
  - Hiccup
description: Composable static site generator build with Clojure and Boot
---

Simple, composable static site generator inspired by [Boot](http://boot-clj.com/) task model and [Metalsmith](http://www.metalsmith.io/).
Perun is a collection of Boot tasks/plugins that you can chain together and build something custom that suits your needs.

## Plugins system

Everything in Perun is build like independent task. The simplest blog engine will look like:

```clojure
(deftask build
  "Build blog."
  []
  (comp (markdown)
        (render :renderer renderer)))

```

But if you want to make permalinks, generate sitemap and rss feed, hide unfinished posts, add time to read to each post then you will do:

```clojure
(deftask build
  "Build blog."
  []
  (comp (markdown)
        (draft)
        (ttr)
        (slug)
        (permalink)
        (render :renderer renderer)
        (sitemap :filename "sitemap.xml")
        (rss :title "Hashobject" :description "Hashobject blog" :link "http://blog.hashobject.com")
        (atom-feed :title "Hashobject" :subtitle "Hashobject blog" :link "http://blog.hashobject.com")
        (notify)))
```

## 3d-party plugins

There are plenty of Boot plugins that can be useful in the when you are using perun:

- [boot-http](https://github.com/pandeiro/boot-http) - serve generated site locally using web server
- [boot-gzip](https://github.com/martinklepsch/boot-gzip) - gzip files
- [boot-s3](https://github.com/hashobject/boot-s3) - sync generated site to the Amazon S3
- [boot-less](https://github.com/Deraen/boot-less) - task to compile Less to CSS
- [boot-sassc](https://github.com/mathias/boot-sassc) - task to compile Sass to CSS
- [boot-garden](https://github.com/martinklepsch/boot-garden) - task to compile Garden stylesheets to CSS
- [boot-autoprefixer](https://github.com/danielsz/boot-autoprefixer) - add vendor prefixes to your CSS
- [boot-reload](https://github.com/adzerk-oss/boot-reload) - live-reload of browser css, images, etc.
