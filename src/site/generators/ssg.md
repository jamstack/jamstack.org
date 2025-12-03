---
title: Ssg
repo: romanzolotarev/ssg
homepage: https://romanzolotarev.com/ssg.html
language:
  - Bash
license:
  - ISC
templates:
  - Markdown
  - HTML
description: a static site generator written in shell.
---

ssg converts markdown files to html with lowdown(1) or markdown.pl,
copies *.html files with <HTML> tag as they are. for the rest of
.html files ssg extracts their titles from <H1> tag, prepends
_header.html, appends _footer.html, copies from src to dst directory,
and generates sitemap.xml, ignores files with name .* or listed in
src/.ssgignore
