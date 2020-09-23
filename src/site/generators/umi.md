---
title: UmiJS
repo: umijs/umi
homepage: https://umijs.org
language:
  - JavaScript
license:
  - MIT
templates:
  - React
description: Pluggable enterprise-level react application framework
---

## Features

- 📦 **Out of box**, with built-in support for react, react-router, jest, webpack, rollup, etc.
- 🏈 **Next.js like and [full featured](https://umijs.org/guide/router.html) routing conventions**, which also supports configured routing
- 🎉 **Plugin system**, covering every lifecycle from source code to production
- 🚀 **High performance**, including PWA support, route-level code splitting, etc.
- 💈 **Support for static export**, Suitable for environments without server
- 🚄 **Fast dev startup**, including [dll](https://umijs.org/plugin/umi-plugin-react.html#dll) support with config etc.
- 🐠 **Polyfill solution**, add JS and CSS polyfill with [targets](https://umijs.org/config/#targets) config, lowest to IE9
- 🍁 **Support TypeScript**, including d.ts definition and `umi test`
- 🌴 **Deep integration with [dva](https://dvajs.com/)**, including duck directory support, automatic loading of model, code splitting, etc
- ⛄️ **Support MPA**，based on [umi-plugin-mpa](https://github.com/umijs/umi-plugin-mpa)

## Install

Install tool

```sh
$ yarn global add umi # OR npm install -g umi
```

## Build

Create a page

```sh
$ mkdir myapp && cd myapp
$ umi generate page index
```

## Run

Start the development server

```sh
$ umi dev
```

Build and deploy

```sh
$ umi build
```

## Examples

- [Ant Design Pro](https://github.com/ant-design/ant-design-pro)
- [Antd Admin](https://github.com/zuiidea/antd-admin)
