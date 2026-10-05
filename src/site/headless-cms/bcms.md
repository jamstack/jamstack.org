---
title: BCMS
homepage: https://thebcms.com/
repo: bcms/cms
twitter: thebcms
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: BCMS is a hosted, API-first headless CMS for developers and content teams, with TypeScript SDKs and official starters for Next.js, Nuxt, Astro, Svelte, and Gatsby.
images:
  - path: /img/cms/bcms-dashboard.jpg
    alt: BCMS dashboard
---

[BCMS](https://thebcms.com/) is a hosted headless CMS. You model content as templates, groups, and widgets, then fetch it from any frontend over a REST API. Clients edit in the dashboard. Sites use [`@thebcms/client`](https://www.npmjs.com/package/@thebcms/client) and generated TypeScript types.

The linked [bcms/cms](https://github.com/bcms/cms) repository is an MIT-licensed self-hosted snapshot. It has been unmaintained since October 2024. The product listed here is the hosted CMS at [thebcms.com](https://thebcms.com/).

## Features

- Content modeling with templates, groups, widgets, and a drag-and-drop field builder
- Media library with folders and on-the-fly image processing
- Localization, scoped API keys, serverless functions, and webhooks
- Official SDKs and starters for Next.js, Nuxt, Astro, Svelte, and Gatsby
- [MCP](https://thebcms.com/docs/mcp) so agents can read and update the same content editors manage in the dashboard

![Creating a content structure by dragging and dropping fields](/img/cms/bcms-drag-n-drop.gif)

## Get started

Scaffold a Next.js blog against a new BCMS project:

```sh
npx @thebcms/cli create next starter simple-blog
```

The same CLI accepts `nuxt`, `astro`, `svelte`, and `gatsby`. Step-by-step setup is in the [Next.js guide](https://thebcms.com/docs/next-js). Pull types with `npx @thebcms/cli --pull types`.

## Resources

- [Documentation](https://thebcms.com/docs)
- [Starters](https://thebcms.com/starters)
- [Next.js](https://thebcms.com/docs/next-js)
- [Nuxt](https://thebcms.com/docs/nuxt-js)
- [Astro](https://thebcms.com/docs/astro)
- [Svelte](https://thebcms.com/docs/svelte)
- [Gatsby](https://thebcms.com/docs/gatsby-js)
- [Discord](https://discord.com/invite/SYBY89ccaR)
