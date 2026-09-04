---
title: YunCMS
repo: Yunsoft-Software/yuncms
homepage: https://yunsoft.com
twitter: yunsoftofficial
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: A programmable, self-hosted MySQL CMS and backend with a React Studio, REST API, RBAC, file management, and extensions.
images:
  - path: https://raw.githubusercontent.com/Yunsoft-Software/yuncms/main/docs/assets/screenshots/studio-content.png
  - path: https://raw.githubusercontent.com/Yunsoft-Software/yuncms/main/docs/assets/screenshots/studio-data-model.png
  - path: https://raw.githubusercontent.com/Yunsoft-Software/yuncms/main/docs/assets/screenshots/studio-files.png
---

YunCMS is a small, programmable CMS and backend for teams that want to keep their content and application data in MySQL. It combines a browser-based Studio with a REST API, so editors can manage records and files while developers work with the same data from any frontend.

The project is built with Node.js, Express and React. It is self-hosted and released under the MIT license.

## What it includes

- Dynamic collections, fields and relations backed by MySQL
- A schema-driven React Studio for content, files and data modelling
- REST CRUD with filtering, search, sorting, pagination and aggregation
- Roles, field permissions, row filters and explicit public access
- User sessions, API tokens and optional external authentication providers
- Local or S3-compatible file storage
- Server endpoints, hooks and scheduled-job extensions
- Optional AI assistant and MCP access through the same permission layer

## Quick start

YunCMS requires Node.js 24, npm 11 or newer, and a MySQL 8-compatible server. Create an empty project directory, then run:

```bash
npx --yes @yunsoft/yuncms init
npx --yes @yunsoft/yuncms start
```

The setup command collects the database connection and first administrator account, writes the local configuration and applies the required migrations. Studio and the API are then served from the same process.

## Resources

- Website: [https://yunsoft.com](https://yunsoft.com)
- [Source code](https://github.com/Yunsoft-Software/yuncms)
- [Getting started](https://github.com/Yunsoft-Software/yuncms/blob/main/docs/getting-started.md)
- [Studio guide](https://github.com/Yunsoft-Software/yuncms/blob/main/docs/studio.md)
- [REST API guide](https://github.com/Yunsoft-Software/yuncms/blob/main/docs/rest-api.md)
- [npm package](https://www.npmjs.com/package/@yunsoft/yuncms)
