---
title: SkyScribe
homepage: https://skyscribe.app
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: A writing and publishing CMS built on the AT Protocol, Bluesky's open network. Content is stored as open site.standard records in the author's own account and fetched into any site with the MIT-licensed SkyScribe SDK.
---

[SkyScribe](https://skyscribe.app) is a CMS built on the [AT Protocol](https://atproto.com), the open network behind Bluesky. Authors sign in with their Bluesky account and write in a rich-text editor. Each article is saved as an open [site.standard](https://standard.site) record in the author's own account, on their own Personal Data Server (PDS), not in a vendor database. If an author stops using SkyScribe, their writing stays in their account, and any other site.standard app can read it.

### Use it headless

The [SkyScribe SDK](https://sdk.skyscribe.app) (MIT, [source](https://github.com/ACregan/skyscribe-sdk)) fetches that content into your own site:

- `@skyscribe-sdk/core`: framework-agnostic TypeScript with no runtime dependencies. It fetches a Publication, its Categories and Documents, and generates RSS feeds and sitemap entries.
- Adapters for React, Vue, Angular, Next.js, Nuxt and React Router (framework mode).
- `@skyscribe-sdk/styles`: optional default styles for article content.

Content is read from the public AT Protocol network, so no API keys are needed.

### Or let SkyScribe host it

A wizard designs a site from starter templates. A paid plan publishes it as a hosted SkyScribe Site, with your own domain.

### Pricing

Writing, and showing your content on your own site with the SDK, is free. Hosted sites are a paid plan.
