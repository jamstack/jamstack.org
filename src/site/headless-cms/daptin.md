---
title: Daptin
repo: daptin/daptin
homepage: https://dapt.in
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: The headless cms with JSON API, GraphQL, Actions, SMTP, IMAP, FTP, Cloud services sync and more.
---

## Daptin

Easily consume the following features on any device (cross platform static build release based on golang)

- [Database backed](https://daptin.github.io/daptin/setting-up/installation/#database-configuration) persistence, 3NF normalized tables
- [JSON API](https://daptin.github.io/daptin/apis/overview/)/[GraphQL](https://daptin.github.io/daptin/features/enable-graphql/) for CRUD apis
- [User](https://daptin.github.io/daptin/setting-up/access/) and [group management](https://daptin.github.io/daptin/setting-up/access/) and access control
- Social login with [OAuth](https://daptin.github.io/daptin/extend/oauth_connection/): tested with google, github, linkedin
- [Actions](https://daptin.github.io/daptin/actions/overview/) for abstracting out business flows
- Extensive [state tracking APIs](https://daptin.github.io/daptin/state/machines/)
- Enable [Data Auditing](https://daptin.github.io/daptin/features/enable-data-auditing/) from a single toggle
- [Synchronous Data Exchange](https://daptin.github.io/daptin/extend/data_exchange/) with 3rd party APIs
- [Multilingual tables](https://daptin.github.io/daptin/features/enable-multilingual-table/) support, supports Accept-Language header
- [Market place](https://daptin.github.io/daptin/extend/marketplacce/) API to manage and share schemas
- [Cloud storage sync](https://daptin.github.io/daptin/cloudstore/cloudstore/) like gdrive, dropbox, b2, s3 and more
- [Asset column](https://daptin.github.io/daptin/cloudstore/assetcolumns/) to hold file and blob data, backed by storage
- [Multiple websites](https://daptin.github.io/daptin/subsite/subsite/) under separate sub-domain/sub-paths
- [Connect with external APIs](https://daptin.github.io/daptin/integrations/overview/) by using extension points
- [Data View Streams](https://daptin.github.io/daptin/streams/streams/)
- Flexible [data import](https://daptin.github.io/daptin/setting-up/data_import/) (auto create new tables and automated schema generation)
  - XLSX
  - JSON
  - CSV

Define Schema

<img src="https://github.com/daptin/daptin/raw/master/images/api.jpg">

Find
<img src="https://github.com/daptin/daptin/raw/master/images/apigetall.png">

Get By Id
<img src="https://github.com/daptin/daptin/raw/master/images/apigetbyid.png">

Create
<img src="https://github.com/daptin/daptin/raw/master/images/apicreate.png">

Delete
<img src="https://github.com/daptin/daptin/raw/master/images/apidelete.png">

Delete relations
<img src="https://github.com/daptin/daptin/raw/master/images/apideleterelated.png">

List relations
<img src="https://github.com/daptin/daptin/raw/master/images/apifetchrelated.png">

- Versioning of the data
- Authentication and authorization
- JSON API endpoint
- GraphQL endpoint
- Actions and integrations with external services

## Get Started

- [Native binary](https://docs.dapt.in/setting-up/installation/#native-binary)
- [Heroku](https://docs.dapt.in/setting-up/installation/#heroku-deployment)
- [Docker image](https://docs.dapt.in/setting-up/installation/#docker-image)
- [Kubernetes YAML](https://docs.dapt.in/setting-up/installation/#kubernetes-deployment)

## Features

- Declarative Data Modeling system
  - Unique/Primary keys
  - Single/Multiple Relation
  - Normalizations and conformations
  - Scripting using JS
- CRUD JSON APIs' for all tables
  - Create, Read, Update, Delete
  - Sort, filter, search, group by single/multiple columns
  - Authentication and Group based authorization
  - Pluggable middleware, conformations and normalizations
  - Trigger actions/pipelines
- GraphQL APIs
  - Read and Mutations APIs for all tables
  - One level of relationship fetching
- Client SDK libraries for all platforms
- Rich data types
  - Column types ranging from number to json to file/image assets
- Sub sites hosting
  - Expose multiple websites from a single instance
  - Connect multiple domains/sub-domains
- Pluggable Social Auth, Basic Auth or Username/Password Auth
- Cloud storage
  - Connect to external cloud storage services seamlessly
  - Pull data/Push data
- Action APIs
  - Define work-flows
  - Expose custom endpoints for other services
- Ready to use web dashboard
  - Responsive to desktop, mobile and table
- Cross platform
  - Windows, Mac, Linux and more

### APIs

- CRUD APIs
  - [Read, search, filter](https://docs.dapt.in/apis/read)
  - [Create](https://docs.dapt.in/apis/create)
  - [Update](https://docs.dapt.in/apis/update)
  - [Delete](https://docs.dapt.in/apis/delete)
  - [Relations](https://docs.dapt.in/apis/relation)
  - [Execute](https://docs.dapt.in/apis/execute)
- Action APIs
  - [Using actions](https://docs.dapt.in/actions/actions)
  - [Actions list](https://docs.dapt.in/actions/default_actions)
- User APIs
  - [User registration/signup](https://docs.dapt.in/actions/signup)
  - [User login/signin](https://docs.dapt.in/actions/signin)
- State tracking APIs
  - [State machines](https://docs.dapt.in/state/machines)

### Users

- [Guests](https://docs.dapt.in/auth/guests)
- [Adding users](https://docs.dapt.in/auth/users)
- [Usergroups](https://docs.dapt.in/auth/usergroups)
- [Data access permission](https://docs.dapt.in/auth/permissions)
- [Social login](https://docs.dapt.in/auth/social_login)

### Asset and file storage

- [Cloud storage](https://docs.dapt.in/cloudstore/cloudstore)

### Sub-sites

- [Creating a subsite](https://docs.dapt.in/subsite/subsite)
