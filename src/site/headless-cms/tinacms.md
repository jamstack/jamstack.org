---
title: Tina
repo: tinacms/tinacms
homepage: https://tina.io
twitter: tinacms
opensource: "Yes"
typeofcms: "Git + API"
supportedgenerators:
  - All
description: TinaCMS is a free and open-source headless CMS focused on providing the best developer experience for building web sites and applications.
---

[TinaCMS](https://tina.io) is a free and open-source headless CMS focused on providing the best developer experience for building web sites and applications. Tina has two main components: 

* An open-source admin UI (with support for visual editing)
* An open-source GraphQL API for serving content

For people who don’t want to self-host their CMS, [Tina Cloud](https://tina.io/) provides a hosted option.

<video class="w-full h-auto" autoplay="" loop="" muted="" playsinline="" poster="https://res.cloudinary.com/forestry-demo/video/upload/so_0/tina-io/new-homepage/homepage-demo-2.jpg"><source src="https://res.cloudinary.com/forestry-demo/video/upload/q_80,h_562/tina-io/new-homepage/homepage-demo-2.webm" type="video/webm"><source src="https://res.cloudinary.com/forestry-demo/video/upload/q_80,h_562/tina-io/new-homepage/homepage-demo-2.mp4" type="video/mp4"></video>

## Try it out
Create a testing site:

```
npx create-tina-app@latest
```

Or request a [demo](mailto:info@tina.io).

## Why Tina?
Tina is an open-source headless CMS that does two things differently:

### 1. Git Sync
Like other headless CMSs, Tina provides a GraphQL API to query your content. However, Tina generates its API from content stored in Markdown and JSON files in a Git repository.  This allows you to use the file system as the source of truth for your content instead of a database but gives you an API to query that content (i.e. `post.author.name`).

Tina Cloud Enterprise customers can leverage Tina’s [Editorial Workflow](https://tina.io/editorial-workflow) for advanced Git features like branching and Pull Requests. 

### 2. Visual Editing
Tina supports visual editing for sites using React (and soon Vue & Svelte). This means your content creators get a live preview when editing content.  This allows you to give content creators a site-builder experience with block-based editing that feels similar to Wix or Squarespace.  

## Enterprise Features
For Tina Cloud Business and Enterprise customers, Tina’s editorial workflow makes working on Branches and making Pull Requests user friendly. 

<video class="w-full h-auto" controls="" loop="" muted="" playsinline="" poster="https://res.cloudinary.com/forestry-demo/video/upload/so_0/v1689260393/blog-media/editorial-workflow/create-branch.jpg"><source src="https://res.cloudinary.com/forestry-demo/video/upload/q_80,h_562/v1689260393/blog-media/editorial-workflow/create-branch.webm" type="video/webm"><source src="https://res.cloudinary.com/forestry-demo/video/upload/q_80,h_562/v1689260393/blog-media/editorial-workflow/create-branch.mp4" type="video/mp4"></video>

## Who's using Tina? 
Tina is used by agencies, Fortune 500 companies, and governments to power various types of sites.  Tina can scale to sites with 10’s of thousands of Markdown-based pages, such as [smashingmagazine.com](smashingmagazine.com).

## Resources
* [Tina Documentation](https://tina.io/docs/)
* 20-minute video tutorial with Tina's architect [https://www.youtube.com/watch?v=PcgnJDILv4w](https://www.youtube.com/watch?v=PcgnJDILv4w)
* 5-part tutorial video series [here](https://tina.io/blog/Introducing-the-Deep-Dive-Video-Series/)
* [Tina for Enterprise](https://tina.io/enterprise/)
