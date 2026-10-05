---
title: blog.sh
repo: DanielSnor/blog.sh
homepage: https://blogsh.app
language:
  - Ruby
license:
  - MIT
templates:
  - ERB
  - Markdown
description: A blog engine you run from a terminal, where posts are JSON files and comments live on the Fediverse.
---

./blog.sh is a static site generator for blogs, written in Ruby's standard library and bash -- no gems, no npm, no lockfile. The build turns JSON posts into static HTML through ERB templates: a paginated index, tag, series and type archives, RSS, a sitemap and full-text search, and a page whose inputs have not changed is not rendered again. One post is one JSON file of typed blocks, and authoring happens in an interactive terminal wizard instead of a browser admin.

### Comments without a comment system

Every published post is announced on Mastodon or Bluesky, and the replies to that announcement are the post's comments, loaded by the reader's browser from the public API. There is no comment database to host, moderate or migrate.

### Bring your archive

Twenty-two import sources, from Tumblr, Twitter/X and WordPress exports to Mastodon, Bluesky, Ghost and any RSS or Atom feed, land in the same schema as a hand-written post. Media is downloaded and stored next to its post rather than hotlinked, so a dead CDN does not take the images with it.

### Deploy anywhere

Six backends -- Surfer, local copy, rsync, git/Pages, rclone (which also reaches plain FTP hosts) and SFTP -- sit behind one manifest-driven diff with SHA-256 checksums, dry runs, opt-in pruning, and shrink and growth guards that refuse to publish a build that suddenly lost half its pages.
