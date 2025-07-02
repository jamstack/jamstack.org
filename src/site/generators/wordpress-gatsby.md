---
title: WordPress Gatsby
repo: tomcomtang/wordpress-gatsby
startertemplaterepo: https://github.com/tomcomtang/wordpress-gatsby
homepage: https://wordpress-gatsby.edgeone.app
language:
  - JavaScript
  - PHP
license:
  - MIT
templates:
  - Gatsby
  - WordPress
  - Markdown
description: A personal blog template integrating WordPress and Gatsby, supporting both remote WordPress content and local config file modes for performance and flexibility.
thumbnailurl: /img/cms/wordpress-gatsby.jpeg
---

## Project Overview

**WordPress Gatsby** is a personal blog and portfolio template that seamlessly integrates WordPress as a headless CMS with Gatsby as a static site generator. It supports both fetching content from a remote WordPress site and using local configuration files, offering maximum flexibility and performance. The project works out-of-the-box with zero configuration, making it ideal for both beginners and advanced users.

## Key Features

- **Dual Content Modes:**  
  Fetch content from a remote WordPress site via REST API  
  Or use local fallback data/config files (`src/data/fallbackData.js`) for a fully static experience
- **Zero Configuration Required:**  
  All environment variables are optional; the site works immediately with local data
- **Giscus Comments Integration:**  
  Optional GitHub Discussions-based comments, auto-enabled if configured
- **Flexible Data Structure:**  
  Supports ACF custom fields, category description JSON, and more
- **Modern Portfolio Sections:**  
  Hero, About, Contact, Socials, Comments, Footer, Skills, Projects, and more
- **Easy Customization:**  
  Edit styles, layouts, and content structure with clear separation of concerns
- **Production Ready:**  
  One-click deploy to EdgeOne, Netlify, Vercel, or any static host

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**  
   `git clone https://github.com/tomcomtang/wordpress-gatsby.git`
2. **Install dependencies**  
   `npm install`
3. **Start the development server**  
   `npm run develop`  
   The site will work immediately with local fallback data!
4. **(Optional) Configure WordPress**
   - Create a `.env` file
   - Add your `GATSBY_WORDPRESS_URL`
   - Restart the development server
5. **(Optional) Configure Comments**
   - Add Giscus environment variables to `.env`
   - Comments menu will appear automatically

### Build for Production

```bash
npm run build
```

The built site will be in the `public/` directory, ready for deployment.

## Content Management

- **With WordPress:**  
  Update content through the WordPress admin panel
- **Without WordPress:**  
  Edit `src/data/fallbackData.js` for all content sections

## Customization

- **Styling:**  
  Modify `src/styles/` for global styles  
  Update component-specific CSS modules
- **Layout:**  
  Edit components in `src/components/`  
  Update page templates in `src/pages/`  
  Customize navigation in `src/components/header.js`

## Use Cases

- Personal blogs and portfolios
- Company or team websites
- Content-driven sites needing both static and dynamic content options
- Projects that want the WordPress editing experience with the performance of a static frontend

## Demo

[Live Demo](https://wordpress-gatsby-demo.example.com)

[GitHub Repo](https://github.com/tomcomtang/wordpress-gatsby)

## License

MIT License

## Acknowledgments

- Gatsby team for the static site generator
- WordPress for content management
- Giscus for GitHub Discussions integration
