---
title: LessHeadCMS
repo: elverdaderobutschito/LessHeadCMS
homepage: https://lessheadcms.com
twitter: LessHeadCMS
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Diagram-first headless CMS. Define your content model as a PlantUML class diagram and get real database tables, a REST API and a generated editorial UI. Runs on plain PHP shared hosting with SQLite, no Node.js, Docker or build step.
images:
  - path: /img/cms/lessheadcms-editor.png
  - path: /img/cms/lessheadcms-schema.png
---

LessHeadCMS is a headless CMS where the content model is a diagram. You describe your entities, fields and relations as a PlantUML class diagram, and LessHeadCMS generates the database schema, a REST API and an editorial interface from it.

### Content modeling as a diagram
- The PlantUML file is the single source of truth for the schema
- Supports 1:1, 1:n and n:n relations, enums, inheritance, composite uniqueness and self-references
- Schema changes are applied to a filled installation without a reset: diff preview, data-loss warnings and an automatic backup before every migration

### Generated editorial UI
- Forms, lists with filtering and sorting, media library and WYSIWYG editing, generated from the field types
- Versioning per record with history, comparison and restore
- Approval workflows, fine-grained roles and permissions down to field level
- Multilingual content and a fully translatable backend

### Headless delivery
- Public REST API with pagination, filtering and sorting
- Read-only API users for frontends
- Webhooks to trigger static site builds on publish

### Runs anywhere PHP runs
LessHeadCMS is about 4 MB, uses SQLite and runs on standard shared hosting: upload via FTP, call the bootstrap URL once, done. No root access, no Composer, no Node.js at runtime.

LessHeadCMS is open source under the AGPL-3.0 license.
