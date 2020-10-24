---
title: elm-starter
repo: lucamug/elm-starter
homepage: https://elm-starter.guupa.com/
language:
  - Elm
license:
  - BSD-3-Clause
templates:
  - Elm
startertemplaterepo: https://github.com/lucamug/elm-starter
description: An Elm-based bootstrapper for Elm applications that supports server side rendering
---

`elm-starter` is an Elm-based Elm bootstrapper that can also be plugged into already existing Elm applications.

# Characteristics

* Generate a PWA (Progressive Web Application)
* Mostly written in Elm
* Pages are pre-rendered at build time
* Works offline
* Works without Javascript(\*)
* SEO
* Preview cards (Facebook, Twitter, etc.) work as expected
* Installable both on desktop and on mobile
* High score with Lighthouse
* Friendly notifications: "Loading...", "Must enable Javascript...", "Better enable Javascript..."
* Potentially compatible with all Elm libraries (elm-ui, elm-spa, etc.)
* Hopefully relatively simple to use and maintain
* Works with Netlify, Surge, etc.

# Install

```
$ git clone https://github.com/lucamug/elm-starter
$ mv elm-starter my-new-project
$ cd my-new-project
$ rm -rf .git
$ npm install
```

# Develop

```
$ npm start
```

# Build

```
$ npm run build
```
