---
title: Elsa
repo: pyvec/elsa
homepage: https://github.com/pyvec/elsa
language:
  - Python
license:
  - MIT
templates:
  - Jinja2
description: Helper module for hosting Frozen-Flask-based websites on GitHub Pages
---

Elsa helps you to build your [Frozen-Flask](https://pypi.org/project/Frozen-Flask/)-based website and to deploy it to [GitHub Pages](https://pages.github.com/).

It has convenient CLI to simplify your project chores and comes with out-of-the-box [Travis CI](https://www.travis-ci.org/) compatibility.

```shell
python foo.py serve   # serves the site, no freezing, so you can check the result
python foo.py freeze  # freezes the site, i.e. makes an HTML snapshot
python foo.py deploy  # deploys the frozen site to GitHub Pages
```

Learn more in the [Quickstart](https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst)!
