---
title: Nuxt Studio
repo: nuxt-content/nuxt-studio
homepage: https://nuxt.studio
opensource: "Yes"
language:
  - TypeScript
typeofcms: "Git-based"
supportedgenerators:
  - Nuxt
description: Nuxt Studio is a free, open-source and self-hostable Nuxt module that lets teams edit Nuxt Content websites in production and commit changes straight to GitHub or GitLab.
---

Nuxt Studio adds a visual editing interface to websites built with Nuxt Content. Originally a standalone premium platform, it is now a free, MIT-licensed, self-hostable Nuxt module.

Editors make changes directly on the production site and Nuxt Studio commits them to the Git repository, letting your existing CI/CD pipeline rebuild and deploy the site. In development mode it edits content and media files on the local file system. Production publishing requires a deployment that supports server-side rendering, since authentication runs through a server route.

## Features

- TipTap visual editor with MDC component support, plus a Monaco code editor for Markdown, YAML and JSON
- Auto-generated forms for frontmatter and YAML/JSON files based on collection schemas
- Real-time preview on the production website
- Commits to GitHub or GitLab repositories
- OAuth login with GitHub, GitLab and Google, or a custom authentication flow
- Media library and interface available in 25 languages
