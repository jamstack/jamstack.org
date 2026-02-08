---
title: LeadCMS
repo: LeadCMS/leadcms.core
homepage: https://leadcms.ai
twitter: LeadCMS
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: LeadCMS is a free, open-source headless CMS and CRM platform built on .NET and PostgreSQL. It combines a modern developer-first content management system with an integrated CRM and AI-powered automations for content creation and lead management.
---

LeadCMS is an AI-first, open-source headless CMS built for Jamstack and large-scale websites. It uniquely combines a modern CMS and a full CRM in one platform, allowing teams to manage content, leads, marketing automation, and sales pipelines without stitching together multiple tools.

Everything in LeadCMS is API-first and framework-agnostic. Content and customer data can be consumed by any static site generator or frontend framework such as Next.js, Astro, Gatsby, or custom builds using the official JavaScript/TypeScript SDK.

LeadCMS was designed with AI in mind from the start. Teams can generate landing pages, blog articles, translations, and images in minutes, reply to visitor comments with AI, and continuously improve content quality without leaving the CMS.

For teams already managing content in Git-based markdown files, LeadCMS is a natural next step. You keep the same content structure locally, while editors work in a friendly Admin UI. Developers can pull and push content with a Git-style CLI; LeadCMS handles conflicts and prevents accidental overwrites, making collaboration safe as your content team grows.

The platform is built on a high-performance .NET backend with PostgreSQL and runs fully containerized via Docker. It can be deployed on-premises or in the cloud, giving teams full ownership of their data and infrastructure. A plugin-based architecture allows extending or replacing features without forking the core.

Released under the **MIT license**, LeadCMS is **free to use**, self-host, and customize.

## Product Overview

### It all starts with content

Every website exists to tell a story, and that is exactly what you do in LeadCMS. The content management section is where everything begins:

- Define the content types and formats your site needs. **Markdown and MDX are natively supported**, along with JSON, HTML, and more.
- Create new landing pages, blog posts, and documentation. Translate existing content into multiple languages or generate entirely new pieces using the built-in AI tools.
- LeadCMS understands your MDX component structure and content types. When you ask AI to generate content, it already knows the exact structure your site can render, with no manual cleanup required.

<img src="/img/cms/leadcms-conent-management.png" alt="LeadCMS content management - define types, filter, and manage all your content in one place" />

<img src="/img/cms/leadcms-generate-landing-page-with-AI.png" alt="Generate a new landing page with AI - pick a content type, describe what you need, and LeadCMS produces ready-to-publish content" />

### See what you ship: live preview for static sites

One of the biggest frustrations with static site generators is that content writers cannot see what the page looks like until a build is triggered. LeadCMS solves this with **built-in live preview**. Even though your site is statically generated, editors see changes rendered in real time as they type, right inside the Admin UI, side by side with the editor.

Content writers simply love it. There is no waiting for a build, no switching between tabs, and no guessing how the final page will look. The preview renders your actual site templates and MDX components, so what you see in the editor is exactly what your visitors will see.

<img src="/img/cms/leadcms-live-preview-as-you-edit.png" alt="LeadCMS live preview - edit content on the left and see the rendered page update in real time on the right" />

### Visuals that don't slow you down

No content can exist without visuals today - plain text is not enough. The media library lets you support your pages with images, and it does so in a way that keeps your website fast and your Lighthouse scores high.

How? Built-in media optimization ensures your site is not only fast at launch, but **stays fast over time**. Every new image is automatically optimized as it enters the CMS, so growing your media library never becomes a performance problem. LeadCMS supports modern formats like AVIF and WebP, and automatically transforms incoming images to your preferred output formats with boundaries you define, such as max width and max height.

Renaming or moving images is never a problem. LeadCMS automatically tracks media usage and updates all references across your text content, so links never break and you never have to fix paths by hand.

<img src="/img/cms/leadcms-media-management.png" alt="LeadCMS media library - browse, upload, and auto-optimise images for fast delivery" />

### Ship it without waiting for a developer

Once you are happy with the content, the next step is making it live. With static sites this usually means triggering a CI/CD pipeline, something a marketing team cannot do on their own.

LeadCMS solves that. It integrates with the most popular CI/CD tools and provides an easy-to-use deployment panel right inside the Admin UI. Marketing and content teams can deploy to any environment with a single click. **Multi-stage environments** (dev, preview, production) are natively supported.

<img src="/img/cms/leadcms-deployments-management.png" alt="LeadCMS deployments - one-click deploy to dev, preview, and production environments" />

### Not just a CMS, a Lead CMS

You build a website to attract clients and leads, so CRM is not an afterthought. It has been built in from day one. LeadCMS gives you everything you need to handle contact form submissions, newsletter subscribers, contacts, accounts, orders, comments, and more.

All of this comes with built-in AI tools that let you put customer relationship management on a whole new level - from automatic lead scoring to intelligent follow-ups.

<img src="/img/cms/leadcms-contacts-management.png" alt="LeadCMS CRM - manage contacts, track orders and revenue" />

<img src="/img/cms/leadcms-accounts-management.png" alt="LeadCMS CRM - accounts overview with revenue, orders, and employee data" />

### Everything at a glance

Finally, you need to know how your content, marketing, and sales efforts are performing. LeadCMS ships with built-in dashboards fine-tuned for each topic, giving you all the statistics you need at a glance - content growth, deployment health, CRM metrics, and more.

<img src="/img/cms/leadcms-content-growth-dashboard.png" alt="LeadCMS dashboard - content growth analytics and recent activity" />

### Built for AI, not for clicking

Everything in LeadCMS is built with AI in mind, for AI, and to empower every participant: developers, content writers, and marketing teams alike.

Because content in LeadCMS is primarily text-based (Markdown, MDX), you will never spend time manually assembling pages by clicking through a visual drag-and-drop editor. We believe that in the era of AI, that approach is outdated. AI can read text, generate text, and refine it, and it does it fast. Nobody can scale the amount of clicks you have to make manually, and while a visual editor may seem easy at first, the real cost shows up when you need to produce more of the same content, support multiple languages, or build a site that goes beyond a simple landing page.

You may need to learn Markdown and MDX to get started, but you will quickly realize you would never go back to clicking in a visual editor.

### Architecture & Technology

LeadCMS is designed for long-term scalability and maintainability. The backend is written in C# on .NET, backed by PostgreSQL for structured and JSON-based content storage. All functionality is exposed through a RESTful API, making it easy to integrate with any frontend or external service.

The system is fully containerized and can be deployed anywhere using Docker. A modular plugin system allows teams to customize or extend LeadCMS without modifying the core codebase.

Give it a try. We are thrilled and cannot wait to see what you can build and sell with **LeadCMS**.

### Resources

- [Getting Started](https://leadcms.ai/docs/getting-started/install/)
- [Documentation](https://leadcms.ai/docs)
- [GitHub](https://github.com/LeadCMS/leadcms.core)
- [SDK](https://github.com/LeadCMS/leadcms.sdk)
- [Blog](https://leadcms.ai/blog)
- [Community](https://github.com/LeadCMS/leadcms.core/discussions)
