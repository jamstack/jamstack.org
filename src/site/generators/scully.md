---
title: Scully
repo: scullyio/scully
homepage: https://scully.io
language:
  - JavaScript
  - TypeScript
license:
  - MIT
templates:
  - Angular
description: Scully is a static site generator for Angular projects looking to embrace the Jamstack.
twitter: ScullyIO
---

The best way to build the fastest Angular apps. Scully is a static site generator for Angular projects looking to embrace the JAMStack.

- [Getting Started](https://scully.io/docs/getting-started)
- [Full Documentation](https://scully.io/docs/scully)
- [Live Demo](https://www.youtube.com/watch?v=Sh37rIUL-d4) (_from Dec 16, 2019_)

# What is Scully?
Scully pre-renders each page in your app to plain HTML & CSS. To do this, Scully uses machine learning techniques to find 
all of the routes in your project. Scully then visits each route, rendering the view and saving it to an HTML file.

You can then ship all of those HTML files to production. Each view in your app can now be delivered to your users in just 
a few KBs, as opposed to the hundreds/thousands of KBs require to download your entire Angular app. 

Your app appears INSTANTLY on any device (including mobile 3G). 

Once the fully-rendered HTML arrives/appears on the user's view, your Angular app will them load and bootstrap ontop of
the existing view. This means that Scully gives you the best of both worlds:

1. The ability to pre-render your entire app to the most base form of HTML & CSS. 
2. The ability to still have a full powered SPA written in Angular. 

When your app is pre-rendered, users no longer wait until all the JavaScript has downloaded, parsed and executed before 
they can see and interact with your website. They can immediately begin to see and interact with the page. When your page
is IMMEDIATELY available, you will have less abandoned sessions and a much higher conversion rate on our website. 

This also means that may not need to ship your backend to production. Because the view is pre-rendered and the
data is fetched at build time, all views that can run without the backend in prod CAN run without the backend in prod. 
The security an cost implications to that fact can be mind blowing when you think about them. 

For those wanting to know more about this process, please read the [Getting Started](https://github.com/scullyio/scully/blob/master/docs/getting-started.md) guide. For
those who want to know more about the theory behind pre-rendering JavaScript SPAs, our friends at [Netlify](https://netlify.com)
wrote a [free book about the JAMStack](https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf). 
Check that out today. 
