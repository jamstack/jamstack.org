---
title: MakeStaticSite
repo: paultraf/makestaticsite
homepage: https://makestaticsite.sh/
language:
  - Bash
license:
  - AGPL-3.0-only
templates: []
description: Generate and deploy static websites with Bash.
---

A set of Bash scripts to generate static snapshots of (dynamic) websites,
refine and deploy them using Wget and other open source tools.

Features:

- A straightforward command line interface
- A setup script that guides users through the creation of a configuration file
through a simple interactive dialogue; manual editing is not required
- Support for multiple sites, each with custom settings defined in their own
configuration file (multiple config files can also be used for any given site).
- Suitable for batch processes, allowing operations to be scaled up so that any
or all of the sites are updated in one process.
- Support for CMS logins, which paves the way for converting your existing site
whilst maintaining the WordPress installation in situ.
- Runtime options, such as verbosity, to configure the level of output; and
whether to archive each build
- Option of providing a downloadable copy of the entire site as a zip file
which can be used offline, e.g., off a memory stick, making your site portable.
- Local and remote (server) deployment options, including rsync over ssh and
Netlify.
- For WordPress installations, WP-CLI is used to prepare the site for mirroring
plus a drop-in search replacement (WP Offline Search plugin) that works
offline.
- Snippets – an experimental facility to tweak any page and provide offline
variants using chunks of HTML.
- Support for custom attributes using post-processing – by creating a list of
URLs unaccounted for and then re-running Wget on them
- W3C standards compliance. Whilst this really depends on the source, pages may
be cleaned up by HTML Tidy. The system also generates a sitemap XML and
robots.txt file to match the outputted files.

