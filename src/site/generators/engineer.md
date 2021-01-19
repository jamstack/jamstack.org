---
title: Engineer
repo: tylerbutler/engineer
homepage: https://engineer.readthedocs.io/en/master/index.html
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
description: 'Featureless static website generator'
---
## Overview

At its core, Engineer is a static website generator. In other words, Engineer let’s you build a website from a bunch of files - articles written in Markdown, templates, and other stuff - and outputs another bunch of files - HTML, mostly - that you can then copy wherever you want.

Engineer was inspired by Brent Simmons, Marco Arment’s Second Crack, Jekyll, Octopress, and Hyde.

## Features

- Write posts from anywhere
    - Posts can be written/edited in Markdown and stored/synchronized using Dropbox or another file synchronization solution.
- Preview your site locally
    - Engineer includes a small development web server that you can use to preview your site locally without deploying anywhere.
- Manage your site remotely
    - Even baked sites need a little management, and many existing static generators require you to load up the terminal and execute a command to rebuild your site. Engineer lets you do that of course, but also provides Emma, a built-in mini management site (optional) that lets you do most of the common management tasks remotely.
- Themes make it easy to change your site’s appearance
    - Themes provide flexibility in the site look and feel without starting from scratch or rewriting a bunch of content. You can write your own Themes as well.
- Use LESS instead of CSS
    Engineer lets you use LESS instead of CSS if you’d like. LESS can either be preprocessed on the server (requires that lessc be installed on non-Windows systems) or processed client-side using less.js.
- It’s fast
    - Engineer outputs content quickly (and I’m working to make it even faster), and because the output content is completely static, it is blazingly fast to serve, scales up very well, and is completely independent of any specific web server or technology. Once generated, you can copy your site anywhere and use any web server you like. In addition, Engineer can optimize your JavaScript and CSS/LESS to minimize their size. Engineer is all about speed.

## Caveats

Despite all of these great features, there are some things that you might not like:

- Dynamic things require a bit more work
    - Static sites can feel limited if you’re accustomed to doing something super-dynamic every time a page is loaded. Most of these things can be handled using either client-side JavaScript (e.g. timeago.js) or clever uses of the Jinja 2 template system (see the navigation highlighting functionality in Engineer itself for an example of things that can be done).
- Might not fit your site’s needs
    - If you have a lot of one-off pages (Template Pages or other such things) then managing them can get a bit cumbersome. Engineer really excels when a majority of your site’s content has a similar look and feel and you can leverage the Metadata for a majority of your content. Engineer isn’t limited to blogs, per se, but it does make some assumptions that most of your content comes in the form of articles.
- Only supports Markdown and Jinja 2
    - While ideally this will not always be true, currently Engineer requires your posts be written in Markdown and any templates you create be written in Jinja 2. This may change in the future, but for now you have to use those two languages.
- Engineer is not a CMS
    - If you’re looking for a full-blown content management system, then... keep looking. Engineer is decidedly not what you want. Engineer operates on the basic principle that your content is stored in text files with minimal metadata in the files themselves, so if you’re looking for rich URL management, image/file manipulation capabilities, etc., Engineer will make you very sad. It’s not designed to do that stuff.
