---
title: Bang
repo: squdle/Bang
homepage: https://github.com/squdle/Bang
language:
  - Python
license:
  - MIT
templates:
  - Custom
description: Quirky text processor and static website generator.
---

!!Bang!! is a text processor and static website generator that lets you shoot holes through text files!

Bang comprises of an extremely minimalist markup language and a quirky scripting language that can be extended with Python.
The Bang processor itself is a short Python script that interprets Bang scripts and processes text files.
This allows for variables in text files, as well as encouraging very modular code.
The markup language allows you to shoot holes in text files with a double Bang enclosed keyword (eg: !!keyword!!).
Keywords are then then filled with a word, line of text, text file, or Python function return value.
Bang scripts define the values of keywords, which files will be processed and the order they will be processed in.
