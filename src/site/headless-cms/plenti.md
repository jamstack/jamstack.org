---
title: Plenti
repo: plentico/plenti
homepage: https://plenti.co
twitter: plentico
opensource: "Yes"
typeofcms: "Git-based"
supportedgenerators:
  - Plenti
description: A git-backed, open-source editor that ships with your site, has live previews, minimal configuration, and zero vendor lock-in.
---

The Plenti CMS is designed to work out-of-the box with zero configuration. It's a "Discoverable CMS" that reads your content source and provides a default editing experience that you can use locally or deploy to a remote site and use CI. You can define defaults, schemas, and components to progressively enhance your editing experience if you so choose.

## Preview

![plenti-gif](/img/cms/plenti.gif)

<details>
  <summary>OAuth from your Git Repo</summary>

  ![plenti-gif](/img/cms/plenti_oauth.gif)
</details>

<details>
  <summary>Media Management</summary>

  ![plenti-gif](/img/cms/plenti_media.gif)
</details>

<details>
  <summary>Component-based Architecture</summary>

  ![plenti-gif](/img/cms/plenti_components.gif)
</details>

<details>
  <summary>Git-Backend</summary>

  ![plenti-gif](/img/cms/plenti_git.gif)
</details>

## Highlights

- Entirely free and open source
- Plenti saves content as JSON
- Has no required keys / structure
- Ships with your website to a CDN
- Doesn't require any special hosting
- Is built with Svelte
- Doesn't require configuration
- Can optionally define widget types
- Extensible with custom widgets
- Supports component-based designs
- Has live-previews
- Uses OAuth (PKCE) from your git provider
- Includes media management

## Get Started

To use Plenti, having Svelte experience is helpful, but good working knowledge of HTML/CSS fundamentals should be sufficient.

You can download the [latest release](https://github.com/plentico/plenti/releases) from our repository (or use a package manager like snap or homebrew). 

Then simply:

- Create a site: `plenti new site my-site && cd my-site`
- Start your local webserver: `plenti serve`
- Navigate to the test login page in your browser: [http://localhost:3000/admin](http://localhost:3000/admin)
- Click the "Login" button

## Get Involved

Want to help out with Plenti's development? You can [write code](https://github.com/plentico/plenti/pulls), [report a bug](https://github.com/plentico/plenti/issues), or [ask a question](https://github.com/plentico/plenti/discussions) on GitHub.

We're completely self-funded and volunteer run, so if you'd like to support the project, please consider [making a donation](https://github.com/sponsors/plentico). Thank you!

To see behind the scenes work on the CMS check out our [devlog series](https://www.youtube.com/watch?v=zPL8xrS9bVg&list=PLbWvcwWtuDm3vNn5ANzgVjyL1YOICT0jE).