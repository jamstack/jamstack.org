---
title: Keystone 5
repo: keystonejs/keystone-5
homepage: https://v5.keystonejs.com/
twitter: KeystoneJS
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: A scalable platform and CMS to build applications. Keystone 5 has first-class GraphQL API, extensible architecture and Admin UI.
images:
  - path: /img/cms/keystone-5-adminUI.png
---

[Keystone 5](https://v5.keystonejs.com/) is a scalable platform that allows you to create a highly customised CMS and API in minutes.

It’s not just a new version of Keystone, but a complete re-imagining of KeystoneJS for the future.

Keystone 5 focuses on what we believe are the most powerful features for modern web and mobile applications.That means less focus on template-driven websites and more focus on a flexible architecture with a powerful GraphQL API.

We believe it’s the ideal back-end for static websites using frameworks like React, Vue or Angular, Or Static site generators like Gatsby, Hugo, Jekyll or 11ty.

## Open source

Keystone is proudly open-source and allows individual and commercial reuse and modification. The code is freely available on [GitHub](https://github.com/keystonejs/keystone-5).

## Configurable

Configure a highly customised CMS and API in minutes.

## Zero assumptions

Keystone is not opinionated about your front-end architecture. It works great with React, Vue, Angular, or anything else you like to use.

Keystone also tries to make zero assumptions about your data structure allowing you to build any type of application. It achieves flexibility through small, highly composable parts that allow you to build a foundation for any application.

Don’t need ‘Users’ or ‘Posts’? Not a problem! Keystone’s extensible architecture means you choose the features you need. Pick an ideal starting point, rather than working hard to adapt an opinionated framework.

## Fully featured

Zero assumptions doesn’t mean zero features. Keystone comes with dozens of features out of the box including Lists, Fields, Access Control, Authentication, and Apps. You can add and configure each these, as well as extend, modify or build your own.

### Lists

Lists define a set of Fields that make up a collection in Keystone. A List might represent a content type, such as a “Page” or “Post”, but they can be any collection of data. Creating a List is how you define the data structure of your application.

### Fields

Fields represent a data type. They are used in Keystone for everything from rendering components in the Admin UI, to configuring Access Controls, to generating a GraphQL API. Keystone has dozens of built-in Field types and as always, you can create your own.

### Access Control

Keystone has powerful Access controls that can be configured on Lists and Fields to define the specific actions authenticated and anonymous users can take within the Admin UI or GraphQL Apps.

### Authentication

Authentication refers to a user identifying themselves and “logging in” to an application. Keystone provides multiple authentication strategies including a basic password or third-party authentication services, such as Twitter and Google.

Once again, authentication strategies are configurable and extensible allowing you to create your own login methods.

### Apps

Keystone uses Apps to compose high-level features into a larger application. Essential Keystone Apps include the GraphQL App, Admin UI App, and Static App.

#### GraphQL App

The GraphQL App is the keystone App of KeystoneJS. It provides a powerful GraphQL API with CRUD operations and powerful filtering options for all your lists.

#### Admin UI App

The Admin App is a fully functional administration UI to help you manage your data.

#### Static App

The Static App allows you to serve content from a folder using an express static server. This can be quick and easy way to deploy a simple front-end with a Keystone application.

The Static App, along with other Keystone Apps, can decoupled from the main application and deployed separately if required.

_Note_: Apps like the Static App provides an alternative to Keystone 4’s views and templates engine.

## Self host

Own your own data and host Keystone anywhere. Have complete freedom of choice when hosting your data, admin application, API and front-end applications.

## Headless

Keystone is headless, meaning it requires no front-end application. Keystone 5’s primary focus is on the API and Admin UI. It is non-prescriptive about your front-end application. Because of this Keystone 5 works with all major front-end frameworks.

## Choose your storage methods

Keystone allows you to choose different storage methods. Adapters for MongoDB and Postgres are available now, with additional adapters in development.

Because of its extensible architecture, Keystone is not even explicitly tied to a database. You could create adapters for file-system storage such as SQLite or even JSON and cloud storage options. We hope to see many more adapter options in the future.

Field level adapters allow you to fetch or store data for specific fields separately from your main storage location. Examples include uploading images to Cloudinary or fetching information via o-embed links.

## Get started

Keystone has a high level of configurability when you need it, but most customisations are opt-in and Keystone provides sensible defaults to help you get started quickly.

Create your first Keystone 5 project in seconds with the Keystone CLI.

See the complete [Getting Started Guide](https://v5.keystonejs.com/quick-start/) for more details.
