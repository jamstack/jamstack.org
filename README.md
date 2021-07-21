# Jamstack

This is the repo for https://jamstack.org

An entry-point for learning about this architectural model. A place to learn what Jamstack is, for sharing tools, tips, examples and articles. This is also a place to find a local community meetup, or to seek support in starting one of your own.


## Contributing resources

The site includes a showcase of Jamstack examples sites. You can submit a site to be included in this list. We've also collected a set of videos, presentation, articles and other learning resources about Jamstack. You can contribute content to that pool of resources too.

We accept contributions submitted as [pull requests](https://github.com/jamstack/jamstack.org/pulls).


### Contribute a site example

To contribute a site:

1. Create a new yaml file in the [`src/site/_data/examples`](src/site/_data/examples) folder with a unique and descriptive name. Populate that file according to the structure shown below.
1. Add a thumbnail image to the [`src/site/img/examples`](src/site/img/examples) folder. (Image should be a jpeg 596px wide and 396px tall)
1. Submit a pull request

_example site yaml reference:_
```yaml
title: Your site title
description: A short description of the site.
link: The URL of this site
thumbnailurl: /img/examples/this-site-thumbnail.jpg
tools:
  - List
  - of
  - notable
  - tools
  - used
```


### Contribute links to resources

To contribute a link to a resource:

1. Create a new yaml file in the [`src/site/_data/resources`](src/site/_data/resources) folder with a unique and descriptive name. Populate that file according to the structure shown below.
1. For presentations and video, add an optional thumbnail image to the [`src/site/_data/resources`](src/site/img/cms/resources) folder. (Image should be a jpeg 600px wide and 400px tall)
1. Submit a pull request

_resource yaml reference:_
```yaml
title: Resource title
date: Publish date (YYYY-MM-DD)
link: the URL of this resource
thumbnailurl: /img/cms/resources/resource-thumbnail.jpg
type:
  - article (Help us group and sort the resources by type article|video|presentation)
```

Before submitting a pull request, or if you are suggesting/contributing code or content changes, it is wise to preview your change in a local build. We've tried to make the process of running a local build as low as possible.


## Running a local build

### Prerequisites

- [Node and NPM](https://nodejs.org/)


### Installing and running the build

```bash
# Clone this repository to your local environment
git clone git@github.com:jamstack/jamstack.org.git

# move in to your local site folder
cd jamstack.org

# install the dependencies
npm install

# run the build and dev server locally
npm start
```


## Styling with TailwindCSS

This site uses [TailwindCSS](https://tailwindcss.com) to offer utility CSS classes and provide a rapid means to styling the site. This means that most styling can be done without writing any additional CSS. Instead, utility classes can be added directly to the HTML. This can provide some very rapid development and also offer surprising levels of familiarity for these used to working in this way (since the conventions and classes are not _per site_.)

While running/developing locally, the `npm run start` command will generate the site including the CSS pipeline from Tailwind.

### Global CSS utilities.

A small number of bespoke CSS rules are provided for efficiency of repeated or global classes. These reside in `src/css/tailwind.css` but these should be used sparingly, with most styling taking place in the HTML via Tailwind's utility classes.

### Dev vs prod

During a production build, the CSS pipeline includes a step to remove all unused CSS statements and compress the resultant CSS. For development efficiency, this step is not performed during local development via the `npm run start` command. You can preview an optimised production build by running these commands:

```bash

# Run a production build
npm run build

# Serve the build locally
npm run start
```

## One-click clone and deploy

You can clone this repository and bootstrap it as a test site of your own, complete with the CI/CD build pipeline on [Netlify](https://netlify.com?utm_source=github&utm_medium=jamstackorg-pnh&utm_campaign=devex) by clicking the button below. (Requires free GitHub and Netlify accounts)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jamstack/jamstack.org)
