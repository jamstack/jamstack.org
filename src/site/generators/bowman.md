---
title: Bowman
repo: waldronmatt/bowman
homepage: https://waldronmatt.github.io/bowman/
language:
  - JavaScript
license:
  - MIT
templates:
  - EJS
description: A simple static site generator with an integrated toolchain for efficient development and delivery.
---

Bowman is a simple static site generator powered by Node.js, Webpack, and Browsersync. Bowman comes with pre-configured scripts to bundle assets, generate markup, and hot-reload pages. Pages are generated using the J.E.N. technology core (JSON - data, EJS - templating, Node.js - markup generation).

## Features

- Recursively generates page markup
- Recursively finds and outputs entry points
- Hot reloading of pages and assets
- Asset bundling, cache prevention, and code splitting support

## Getting Started

Install globally:

        npm i -g @waldronmatt/bowman

Create project:

       create-bowman-starter -y
        
Install dependencies:

        npm install

Run dev environment:

        npm run dev

Build and serve for production:

        npm run build
