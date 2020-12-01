---
title: bashblog-ng
repo: dvwallin/bashblog-ng
homepage: https://github.com/dvwallin/bashblog-ng
language:
  - Bash
license:
  - GPL-3.0-only
templates: []
description: Bash script to create and manage blogs.
---

Bashblog-ng is based on bashblog. The reasons for forking an already great project
was two;

1. bashblog had not been updated in almost 3 years
2. I wanted features that was not part of the original project

Out of these two reasons bashblog-ng was born. A drop-in replacement for bashblog
with more features but still minimalstic.

--

Bashblog was created out of the necessity of a very, very simple way to post
entries to a blog by using a public folder [on my server], without any
special requirements and dependencies. Works on GNU/Linux, OSX and BSD.

How simple? Just type './bb.sh post' and start writing your blogpost.

Features:

- Ultra simple usage: Just type a post with your favorite editor and the
  script does the rest. No templating.
- No installation required. Download bb.sh and start blogging.
- Zero dependencies. It runs just on base utils (date, basename, grep, sed,
  head, etc)
- GNU/Linux, BSD and OSX compatible out of the box, no need for
  GNU coreutils on a Mac. It does some magic to autodetect which command
  switches it needs to run depending on your system.
- All content is static. You only need shell access to a machine with a
  public web folder. Tip: advanced users could mount a remote public folder
  via ftpfs and run this script locally
- Allows drafts, includes a simple but clean stylesheet, generates the RSS
  file automatically.
- Support for tags/categories
- Support for Markdown, Disqus, Twitter, Feedburner, Google Analytics.
- The project is still maintained as of 2016. Bugs are fixed, and new
  features are considered (see "Contributing")
- Everything stored in a single ~1k lines bash script, how cool is that?! ;)
