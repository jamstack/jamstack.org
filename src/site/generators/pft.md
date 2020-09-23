---
title: PFT
repo: dacav/App-PFT
homepage: http://dacav.roundhousecode.com/pages/pft.html
language:
  - Perl
license:
  - GPL-3.0-only
templates:
  - TT3
description: PFT is a Static, Unicode-ready, Hacker-friendly, Free-as-in-freedom, Privacy-preserving website generator written in Perl.
---

PFT It is yet another _Static_, _Unicode-ready_, _Hacker-friendly_,
_Free-as-in-freedom_, _Privacy-preserving_ website generator written in
Perl.

`PFT` stands for _Plain F. Text_, where the meaning of _F._ is up to
personal interpretation. Like _Fancy_ or _Fantastic_.

I started it from scratch because as I was not entirely satisfied with the
similar products I tried, but also because I wanted to learn another
language (Perl) with a side project. I got initially inspired by
[Dapper][], which is similar in the spirit, but maybe a bit _too raw_,
even for my needs.

## Unicode-ready

While writing PFT I also learned how how to handle Unicode. As a result,
PFT can seamlessly handle your UTF-8 text, with ☺ emoticons and
similar 💩.

## Hacker Friendly

PFT is designed to be Hacker Friendly: it's a command-line application
which handles your website's boilerplate, hides you nothing, but stays out
of the way.

It is designed as a toolkit, and comes with a number of commands:

- `pft init`: Initialize a PFT site in the current directory;

- `pft edit`: Create a content text (e.g. page or blog entry);

- `pft make`: Build the website;

- `pft pub`: Publish the website;

- `pft clean`: Clear built tree;

- `pft grab`: Grab a file as attachment or picture;

- `pft ls`: List content and properties;

- `pft show`: Show the compiled site in a web browser;

The manual of each sub-command is available in form of Unix Manual page,
and by invoking it with the `--help` flag.

Content pages are simple locale-encoded [Markdown][] text-files wrapped
with a [YAML][] header. Everything is transformed into HTML thanks to the
[Template::Alloy][alloy] engine.

## Free as in Freedom

PFT is [Free as in Freedom][free] and licensed as [GNU GPL v3][gpl3].
Contributions and suggestions are welcome.

PFT is also Free as in Free Beer. Which means you can _offer me a beer_ if
you feel like doing it.

## Privacy preserving:

By default, PFT comes with some simple templates, which do not rely on
client-side scripts, cookies or trackers. This means a PFT site respects
your privacy by default.

(Of course nothing prevents you from modifying it and provide something
more fancy, or even serve it with cookies. As you would do for tea,
really.)

# Running PFT

PFT is released as _CPAN_ distribution named [App::PFT][]. If CPAN is
installed on your system you can simply install PFT by running the
following command:

    cpan App::PFT

## Requirements

The output of PFT is a directory containing a set of inter-connected HTML
pages. The pages are linked by relative links, so the whole output site is
relocatable. It can optionally be loaded online and served through any web
server.

Currently only [RSync][] over [SSH][] is supported for uploading content
on websites, RSync must be therefore installed on your source system, and
your hosting provider should support [SSH][].

# Hacking

PFT is currently composed by:

- A Perl library named [PFT][github_pft] which abstracts the filesystem
  access

- A toolkit of Perl scripts named [App::PFT][github_app_pft] which
  provides a command-line interface to the _PFT_ structure.

Feel free to fork or to ping me with suggestion, proposals or pull
requests.

[app::pft]: https://metacpan.org/release/App-PFT
[static]: https://www.staticgen.com/
[free]: https://en.wikipedia.org/wiki/Free_software_movement
[gpl3]: https://www.gnu.org/licenses/gpl.html
[dapper]: https://www.staticgen.com/dapper
[alloy]: https://metacpan.org/pod/Template::Alloy
[markdown]: https://daringfireball.net/projects/markdown/
[yaml]: http://yaml.org/
[rsync]: https://rsync.samba.org/
[ssh]: http://www.openssh.com/
[cpan]: http://cpan.org/
[github_pft]: https://github.com/dacav/pft
[github_app_pft]: https://github.com/dacav/app-pft
