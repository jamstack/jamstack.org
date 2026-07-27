---
title: CMS Brew
homepage: https://cmsbrew.com
opensource: "No"
typeofcms: "Git-based"
supportedgenerators:
  - Next.js
  - Astro
  - SvelteKit
  - Hugo
  - Nuxt
  - Gatsby
  - Remix
  - Vue
description: >
  CMS Brew is a Git-based CMS where the client edits the site by chatting
  instead of using an admin UI. It maps the editable content in an existing
  repository automatically, with no schemas or config files, and sends risky or
  out-of-scope requests back to the developer for approval.
---

## CMS Brew

CMS Brew is a Git-based CMS built for the handoff problem: an agency or freelancer
ships a site, and the non-technical client still needs to change a phone number or
update opening hours. Instead of learning an admin interface, the client describes
the change in chat and CMS Brew finds the relevant content in the repository and
applies the edit as an ordinary commit. Small, low-risk changes can publish
directly; anything larger or riskier is escalated to the developer to review and
approve.

Connecting a repository needs no schema definitions, config files, or markup
changes to the site. CMS Brew scans the repo and maps the editable text and images
itself, including page content, components, frontmatter, and data files.

### Features

- Chat as the primary editing surface, so the client never has to learn a CMS UI
- Automatic content mapping on connect, with no config file or schema to define
- Per-category guard tiers (open, warn, review) that decide what publishes
  directly and what needs developer approval
- Escalation flow that turns an out-of-scope client request into a ticket for the
  developer instead of a broken page
- Edits land as plain commits on GitHub or GitLab, with version history and revert
- Per-page scoping and multilingual sites, plus image upload with resizing and
  generated alt text
- Built-in AI, so clients do not need their own model subscription

### Benefits

- Takes the small-edit queue out of the developer's inbox without handing the
  client a dashboard they can break
- Keeps Git as the source of truth, so ownership, history, and review stay with
  the developer
- Works against an existing site rather than requiring content to be restructured
  for a CMS
- Fits maintenance and care-plan work, where the developer stays the approver

For more information, visit the [CMS Brew website](https://cmsbrew.com) or try the
[live demo](https://cmsbrew.com/demo), which needs no signup.
