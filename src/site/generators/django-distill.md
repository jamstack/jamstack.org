---
title: django-distill
repo: meeb/django-distill
homepage: https://github.com/meeb/django-distill
language:
  - Python
license:
  - MIT
templates:
  - Django
description: django-distill lets you to create and publish a static website from any Django project.
---

`django-distill` is a simple to implement static site generator for Django. It
is fully compatible with all Django projects and works with existing complex
Django applications without interfering. It does not require modifications to
existing apps and only small per-URL functions need to be created.

`django-distill` is designed to integrate with existing Django projects and does
not require learning any new framework or file structures to use.

A fully working example of using `django-distill` with a Django blog is available here
[https://github.com/meeb/django-distill-example](https://github.com/meeb/django-distill-example)

### Features

- Full compatibility with all Django projects
- No overhead when added to existing projects
- Trivial to add to existing Django sites
- Easy to integrate into CI/CD processes
- Uses the standard Django project structure and does not require learning a new sub-framework
- Can generate static pages for all or just part of your project
- Full support for publishing to S3, Google Cloud Storage and Rackspace Cloud Files with remote checks
- Validation of remote containers on S3, Google Cloud Storage and Rackspace Cloud Files
- Generation is identical to the output of existing dynamic Django content
- Simple to implement and debug
- Only modification required is to `urls.py` and `settings.py`
- Static pages can be generated for third party applications
- Support for all page and file types (downloads, RSS feeds, JSON objects etc.)
