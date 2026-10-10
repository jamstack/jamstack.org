---
title: Prose
repo: prose/prose
homepage: https://prose.io
opensource: "Yes"
typeofcms: "Git-based"
supportedgenerators:
  - All
description: A simple content authoring environment for CMS-free websites.
startertemplaterepo: https://github.com/prose/starter
images:
  - path: /img/cms/prose-edit-mode.jpg
  - path: /img/cms/prose-preview-mode.jpg
  - path: /img/cms/prose-files-browser.jpg
  - path: /img/cms/prose-save-changes.jpg
  - path: /img/cms/prose-metadata.jpg
  - path: /img/cms/prose-choose-language.jpg
---
## Prose
Prose provides a simple content authoring environment for CMS-free websites. It's a web-based interface for managing content on GitHub. Use it to create, edit, and delete files, and save your changes directly to GitHub. Host your website on GitHub Pages for free, or set up your own GitHub webhook server.

Prose has advanced support for static sites and markdown content. Prose detects markdown posts in static sites and provides syntax highlighting, a formatting toolbar, and draft previews in the site's full layout.

Developers can configure static sites to take advantage of these and many more features that customize the content editing experience.

## Features

### Image Uploading  
When editing markdown documents you can drag and drop images onto the page which are uploaded to a media directory you specify in your configuration or the current directory.

![Insert image](/img/cms/prose-insert-image.jpg)

### Mobile Layout
Prose is designed as a mobile ready application and is particularly well suited for the iPad.

### Markdown Features  
Prose pays particular attention to Markdown files by providing a formatting toolbar and in page previewing.

#### Configurations
Often you want to provide site maintainers access to create and edit content but not direct access to the source code that runs a project. Or you want a simple authoring environment that's focused on what matters to you. Configurations are a powerful way to customize what's provided during the day to day management of a site.

For non-jekyll sites, You can set up configurations by creating a `_prose.yml` file or add configurations as an entry to your Jekyll site in `_config.yml`.

## Read more
- [Prose.io "About" page](https://prose.io/#about)
- [Getting Started](https://github.com/prose/prose/wiki/Getting-Started)
- [Prose configuration](https://github.com/prose/prose/wiki/Prose-Configuration)
