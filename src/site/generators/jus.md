---
title: jus
repo: jus/jus
homepage: http://jus.js.org
language:
  - JavaScript
license:
  - MIT
templates:
  - Handlebars
description: dev server and build tool with no configuration and no boilerplate code
---

jus is a development server and build tool for making static websites with no configuration and no boilerplate code. It has built-in support for [browserify](https://github.com/substack/browserify-handbook#readme), ES6 and ES2015 with [Babel](http://babeljs.io/), [React JSX](http://babeljs.io/docs/plugins/preset-react/), GitHub Flavored markdown, syntax highlighting, [Sass](http://sass-lang.com/), [Less](http://lesscss.org/), [Stylus](http://stylus-lang.com/), [Myth](http://www.myth.io/), [Handlebars](http://handlebarsjs.com/), [browsersync](https://browsersync.io/) and more.

## Why?

The year is 2016 and you're building a new website. At first you just create a single HTML file with some inline scripts and style tags. This works for a bit, but soon your code grows and you decide to extract the styles and scripts into standalone files. This is slightly better, but eventually you want to do something more sophisticated, like writing your stylesheets in Sass, or concatenating and minifying assets, or using npm dependencies with [browserify](https://github.com/substack/browserify-handbook). These conveniences are essential to building a website of any magnitude, but setting them up is tedious and time-consuming. It's at this point in the project that your attention turns from the creative to the mundane. Rather than building, you're now configuring.

In this day and age, most developers would turn to [Gulp](http://gulpjs.com/), [npm scripts](http://substack.net/task_automation_with_npm_run), [Jekyll](https://www.staticgen.com/jekyll) or one of [dozens of static site tools](https://www.staticgen.com). This is where jus comes in as an alternative.

There is no setup with jus. It has just two commands: `serve` and `build`. Run `jus serve` in your project directory and you've got a live develpment server running, watching for file changes, autorefreshing your browser with [browsersync](https://browsersync.io/), and serving your content with [clean URLs](#clean-urls). Write a `foo.sass` file and it'll be served at `/foo.css`. Use an npm-style `require` statement in your script, and jus will serve it up as a browserified bundle. Write React's JSX syntax and it'll be transpiled to javascript on the fly. Write a GitHub-flavored `/markdown/file.md` and it'll be served as syntax-highlighted HTML at `/markdown/file`.

When it's time to deploy, run `jus build` to compile your site down into plain old HTML, CSS, and Javascript files, ready for deployment to [GitHub Pages](#deployment-to-github-pages), [Surge](#deployment-to-surge), or any other static site host that supports clean URLs.

## Getting Started

jus requires [node 4](https://nodejs.org/en/download/) or greater, because it uses some newer Javascript features. Install the command-line interface globally, then run it to see usage instructions:

```sh
npm i -g jus && jus
```

jus has a lot of dependencies, so it takes a while to install. Maybe go grab a :coffee: and read up
on [how to make npm faster](https://addyosmani.com/blog/using-npm-offline/).

If you like to learn by example, check out the repos of [sites using jus](#sites-using-jus). Otherwise, read on...

## Pages

Pages are written in Markdown, HTML, Handlebars, or any combination thereof. At render time each page is passed a [Handlebars context object](#context) containing metadata about all the files in the directory.

- Markdown parsing with [marky-markdown](http://npm.im/marky-markdown), the battle-tested [commonmark](http://commonmark.org/)-compliant parser used by [npmjs.com](https://npmjs.com).
- GitHub-flavored Markdown support, including [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/)
- Syntax Highlighting powered by [Atom](https://atom.io)'s [highlights](https://npm.im/highlights) package.
- Markdown headings (`H1`, `H2`, etc) are automatically converted to anchored hyperlinks.
- Emoji support. Converts :emoji:-style shortcuts to unicode emojis.
- [HTML frontmatter](#frontmatter) as page metadata

Extensions: `html|hbs|handlebars|markdown|md`

## Scripts

All javascript files in your project are automatically [browserified](https://github.com/substack/browserify-handbook#readme) and [babelified](https://www.npmjs.com/package/babelify) using the `es2015` and `react` presets.

You can use node-style `require` statements to include node and npm modules in your code:

```js
const url = require('url').parse('https://example.com')

console.log(`the domain is ${url.host}`)
```

You can also use [ES6-style imports](http://babeljs.io/docs/learn-es2015/#modules), if you prefer:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

domready(() => {
  // do some React magic
})
```

Scripts are browserified using [`babel-preset-react`](https://babeljs.io/docs/plugins/preset-react/), so you
can write JSX in your scripts.

Extensions: `js|jsx|es|es6`

## Stylesheets

Stylesheets can be written in
[Sass](http://sass-lang.com/),
[SCSS](http://sass-lang.com/),
[Less](http://lesscss.org/),
[Stylus](http://stylus-lang.com/),
[Myth](http://www.myth.io/),
or plain old CSS. Use whatever preprocessor suits your fancy.

Extensions: `css|less|sass|scss|styl`

## Context

When the jus server is initialized, it recursively finds all the files in the directory tree,
ignoring `node_modules`, `.git`, and other unwanted patterns. These files are then stored in
memory in an array called `files`. For convenience, this list of files is broken down
into smaller arrays by type: an array for `pages`, another array for `scripts`, etc.

```js
{
  files: [...],
  pages: [...]
  scripts: [...]
  stylesheets: [...]
  images: [...]
  datafiles: [...]
}
```

When you request a page, the server renders the page on the fly, passing this object to the
given page's template. This means every page has access to metadata about
every file in the site at render time.

Using handlebars in your pages is entirely optional. If your pages don't need to do any dynamic rendering at build time, that's okay. The context will simply be ignored at render time.

## Frontmatter

jus supports [HTML frontmatter](https://github.com/zeke/html-frontmatter#readme). This allows you to add key-value metadata to your pages:

```html
<!--
title: Alice in Wonderland
year: 1951
-->
```

Any such values present in an HTML comment at the top of a page are made available in that page's [Handlebars context object](#context) at render time.

Note: Jekyll uses YAML for frontmatter, but jus uses HTML, because it can be included in a file without adversely affecting the way it renders on github.com.

## Templates

Handlebars templates can be used to wrap layouts around your pages.

- If a file named `/layout.(html|hbs|handlebars|markdown|md)` is present, it will be applied to all pages by default.
- Templates must include a `{{{body}}}` string, to be used as a placeholder for where the main content should be rendered.
- Templates must have the word `layout` in their filename.
- Pages can specify a custom layout in their [frontmatter](#frontmatter). Specifying `layout: foo` will refer to the `/layout-foo.(html|hbs|handlebars|markdown|md)` layout file.
- Pages can disable layout by setting `layout: false` in their frontmatter.

Extensions: `html|hbs|handlebars|markdown|md|mdown`

### Helpers

jus provides a number of helper functions you can use in your handlebars
templates. All of the helpers are from [lobars](https://github.com/zeke/lobars),
a collection of utility functions plucked directly from
[lodash](https://lodash.com/).

lobars includes **comparison helpers** like
[endsWith](https://lodash.com/docs#endsWith),
[eq](https://lodash.com/docs#eq),
[gt](https://lodash.com/docs#gt),
[gte](https://lodash.com/docs#gte),
[includes](https://lodash.com/docs#includes),
[isArray](https://lodash.com/docs#isArray),
[isBoolean](https://lodash.com/docs#isBoolean),
[isDate](https://lodash.com/docs#isDate),
[isEmpty](https://lodash.com/docs#isEmpty),
[isMatch](https://lodash.com/docs#isMatch),
[isNumber](https://lodash.com/docs#isNumber),
[isString](https://lodash.com/docs#isString),
[isSymbol](https://lodash.com/docs#isSymbol),
[isUndefined](https://lodash.com/docs#isUndefined),
[lt](https://lodash.com/docs#lt),
[lte](https://lodash.com/docs#lte),
[startsWith](https://lodash.com/docs#startsWith) and more.

Here's an example use of the `gte` (greater than or equal to) helper:

```handlebars
\{{#gte age 21}}
  You are old enough to drink in the United States.
\{{/gte}}
```

lobars also provides helpers for manipulating input like
[camelCase](https://lodash.com/docs#camelCase),
[capitalize](https://lodash.com/docs#capitalize),
[escape](https://lodash.com/docs#escape),
[kebabCase](https://lodash.com/docs#kebabCase),
[lowerCase](https://lodash.com/docs#lowerCase),
[lowerFirst](https://lodash.com/docs#lowerFirst),
[pad](https://lodash.com/docs#pad),
[padEnd](https://lodash.com/docs#padEnd),
[padStart](https://lodash.com/docs#padStart),
[parseInt](https://lodash.com/docs#parseInt),
[repeat](https://lodash.com/docs#repeat),
[replace](https://lodash.com/docs#replace),
[snakeCase](https://lodash.com/docs#snakeCase),
[split](https://lodash.com/docs#split),
[startCase](https://lodash.com/docs#startCase),
[template](https://lodash.com/docs#template),
[toLower](https://lodash.com/docs#toLower),
[toUpper](https://lodash.com/docs#toUpper),
[trim](https://lodash.com/docs#trim),
[trimEnd](https://lodash.com/docs#trimEnd),
[trimStart](https://lodash.com/docs#trimStart),
[truncate](https://lodash.com/docs#truncate),
[unescape](https://lodash.com/docs#unescape),
[upperCase](https://lodash.com/docs#upperCase),
[upperFirst](https://lodash.com/docs#upperFirst),
and more.

Here's how you use the string helpers:

```handlebars
\{{lowerCase someString}}
```

### Images

Delicious metadata is extracted from images and included in the [Handlebars context object](#context), which is accessible to every page.

- Extracts [EXIF data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from JPEGs, including [geolocation data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format#Geolocation).
- Extracts [dimensions](https://www.npmjs.com/package/image-size)
- Extracts [color palettes](https://www.npmjs.com/package/get-image-colors)

Extensions: `png|jpg|gif|svg`

## Datafiles

JSON and YML files are slurped into the [Handlebars context object](#context), which is accessible to every page.

Extensions: `json|yaml|yml`

## Clean URLs

jus uses a clean URL strategy that is compatible with
[GitHub Pages](http://aseemk.github.io/gh-pages-test/)
and
[surge.sh](https://surge.sh/help/using-clean-urls-automatically).
In essence, [pages](#pages) get their extension lopped off,
and pages named `index` inherit the name of their directory.

<table class="routes">
  <tr>
    <th>Filename</th>
    <th>URL</th>
  </tr>
  <tr>
    <td>index.html</td>
    <td>/</td>
  </td>
  <tr>
    <td>nested/index.html</td>
    <td>/nested</td>
  </td>
  <tr>
    <td>nested/page.html</td>
    <td>/nested/page</td>
  </td>
  <tr>
    <td>also/markdown.md</td>
    <td>/also/markdown</td>
  </td>
  <tr>
    <td>also/handlebars.hbs</td>
    <td>/also/handlebars</td>
  </td>
  <tr>
    <td>stylesheet.scss</td>
    <td>/stylesheet.css</td>
  </td>
  <tr>
    <td>stylesheet.sass</td>
    <td>/stylesheet.css</td>
  </td>
  <tr>
    <td>stylesheet.styl</td>
    <td>/stylesheet.css</td>
  </td>
  <tr>
    <td>stylesheet.styl</td>
    <td>/stylesheet.css</td>
  </td>
</table>

## Deployment to GitHub Pages

Add the following to your package.json:

```json
{
  "scripts": {
    "start": "jus serve",
    "deploy": "npm run build && npm run commit && npm run push && npm run open",
    "build": "jus build . dist",
    "commit": "git add dist && git commit -m 'update dist'",
    "push": "git subtree push --prefix dist origin gh-pages",
    "open": "open http://zeke.sikelianos.com"
  }
}
```

Now whenever you want to publish to GitHub Pages, run:

```sh
npm run deploy
```

Note: GitHub's [User Pages](https://help.github.com/articles/user-organization-and-project-pages/#user--organization-pages) (like `yourname.github.io`) are built from the `master` branch,
whereas [Project Pages](https://help.github.com/articles/user-organization-and-project-pages/#project-pages) (like `yourname.github.io/project`) are built from the `gh-pages` branch.
Be aware of this when setting up your npm scripts.

Note: GitHub's CDN can take a minute to update, so you might have to refresh a few times when visiting.

## Deployment to Surge

[surge.sh](https://surge.sh/) is an awesome new platform for publishing static websites.

Install the Surge CLI:

```sh
 npm i -g surge
```

Add the following to your package.json:

```json
{
  "scripts": {
    "start": "jus serve",
    "deploy": "npm run build && npm run build && npm run open",
    "build": "jus build . dist",
    "push": "surge dist YOUR-URL",
    "open": "open YOUR-URL"
  }
}
```

Now whenever you want to publish to Surge, run:

```sh
npm run deploy
```

## Prior Art

jus was inspired by a number of existing tools:

- [Harp](http://harpjs.com/): The main inspiration for jus. It was the first static site tool to introduce the concept of an [in-place asset pipeline](http://harpjs.com/docs/development/rules).
- [Jekyll](http://jekyllrb.com/): A blog-aware static site generator in Ruby. jus borrows the concept of frontmatter from Jekyll, but uses [HTML frontmatter](https://github.com/zeke/html-frontmatter#readme), unlike Jekyll's YAML frontmatter.
- [Brunch](http://brunch.io/#why): A lightweight tool for building HTML5 applications with emphasis on elegance and simplicity. The jus development server uses the [chokidar](https://www.npmjs.com/package/chokidar) module from Brunch to watch the filesystem.
- Ruby on Rails: The web development framework that helped popularize [Convention over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration)

## Sites using jus

Sometimes real examples are the easiest way to learn. Check out these open-source sites built with jus:

- [jus.js.org](https://github.com/zeke/jus.js.org), the site you're looking at now.
- [zeke.sikelianos.com](http://github.com/zeke/zeke.sikelianos.com), a personal portfolio site.
- [acrophony](https://github.com/zeke/acrophony#readme), an experimental React GUI for acrophonic alphabets.
