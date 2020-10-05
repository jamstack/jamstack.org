---
title: Troglio
homepage: https://troglio.com/
twitter: try_troglio
opensource: "No"
typeofcms: "Git-based"
supportedgenerators:
  - All
description: Turn Trello into a CMS
images:
  - path: /img/cms/troglio-1.png
  - path: /img/cms/troglio-2.gif
  - path: /img/cms/troglio-3.gif
---

# Power your apps and websites from Trello

**Troglio** turns any Trello board into a headless **CMS** : connect any site or app to manage its content from Trello cards.

Writers can write using **markdown**, **TOML** or the Custom Fields Power-up to author their content from anywhere, **even offline !**

Developers can use data as they please without being tied to a provider or a database.

This results in amazing collaborations between authors and developers offering literally no limits to what can be built.


# Features

- Connect with any of **Github**, **Gitlab**, **Bibucket** or connect to any **custom endpoint accepting POST**
- **Master configs**: propagate default properties across cards from one central place. No need to repeat properties over and over again and make mass changes from one place.
- **Previews**: after a small change in your templates logic, Troglio helps generating live previews right from Trello cards.
- **Supports 19 languages** but developers only get english keywords as data. (i.e: users can use `type` or `类型` indiferently, developers will always get the value under the property in its english form `type`)
- **Common properties out of the box**: `title`, `type`, `template`, `layout`, `published`, `permalink`, `slug`...
- **Customizable permalinks**: content is affected an URL based on customizable permalinks rules simplifying routing a lot !
- Kinds: **cards automatically inherits a `kind`** between any of `single`, `list` or `home`. This is very handy to adapt templates. (inspired from `Hugo` static site generator)
- **Add custom fields** to fill templates 
- **Group data from other cards**: using the `add` property, it is possible to attach several cards content into another one.


*Why Trello ?*

Trello is a simple collaboration tool really intuitive to organize ideas into lists, brainstorm, follow projects and more. This simplicity makes editing content a breeze for authors: they have a really neat and broad vision of their content in a single board. Plus, an important point to note is that Trello is available in any smartphone and **works offline** !! This means authors can edit content from anywhere literally.



*Why use Troglio instead of Trello's API ?*

Troglio comes with all the tools you expect from a classic CMS: custom types, publish/draft logic, template override... and even live previews ! Using TOML, authors can enrich content with more structured data leading to endless possibilities. 
Finally, the most important part of Troglio is that it is an opninionated framework to manage apps and websites content from Trello: it removes the need for each developers to think about implementation details and Troglio helps get started right away. Examples, tutorials, starters, support... are all the benefits given from having a common framework to work with instead of being isolated :)
Don't be shy and help us enhance Troglio's experience by submitting an issue in [our Github repo](https://github.com/Troglio/troglio).



# Get started

**IMPORTANT:** Troglio is an indpendant power-up and thus has to be installed manually as a custom power-up: **it is not available in the public listings of Trello**, [here is why](https://github.com/Troglio/troglio#user-content-why-troglio-is-not-available-directly-into-trello-). 

To install Troglio and to see all its features, check our complete guide at [https://troglio.com/guide](https://troglio.com/guide).


# Support

Support is centralized in our Github repo at [Troglio/troglio](https://github.com/Troglio/troglio), please feel free to post any suggestions and issues there :)

