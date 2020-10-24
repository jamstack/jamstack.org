---
title: Qgoda
repo: gflohr/qgoda
homepage: http://www.qgoda.net/
language:
  - Perl
license:
  - MIT
templates:
  - Template Toolkit 2
description: A sophisticated, blog-aware static site generator with unprecedented multi-language features
startertemplaterepo: https://github.com/gflohr/qgoda-multilang
---

Qgoda is a sophisticated static site generator following the Do-The-Right-Thing&trade; philosophy. Micro-sites require zero-configuration, a blog is easily started with one of the sample themes, but you can always grow with your needs and create arbitrarily complex sites with Qgoda.

## Multi-Language

Qgoda offers multi-lingualism for free:

- Template translation based on [GNU gettext](https://www.gnu.org/software/gettext/).
- Built-in I18N-aware links and listings
- File-based translation facilities, _or_
- Complete website translation based on PO-files [see GNU gettext](https://www.gnu.org/software/gettext/)

## Arbitrary Taxonomies

Tags, categories, languages, sections, ... it's up to you.

## Language and Platform Agnostic

You can extend Qgoda in Perl, Python, Ruby, Java, other languages may follow.

Development web server or build system is completely up to you. The Qgoda default themes are based on [Webpack](https://webpack.js.org/) but go with Makefiles, shell scripts, ant or Maven if [NodeJS](https://nodejs.org/) is not your comfort zone.

## The Ideal Project Portal

The [Qgoda website](http://www.qgoda.net/) is an open-source, multi-lingual portal site for the open source project Qgoda, containing a [landing page](http://www.qgoda.net/), a [multi-lingual blog](http://www.qgoda.net/en/news/), and [extensive software documentation](http://www.qgoda.net/en/docs/). Qgoda is the ideal software for your open source project or community.

## Pronunciation

It is pronounced "yagoda" and it means strawberry in Bulgarian and other Slavic languages. The cyrillic letter "ya" is commonly transcribed as "q" because it resembles the original cyrillic letter "я".

## Getting Started

After [installing Qgoda](http://www.qgoda.net/en/docs/installation/) or getting the [Docker image](https://github.com/gflohr/qgoda#user-content-run-qgoda-in-docker-container) going, try one of the following inside an empty(!) directory of your choice:

- `qgoda init gflohr/essential`: a complete blog without any styling
- `qgoda init gflohr/default`: same as above but with development web server, webpack, ...
- `qgoda init gflohr/multilang`: same as above but multi-lingual
- `qgoda init gflohr/minimal`: if all of the above is just too much and you want to control everything yourself
