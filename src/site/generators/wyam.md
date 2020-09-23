---
title: Wyam
repo: Wyamio/Wyam
homepage: http://wyam.io
language:
  - .Net
license:
  - MIT
templates:
  - Razor
  - Markdown
description: A simple to use, highly modular, and extremely configurable static content generator.
---

Wyam is a static content generator and can be used to generate web sites, produce documentation, create ebooks, and much more. Since everything is configured by chaining together flexible modules (that you can even write yourself), the only limits to what it can create are your imagination.

### Features

- Written in .NET and [easily extensible](http://wyam.io/knowledgebase/writing-a-module)
- [Low ceremony](http://wyam.io/getting-started/installation) - download a zip file, unzip, and run
- Flexible [script-based configuration](http://wyam.io/getting-started/configuration) using the power of the .NET Compiler Platform (Roslyn)
- Lots of [modules](http://wyam.io/modules) for things like [reading](http://wyam.io/modules/readfiles) and [writing](http://wyam.io/modules/writefiles) files, handling [frontmatter](http://wyam.io/modules/frontmatter), and manipulating [metadata](http://wyam.io/modules/metadata)
- [YAML parser](http://wyam.io/modules/yaml)
- [Less CSS compiler](http://wyam.io/modules/less)
- Support for multiple templating languages including [Razor](http://wyam.io/modules/razor)
- Integrated [web server](http://wyam.io/getting-started/usage) for previewing output
- Integrated [file watching](http://wyam.io/getting-started/usage) and regeneration
- Full [NuGet support](http://wyam.io/getting-started/configuration#nuget)
- [Embeddable engine](http://wyam.io/knowledgebase/embedded-use)
