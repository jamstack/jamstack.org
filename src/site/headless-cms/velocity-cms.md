---
title: Velocity CMS
repo: Velocity-Astro/velocity-cms
homepage: https://deployvelocity.com/cms
opensource: "Yes"
typeofcms: "Visual, API Driven"
supportedgenerators:
  - Astro
description: An open source CMS for Astro sites. Pages are built from sections and edited on the live page, forms feed a built-in CRM, and content lives in SQLite or libSQL on a host you choose.
images:
  - path: /img/cms/velocity-cms.jpg
    alt: The visual editor of Velocity CMS, with the page's sections by name, the live page and the site's theme
---

[Velocity CMS](https://deployvelocity.com/cms) is an open source (MIT) content management system for [Astro](https://astro.build) sites. It is added to a site as an Astro integration: people edit at `/admin`, the content lives in a small SQLite or libSQL database beside the site, and a published change is on the site about a second later, with no rebuild. It is in beta.

## Quickstart

In an Astro site with a server adapter:

```sh
npx velocity-cms init you@example.com "Your Name"
```

This installs the CMS, adds it to the Astro config, makes you the owner and prints a link that signs you in at `/admin`. Read more in the [docs](https://docs.deployvelocity.com/cms/) or try the [demo](https://realestate.deployvelocity.com/demo/).

## Key features

- **Visual editing with sections**: pages are built from the site's own sections, with the live page beside the form. Words are typed on the page, and sections are moved, added and removed there.
- **Content types**: made in a visual builder or described in code. Drafts and published versions, history with restore, scheduled publishing, preview links and several languages.
- **Forms with a built-in CRM**: a form builder, forms as page sections and spam checks. Everyone who writes in becomes a contact with a timeline, a pipeline stage and deals.
- **Live pages**: pages are rendered on demand from a cache that a publish clears. A fully static build is an option.
- **Plugins**: SEO, analytics, redirects and webhooks come with it, switched on in the editor by an owner.
- **Built for AI agents**: an MCP server and a command line on every site, with access tokens that act as an editor or an author.
- **Self-hosted**: runs on Node on a server or on Vercel, with a SQLite file or a hosted libSQL database. Sign-in is by email link or passkey, with no passwords.
