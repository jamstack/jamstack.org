---
title: Brill CMS
homepage: https://www.brill.software/
repo: https://github.com/brill-software/brill_client
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

The Brill CMS is designed for creating enterprise level application but can equally be used for smaller projects.
There's no limit as to the sophistication of a web application that can be developed. You can create any web application you could using a bespoke React application. Components can include text, images, forms, fields, radio buttons, checkboxes, tables and anything you can think of.

The Brill CMS was developed using the Brill CMS. We're not aware of any other CMSes that were created using themsleves or that can edit themselves.

The Brill CMS uses a Git repository for storing versions of pages and resources. This allows large teams of Developers and Content Editors to work on a project without tripping over each other.  There's a workflow for reviewing and testing changes, before they go live.

## Brill Framework

The Brill Framework ties everything together and supports the rapid development of enterprise web applications using a 'low code' approach. The Brill Framework includes client and server side functionality and middleware that ties everything together. 

The Brill Middleware allows React components to communicate with each other within a web application and also with the server. A component typically subscribes to a topic and publishes its results to another topic. The Brill Middleware uses WebSockets and is two way. React Components can get data from the server but also the server can push data to components. This allows applications to be
developed that display real time information such as share prices or news.

## For Developers

### Getting started

You can download the brill_client, brill_server and brill_apps projects from a public repository such as Bitbucket, Sourceforge, GitHub or GitLab. It does take some time to build the projects and set everything up. Alternatively there's a Docker Image available with everything already set up and ready to go. 

We'd recommend that you get in touch and request a demo, so that you can get an overview of the product and how it could meet your requirements. We can provide you with a login that allows you to create and edit pages on one of our servers, so you can produce an initial proof of concept.

### Low Code Solution

Its a lot of effort to create an enterprise web application using bespoke code from scratch. As a result there are many "No Code" solutions available that allow web applications to be created quickly. But often you find that the "No Code" solution doesn't support exactly what you want and then you spend large amounts of effort bending the product to do what you require.

The Brill CMS and Brill Framework take an in-between "Low Code" approach. You can use the supplied components and use the middleware to allow components to subscribe to and publish data. You can configure the server to connect to a database or existing backend system. You can use the authentication code and even use the Brill Framework to access a git repository. But you can also develop your own components, storybook, themes, client validation code, middleware messages and server business logic, all to meet your specific requirements.

### Re-use existing component and business logic

Any existing React components that you might already have can be imported and made available within the Brill CMS. The React components  are just plain React Components implemented either using a Class or Hooks and either JavaScript or TypeScript. For new components, you can base them on the nearest existing component in the Storybook. The supplied componets are written in Typescript and are designed to be easy to understand and are well documented.

Any Java business logic you might already have can also be intergrated into the Brill Server. The Brill Server uses Spring Boot. You can also run JavaScript code within a sandbox on the server.

The objective is to make it as easy as possible for you to integrate in your own code and to be able to do what you could do with a bespoke solution but with less effort and in a shorter timescale.

## For Content editors

Pages are edited using a WYSIWYG editor, just like with WordPress or Wix but better. A Storybook allows you to see what components are available. Each Storybook page documents a component and provides examples that can be Dragged and Dropped into your own page and
customized.

The Brill CMS uses Themes to apply colors, styles and layout to pages. Pages and components are responsive and the same page can be used on mobiles, tablets and desktops. The Theme can specify different font sizes, colors and layout, depending on the screen size.  

A Theme can be developed that matches your organizations Look and Feel guidelines. Themes can be used to support multiple different brands. For example, suppose you provide house insurance quotes to several different supermarkets, you can have a Theme for each supermarket and have a common quote page to which the appropriate Theme is applied.

## For Technical Architects

### Open Source

The full source code is available and it's intended that most organizations will run the product on their own in-house servers or a cloud service that they have control over. There's no tie-in to a SaaS and no per end user or bandwidth charges, so you can support millions
of users.

### Standards based

 All the supplied components are written in TypeScript. TypeScript supports type checking and this helps detect issues at an earlier stage in the development cycle and makes the code more readable and easier to maintain. The CMS pages are held in a JSON format. The messages between the client and server are also JSON. The server is a Java Spring Boot application that uses WebScokets. The server
 uses JSON for holding data internally and supports JDBC compatible databases such as MySql, Oracle, DB2 and Microsoft SQL Server.

### Security

Fine grained permissions are used to control access to pages and server resources. Various cypher and hashing standards are used such as Eliptical Curve Cryptography, AES and SHA-256. Passwords are hashed on the client and only the hash is transferred to the server. JavaScript code on the server is executed in a sandbox.

All changes made using the Brill CMS are tracked using a Git repository. Forked repositories can be created for specific users or groups of users. Users can be restricted to particular workspaces and repositories.

### Provides significantly more than a Headless CMS

A Headless CMS typically allows a Content Editor to edit sections of developer defined text and images and the Developers write code within a bespoke application to fetch the content sections using an API. 

With the Brill Framework, there's no need to write a bespoke application or write code that gets content using an API. Many things, such as a Router and Message Broker, are included to enable Developers to produce a robust and flexible "Low Code" solution.
