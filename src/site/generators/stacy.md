---
title: Stacy
repo: boylesoftware/stacy
homepage: https://github.com/boylesoftware/stacy
language:
  - JavaScript
license:
  - MIT
templates:
  - Handlebars
description: Website generator that combines content from Contentful CMS with Handlebars templates and publishes the website in Amazon S3.
---

## About Stacy

Stacy is a website generator that combines content from [Contentful CMS](https://www.contentful.com/) with [Handlebars](https://handlebarsjs.com/) templates to create the website pages. A few highlights:

- The website content is stored in [Contentful CMS](https://www.contentful.com/) where the content authors work with it.
- Templates, used to generate pages from content entries in Contentful, as well as static content (stylesheets, fonts, images used in the website design, etc.) are part of a version controlled (e.g. git) project. Templates use [Handlebars](https://handlebarsjs.com/) extended with a few Stacy helpers allowing inclusion of nested content entries, rendering assets, rich text, etc.
- The website is published in [Amazon S3](https://aws.amazon.com/s3/), from where it is served.
- When content changes, Contentful notifies Stacy in AWS via a webhook, which allows Stacy to automatically regenerate and republish affected pages.

The automatic site regeneration upon content changes is the main distinguishing feature of Stacy. It takes Stacy beyond simple static site generation and combines CMS managed content with speed and simplicity of hosting a static website.
