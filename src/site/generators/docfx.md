---
title: DocFX
repo: dotnet/docfx
homepage: https://dotnet.github.io/docfx
language:
  - C#
license:
  - MIT
templates:
  - Mustache
  - Liquid
description: A documentation generation tool for API reference and Markdown files.
---

DocFX is an API documentation generator for .NET, and currently it supports C# and VB.
It generates API reference documentation from triple-slash comments in your source code.
It also allows you to use Markdown files to create additional topics such as tutorials and how-tos, and to customize the generated reference documentation. DocFX builds a static HTML website from your source code and Markdown files, which can be easily hosted on any web servers (for example, github.io). Also, DocFX provides you the flexibility to customize the layout and style of your website through templates. If you are interested in creating your own website with your own styles, you can follow how to create custom template to create custom templates.

DocFX also has the following cool features:

- Integration with your source code. You can click "View Source" on an API to navigate to the source code in GitHub (your source code must be pushed to GitHub).
- Cross-platform support. We have exe version that runs under Windows. It can also runs cross platforms on Linux/macOS with Mono.
- Integration with Visual Studio. You can seamlessly use DocFX within Visual Studio with `Install-Package docfx.console`
- Markdown extensions. We introduced DocFX Flavored Markdown(DFM) to help you write API documentation. DFM is 100% compatible with GitHub Flavored Markdown(GFM) with some useful extensions, like file inclusion, code snippet, cross reference, and yaml header. For detailed description about DFM, please refer to DFM.
- VSCode integration. Install `docfx` extension in vscode to preview the content in real-time.
