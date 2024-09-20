---
title: OrchardCore
repo: OrchardCMS/OrchardCore
homepage: https://orchardcore.net/
twitter: OrchardCMS
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Orchard Core is an open-source modular and multi-tenant application framework built with ASP.NET Core, and a content management system (CMS) built on top of that framework.
---

Orchard Core is an open-source, modular, multi-tenant application framework and CMS for ASP.NET Core.

## Building Website with Orchard Core

Orchard Core has a lot of interesting features that help you to manage different content types.

- **Performance**. This might be the most obvious change when you start using Orchard Core CMS. It's extremely fast for a CMS. So fast that we haven't even cared about working on an output cache module. To give you an idea, without caching Orchard Core CMS is around 20 times faster than the previous version.

- **Portable**. You can now develop and deploy Orchard Core CMS on Windows, Linux, and macOS. We also have Docker images ready for use.

- **Database Support**. SQL Server, MySQL, MariaDB, PostgreSQL, and SQLite. For MariaDB, select MySQL as the database type and follow all MySQL rules.

- **Document database abstraction**. Orchard Core CMS still requires a relational database and is compatible with SQL Server, MySQL, PostgreSQL, and SQLite, but it's now using a document abstraction (YesSql) that provides a document database API to store and query documents. This is a much better approach for CMS systems and helps performance significantly.

- **NuGet Packages**. Modules and themes are now shared as NuGet packages. Creating a new website with Orchard Core CMS is actually as simple as referencing a single meta package from the NuGet gallery. It also means that updating to a newer version only involves updating the version number of this package.

- **Liquid templates support**. Editors can safely change the HTML templates with the Liquid template language. It was chosen as it's both very well documented (Jekyll, Shopify, ...) and secure.

- **Custom queries**. We wanted to provide a way for developers to access all their data as simply as possible. We created a module that lets you create custom ad-hoc SQL and Lucene queries that can be re-used to display custom content, or exposed as API endpoints. You can use it to create efficient queries or expose your data to SPA applications.

- **Scalability**. Because Orchard Core is a multi-tenant system, you can host as many websites as you want with a single deployment. A typical cloud machine can then host thousands of sites in parallel, with database, content, theme, and user isolation.

- **Workflows**. Create content approval workflows, react to webhooks, take actions when forms are submitted, and any other process you'd like to implement with a user friendly UI.

- **GraphQL**. We provide a very flexible GraphQL API, such that any authorized external application can reuse your content, like SPA applications or static site generators.

## Different website building strategies

Orchard Core CMS supports different building strategies but there is one that allows you to expose contents via api and GraphQL:

- **Headless CMS**. The site only manages the content, and you create a separate application that will fetch the managed content using GraphQL or REST APIs. See [Sebastien Ros on Headless CMS with Orchard Core on YouTube](https://www.youtube.com/watch?v=4o9zG17cfa0).
