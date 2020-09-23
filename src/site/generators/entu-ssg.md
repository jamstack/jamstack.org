---
title: Entu SSG
repo: entu/ssg
homepage: https://ssg.entu.app
language:
  - JavaScript
license:
  - MIT
templates:
  - Pug
  - Markdown
  - Stylus
description: A simple Pug, Markdown, Yaml static site generator with multi-locale support.
---

Entu SSG is a simple Pug, Markdown, Yaml static site generator with multi-locale support.

## Benefits

- Simple Pug (former Jade), Markdown, Yaml static site generator.
- Generate static HTML files from [Pug](https://pugjs.org) templates or [Markdown](https://en.wikipedia.org/wiki/Markdown).
- Pass data to templates with [Yaml](http://yaml.org) files.
- Use locale identificator in filenames to generate locale specific content and paths.
- Generate site CSS from [Stylus](http://stylus-lang.com) files.
- Use Your favorite tools/editors.
- Host it on Your own server, on [Netlify](https://www.netlify.com), on [S3](https://aws.amazon.com/s3/), on ...

## Installation and usage

1. Download [latest build](https://github.com/entu/entu-ssg/releases/latest)
2. Run:

```
    ./build.js ./my-page/entu-ssg-config.yaml
```

### Configuration

Sites build process is configurable by Yaml file and its path must be first argument for entu-ssg.js. Required parameters are:

- **locales** - List of locale folders to generate. You can put locale identificator to filename (like index.en.pug or data.et.yaml) for locale speciffic content.
- **defaultLocale** - If set, page paths in this locale will not get locale prefix (_/en/about_ will be just _/about_).
- **source** - Folder with source files (realtive to build config.yaml). Folders beginning with underscore are ignored.
- **build** - Folder to put generated HTML (realtive to build config.yaml).
- **assets** - Folder with static assets (JS, images, ...).
- **protectedFromCleanup** - List of paths what is not deleted if _build.sh_ is ran with _cleanup_ parameter. Relative to _build_ path.
- **server.port** - What port to use for serving on localhost.
- **server.assets** - Serving page in localhost will map this url to folder specified in _assets_ parameter.
- **dev.aliases** - Build pages aliases.
- **dev.paths** - List of (source) paths to build. Relative to _source_ path.

### Example build configuration file:

```
locales:
  - en
  - et
source: ./source
build: ./build
assets: ./assets
protectedFromCleanup:
  - assets
  - index.html
server:
  port: 4000
  assets: /assets/
dev:
  aliases: true
  paths:
    - test/page1
    - test/page2
```

## Content

### Page content - index.pug

Page content is generated from **index.pug** file. All other files are ignored, but You can use those files for Pug [include](https://pugjs.org/language/includes.html)/[extends](https://pugjs.org/language/inheritance.html). You can put locale identificator to filename (like index.en.pug) for locale speciffic content.

### Page data and configuration - data.yaml

To pass data to index.pug use **data.yaml** file. This data is passed to index.pug in object named _self_ (To get property _text_ from data.yaml use _self.text_ in index.pug).

You can put locale identificator to filename (like data.en.yaml) for locale speciffic content.

Some page parameters will change how HTML is generated. Those are:

- **disabled** - If true, page will not be generated nor loaded to _self.otherLocalePaths_ object.
- **path** - If set, it will override folder based path.
- **aliases** - List of path aliases. Will make redirekt urls to original path.
- **data** - Files to load data from. This data is passed to index.pug in object named _self.data_. You can use relative path (./ or ../). If used, it's relative to _data.yaml_ file. Root (/) path is Your source folder (set in _config.yaml_).

### Example page data.yaml:

```
path: /testpage1
aliases:
  - /test
  - /test123
data:
  news: ./datafiles/news.yaml
someOtherData:
  - A
  - B
```

### Page style - style.styl

To generate page CSS use **.styl** files. Global style.css is combined from all .styl files (from source folder) and saved to build's root folder (like /style.css).

### Page scripts - script.js

To generate page JS use **.js** files. Global script.js is combined from all .js files (from source folder) and saved to build's root folder (like /script.js).

## On build ...

### ... source folder like this ...

```
- source
    |- _templates
    |   |- layout.pug
    |   |- mixins.pug
    |   +- somescripts.js
    |
    |- testpage1
    |   |- data.en.yaml
    |   |- data.et.yaml
    |   |- index.pug
    |   +- style.et.styl
    |
    |- testpage2
    |   |- index.en.pug
    |   |- index.et.pug
    |   |- data.yaml
    |   +- testpage2en
    |       |- index.en.pug
    |       +- data.en.yaml
    |
    |- index.pug
    +- style.styl
```

### ... will be converted to build folder like this

```
- build
    |- en
    |   |- index.html
    |   |- testpage1
    |   |   +- index.html
    |   |
    |   +- testpage2
    |       |- index.html
    |       +- testpage2en
    |           +- index.html
    |
    |- et
    |   |- index.html
    |   |- testpage1
    |   |   +- index.html
    |   |
    |   +- testpage2
    |       +- index.html
    |- script.js
    |- script.js.map
    |- style.css
    +- style.css.map
```
