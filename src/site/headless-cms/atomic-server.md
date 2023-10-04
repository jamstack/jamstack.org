---
title: Atomic Server
homepage: https://atomicserver.eu/
opensource: "Yes"
repo: atomicdata-dev/atomic-server
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Extremely fast open source headless CMS with built-in live synchronization, file management, and full-text search
---
## Atomic-Server

Atomic-Server is a graph database server for storing and sharing typed linked data.
It's free, open source (MIT license), and has a ton of features:

- ⚛️  **Dynamic schema validation** / type checking using [Atomic Schema](https://docs.atomicdata.dev/schema/intro.html). Combines safety of structured data with the
- 🚀  **Fast** (1ms responses on my laptop)
- 🪶  **Lightweight** (15MB binary, no runtime dependencies)
- 💻  **Runs everywhere** (linux, windows, mac, arm)
- 🌐  **Embedded server** with support for HTTP / HTTPS / HTTP2.0 and Built-in LetsEncrypt handshake.
- 🎛️  **Browser GUI included** powered by [atomic-data-browser](https://github.com/atomicdata-dev/atomic-data-browser). Features dynamic forms, tables, authentication, theming and more.
- 💾  **Event-sourced versioning** / history powered by [Atomic Commits](https://docs.atomicdata.dev/commits/intro.html)
- 🔄  **Synchronization using websockets**: communicates state changes with a client. Send a `wss` request to `/ws` to open a webscocket.
- 🧰  **Many serialization options**: to JSON, [JSON-AD](https://docs.atomicdata.dev/core/json-ad.html), and various Linked Data / RDF formats (RDF/XML, N-Triples / Turtle / JSON-LD).
- 🔎  **Full-text search** with fuzzy search and various operators, often <3ms responses.
- 📖  **Pagination, sorting and filtering** using [Atomic Collections](https://docs.atomicdata.dev/schema/collections.html)
- 🔐  **Authorization** (read / write permissions) and Hierarchical structures powered by [Atomic Hierarchy](https://docs.atomicdata.dev/hierarchy.html)
- 📲  **Invite and sharing system** with [Atomic Invites](https://docs.atomicdata.dev/invitations.html)
- 📂  **File management**: Upload, download and preview attachments.
- 🖥️  **Desktop app**: Easy desktop installation, with status bar icon, powered by [tauri](https://github.com/tauri-apps/tauri/).

## Running Atomic-Server locally (optional)

In this guide, we'll can simply use `atomicdata.dev` in our browser without installing anything.
So you can skip this step and go to _Creating your first Atomic Data_.
But if you want to, you can run Atomic-Server on your machine in a couple of ways:

- **Using a desktop installer**: download a desktop release from the [`releases`](https://github.com/atomicdata-dev/atomic-data-rust/releases) page and install it using your desktop GUI.
- **Using a binary**: download a binary release from the [`releases`](https://github.com/atomicdata-dev/atomic-data-rust/releases) page and open it using a terminal.
- **Using Docker** is probably the quickest: `docker run -p 80:80 -p 443:443 -v atomic-storage:/atomic-storage joepmeneer/atomic-server`.
- **Using Cargo**: `cargo install atomic-server` and then run `atomic-server` to start.

_[Atomic-Server's README](https://github.com/atomicdata-dev/atomic-data-rust/blob/master/server/README.md) contains more (and up-to-date) information about how to use it!_
