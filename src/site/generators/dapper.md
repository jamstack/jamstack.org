---
title: Dapper
repo: markdbenson/dapper
homepage: http://vanilladraft.com/dapper/
language:
  - Perl
license:
  - MIT
templates:
  - TT3
description: Dapper is a simple, flexible, and pragmatic static site generator written in Perl.
---

Dapper is a simple, flexible, and pragmatic static site generator written in Perl. Dapper takes your content (Markdown), combines with templates (based on the TT3 mini-language), and creates a set of static files that you can upload to your favorite webhost.

### Introduction

[Distributed as a Perl module](http://search.cpan.org/~mdb/App-Dapper/),
Dapper comes with a command-line application called `dapper` which you
can use to create static websites.

    $ cpanm App::Dapper
    $ dapper init
    $ dapper serve # Serve site at http://localhost:8000

### Goals

Dapper has three goals:

1. **Simple**. Learning Dapper is easy -- it gets out of the way so you can
   write content, develop layouts, and deploy to production the way you
   want.

2. **Flexible**. Content is written in
   [Markdown](http://search.cpan.org/~bobtfish/Text-MultiMarkdown/), and
   templates are written using the TT3 mini-language from
   [Template::Alloy](http://search.cpan.org/~abw/Template-Toolkit/) for
   maximum flexibility.

3. **Pragmatic**. The easy things are easy and the hard things are
   possible. Dapper was created to solve problems in a straight-forward
   and intuitive way.

### Rationale

Why static? Decent question. Here are some reasons:

1. **Fast**. Static pages are fast to load and easy to cache. Content
   management systems, on the other hand, may contact the database at
   least one time per page request, process the results, merge with a
   templating system, and serve the result to the user's web browser.

2. **Cheap**. Having a static website means that options for hosting those
   static files also just got a lot more simple. No database is needed and
   no real processing power for scripting is needed. For example, with a
   static website, it becomes possible to host the site on
   [Github Pages](https://pages.github.com/),
   [BitBalloon](https://www.bitballoon.com/), or
   [Amazon S3](http://aws.amazon.com/s3/) for free or for very modest fees.

3. **Secure**. It's much more secure to host a static website than a
   dynamic one. Content management systems that use scripting languages
   such as Perl, Python, or Ruby, all are more susceptible to being hacked
   than a static website is. Simply stated, why use a dynamic content-
   management system if a static setup will do?

4. **Portable**. With a static website, it's way easier to move the site
   to a new host in the future. All web hosts now and in the future
   support serving up a static website -- think of it as the lowest common
   denominator -- and so there's no need to pick a premium host with
   premium services.

### Background

Dapper was first written in 2002 to facilitate the creation of a series
of static websites that each had their own look and feel, but shared
content. Since then, Dapper has been used to create websites for speakers,
artists, authors, illusionists, web designers, piano tuners,
photographers, entertainment agencies, and API documentation for
industrial sensing equipment. In addition, it is the tool that powers
[Vanilla Draft](http://vanilladraft.com/).

In 2014, Dapper was submitted as a Perl module (App::Dapper) to
[CPAN](http://cpan.org/) under the MIT license for anyone to use for any
purpose.

### Features

- Written in perl, available as a command line utility after installing.
- Content is written in Markdown.
- Layouts are developed using TT3 from the Template::Alloy templating engine.
- Configuration files and attributes are encoded with YAML.
- URL mappings, plugins, filters, built-in development webserver, etc.

Find more infomration at [Vanilla Draft](http://vanilladraft.com/dapper/) or on [Github](https://github.com/markdbenson/dapper).
