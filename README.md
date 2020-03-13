# Jamstack

This is the small start of something. The Jamstack homepage with a few lines about the concepts and the philosophy.

Over time this will hopefully grow into a useful entry-point for learning about this new stack, sharing tools, tips and best practices as well as spreading the word.

## Usage

Be sure that you have the latest node, yarn, and [Hugo](https://gohugo.io/) installed. If you need to install hugo, run:

```bash
brew install hugo
```

Next, clone this repository and run:

```bash
yarn
yarn start
```

Then visit http://localhost:3000/ - BrowserSync will automatically reload CSS or
refresh the page when stylesheets or content changes.

To build your static output to the `/dist` folder, use:

```bash
yarn build
```

## Contribute Resources (Videos & Articles)

To contribute resources to the Jamstack community, simply clone this branch and edit the `resources.yaml` in the `/site/data` directory. Just add another item (following the the prexisting syntax) and submit a pull request. If you are adding a video resource, please upload a thumbnail of the video to the `/img/videos` directory (image should be a jpeg 600px wide and 400px tall) before submitting your pull request. We will review these regularly and likely merge the addition shortly.

## Contribute Examples

To contribute examples to the Jamstack community, simply clone this branch and edit the `examples.yaml` in the `/site/data` directory. Just add another item (following the the prexisting syntax). Lastly, upload a thumbnail of the site to the `/img/examples` directory (image should be a jpeg 596px wide and 396px tall) and submit a pull request. We will review these regularly and likely merge the addition shortly.

## Contribute Events

To contribute events to the Jamstack community, we recommend just adding the event to your meetup and let our logic do the rest. If the event is outside of a meetup (like a conference), please manually submit it using the short guide below:

1. Clone this branch and edit the `events.yaml` in the `/site/data` directory
2. Add your event (following the the prexisting syntax)
3. Submit a pull request

*We will review these regularly and likely merge the addition shortly.
