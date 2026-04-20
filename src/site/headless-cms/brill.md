---
title: Brill Software
homepage: https://www.brill.software/
opensource: "Yes"
typeofcms: "Visual, API Driven"
supportedgenerators:
  - All
description: The Brill CMS supports visual editing of pages containing React components. The Brill Framework provides a "low code" platform that's designed to save you time and effort when developing web applications.
images:
  - path: /img/cms/brill_cms.jpg
---

## Brill CMS

The Brilll CMS supports visual editing of pages using React components. There's an extensive Storybook containing React components 
that can be Dragged and Dropped onto pages. The Storybook includes Material UI Components, data table components and editors such as the Visual Studio Code text editor and a HTML editor, as well as many other components.

You can add your own React components and create a Stroybook of components specifically for your organization, that implements
your organizations Look and Feel guidelines. This saves Content Editors time and helps them keep to the Look and Feel guidelines.

The Brill CMS was designed for creating enterprise applications but can equally be used for smaller projects.
There's no limit as to the sophistication of a web application that can be developed. You can create any web application you could using a bespoke React application. The Brill CMS was developed using the Brill CMS.

The Brill CMS uses a Git repository for storing versions of pages and resources. This allows large teams of Developers and Content Editors to work on a project without tripping over each other.  There's a workflow for reviewing and testing changes, before they go live.

## Brill Framework

The Brill Framework ties everything together and supports the rapid development of enterprise web applications using a 'low code' approach. The Brill Framework includes Client and Server side functionality and as well as a Middleware. 

The Brill Middleware allows React components to communicate with each other within a web applications and also with the Server. A component typically subscribes to a topic and publishes its results to another topic. The Brill Middleware uses WebSockets and is two way. React Components can get data from the Server but also the Server can push data to components. This allows quick development of applications that display real time information.

## For Developers

### Getting started

You can create an account and try the Brill CMS out. Visit the Brill Software website and click on 'Create Brill Online CMS Account'. There's a demo application and Storybook of components you can use as the basis to create your own web application.

### Low Code Solution

Its a lot of effort to create an enterprise web application using bespoke code from scratch. As a result there are many "No Code" solutions available that allow web applications to be created quickly. But often you find that the "No Code" solution doesn't support exactly what you want and then you spend large amounts of effort bending the product to do what you require.

The Brill CMS and Brill Framework take an in-between "Low Code" approach. You can use the supplied components and use the Middleware to allow components to subscribe to and publish data. You can configure the Server to connect to a database or existing backend system. You can develop your own components, Storybook, Themes, Client validation code, Middleware messages and Server business logic, all to meet your specific requirements.

### Re-use existing component and business logic

Any existing React components that you might already have can be imported and made available within the Brill CMS. The React components are just plain React Components implemented either using a Classes or Hooks and written in TypeScript or JavaScript. For new components, you can base them on the nearest existing component in the Storybook. The supplied componets are written in Typescript and are designed to be easy to understand and are well documented.

Any Java business logic you might already have can also be intergrated into the Brill Server. The Brill Server uses Spring Boot. You can also run JavaScript code within a sandbox on the Server.

## For Content editors

Pages are edited using a WYSIWYG editor, just like with WordPress or Wix but better. A Storybook allows you to see what components are available. Each Storybook page documents a component and provides examples that can be Dragged and Dropped into your own page and
customized.

The Brill CMS uses Themes to apply colors, styles and layout to pages. Pages and components are responsive and the same page can be used on mobiles, tablets and desktops. The Theme can specify different font sizes, colors and layout, depending on the screen size.  

A Theme can be developed that matches your organizations Look and Feel guidelines. Themes can be used to support multiple brands.

## For Technical Architects

### Open Source

The Brill CMS and Brill Framework is completely open-source, empowering you with the full source code to host, modify, and maintain the software on your own terms. Whether you prefer on-premises Servers or cloud infrastructure, you have full control over your deployment environment. Your not locked into a SaaS solution that has per-user-pricing.

We pride ourselves on providing code that meets the highest standards of quality, code that's brill. The codebase is not only documented to a high standrad but also designed with clarity and simplicity in mind. We've used industry standards wherever applicable.

### Security

Fine grained permissions are used to control access to pages and Server resources. Various cypher and hashing standards are used. Passwords are hashed on the Client and only the hash is transferred to the Server. JavaScript code on the Server is executed in a sandbox.

All changes made in the Brill CMS are tracked using a Git repository. Forked repositories can be created for specific users or groups of users. Users can be restricted to particular workspaces and repositories.

### Provides significantly more than a Headless CMS

A Headless CMS typically allows a Content Editor to edit sections of developer defined text and images and the Developers write code within a bespoke application to fetch the content sections using an API. 

With the Brill Framework, there's no need to write a bespoke application or write code that gets content using an API. Many things, such as a Router and Message Broker, are included to enable Developers to produce a robust and flexible "Low Code" solution.
