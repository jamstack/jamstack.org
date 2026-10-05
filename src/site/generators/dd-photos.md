---
title: DD Photos
repo: dougdonohoe/ddphotos
homepage: https://ddphotos.donohoe.info
language:
  - Go
  - TypeScript
license:
  - AGPL-3.0-only
templates:
  - Svelte
description: 'Static photo & video album gallery generator'
---

## Fast, distraction-free photo and video albums

Curate your photos wherever you already do — Lightroom, Apple Photos, Google Photos — then export a
selection into a folder. Every folder of photos and videos is an album. Point DD Photos at those
folders, and it builds a static album site: no server code, no database, no ads, no social media.

Albums are declared in an `albums.yaml` file, where you give each one a name, description and cover
photo, alongside your site's title, description and optional hero image. An optional `photogen.txt`
in an album folder adds per-photo captions and overrides the default sort-by-capture-date order.

## Highlights

- Justified photo grid with a PhotoSwipe lightbox that adapts to any screen size. Swipe between
  photos on mobile, or use arrow keys and ESC on a laptop.

- Videos (`.mov`, `.mp4`, `.m4v`) sit in the same grid as your photos, marked with a play badge and
  their duration, and play right where the full size photo would appear. Poster frames run through
  the same pipeline as stills, so the grid treats video and photos identically.

- Human-readable album URLs (`/albums/antarctica`) and a shareable permalink for every photo
  (`/albums/patagonia/5`), plus OpenGraph tags for rich link previews when sharing.

- Optional password protection for a single album or the whole site. Passwords are never stored
  server-side — decryption happens in the browser via the Web Crypto API, and filenames in encrypted
  albums are HMAC-derived so they can't be guessed.

- Dark/light theme toggle, a custom CSS override to restyle the site without touching its source,
  and a `/privacy` page documenting everything kept in browser local storage.

- Two efficient WebP sizes are generated (600px grid, 1600px full) with all metadata stripped, so
  there's no GPS leak. Resizing runs concurrently, EXIF dimensions and dates are extracted to JSON,
  and `ffmpeg` is only downloaded the first time a video is seen — photo-only sites never fetch it.

## How it works

The `photogen` Go program resizes your images, transcodes video to browser-friendly H.264/AAC MP4,
and generates the index files (`albums.json`, a per-album `index.json`, and `sitemap.xml`) that the
site consumes. The frontend is a statically generated SvelteKit app: pre-built HTML and assets are
served directly by any web server, with photo data fetched client-side from those static indexes.

You can run it from the companion desktop app, from source, or from Docker without any developer
tooling:

```bash
mkdir ~/my-ddphotos
docker run --rm -v ~/my-ddphotos:/ddphotos dougdonohoe/ddphotos init
cd ~/my-ddphotos
./ddphotos photogen   # resize images and create index files
./ddphotos run        # run dev server at http://localhost:5173
./ddphotos build      # build static site
```

The result deploys anywhere static: one command to Cloudflare Pages or Surge, or `rsync` to
Apache/nginx and `aws s3 sync` to S3 and CloudFront.

## Source

- [DD Photos](https://github.com/dougdonohoe/ddphotos) — the generator itself.
- [DD Photos desktop app](https://github.com/dougdonohoe/ddphotos-app) — the open-source companion
  app, and the easiest way to run it.
