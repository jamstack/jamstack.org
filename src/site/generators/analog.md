---
title: Analog
repo: analogjs/analog
homepage: https://analogjs.org/
language:
  - TypeScript
license:
  - MIT
templates:
  - Angular
description: Analog is a fullstack meta-framework for building applications and websites with Angular
twitter: analogjs
---

Analog is a fullstack meta-framework for building applications and websites with Angular, powered by Vite.

## Features

- Hybrid SSR/SSG support
- File-based routing
- Support for using markdown as content routes
- Support for API/server routes

## Configuration

SSR and SSG can be enabled in the `vite.config.ts` using the `analog()` plugin.

```javascript
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [analog({
    ssr: true,    // enables server side rendering
    static: true, // enables static site generation
    prerender: {  // configure routes to be rendered at build time
      routes: async () => [
        '/',
        '/about',
        '/blog',
        '/blog/posts/2023-02-01-my-first-post',
      ],
    },
  })],
}));
```