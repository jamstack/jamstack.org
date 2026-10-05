---
title: Primo
repo: primocms/primo
homepage: https://primo.build/
language:
  - Svelte
license:
  - MIT
templates:
  - Svelte
description: An open-source visual CMS and static site builder with Svelte blocks
---

Primo is an open-source, self-hosted CMS for developers who build sites for clients who manage the content afterward. Pages are built from reusable blocks written as Svelte components, and editors change content visually, directly on the rendered page.

## How it works

Primo ships as a single Go binary with PocketBase (SQLite) for storage and Svelte for both the editor UI and the blocks. Every site is kept in sync as a database (powering the visual editor and multi-site serving) and as a folder of plain files (Svelte blocks plus YAML content and config) that can be edited in a code editor, versioned in Git, or changed by AI coding agents through the `primo pull` / `primo push` CLI.

Sites are published as static HTML that can be deployed to any static host, or served directly by the Primo server.

## How to install

Run Primo anywhere Docker runs (`ghcr.io/primocms/primo`) or deploy it with one click on Railway. See the [Primo documentation](https://docs.primo.build/) to get started.
