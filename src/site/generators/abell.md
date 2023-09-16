---
title: Abell
repo: abelljs/abell
homepage: https://abelljs.org
language:
  - JavaScript
license:
  - MIT
templates:
  - Abell
description: A Low Level, Framework Agnostic, Vite powered Static Site Generator for JavaScript Developers
twitter: AbellLand
startertemplaterepo: https://github.com/abelljs/abell-starter-minima
---

Abell is a low-level static-site-generator built on top of Vite to give high flexibility while keeping the setup closer to vanilla HTML, CSS, JS

### Installation

You can boilerplate a starter template using `create-abell`

```sh
npx create-abell my-blog --template abelljs/abell-starter-minima

cd my-blog

npm run dev
```

And tada 🎉 You will have a live server running.


### Hello World in Abell

With Abell, you can write JavaScript inside HTML. This gets executed on build time.

**Input:**
```html
{{
  /** @declaration */
  const greet = 'Hello, World!';
}}
<html>
  <body>{{ greet.toUpperCase() }}</body>
</html>
```

**Output:**
```html
<html>
  <body>HELLO, WORLD!</body>
</html>
```


Check out https://abelljs.org for detailed documentation.
