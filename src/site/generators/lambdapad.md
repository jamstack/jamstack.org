---
title: Lambda Pad
repo: gar1t/lambdapad
homepage: https://github.com/gar1t/lambdapad
language:
  - Erlang
license:
  - Apache-2.0
templates:
  - Django
description: Static site generator using Erlang. Yes, Erlang.
---

Lambda Pad can be used to generate a static site. Here's the gist:

- Maintain _data_ in various formats
- Maintain _templates_ and related _static content_
- Use an Erlang module to generate a static site

# Why Another Tool?

It's fair to say that static site generation
[is a solved problem](http://staticsitegenerators.net). Why would anyone want
to created yet another static site generator when there are so many well
established, robust, proven tools already?

Because the world _needs_ a static site generator that embraces _functional
thinking_. What does that mean?

- Behavior should be obvious, or as obvious as possible without excessive
  verbosity
- Users should not be stupefied and confused by implicit or otherwise magical
  behavior
- Solutions should be small and focused to make them easier to understand ---
  in general, the principle of
  [separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns)
  should be evident when using the tool

When the goodness of functional thinking is applied to static site generation,
users will have more fun and be more productive!

# Why Erlang?

Erlang is a simple, easy-to-learn functional language that's incredibly
powerful. It's known for building highly reliable, massively scalable systems
(_shout-out to WhatsApp --- hey, what do you guys think of sponsoring a six
week Lambda Pad sprint in Fiji?_) but it's also terrific for tasks like site
generation. Erlang [term syntax][] is low-noise and expressive. Erlang
[functions][] are beautiful and maintainable.

Erlang is also [pretty dang fast][]!

[term syntax]: https://github.com/gar1t/lambdapad/blob/master/docs/index.erl#L7-L12
[functions]: https://github.com/gar1t/lambdapad/blob/master/docs/index.erl#L42-L43
[pretty dang fast]: http://stackoverflow.com/questions/6964392/speed-comparison-with-project-euler-c-vs-python-vs-erlang-vs-haskell

The question is not so much _Why Erlang_, but _Why Not Erlang_?

Most static site generators use so called "human friendly" languages for
configuration and customization. A few of the more popular options include
YAML, JSON, Ruby, and Python. Lambda Pad will show that Erlang --- yes,
straight up _Erlang_ --- should be counted among the usual suspects for
ease-of-use, clarity, and productivity!
