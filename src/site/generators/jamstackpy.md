---
title: Jamstackpy
repo: Abdur-RahmaanJ/jamstack
homepage: https://github.com/Abdur-rahmaanJ/jamstack#readme
language:
  - Python
license:
  - Apache-2.0
templates:
  - Python  
description: Python-powered static site maker powering multiple realworld sites
---

<div align="center">
  <img alt="Jamstack logo" src="https://i.imgur.com/sXUAdYJ.png" height="217" />
</div>


![](https://img.shields.io/pypi/v/jamstack)

Also known as Jamstackpy, Jamstack offers a scalable, easy to extend and fully customizable environment to create your static websites using all the power of Python and Flask, as simple or complex as you want.

You have the opportunity to start your site from scratch or use one of our wonderful templates courtesy of html5up.
 

## Installation

```bash
python -m pip install jamstack
```

## Create basic project

```bash
jamstack plain <foldername>
```

## Templates

Jamstack has templates available courtesy of [html5up](https://html5up.net).

| Template                                   | Command           | Tutorial                                                     |
| ------------------------------------------ | ----------------- | ------------------------------------------------------------ |
| [Massively](https://html5up.net/massively) | html5up/massively |                                                              |
| [Phantom](https://html5up.net/phantom)     | html5up/phantom   | [**HERE**](https://github.com/jamstackpy/jamstack/wiki/Phantom-template) |

The syntax is as follows:

```bash
jamstack t <template> <foldername>
```

Use the `--existing` flag if you want the project to be created in an existing folder

```bash
jamstack t html5up/massively myproject --existing
```

By default, projects are created without the assets (stylesheets, images, etc...) to download them, you must pass the `--jamdo` option to the `static.py` file of the respective project.

## Build

To build the site run the file `static.py`.

```bash
python static.py
```

Your site will be generated in the **dist/** folder.

Alternatively you can use the `--server` flag if you want to start livewatch.

## Sites using jamstack

- [DeliciousPy Telegram Channel](https://deliciouspy.github.io/)
- [The Flask Community Work Group](https://flaskcwg.github.io/)
- [A Personal Site](https://compileralchemy.github.io/)
