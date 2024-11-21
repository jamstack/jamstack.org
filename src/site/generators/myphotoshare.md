---
title: MyPhotoShare
repo: paolobenve/myphotoshare
homepage: https://gitlab.com/paolobenve/myphotoshare
language:
  - Python
license:
  - GPL-3
templates:
  - HTML
  - PHP
description: A Media Gallery with Super-Powers
---

![MyPhotoShare logo](https://www.alterna.tv/static/img/myphotoshare.png)

Expose your media (pictures and videos) on the web and share them with family and friends. Publish them on a fast and secure static web site.

It's not because your photo gallery is in a static web site that it can't have advanced and user friendly features. We decided to make it static to be secure and fast but without features compromise!

# Main Features

## Open-Source Web Photo Gallery Aimed at Sleekness and Speed

The Python generator works over file directories rather than using a database. It creates static files. The result is a static, fast and secure web site.

## Navigate in Your Pictures and Videos as You Like

Browse media by folder, date, keywords or tags, geotags and map.

## Add Captions and Tags to Pictures and Videos

Enhance your media with descriptive metadata like date, title or description, GPS coordinates or tags.

## Search Easily Media Content

Advanced media search by keywords in title, description or tags. Search by location. You can specify how and where to search.

## Share Pictures with Friends and Family

Download files, share albums or media files by email or over social platforms.

## Customize the Gallery to Your Personal Look

Change the look of the gallery with options in the configuration file. Available in English, Italian, French and Spanish. Localizing to another language is easy.

## Enhance it with Machine Learning Extensions

Install extensions for automatic face recognition in your pictures and automatically tag them. Or improve scenes recognition to detect scenes in pictures.

## Mobile and Tablet Friendly

Get all these nice features from your phone or tablet.

## Keep Your Pictures Secure and Private

Keep access to the gallery or some albums private, with password-restricted access.

# Demonstration Sites

- [Demo Site](https://myphotosharedemo.qumran2.net) English UI with Multilingual content. Latest development version updated constantly to gitlab's development branch. Protected content made accessible with the *pwd* password.
- [Demo Site](https://www.alterna.tv/myphotoshare_demo) Same demonstration site but in French.
- [Assunta Palmaro](http://palmaro.qumran2.net) A production site in Italian.

# How to Install?

- The easy way with the [Debian/Ubuntu Package Generator](https://gitlab.com/pmetras/mps_debian). Look at the packages available.

- Stay in control with the [step by step instructions](https://gitlab.com/paolobenve/myphotoshare/-/blob/master/doc/Install.md).

# How does it Work?

MyPhotoShare consists of two segments – a Python script and a JavaScript application.

The Python script scans a directory tree of images and videos (we call them media as a general term), whereby each directory constitutes an album. It then populates a second folder, known as the cache folder with statically generated JSON files and thumbnails. It writes the `options.json` file too in the html root folder, putting inside it all the options from the configuration file. The scanner extracts metadata from EXIF tags in JPEG photos and other data from videos or `album.ini` user-defined files in albums to create JSON index files in the cache. MyPhotoShare is smart about file and directory modification time and it will be quite fast if there are few or zero changes since the last time you ran it.

The JavaScript application consists of a single `index.php` or `index.html` page. It fetches the `options.json` file and the statically generated JSON files and thumbnails on the fly from the cache folder to create a speedy interface.

# What's Next?

Read the rest of the documentation on [project's Gitlab page](https://gitlab.com/paolobenve/myphotoshare) and learn how to configure the gallery and use advanced features.
