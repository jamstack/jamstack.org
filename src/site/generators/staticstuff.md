---
title: ARFR
repo: javimosch/staticstuff
homepage: https://github.com/javimosch/arfr
language:
  - JavaScript
license:
  - Apache-2.0
templates:
  - Handlebars
description: Generates simple static web content blazing fast using handlebars templates.
---

## ARFR

ARFR let you develop static web sites faster.

### Features

- Watch and Compiles a folder tree recursively preserving the structure using handlebars.
- Handlebars support
- ftp deploy
- live preview sync (firebase)

### How it works

- Compiles in memory handlebars partials files from partials folder. (Use the partial with name of the file without ext. Ex: partials/myproject1/sections/prj1-head.html becomes {{> prj1-head}} )

- Copy (compiles) handlebars files from templates folder. (preserves the folder structure). Ex: If you have templates/index.html and templates/aboutus/index.html (both using handlebars syntax), the output will be the same, it only compiles the content.

- Handlebars compilation errors do not break the node proccess.

- Copies css from css folder to the output folder slash css. (preserves structure)

- Custom json or js handlebars data load for using as context.

- Every time a watch (on scripts, styles and templates) emits a build success event, a signal is sent to a firebase database. If your has the firebase reloading snippet (a handlebars partial), your browser will reload automatically.
