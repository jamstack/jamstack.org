---
title: Charge
repo: brandonweiss/charge
homepage: https://charge.js.org
language:
  - JavaScript
license:
  - MIT
templates:
  - React
  - JSX
description: An opinionated, zero-config static site generator
---

### What?

Charge is an opinionated, zero-config static site generator written in JavaScript. It supports a wide variety of common uses and it does it without needing to be configured or customized. It’s fast, it’s simple, and it works the way you probably expect it to. That’s it.

### Highlights

- Zero configuration
- Templating via [JSX][jsx] and [MDX][mdx]
- React renders server-side, _not_ client-side
- Write futuristic JavaScript with [Babel][babel]
- Write futuristic CSS with [PostCSS][postcss]
- Live-reloading development server
- Rebuilds the minimum files necessary
- Dynamic pages (coming soon)
- Stellar documentation ✨

## Documentation

You can find the Charge documentation [on the website][docs].

## How is Charge different from GatsbyJS?

[Gatsby][gatsby] is really cool, but it’s very different than Charge, with two particularly large differences.

Gatsby is configuration over convention. It can be used to build complex web applications, but because of that it’s extremely difficult to understand how to use it. You’ll need to know how to use Webpack, which personally gives me nightmares. It’s extremely likely that you’ll need to spend time learning other tools and then configuring and tweaking Gatsby before you can use it for your site. Charge is convention over configuration. In fact, it has no configuration, it “just works”.

Gatsby renders pages client-side. That means it serves React and some related libraries to the browser along with your components in order to render the pages. Routing also happens client-side. Gatsby _can_ render the initial page load server-side, but there’s no way to _not_ serve hundreds of kilobytes of JavaScript to the browser. Charge uses React to render everything server-side. It generates a truly static site.

More practically, Gatsby is great if you’re building a large, complex website and want lots of control over how you build it. Charge is probably better if you’re building a small website and don’t want to waste time fiddling with configurations and cobbling different tools together.

## Real examples

If you’d like to see everything in practice, check out these sites using Charge.

- [charge.js.org](https://github.com/brandonweiss/charge/tree/master/docs), the documentation for Charge.
- [brandonweiss.me](https://github.com/brandonweiss/brandonweiss), a personal site.

[jsx]: https://reactjs.org/docs/introducing-jsx.html
[mdx]: https://github.com/mdx-js/mdx
[babel]: https://babeljs.io
[postcss]: https://postcss.org
[docs]: https://charge.js.org
[gatsby]: https://www.gatsbyjs.org
