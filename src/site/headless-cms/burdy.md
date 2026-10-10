---
title: Burdy
repo: burdy-io/burdy
homepage: https://burdy.io
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Burdy is a next-gen open-source headless CMS. Written in 100% TypeScript.
images:
  - path: /img/cms/burdy-cms-1.png
---
# [Burdy](https://burdy.io)

**The most powerful and flexible open-source headless cms.**

We took the inspiration from **WordPress** plugin system (hooks and actions) and have built a completely new hook-based core for our backend and admin that is highly extendable and pluggable.

Authoring experience is based on **Adobe Experience Manager (AEM)** and **OneDrive** and allows content creators to structure and organize their content in a familiar way.

We are strongly opinionated! **Typescript**!

* Self-hosted - know where your data is stored!
* Backend - Node.js, TypeORM, Express
* Admin - React, Fluent UI
* Databases - TypeORM (SQLite, Postgres, MySQL, MariaDB), File Storage - file system, AWS S3
* Customizable - Same as WordPress you are able to extend any part of Admin or Backend by just using hooks. Furthermore, you can create custom functionalities in a no time!

For more details visit our [Docs](https://burdy.io/docs)

## Installation

```sh
npx create-burdy-app my-project

cd my-project/
npm run dev
```

Open [http://localhost:4000/admin](http://localhost:4000/admin) to view your running app.
When you're ready for production, run `npm run build` then `npm run start`.

## Features
Out of the box Burdy comes with many features

* **Office 365** professional look and feel,
* **Digital Assets Management** - inspired by **OneDrive** and **Operating systems**, it gives simplicity and organization capabilities,
* **Content types** - **16 fields types** out of the box, and you can **easily extend** it with your custom,
* **Post versioning** - every update will create a version that authors will be able to restore,
* **Pages hierarchy** - authors will be able to organize pages in a folder like structure,
* **Tags** - tag pages, posts or assets with ease
* **Users management** with Groups and Permissions access control

### Field types

16 Out of the box field types. Learn how to extend with your custom by visiting [Custom Editor Fields](https://burdy.io/docs/custom-editor-field/) docs.

Core:
- Text
- Rich Text
- Number
- Checkbox
- Choice group
- Assets
- Images
- Dropdown
- Color Picker
- Date Picker
- Relation
- Custom Component

Layout:
- Group
- Repeatable
- Tab
- Dynamic Zone
