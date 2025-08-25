---
title: NotCMS
repo: qqpann/notcms
homepage: https://notcms.com
twitter: notcmsjs
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: NotCMS is a type-safe headless CMS that transforms Notion into a powerful content backend. Write content in Notion's familiar interface and publish instantly to any framework with full TypeScript support.
images:
---

## What is NotCMS?

NotCMS makes it easy to create a CMS from Notion. It's a headless CMS that lets you use Notion's intuitive editor for content creation while providing developers with a type-safe TypeScript SDK for seamless integration with any frontend framework.

## Quickstart

Get started with NotCMS in minutes:

```bash
npm install notcms
```

Then use the type-safe SDK in your code:

```typescript
import { Client } from "notcms";
import { schema } from "./notcms/schema"; // generated w/ npx notcms-kit pull

const nc = new Client({ schema })
const [pages] = await nc.query.blog.list();
```

Visit [docs.notcms.com](https://docs.notcms.com) to explore starter templates.

## Key Features

### Developer experience

- **Sync database schema**: Command-generated TypeScript types represent your Notion schema
- **Simple list & get methods**: Clean, intuitive methods for fetching and querying content

### Content Management Excellence

- **Notion's powerful editor**: Leverage Notion's rich text editing, no need to learn another editor
- **Content as Markdown**: Rich text is auto converted to markdown, an easy to handle format
- **Images on CDN without expiration**: Fast, optimized image delivery out of the box

## How It Works

1. **Setup your Notion database** - Create content structures in Notion
2. **Install NotCMS SDK** - Add the npm package to your project
3. **Generate types** - Auto-generate TypeScript types from your schema
4. **Query your content** - Use the type-safe API to fetch content
5. **Deploy anywhere** - Ship to Vercel, Netlify, or any hosting platform

## Why NotCMS?

### Notion as Your CMS Backend

Your team already knows Notion. Why force them to learn another CMS? NotCMS lets you leverage Notion's collaborative editing, rich content blocks, and database features while maintaining full control over your frontend.

### Type Safety Throughout

Never worry about runtime errors from CMS data. NotCMS generates complete TypeScript types from your Notion schema, ensuring type safety from content creation to production deployment.

### No Vendor Lock-in

Your content lives in Notion, not a proprietary database. Export it anytime, migrate if needed, and maintain complete ownership of your data.

## Resources

- [Website](https://notcms.com)
- [Documentation](https://docs.notcms.com)
- [Dashboard](https://dash.notcms.com)
- [Templates](https://notcms.com/templates)
- [GitHub](https://github.com/qqpann/notcms)
