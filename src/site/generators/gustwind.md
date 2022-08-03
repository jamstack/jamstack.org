---
title: Gustwind
repo: gustwindjs/gustwind
homepage: https://gustwind.js.org/
language:
  - JavaScript (Deno)
license:
  - MIT
templates:
  - JSON
description: 🐳💨 Deno powered JSON oriented site generator 🦕
---

**🐳💨 Gustwind** is an experimental site generator built on top of Deno. As you might have guessed, it's as fast as the wind itself.

It has been built on top of JSON based templates. Although this might sound backwards, the approach enables features such as in-site editors (you can edit the site on itself (poc level)) and composition while providing high performance. 

Architecturally Gustwind has been divided into several parts to consider aspects such as routing, data fetching/extraction/manipulation, and layouting.

It works well with the utility CSS approach (i.e. Tailwind or Twind) and HTML based state managers such as Sidewind or Alpine.js.

Technically it's in an early stage and only a few sites have been developed using it. While relying on JSON for defining the entire site except for content might feel constraining, it also has surprising benefits as you can literally render the site in-browser (enables the development of and editor on the site itself).
