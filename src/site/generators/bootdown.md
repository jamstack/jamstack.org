---
title: BootDown
repo: interstar/bootdown
homepage: http://project.geekweaver.com/
language:
  - Python
license:
  - AGPL-3.0-only
templates:
  - Markdown
description: Extremely simple static sites with Markdown and BootStrap.
---

Basically it's a Markdown to HTML processor, pre-packaged with BootStrap Bootswatches. And some extra tricks :

- A header section that lets you define a menu, footer, projectname, bootswatch, head_extra (extra code to put in page headers)
- A "page-break" option so that your single .md file becomes a number of HTML pages
- A very light-weight markup for defining divs with classes and ids using &lbrack;.CLASSNAME#ID and .&rbrack;
- A markup for including CSV files as tables.

Unlike most static site systems that are built around templating engines, with BootDown you write both your page content, and the structure in a single source file. Using &lbrack;. .&rbrack; for divs. This gives you all the flexibility you need to layout your pages any way you like, within the BootStrap grid.
