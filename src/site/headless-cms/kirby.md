---
title: Kirby
repo: getkirby/kirby
homepage: https://getkirby.com
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: "Leading European flat-file CMS with a built-in REST API and powerful options for headless setups. Clients: German Government, Daimler AG, Lufthansa"
images:
  - path: /img/cms/kirby.jpg
---
Kirby is a file-based CMS built with PHP that can serve as a powerful headless backend. It runs without a database and stores all content in plain text files. You can build an API around that content in a few different ways and serve it to any frontend framework, mobile app or static site.

### Headless
Kirby gives you several ways to get content out as data. Every page can have a JSON representation, so you can turn any URL into an API endpoint by adding a content representation. For more control you can define your own routes and return exactly the JSON structure your frontend needs.
On top of that, Kirby Query Language (KQL) exposes your whole content structure through a single API endpoint. You send a query describing the pages, fields and files you want, and you get back just that data, which keeps requests specific and payloads small. Because content is plain files, you can also pull it directly at build time when you're generating a static site.

### Editing
Content is edited in the Panel, a fast admin interface built with Vue.js. You configure it with blueprint files, where you define the fields, sections and structures each part of the site needs. This works the same whether Kirby renders the site itself or only serves data, so editors get a proper editing interface even on a fully headless setup.

### Data & Storage
All content sits in plain text files on the filesystem. There's no database to set up, migrate or back up. Each page is a folder and each piece of content is a readable text file. That makes version control with Git straightforward, keeps content portable, and lets you move an entire site by copying a folder. Files and media are handled with built-in image manipulation and asset methods.

### Templates
If you don't need a separate frontend, Kirby can render the site itself with plain PHP templates. There's no template engine to learn and no build step to run, so you can mix a server-rendered site and headless endpoints in the same project when it makes sense.

### Customers
Kirby runs sites for agencies, studios, universities, museums and brands around the world, from small portfolios to large editorial and corporate platforms. The [showcase](https://getkirby.com/love) has a wide range of examples.

### Try Kirby
Kirby is free to download and use locally for as long as you want. You need a license once a site goes live on a public server, and a license is a one-time payment per site with no recurring fees. A few links to get started:

[getkirby.com](https://getkirby.com) | [Docs](https://getkirby.com/docs) | [Demo](https://getkirby.com/try) | [Forum](https://forum.getkirby.com/) | [Discord](https://chat.getkirby.com/) | [KQL](https://github.com/getkirby/kql)
