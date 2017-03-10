# JAMstack

This is the small start of something. The JAMstack homepage with a few lines about the concepts and the philosophy.

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

## Contribute Resources (Videos & Articles)

To contribute resources to the JAMstack community, simply clone this branch and edit the `resources.yaml` in the `/site/data` directory. Just add another item (following the the prexisting syntax) and submit a pull request. If you are adding a video resource, please upload a thumbnail of the video to the `/img/videos` directory (image should be a jpeg 600px wide and 400px tall) before submitting your pull request. We will review these regularly and likely merge the addition shortly.

## Contribute Examples

To contribute examples to the JAMstack community, simply clone this branch and edit the `examples.yaml` in the `/site/data` directory. Just add another item (following the the prexisting syntax). Lastly, upload a thumbnail of the site to the `/img/examples` directory (image should be a jpeg 596px wide and 396px tall) and submit a pull request. We will review these regularly and likely merge the addition shortly.
