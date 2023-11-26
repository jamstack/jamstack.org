---
title: Sveltia CMS
repo: sveltia/sveltia-cms
homepage: https://github.com/sveltia/sveltia-cms
opensource: "Yes"
typeofcms: "Git-based"
supportedgenerators:
  - All
description: Sveltia CMS is a Git-based lightweight headless CMS under active development as a modern, quick replacement for Netlify/Decap CMS. Open source. Lightweight. UX-driven development. Made with Svelte.
images:
  - path: /img/cms/sveltia-cms1.png
  - path: /img/cms/sveltia-cms2.webp
  - path: /img/cms/sveltia-cms3.webp
  - path: /img/cms/sveltia-cms4.webp
  - path: /img/cms/sveltia-cms5.webp
  - path: /img/cms/sveltia-cms6.webp
---
Sveltia CMS is a Git-based lightweight headless CMS under active development as a modern, quick replacement for Netlify/Decap CMS. You can use it with your favourite static site generator like SvelteKit, Eleventy, Next.js and Hugo to manage content as static files in a Git repository. The free open source alternative to Netlify/Decap CMS is now in public beta — with more features to come.

## Features

Here are some highlights mainly compared to Netlify/Decap CMS:

### Compatible with Netlify/Decap CMS

- Ready to replace Netlify/Decap CMS _in some casual use case scenarios_ by updating a single line of code.
- Your existing [configuration file](https://decapcms.org/docs/configuration-options/) can be reused as is.
- Various features are still missing though — look at the compatibility chart below to see if you can migrate.

### UX

- Created and maintained by an [experienced UX engineer](https://github.com/kyoshino) who loves code and design. You can expect constant UX improvements across the platform.
- Offers a modern, intuitive user interface, including an immersive dark mode, inspired in part by the Netlify CMS v3 prototype.
- Comes with touch device support. While the UI is not yet optimized for small screens, large tablets like iPad Pro or Pixel Tablet should work well.

### Performance

- Built completely from scratch with Svelte instead of forking React-based Netlify/Decap CMS. The app starts fast and stays fast. The compiled code is vanilla JavaScript — you can use it with almost any framework.
- Small footprint: less than 300 KB when minified and gzipped, compared to 1.5 MB of Netlify/Decap CMS. And [no virtual DOM overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).
- Uses the GraphQL API for GitHub to quickly fetch content at once, so that entries and assets can be listed and searched instantly. This avoids the slowness and potential API rate limit violations caused by hundreds of requests with relation widgets[^14].
- Saving entries and assets is also much faster thanks to the [GraphQL mutation](https://github.blog/changelog/2021-09-13-a-simpler-api-for-authoring-commits/).
- Caches Git files locally to further speed up startup and reduce bandwidth.

### Productivity

- You can work on a local Git repository without having to run a proxy server on your machine.
- You can delete multiple entries and assets at once.
- Some keyboard shortcuts are available for faster editing. More to come!
  - Create a new entry: `Ctrl+E` (Windows/Linux) / `Command+E` (macOS)
  - Save an entry: `Ctrl+S` (Windows/Linux) / `Command+S` (macOS)
  - Search for entries and assets: `Ctrl+F` (Windows/Linux) / `Command+F` (macOS)
- Solves various outstanding Netlify/Decap CMS bugs[^11].

### Accessibility

- Improved keyboard handling lets you efficiently navigate through UI elements using the Tab, Space, Enter and arrow keys[^17].
- Comprehensive [WAI-ARIA](https://w3c.github.io/aria/) support empowers users who rely on screen readers such as NVDA or VoiceOver.
- Honours your operating system’s [reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) and [reduced transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) settings.
- We’ll continue to test and improve the application to meet [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/).

### i18n support

- It’s now easier to switch between locales while editing with just a click on a button instead of a dropdown list.
- Fields in non-default locales are validated as expected.
- Integrates DeepL to allow translation of text fields from another locale with one click.
- You can disable non-default locale content.
- You can use a random UUID for an entry slug, which is a good option for locales that write in non-Latin characters.
- Resolves the limitations in the list and object widgets so that changes made with these widgets will be duplicated between locales as expected when using the `i18n: duplicate` field configuration.

### Collection enhancements

- You can choose a custom icon for each collection.
- A per-collection media folder will appear next to the entries.
- String values in YAML files can be quoted with the new `yaml_quote: true` option for a collection, mainly for framework compatibility.

### Field enhancements

- Required fields, not optional fields, are clearly marked for efficient data entry.
- Provides a reimagined all-in-one asset selection dialog for file and image fields.
  - Collection-specific assets will be listed first for easy selection, while all assets can also be displayed in a separate tab.
  - New assets can be uploaded by dragging & dropping them into the dialog.
  - A file/image URL can also be entered in the dialog.
  - Integration with Pexels, Pixabay and Unsplash makes it easy to select and insert free stock photos.
- Optional object fields (`widget: object` with `required: false`) can be manually added or removed. If removed, the required subfields will no longer trigger validation errors.
- You can revert changes to all fields or a specific field.

### Asset management enhancements

- A completely new Asset Library, built separately from the image selection dialog, makes it easy to manage all of your files, including images, videos and documents.
- You can sort or filter assets by name or file type and view asset details, including size, dimensions, and a list of entries that use the selected asset.
- You can upload multiple assets at once, including files in nested folders, by browsing or dragging & dropping them into the media library.
- You can navigate between the global media folder and per-collection media folders.

## Read more

- [Motivation](https://github.com/sveltia/sveltia-cms/tree/main#motivation)
- [Features](https://github.com/sveltia/sveltia-cms/tree/main#features)
- [Compatibility](https://github.com/sveltia/sveltia-cms/tree/main#compatibility)
- [Roadmap](https://github.com/sveltia/sveltia-cms/tree/main#roadmap)
- [Getting started](https://github.com/sveltia/sveltia-cms/tree/main#getting-started)
- [Tips & tricks](https://github.com/sveltia/sveltia-cms/tree/main#tips--tricks)
- [Support & feedback](https://github.com/sveltia/sveltia-cms/tree/main#support--feedback)
- [Contributions](https://github.com/sveltia/sveltia-cms/tree/main#contributions)