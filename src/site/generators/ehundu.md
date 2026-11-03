---
title: Ehundu
repo: ehundu/ehundu
homepage: https://www.ehundu.com
language:
  - PHP
license:
  - MIT
templates:
  - Twig
description: A static site generator in PHP that builds from the command line and also from inside a web process, on ordinary shared hosting.
---

Ehundu takes a folder of Markdown content, YAML data and Twig templates and produces a plain-HTML site. It is a PHP library first and a console command second, so an editing tool can save a change and publish the site right away. It needs PHP 8.4 or later and no external programs.

Core Features:
* Content & Templating: Markdown (CommonMark), YAML front matter and data files, and Twig templates, in a project format that has been a stable contract since 1.0.
* Multilingual sites, tag collections, pagination, sitemap and feed, PDFs of the pages that ask for them, and entries that publish and expire on a date.
* Incremental builds that redo only what a change affects.
* Deployment to a folder, over FTP or SFTP, or to S3-compatible storage, uploading only what has changed.
* Seven starters: minimal, blog, documentation, portfolio, local business, multilingual and event.

The format is in Spanish on purpose (folders such as `contenido` and `plantillas`), and the usual English names are also accepted, which makes migrating from Eleventy or Lume easier.
