---
title: Skemik
repo: plue-gmbh/skemik
homepage: https://skemik.com
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: The database that ships its own data model. 30 schema.org types, the same in every install, read and written at one address.
images:
  - path: /img/cms/skemik-address.jpg
    alt: Skemik's admin with the Pages collection and its JSON-LD feed open beside it
---

Skemik is a headless backend for small companies and organizations whose data
model is already there: 30 curated schema.org types, from Event and Course to
Product, Person and Invoice, the same in every install, their fields named and
typed before you start. No empty tool to design first, no column called
`Date2`. You only choose which fields a collection carries and which go public.

Editors work in the admin; everything else works at one address, the feed.

- **Read with no key**: every collection and record answers as schema.org
  JSON-LD, or as Markdown, CSV or HTML, filtered, sorted and searched by query
  string. Try the demo: `curl https://demo.skemik.org/feed/en-GB/events`

- **Write with a key**: a program, or an AI assistant that reads the install's
  profile, posts JSON-LD with a scoped key, and the record lands as a draft
  that an editor publishes.

- **Any generator**: a site built with Astro, Eleventy, Hugo, Next.js or plain
  PHP reads the same address, with no SDK and no sync. Skemik ships no frontend
  on purpose. [skemik.com](https://skemik.com) itself is built this way.

- **Runs on ordinary web hosting**: PHP 8.5 and SQLite, no build step, no
  Composer, no daemon. Copy a folder, open `/install`, and it runs within a
  minute. Daily snapshots and signed automatic updates are built in.

<img src="/img/cms/skemik-grant-key.jpg" alt="Issuing a key that may only create records in Reservations, valid until a set date">

## For editors

Because every type is known, the admin is a finished program rather than a
construction kit:

<img src="/img/cms/skemik-events-timeline.jpg" alt="Events collection in the timeline view, grouped by month">

- **Publish per field**: the city goes out, the street stays in. Four states
  from draft to archived, and scheduled records appear and ended ones
  disappear on their own.
- **Multilingual out of the box**: an article has a record per language, each
  with its own status.
- **Linked both ways**: the same person is author, customer and attendee, and
  a link can carry its own detail, such as "CTO, 2021–2024".
- **Five views per collection**: list, table, cards, grid and timeline, each
  editing in place, many records at once too.
- **Needs a look**: broken links, missing required fields, old drafts,
  expiring keys and failed backups surface on the home screen by themselves.

Three roles, login by emailed code, and an interface in seven languages.

<div class="grid grid-cols-2 md:grid-cols-3 gap-x-4">
<img src="/img/cms/skemik-fields-ready.jpg" alt="Field picker listing the ready-made, typed fields of an Article">
<img src="/img/cms/skemik-publish-per-field.jpg" alt="Field menu with a Public switch for a single field">
<img src="/img/cms/skemik-languages.jpg" alt="One page in three languages, each with its own slug and status">
<img src="/img/cms/skemik-points-here.jpg" alt="Records linking to this one, derived automatically">
<img src="/img/cms/skemik-five-views.jpg" alt="View menu with list, table, cards, grid and timeline">
<img src="/img/cms/skemik-needs-look.jpg" alt="Needs a look card with unread messages, missing alt text and an expiring key">
</div>

## License and hosting

The software is free to download and use. It is source available under the
Business Source License 1.1, which turns into AGPLv3 on each release's Change
Date. Agencies can install, run and maintain Skemik for any number of clients
free of charge; only hosting offered to the public needs a license. Managed
hosting in Germany and paid support are available from
[plue GmbH](https://skemik.com/#pricing).

## Get started

Download a [release](https://github.com/plue-gmbh/skemik/releases), copy it to
your web hosting and open `/install`, or run it locally with PHP's built-in
server and read your first record with `curl`: see the
[Quickstart](https://github.com/plue-gmbh/skemik#quickstart).
