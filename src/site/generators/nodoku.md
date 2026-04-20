---
title: nodoku
repo: /nodoku/nodoku-core
homepage: https://nodoku.io
language:
  - JavaScript
  - TypeScript
  - Node.js
  - NextJS
  - Tailwind CSS
license:
  - MIT, see Nodoku license for details
templates:
  - Yaml
  - Markdown
description: 'A powerful static site generator, where the Markdown file content is visually presented according to the configuration, given as a Yaml file. Based on NextJS, React and TailwindCSS. Excellent for a landing page, blog, portfolio or any static part of a website'
twitter: nodoku_site_md
startertemplaterepo: https://github.com/nodoku/nodoku-starter-template
---

- Nodoku Home page: https://nodoku.io
- Nodoku Starter Template Github repo: https://github.com/nodoku/nodoku-starter-template
- Nodoku Demo Web site Github repo: https://github.com/epanikas/nodoku-demo-page
- Nodoku Core Github repo: https://github.com/nodoku/nodoku-core 

<br>

Nodoku is a static site generator, where the content is provided as MD (Markdown) files, and the visual representation is controlled via Yaml files - called skin.

Nodoku promotes the content-first approach, when the content creation process is not being distracted by the considerations related to the visual representation and design.

Instead, the content is created first as an MD file, demarcated by the special markers into content blocks, and then each block is rendered using the configuration provided in a Yaml file called skin.

Here is an example:

- Markdown file content:
```markdown
```yaml
nd-block:
  attributes:
    id: product-1
``

# Title of my awesome product
## Subtitle of my awesome product

Description of my product.
And another line of description.

![my-awesome-product](./images/my-awesome-product.png)
```
- Yaml file, controlling the representation of the given piece of content

```yaml
rows:
  - row:
      components:
        - mambaui/hero-left-text:
            selector:
              attributes:
                id: product-1

```

- And here is the result

![my-awesome-product-nodoku-sampl-image](https://raw.githubusercontent.com/nodoku/nodoku-starter-template/refs/heads/main/my-awesome-product-nodoku-sample.png)


## Pluggable set of components

Visual components in Nodoku are supplied via pluggable packages, as a standard package.json dependencies.

For example, components based on Mamba UI set of widgets are added as a dependency:

```json
{
  "dependencies": {
    ...
    "nodoku-mambaui": "^0.3",
    ...
  }
}
```

Each set of components ships with its own Yaml configuration schema, as well as Tailwind CSS configuration.

Learn more about Nodoku visual components:
- [Based on Flowbite UI set](https://github.com/nodoku/nodoku-flowbite)
- [Based on MambaUI UI set](https://github.com/nodoku/nodoku-mambaui)

## Easy static content localization

Nodoku allows for easy static content localization (making the content available on different languages) thanks to the way it parses the Markdown file.

Nodoku converts the static content from the Markdown file in stream of content blocks, each having its own unique translation key.

Thanks to these automatically generated translation keys a translation backend of your choice can be plugged in to provide the text translation.

Learn more about Nodoku localization capabilities:
https://github.com/nodoku/nodoku-i18n

## Use of text icons

Nodoku provides a way to denote an icon directly in the Markdown file, as follows:

```md
{icon:nd-react-icons/fa6:FaFacebook} Facebook
{icon:nd-react-icons/fa6:FaInstagram} Instagram
```

Learn more about icon usage in Nodoku:
https://github.com/nodoku/nodoku-icons

## Bootstrap Nodoku project in minutes

For your convenience we have a Nodoku sample project, suitable for forking and deploying in Netlify:

- [Nodoku starter template](https://github.com/nodoku/nodoku-starter-template)
- [Deploy in Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/nodoku/nodoku-starter-template)
