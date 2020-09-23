---
title: docnado
repo: HEInventions/docnado
homepage: https://heinventions.github.io/docnado-site/
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
description: 'A rapid documentation tool to blow you away!  Batteries and style included; you just need to type. '
twitter: heinventions
---

# Docnado

A rapid documentation tool to blow you away!!!

Docnado makes it easy to start and maintain a Markdown documentation project.

### Features

Docnado renders an adapted Markdown to provide:

- Embed images, video, YouTube links, external CSV tables, and PDFs.
- Code highlighting.
- File download blocks.
- Lists, checklists, tables, and glossaries.
- Document defined template selection.
- Document meta-data.
- Auto-generated navigation sidebar.
- Built in command line options to find broken links and orphan images in your documentation.

### Accessing Options

- Output documents as insecure HTML on a localhost.
- Output documents as PDF files via the HTML server.
- Create a static set of HTML files that contain the documentation and related resources.

### Download

Make sure you have Python 3.6 installed.

```sh
python3 -m pip install docnado --upgrade	# install it
docnado										# run it
```

### Getting Started

```sh

python docnado.py                       # start a server on localhost:5000

python docnado.py --html                # freeze the server into a static site as a set of HTML files
                                         # this will exit with -1 if there was a problem parsing any file

python docnado.py --port                # specify a port for docnado to accept requests on

python docnado.py --pdf                 # generate a set of pdf files for each .md file - won't pull through
                                         # static resource files like with the --html command

python docnado.py --new                 # copy default templates and sample docs into the working directory
                                         # and update the config too, only if they don't already exist

python docnado.py --new-force           # copy default templates and sample docs into the working directory
                                         # and update the config too, this will overwrite any existing docs or
                                         # configs.


python docnado.py --dirs                # display all the different directories docnado will use to generate
                                         # the documentation

python docnado.py --find-orphans        # display unreferenced media assets in the documentation
python docnado.py --find-broken-links   # display external broken links in the documentation
```
