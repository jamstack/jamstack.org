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
description: A JavaScript based static-site-generator to help you create JSON, Markdown, or static-data based websites.
twitter: AbellLand
startertemplaterepo: https://github.com/abelljs/abell-starter-minima
---

Abell is a Node.js based static-site-generator to help you create JSON, Markdown, or static-data based websites. 

### Installation

You can boilerplate a starter template using `create-abell-app`

```sh
npx create-abell-app my-blog --template https://github.com/abelljs/abell-starter-minima

cd my-blog

npm run dev
```

And boom🎉 You will have a live server running.


### Hello World in Abell

Abell is built on top of a new templating language `.abell` which lets you write Node.js code inside HTML like syntax which is executed during the build time.

**Input:**
```html
{{ const greet = 'Hello, World!' }}
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