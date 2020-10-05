---
title: Ghost
repo: TryGhost/Ghost
homepage: https://ghost.org
twitter: Ghost
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: A fiercely independent platform for professional publishers. Headless Node.js REST API for developers, beautiful Ember.js admin client for editors. Used by Apple, NASA, Sky News, OpenAI & many more.
images:
  - path: /img/cms/ghost-product.png
  - path: /img/cms/ghost-architecture.png
  - path: /img/cms/ghost-examples.png
---

Ghost is an open source, professional publishing platform built on a modern Node.js technology stack — designed for teams who need power, flexibility and performance. Every day Ghost powers some of the most-read stories on the internet, serving hundreds of millions of requests across tens of thousands of sites.

<img src="/img/cms/ghost-product.png" alt="Ghost product" />

### Architecture

At its core Ghost is a self-consuming, RESTful JSON API with decoupled admin client and front-end. Ghost comes with a default Handlebars.js frontend for getting a site running as quickly as possible, as well as [detailed documentation](https://docs.ghost.org) for working with the API directly or using provided SDKs and headless front-end framework integrations.

For editors, Ghost has the rich editor which every writer wants, but under the hood it delivers far more power than you would expect. All content is stored in a standardised JSON-based document storage format called MobileDoc, which includes support for extensible rich media objects called Cards.

<img src="/img/cms/ghost-architecture.png" alt="Ghost architecture" />

Because Ghost is completely open source, built as a JSON API, has webhooks, and gives you full control over the front-end: It essentially integrates with absolutely everything. Browse a [large directory of integrations](https://docs.ghost.org/integrations/) with instructions, or build any manner of custom integration yourself by writing a little JavaScript and Markup to do whatever you want.

### Data & Storage

Ghost ships with the [Bookshelf.js ORM](http://bookshelfjs.org/) layer by default allowing for a range of databases to be used. Currently SQLite3 is the supported default in development while MySQL is recommended for production. Other databases are available, and compatible, but not supported by the core team.

Additionally, while Ghost uses local file storage by default it's also possible to use custom storage adapters to make your filesystem completely external. There are fairly wide range of [pre-made storage adapters](https://docs.ghost.org/concepts/storage-adapters/) for Ghost already available for use.

<img src="/img/cms/ghost-examples.png" alt="Ghost examples" />

### Example Customers

Hitting the right balance of needs has led Ghost to be used in production by organisations including Apple, Sky News, DuckDuckGo, Mozilla, OpenAI, Square, CloudFlare, Tinder, the Bitcoin Foundation and [many more](https://ghost.org/customers/).

### Try Ghost

Ghost is completely free an open source, released under the MIT license, stewarded by a non-profit foundation. It can be downloaded and self-hosted just about anywhere, or spun up in a few moments using the **[Ghost(Pro)](https://ghost.org/pricing/)** managed PaaS, which comes with a 14 day free trial. Here are a few quick links to get started:

[Ghost.org](https://ghost.org) | [Features](https://ghost.org/features) | [Showcase](https://ghost.org/customers) | [Github](https://github.com/tryghost/ghost) | [Forum](https://forum.ghost.org/) | [Documentation](https://docs.ghost.org/) | [Demo](https://demo.ghost.io)

<style>.images{display:none}</style>
