---
title: idlisite
repo: wiosdesigns/idli.site
homepage: https://github.com/wiosdesigns/idli.site
language:
  - Python
license:
  - MIT
templates:
  - Google Docs
description: idli.site generates static sites from published Google Docs documents
---

idli.site generates a static web page from your Google Docs content

## How?
- Fork or clone the GitHub repo
- On your google doc, click on File > Publish to the web; get the link.
- Paste the link in the build.py file, against the 'url' variable 
- Run build.py to generate your website
- After changing content on Google Doc, rebuild the website by running build.py again
- This pipeline can be automated with [netlify.com](https://netlify.com)
