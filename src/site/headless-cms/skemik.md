---
title: Skemik
repo: plue-gmbh/skemik
homepage: https://skemik.com
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: The database that ships its own data model, 30 curated schema.org types.
images:
  - path: https://releases.skemik.org/screenshot.jpg?1.0.0
---

Skemik is a headless backend for small companies and organisations whose data
model is already there: 30 curated schema.org types, the same in every
install, their fields named and typed before you start. No empty tool to
design first, no column called `Date2`.

Editors work in the admin; everything else works at one address, the feed.

- **Read with no key**: every collection and record answers as schema.org
  JSON-LD, or as Markdown, CSV or HTML, filtered, sorted and searched by query
  string.

- **Write with a key**: a program posts JSON-LD with a scoped key, and the
  record lands as a draft the house publishes.

- **Any generator**: a site built with Astro, Eleventy, Hugo, Next.js or plain
  PHP reads the same address. Skemik ships no frontend on purpose.

- **Runs on a webspace**: PHP and SQLite, no build step, no Composer, no
  daemon. Daily snapshots and automatic, signed updates are built in.

Source available under the Business Source License 1.1, which turns into AGPLv3
on each release's Change Date. Running it for clients is free.

## Get started

Download a release from
[GitHub](https://github.com/plue-gmbh/skemik/releases), run it with PHP's
built-in server, and read your first record with `curl` in five minutes: see
the [Quickstart](https://github.com/plue-gmbh/skemik#quickstart).
