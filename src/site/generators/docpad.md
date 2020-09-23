---
title: Docpad
repo: docpad/docpad
homepage: http://docpad.org/
language:
  - CoffeeScript
license:
  - MIT
templates:
  - Eco
  - Any JS
description: Feature rich, configurable and language agnostic.
---

Hi! I'm DocPad, I streamline the web development process and help close the gap between experts and beginners. I've been used in production by big and small companies for over a year and a half now to create [plenty of amazing and powerful web sites and applications](http://docpad.org/docs/showcase) quicker than ever before. What makes me different is instead of being a box to cram yourself into and hold you back, I'm a freeway to what you want to accomplish, just getting out of your way and allowing you to create stuff quicker than ever before without limits. Leave the redundant stuff up to me, so you can focus on the awesome stuff.

Discover my features below, or skip ahead to the installation instructions to get started with a [fully functional pre-made website](http://docpad.org/docs/skeletons) in a few minutes from reading this.

### Features

#### Out of the box

- Completely file based meaning there is no pesky databases that need to be installed, and for version control you get to use systems like Git and SVN which you're already use to (You can still hook in remote data sources if you want, DocPad doesn't impose any limits on you, ever)
- Choose from plenty of community maintained [pre-made websites](http://docpad.org/docs/skeletons) to use for your next project instead of starting from scratch everytime
- Write your documents in any language, markup, templating engine, or pre-processor you wish (we're truly agnostic thanks to your plugin system). You can even mix and match them when needed by combining their extensions in a rails like fashion (e.g. `coffee-with-some-eco.js.coffee.eco`)
- Changes to your website are automatically recompiled through our built in watch system
- Add meta data to the top of your files to be used by templating engines to display non-standard information such as titles and descriptions for your documents
- Display custom listings of content with our powerful [Query Engine](https://github.com/bevry/query-engine/) available to your templating engines
- Abstract out generic headers and footers into layouts using our nested layout system
- For simple static websites easily deploy your generated website to any web server like apache or github pages. For dynamic projects deploy them to servers like [heroku](http://www.heroku.com/) or [nodejitsu](http://nodejitsu.com/) to take advantage of custom routing with [express.js](http://expressjs.com/). [Deploy guide here](http://docpad.org/docs/deploy)
- Built-in server to save you from having to startup your own, for dynamic deployments this even supports things like clean urls, custom routes and server-side logic
- Robust architecture and powerful plugin system means that you are never boxed in unlike traditional CMS systems, instead you can always [extend DocPad](http://docpad.org/docs/extend) to do whatever you need it to do, and you can even write to bundle common custom functionality and distribute them through the amazing node package manager [npm](http://npmjs.org/)
- Built in support for dynamic documents (e.g. search pages, signup forms, etc.), so you can code pages that change on each request by just adding `dynamic: true` to your document's meta data (exposes the [express.js](http://expressjs.com/) `req` and `res` objects to your templating engine)
- You can use it standalone, or even easily include it within your existing systems with our [API](http://docpad.org/docs/api)

#### With our amazing community maintained plugins

- Use the [Live Reload](http://docpad.org/plugin/livereload/) plugin to automatically refresh your web browser whenever a change is made, this is amazing
- Pull in remote RSS/Atom/JSON feeds into your templating engines allowing you to display your latest twitter updates or github projects easily and effortlessly using the [Feedr Plugin](http://docpad.org/plugin/feedr/)
- Support for every templating engine and pre-processor under the sun, including but not limited to CoffeeScript, CoffeeKup, ECO, HAML, Handlebars, Jade, Less, Markdown, PHP, Ruby, SASS and Stylus - [the full listing is here](http://docpad.org/docs/plugins)
- Use the [Partials Plugin](http://docpad.org/plugin/partials) to abstract common pieces of code into their own individual file that can be included as much as you want
- Syntax highlight code blocks automatically with either our [Highlight.js Plugin](http://docpad.org/plugin/highlightjs/) or [Pygments Plugin](http://docpad.org/plugin/pygments/)
- Get SEO friendly clean URLs with our [Clean URLs Plugin](http://docpad.org/plugin/cleanurls/) (dynamic deployments only)
- Lint your code automatically with our Lint Plugins: [jshint](https://github.com/jking90/docpad-plugin-jshint) and [coffeelint](https://github.com/jking90/docpad-plugin-coffeelint)
- Concatenate and minify your JavaScript and CSS assets making page loads faster for your users with our Minify Plugins: [htmlmin](https://github.com/robloach/docpad-plugin-htmlmin) and [grunt](https://gist.github.com/balupton/3898915)
- Install common javascript libraries like jQuery, Backbone and Underscore directly from the command line - under construction, coming soon
- Automatically translate your entire website into other languages with our Translation Plugin - under construction, coming soon
- Add a admin interface to your website allowing you to edit, save and preview your changes on live websites then push them back to your source repository with the [Admin Plugins](http://docpad.org/docs/plugins#admin-interfaces)
- Pretty much if DocPad doesn't already do something, it is trivial to [write a plugin](http://docpad.org/docs/extend) to do it, seriously DocPad can accomplish anything, it never holds you back, there are no limits, it's like super powered guardian angel
- There are also [plenty of other plugins](http://docpad.org/docs/plugins) not listed here that are still definitely worth checking out! :)

### People love DocPad

All sorts of people love DocPad, from first time web developers to even industry leaders and experts. In fact, people even migrate to DocPad from other systems as they love it so much. Here are some our favourite tweets of what people are saying about DocPad :)

![Some favourite tweets about DocPad](https://github.com/bevry/designs/raw/master/docpad/favourites/docpad-favs.gif)
