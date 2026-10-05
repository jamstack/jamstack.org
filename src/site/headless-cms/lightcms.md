---
title: LightCMS
repo: jonradoff/lightcms
homepage: https://metavert.io/lightcms
twitter: jradoff
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: LightCMS is an open-source (MIT), self-hosted CMS written in Go with MongoDB. It is designed to be run by AI agents as well as people: everything is available through a REST API and an MCP server, and it also serves pages itself as pre-rendered static HTML.
---

LightCMS is a lightweight, self-hosted content management system built in Go on MongoDB. You can use it in two ways: as a traditional CMS that renders and serves your site as pre-generated static HTML, or as a headless content API behind any frontend or static site generator.

Everything in the admin UI is also available through a REST API and an MCP (Model Context Protocol) server, so you can create, edit and publish content from Claude, Cursor or any other MCP client, or from your own scripts and build pipelines.

### Highlights

- **Content API:** templates with typed fields (text, rich text, Markdown, image, date, select), folders, collections, tags, redirects, and full version history with rollback.
- **Agent-safe editing:** agents can work in sandboxed forks that go live only after a person reviews and merges the diff. Every change records who or what made it, and an agent session can be rolled back in one step.
- **Built for search and AI crawlers:** pre-rendered static HTML, schema.org structured data, `llms.txt`, a Markdown copy of every page, RSS/Atom feeds, IndexNow notifications, and controls for which AI crawlers may train on or index your content.
- **Bulk operations:** create or update up to 100 pages per call, multi-pair search and replace, and dynamic index pages built from tag and category queries.
- **Operations:** multi-user roles, audit log, approval workflows, webhooks, hybrid full-text and semantic search, built-in analytics (including traffic from AI crawlers), and Fly.io or Docker deployment.

### Resources

- [GitHub](https://github.com/jonradoff/lightcms)
- [Project page](https://metavert.io/lightcms)
- [Changelog](https://github.com/jonradoff/lightcms/blob/main/CHANGELOG.md)
