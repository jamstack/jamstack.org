---
title: Directus
repo: directus/directus
homepage: https://directus.io
twitter: directus
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Directus is a database-first platform that provides an instant REST API for custom SQL databases and an intuitive Admin App for non-technical users to manage that content.
images:
  - path: https://docs.directus.io/assets/img/item-detail.dacd91c4.png
---
Directus is an open-source suite of software that provides an instant API wrapper for SQL databases and an intuitive Admin App for non-technical users to manage that content. It's like a safe, friendly, and super-powered "database client" (eg: _PHP-my-Admin_ or _Sequel Pro_). Created in 2004, our premium platform powers hundreds-of-thousands of data-driven applications around the world. With our JSON API, webhooks, and complete control over where and how your content is used — what will you build with Directus?

<img class="simple" src="https://docs.directus.io/assets/img/item-detail.dacd91c4.png" alt="Directus 7 — Item Edit" />

## Architecture

The **[Directus API](https://github.com/directus/api)** wraps any new or existing SQL database with RESTful JSON endpoints for connecting content anywhere: websites, native apps, wearables, IoT devices, kiosks, or anything else! ([API Reference](https://docs.directus.io/api/reference.html))

The **[Directus Admin App](https://github.com/directus/app)** is a friendly admin interface built with Vue.js that works in conjunction with our API to allow non-technical users to manage database content and digital assets. ([User Guide](https://docs.directus.io/guides/user-guide.html))

The **[Directus Suite](https://github.com/directus/directus)** is a package that combines our API, Admin App, and all dependencies for quick and easy installation on most servers. ([Docs](https://docs.directus.io))

## Database-First

Directus follows a database-first approach, storing all of your data _unaltered_ in pure SQL databases with that can be completely cusotmized. Benefits to this approach include:

### Portability and Transparency

Directus is _not_ a black-box system. There is nothing proprietary or opinionated about how Directus stores your content so you're never locked-in or locked out. Import existing SQL to get started quickly, and rest assured that you can also export your unaltered content as vanilla SQL at any point. You can also self-host the entire suite on your own servers if needed or use our hosted Cloud service.

### Access and Optimization

Directus mirrors _your_ actual database so it will automatically stay in sync with any changes made directly to the database! With the full power of SQL unlocked, you can:

1. Architect your actual database with meaningful table and column names
2. Infinitely optimize with indexing, datatypes, lengths, defaults, keys, encoding, etc
3. Update your database schema at any point and Directus will instantly reflect changes
4. Create, update, and delete content directly from the database

This database-first approach means that you have the option to completely bypass Directus as needed. Connecting your application directly to the database means Directus is completely bypassed, removing even the slightest possibility of a bottleneck, and giving you the unbridled power of SQL.

### Complex Relationships

Whether you need many-to-one, one-to-many, many-to-many, or something completely different... Directus has you covered. You can interrelate database fields, then fetch deeply nested data using our robust dot-notation parameters.

## Simple, Modular and Extensible

We've intentionally kept our codebase as simple and lightweight as possible. Every aspect of Directus has been modularized, with many options for extending, overriding, or even bypassing the core system. Choose your auth providers, storage adapters, content interfaces, data presentation, and more. We also have webhooks, event hooks, API response filters, custom endpoints, CSS/JS override files, and much more.

## Internationalization and Accessibility

Directus allows you to manage multilingual content in as many languages as your project needs. And no matter what language(s) your organization requires, our Admin App supports a growing number of locales. We've also paid close attention to our Admin App's interface to ensure it is as clear and accessible as possible for all users.

## Resources

Directus is released under the GPLv3 license and is managed by [RANGER Studio LLC](http://rangerstudio.com). It's easy to self-host your own instance of Directus, below are a few links to help you get started:

[Directus.io](https://directus.io) • [GitHub](https://github.com/directus/directus) • [Docs](https://docs.directus.io) • [API Reference](https://docs.directus.io/api/reference.html) • [User Guide](https://docs.directus.io/guides/user-guide.html) • [Demo](https://directus.app) • [Contribute](https://docs.directus.io/getting-started/supporting-directus.html) • [Slack](https://slack.directus.io) • [Twitter](https://twitter.com/directus)

<style>.images{display:none}</style>
