# JAMstack.org

https://jamstack.org


## Prerequisites

- [Node and NPM](https://nodejs.org/)


## Running locally

```bash
# install the dependencies
npm install

# run the build and server locally
npm run start
```


## Styling with TailwindCSS

This site uses TailwindCSS to offer utility CSS classes and provide a rapid means to styling the site. This means that most styling can be done without writing any additional CSS. Instead, utility classes can be added directly to the HTML. This may not be to everyone's tastes, but it can provide some very rapid development and also offer surprising levels of familiarity for thse used to working in this way (since the conventions and classes are not _per site_.)

While running/developing locally, thw `npm run start` command will recompile the site as files are saved and this includes the CSS pipeline from Tailwind.

### Global CSS utilities.

A small number of bespoke CSS rules are provided for efficiency of repeated or global classes. These reside in `src/css/tailwind.css`

### Dev vs prod

During a production build, the CSS pipeline includes a step to remove all unused CSS statements and compress the resultant CSS. For development efficiency, this step is not performed during local development vie the `npm run start` command.

