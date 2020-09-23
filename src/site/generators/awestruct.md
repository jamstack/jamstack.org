---
title: Awestruct
repo: awestruct/awestruct
homepage: http://awestruct.org/
language:
  - Ruby
license:
  - MIT
templates:
  - Haml
description: A static site-baking tool
---

Awestruct is a framework for creating static HTML sites, inspired by the Jekyll utility in the same genre.

Awestruct makes it trivially easy to create non-trivial static websites using tools like Compass, Markdown, and Haml, as well as common frameworks like Twitter Bootstrap and Blueprint.

The core concept of Awestruct is that of structures, specifically Ruby `OpenStruct` structures. The struct aspect allows arbitrary, schema-less data to be associated with a specific page or the entire site.

Site-specific data is automatically loaded from simple YAML files, while data can be provided on pages using a front-matter prolog.
