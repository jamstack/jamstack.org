# Jamstack Site - Deployment Instructions for Cloudflare Pages

This site is built using Eleventy and is ready for deployment on Cloudflare Pages.

## Deployment Steps:

1.  **Connect your Git repository to Cloudflare Pages:**
    *   Go to your Cloudflare dashboard.
    *   Navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
    *   Select your repository where this code is hosted.

2.  **Configure your build settings:**
    *   **Project name:** Choose a name for your project.
    *   **Production branch:** Select the branch you want to deploy (e.g., `main`, `master`).
    *   **Framework preset:** Select `Eleventy` from the dropdown. Cloudflare should automatically detect it.
    *   **Build command:** If not automatically set, use `npm run build` or `npx @11ty/eleventy`. Based on the current `package.json`, `npm run build` is appropriate.
    *   **Build output directory:** This should be set to `dist`. Cloudflare's Eleventy preset should default to this.
    *   **Root directory (advanced):** Leave this as is (repository root).
    *   **Environment variables (advanced):** Add any necessary build-time environment variables here. For this project, if there are specific Node.js version requirements, you might set `NODE_VERSION`. Check the `package.json` "engines" field.

3.  **Save and Deploy:**
    *   Click **Save and Deploy**.

Cloudflare Pages will now build and deploy your site. Subsequent pushes to your configured production branch will automatically trigger new deployments.

## Local Development:

To run this site locally:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start` (This usually runs Eleventy in serve mode and watches for changes).
4.  Build for production: `npm run build` (This will generate the site in the `dist` folder).
