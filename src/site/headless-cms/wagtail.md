---
title: Wagtail
homepage: https://wagtail.org/
repo: wagtail/wagtail
twitter: wagtailcms
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Wagtail is the leading open-source Python CMS. Based on Django, it supports both traditional and headless sites via REST and GraphQL APIs.
images:
  - path: /img/cms/wagtail-page-editor.png
---

Wagtail is an open-source CMS built on the Django web framework, focused on flexibility and user experience.

Its major features are:

- **StreamField**. An intuitive block-based page editor, so authors control how content is displayed and how data is organised.
- **Page tree**. A tree structure for the site’s pages, that makes content easy to find and organise.
- **Customizable page types**. Using Django models to easily create and extend a custom architecture.
- **Snippets**. Reusable components that editors can use over and over again.
- **Advanced image management**. Image library organisation, custom cropping tools, and advanced image optimisations.

Built upon Django, Wagtail projects can leverage an ecosystem of thousands of [Django packages](https://djangopackages.org/), as well as Wagtail-specific plugins.

## Headless features

Since Wagtail is built on the Django framework, you can integrate all Django features and third-party plugins. For example, if you don't want to use Wagtail's built-in REST API, you can build your own using [Django REST framework](https://www.django-rest-framework.org).

View the official Wagtail [Are we headless yet?](https://areweheadlessyet.wagtail.org/) website for an overview of Wagtail’s features for headless projects, such as:

- The [REST API](https://areweheadlessyet.wagtail.org/rest-api) to access site contents.
- Available [GraphQL packages](https://areweheadlessyet.wagtail.org/graphql).
- How to process [rich text](https://areweheadlessyet.wagtail.org/rich-text) based upon the needs of the site generator.
- And more details about common requirements, specific site generators, and hosting platforms.

## GraphQL usage

By using [wagtail-grapple](https://github.com/torchbox/wagtail-grapple), you can build GraphQL endpoints on a model-by-model basis as quickly as possible with a simple configuration. The library provides support for the following:

- Annotation-based schema generation
- Built-in support for Page, Snippets, Image, Documents, Media, Settings, Redirects models.
- Search and pagination
- Jamstack website preview functionality built with GraphQL subscriptions

## Jamstack sites built with Wagtail

Currently, there are governments, nonprofits, and publications using Wagtail on Jamstack. Here are prominent examples:

- [NASA Jet Propulsion Laboratory](https://www.jpl.nasa.gov/) – Nuxt
- [Hong Kong M+ Museum](https://www.mplus.org.hk/en/) – Nuxt
- [Visit Sweden](https://visitsweden.com/) – Next.js

## Popular Resources

- [Are we headless yet?](https://areweheadlessyet.wagtail.org/) – Overview of all the ins and outs of Wagtail on the Jamstack.
- [wagtail.org](https://wagtail.org/) – Official website.
- [guide.wagtail.org](https://guide.wagtail.org/) – User documentation.
- [docs.wagtail.org](https://docs.wagtail.org/) – Developer documentation.
- [wagtail.org/roadmap](https://wagtail.org/roadmap) – Public roadmap.
