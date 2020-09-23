---
title: sudo_site
repo: sharadcodes/sudo_site
homepage: https://github.com/sharadcodes/sudo_site
language:
  - C++
license:
  - MIT
templates:
  - HTML
  - inja
description: The most simplest and lightweight static site and blog generator for c++ enthusiasts.
---


[sudo_site](https://github.com/sharadcodes/sudo_site) is the most 
simplest and lightweight static site generator out there, with no 
dependencies at and all the libraries already supplied with the 
repository you don't need to install any other dependency.

[sudo_site](https://github.com/sharadcodes/sudo_site) was made in 
just two days but the development will go further and enhancements
will be done in the future to make things more easy.

With approx 120 lines of code it becomes the smallest Static Site 
Generator which is capable of generating multiple pages, blogs.

The [repo](https://github.com/sharadcodes/sudo_site) also has a
github actions config file with the help of which you can automate
the process of building in the github itself. It can push to any
repository you like, just add a PERSONAL ACCESS TOKEN to the 
secrets with the repo checkbox ticked while creating the TOKEN.

The documentation is going on, although you won't need because it's
that simple.
After cloning or downloading the [repo](https://github.com/sharadcodes/sudo_site) just run
```
g++ -o sudo_site sudo_site.cpp -lstdc++fs && ./sudo_site
```
and the site will be generated.

You don't need to compile it again. Next time just run `./sudo_site`
inside the directory and the site will be generated.
