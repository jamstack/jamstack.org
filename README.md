# JAMStack

This is the small start of something. The JAMStack homepage with a few lines about the concepts and the philosophy.

Over time this will hopefully grow into a useful entry-point for learning about this new stack, sharing tools, tips and best practices as well as spreading the word.

## Usage

Be sure that you have the latest node, npm and [Hugo](https://gohugo.io/) installed. If you need to install hugo, run:

```bash
brew install hugo
```

Next, clone this repository and run:

```bash
npm install
npm start
```

Then visit http://localhost:3000/ - BrowserSync will automatically reload CSS or
refresh the page when stylesheets or content changes.

To build your static output to the `/dist` folder, use:

```bash
npm run build
```