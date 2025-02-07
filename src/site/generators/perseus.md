---
title: Perseus
repo: arctic-hen7/perseus
homepage: https://arctic-hen7.github.io/perseus
language:
  - Rust
license:
  - MIT
templates:
  - Sycamore
description: A high-level web development framework for Rust with full support for server-side rendering and static generation.
---

Perseus is a blazingly fast frontend web development framework built in Rust with support for major rendering strategies, reactivity without a virtual DOM, and extreme customizability. It wraps the lower-level capabilities of [Sycamore](https://github.com/sycamore-rs/sycamore)!

-   📕 Supports static generation (serving only static resources)
-   🗼 Supports server-side rendering (serving dynamic resources)
-   🔧 Supports revalidation after time and/or with custom logic (updating rendered pages)
-   🛠️ Supports incremental regeneration (build on demand)
-   🏭 Open build matrix (use any rendering strategy with anything else)
-   🖥️ CLI harness that lets you build apps with ease and confidence
-   🌐 Full i18n support out-of-the-box with [Fluent](https://projectfluent.org)

## Usage

Here's a taste of Perseus (see [the _tiny_ example](https://github.com/arctic-hen7/perseus/tree/main/examples/tiny) for more):

```rust
use perseus::{define_app, ErrorPages, Template};
use std::rc::Rc;
use sycamore::template;
define_app! {
    templates: [
        Template::<G>::new("index").template(Rc::new(|_| {
            template! {
                p { "Hello World!" }
            }
        }))
    ],
    error_pages: ErrorPages::new(Rc::new(|url, status, err, _| {
        template! {
            p { (format!("An error with HTTP code {} occurred at '{}': '{}'.", status, url, err)) }
        }
    }))
}
```

Check out [the book](https://arctic-hen7.github.io/perseus) to learn how to turn that into your next app!
