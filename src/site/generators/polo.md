---
title: Polo
repo: agonzalezro/polo
homepage: https://github.com/agonzalezro/polo#just-markdown
language:
  - Go
license:
  - MIT
templates:
  - Go
description: Static site generator written in Go and "compatible" with Jekyll & Pelican content
---

polo is a static blog rendering tool created with Golang.

I'm happily using it on my blog: http://agonzalezro.github.io, which means that
works fine :)

Yes, I know that there a lot of them out there but I just want mine to learn a
little bit of Go coding.

### Key features

- Markdown support with Metadata parsing compatible with Jekyll, Pelican & others
- Embedded daemon with autoregeneration of the htmls in case of any change on
  the input files.
- Archive, tags, RSS & pages support
- Disqus comments
- Google Analytics support with just a change on the settings
- Share this support as well
- Cool & easy way to re-template it, check
  [the documentation](https://github.com/agonzalezro/polo#templating) or
  [my blog post about it](http://agonzalezro.github.io/polo-supports-theming-now.html)
- Quick!

### Quickstart

1. Download your version from
   [Gobuild](http://gobuild.io/github.com/agonzalezro/polo)
2. Get a JSON config
   [from here](https://github.com/agonzalezro/polo/blob/master/config.json)
3. Run
   `polo -config [path_to_your_conf] [your_folder_with_mds] [your_output_path]`

If the config is called `config.json` and it's on your current directory, you
don't even need to specify it.

### One more thing

You can run polo with the `-daemon` option which will start a server serving
your generated content and in case that you change any of the files in the
input folder it's going to autoregenerate the site.
