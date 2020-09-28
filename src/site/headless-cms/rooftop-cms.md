---
title: Rooftop
repo: rooftopcms/rooftop-cms
homepage: https://www.rooftopcms.com/
twitter: rooftopcms
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - Spike
description: Rooftop CMS is an API-first WordPress CMS for developers and content creators 
---
## What is Rooftop?
Rooftop is a hosted, API-only implementation of the [WordPress](http://wordpress.org) CMS. Write your content from the comfort of the familiar WordPress content management tools, and use it anywhere you like, across mobile applications and websites. For more information visit https://www.rooftopcms.com. Documentation is available at https://rooftopcms.readme.io 

## What problem does this solve?
At [Error](http://www.errorstudio.co.uk) we have built many projects where we needed to expose content in several different ways: a web application and marketing site, for example. Or maybe a native mobile app and a website. It's been fraught with complexity, and the solution is simple. Expose the content as data, without style, so we can display as we want.

### WordPress: the CMS you know
There are loads of CMSs in the marketplace, but not all of them are open-source or used by millions of websites. You will almost certainly be familiar with WordPress, and so will your clients. Why introduce something else to learn? With Rooftop you don't need to. Under the bonnet it's just WordPress. You write a very simple theme to set up content types and taxonomies, and the Rooftop API takes care of the rest.

### The site or application you want
With Rooftop responsible for exposing the content as data, you need to consume it. There are solid libraries for Ruby and Node, with more on the way.

## What's included?

### WordPress plugins
Our aim for Rooftop is that you can make use of a set of well-used plugins, and get the data out of the Rooftop API to use in your own applications and sites. We've built the following plugins:

* `rooftop-api-authentication`: authenticate using a predefined key, which you add in the admin interface of your Rooftop instance.
* `rooftop-admin-theme`: hide a lot of the WordPress complexity which we take care of, leaving you to concentrate on content
* `rooftop-preview-mode`: allow API clients to see content in draft if they pass the correct header
* `rooftop-admin-iframe`: include the Rooftop admin bar in your site, when the user is logged in
* `rooftop-response-sanitiser`: clean up output to the API, so the content is truly destination-agnostic
* `rooftop-queue-pusher`: send messages to a queue when data in Rooftop is updated
* `rooftop-events`: an extensible model for events management
* `rooftop-posts2posts-exposer`: expose https://github.com/scribu/wp-posts-to-posts data as part of your API responses
* `rooftop-gravityforms-exposer`: expose http://www.gravityforms.com/ data as part of your API responses. If you use the hosted Rooftop solution, you won't need to pay a separate licence fee.
* `rooftop-acf-exposer`: expose http://www.advancedcustomfields.com/ data as part of your API responses. If you use the hosted Rooftop solution, you won't need to pay a separate licence fee.
* `rooftop-search`: a more powerful search, based on ElasticSearch.

### Other Services

* A ruby gem to send webhook messages to your configured endpoint

### Client libraries
These are a work-in-progress. We want to build an ecosystem of open client libraries for many languages. At the moment we're working on:

* `rooftop_model`: a Ruby client gem for the Rooftop API, following a similar approach to ActiveRecord
* `rooftop_rails`: building on `rooftop_model` and providing Rails-specific features
* [rooftop-client](https://github.com/carrot/rooftop-node): a node client for the Rooftop API
* [spike-rooftop](https://github.com/static-dev/spike-rooftop): a [spike](https://github.com/static-dev/spike) plugin for the Rooftop API

Of course Rooftop exposes a sensible REST API to access your data, so there's no reason why you can't use any REST library which is capable of adding a couple of custom headers. FORTRAN anyone?

## What's the licence for Rooftop?
This project is GPLv3 licenced (see the LICENCE file in this repo), so if you want to host it yourself, you can.

Of course, there's a non-trivial amount of hassle involved in maintaining a secure WordPress multisite installation, so we do the hard work for you at http://www.rooftopcms.com. 

## How do I get started?
The docs are available at https://rooftopcms.readme.io.
