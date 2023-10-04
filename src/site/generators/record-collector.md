---
title: Record Collector
repo: krompaco/record-collector
homepage: https://record-collector.net/en/
language:
  - .Net
  - C#
license:
  - MIT
templates:
  - Razor
  - Markdown
  - HTML
description: A modern .NET static site toolkit.
twitter: rcssgdotnet
---

This project is heavily inspired by Hugo and tries to be somewhat compatible with the same content structure and support parsing of TOML, YAML and JSON front matter.

The content file layer is converted to C# lists and objects and then used in a regular ASP.NET MVC project which is also where you can work live on both content preview and templating. This means you now can use your existing ASP.NET MVC and C# skills creating static site templates!

In this setup the generation process work using the WebApplicationFactory from the Microsoft.AspNetCore.Mvc.Testing package so it doesn't have to fall back to a console application or custom web servers for crunching the files and templates which is the norm for static site generation.

Easy to deploy to Netlify and repo also has examples for various Docker Linux scenarios and GitHub Actions.

It can also run as a regular ASP.NET MVC application with real-time rendering and Hot Reload.

Repo has ready-made frontend setups including Simple.css without any JS or Tailwind CSS with Hotwire (Turbo and Stimulus).