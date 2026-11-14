---
title: Draftbase
homepage: https://draftbase.co
twitter: draftbase
opensource: "No"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: MCP-native headless CMS for React and Next.js developers. Typed MDX components, REST and GraphQL delivery, and an efficient remote MCP server for AI agents.
---

## Draftbase

Draftbase is a hosted headless CMS. You define templates with typed fields, your team writes entries in a web admin, and your site pulls them over REST or GraphQL. The delivery API doesn't care about your framework. The example repos use Astro and Next.js.

### MDX with typed props

MDX is first-class. You register MDX components with typed props, and `@draftbase/renderer` renders them in React Server Components. So an editor can drop `<PricingTable plan="startup" />` into a post and it renders as your own React component.

### MCP-native

Draftbase ships a remote MCP server at `https://mcp.draftbase.co/mcp`. It has 30 tools and signs in over OAuth, so there's no API key to paste into your agent config.

It's efficient with context, too. `list_entries` takes a `fields` list, so the agent pulls only the keys it needs. Batch tools change status on many entries in one call.

```
claude mcp add --transport http draftbase https://mcp.draftbase.co/mcp
```

Agents can draft and edit freely. Publishing is a separate tool call you can choose not to allow.

### Try it out

```
npx @draftbase/create my-site
```

Hobby is free with no card. Paid plans start at $49/mo, and the [pricing](https://draftbase.co/pricing) is on the page.

## Resources

* [Documentation](https://draftbase.co/docs)
* [MCP server docs](https://draftbase.co/docs/mcp)
* [TypeScript SDK](https://github.com/draftbase-co/sdk)
* [Example repos](https://github.com/draftbase-co)
