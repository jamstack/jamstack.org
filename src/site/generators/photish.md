---
title: Photish
repo: henrylawson/photish
homepage: https://github.com/henrylawson/photish
language:
  - Ruby
license:
  - MIT
templates:
  - Slim
description: Fast, simple, configurable photo portfolio website generator.
---

Photish is a simple, convention based (but configurable) static photo site generator. Photish allows you to group your photo collections by folder. Metadata can be written alongside the photo in a [YAML](http://yaml.org/) file with the same name as the photo.

Photish will crawl through your directory of photos and metadata, and render the information in your website templates. Photish supports all template engines implemented by [Tilt](https://github.com/rtomayko/tilt) (currently over 30 formats). It will also read your configuration and automatically convert your images to your configured size, dimensions, colourscheme, etc using [ImageMagick](http://www.imagemagick.org/script/index.php). Using this information, Photish creates a complete static website that can be hosted on an [NGINX](http://nginx.org/), [Apache HTTP Server](https://httpd.apache.org/), or even on [Github Pages](https://pages.github.com/).

Photish has been created with speed and efficiency in mind. Threads are used to parallelize image transcoding to achieve maximum utilization of your CPU during generation. A cache file is then used to ensure that unless the image has changed, it is not needlessly regenerated. This results in a responsive and fast local development environment, making it easy to perfect the design of your photo based website without having to wait for regeneration.
