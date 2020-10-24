---
title: Cuttlebelle
repo: cuttlebelle/cuttlebelle
homepage: https://cuttlebelle.com
language:
  - JavaScript
license:
  - GPL-3.0-only
templates:
  - React
description: The react static site generator that separates editing and code concerns
startertemplaterepo: https://github.com/cuttlebelle/website
---

> The react static site generator that separates editing and code concerns

## What is Cuttlebelle?

Cuttlebelle is a static site generator that uses react for layouts, let’s you use one
layout per page-partial and cleanly separates content from code.

You can extend Cuttlebelle with react components that
can make use of the power of the npm ecosystem.

## Modularize each page into partials

Each section of your page becomes a markdown file with front-matter. The content can
be written in [YAML](http://yaml.org/) or [markdown](https://github.com/chjj/marked.
A layout is nominated per partial.

## Write your layout in react

The layout is written in [JSX](https://facebook.github.io/jsx/) as a react component.
Each variable in your front-matter becomes a prop of the layout.

## Multiple layouts

Each page is divided into components that have their own layouts. Think of it like
little [Lego™ blocks](https://www.lego.com/) that make up your site.

With that you can build completely new page layouts by assembling them from your
smaller partials without having to touch code.

## Clean separation

Keeping your content free of any code empowers more users to change the content
of your site. And because we chunk it all up into partials, content authors are able
to build completely new layouts all by them-self without ever touching more complex code.

Separation also means searching through your content is easier and you can reuse
layout as well as content blocks easily.

## Easy templating

Cuttlebelle uses [JSX](https://facebook.github.io/jsx/) as the templating language.
This makes it very convenient to build simple layouts all the way to super complex ones
that fetch data from online APIs.

Now you can start testing your layouts with [Jest](https://facebook.github.io/jest/) or
any other react tester.

## No lock-in

With Cuttlebelle you’re not locked into any CMS and are able to move to
another solution as your websites scales.

All your content is in easy digestible markdown files and can be exported to
javascript objects.
