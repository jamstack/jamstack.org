# Healthcare Information Site

This directory contains a simple informational healthcare website built with Eleventy.

## Development

This site is part of a larger monorepo structure. Scripts to manage this site are available in the root `package.json` file.

*   **Prerequisites:**
    *   Node.js and npm (see root `package.json` for version if specified)
    *   Run `npm install` from the root of the repository to install all dependencies, including Eleventy.

*   **Build the site:**
    From the root of the repository, run:
    ```bash
    npm run build:health
    ```
    This will generate the static site in the `healthcare_site/dist` directory.

*   **Serve the site locally:**
    From the root of the repository, run:
    ```bash
    npm run serve:health
    ```
    This will start a local development server (usually on port 8081) and watch for changes.

*   **Clean build directory:**
    From the root of the repository, the main clean script also handles this site:
    ```bash
    npm run clean
    ```
    This will remove `healthcare_site/dist`.

## Deployment to Cloudflare Pages

This site is designed to be deployed as part of the larger repository, but targeting this specific sub-directory's build output.

1.  **Connect your Git repository to Cloudflare Pages:**
    *   Follow the standard procedure in your Cloudflare dashboard.

2.  **Configure your build settings for THIS specific site:**
    *   When setting up a new Cloudflare Pages project for this healthcare site, you'll need to specify its unique build configuration.
    *   **Project name:** Choose a name (e.g., `my-healthcare-info-site`).
    *   **Production branch:** Select your main deployment branch.
    *   **Framework preset:** Select `Eleventy`.
    *   **Build command:** `npm run build:health` (This uses the script from the root `package.json`).
    *   **Build output directory:** `healthcare_site/dist` (This is crucial - it tells Cloudflare where to find the built files for *this specific site*).
    *   **Root directory (advanced):** If your build command `npm run build:health` is run from the repository root (which it is, due to `cd healthcare_site && ... && cd ..` not being how Cloudflare typically runs commands specified like this), you might need to adjust.
        *   A common pattern for Cloudflare Pages with monorepos or sub-sites is to set the "Root directory" in Cloudflare's settings to `healthcare_site`.
        *   If you set "Root directory" to `healthcare_site`, then the "Build command" could be simplified to `npx @11ty/eleventy` (assuming `package.json` with Eleventy as a dev dependency is also in `healthcare_site`, or Eleventy is installed globally in the build environment). And "Build output directory" would be `dist`.
        *   **Recommended Cloudflare Configuration:**
            *   **Root Directory:** `healthcare_site`
            *   **Build Command:** `npx @11ty/eleventy` (You would need a minimal `package.json` in `healthcare_site` just to specify Eleventy as a dev dep, or ensure build environment provides it) OR use the root build command `npm run build:health` *if* Cloudflare allows running it in a way that correctly populates `healthcare_site/dist` *and* the output directory is set to `healthcare_site/dist` from the repo root.
            *   **Build Output Directory:** `healthcare_site/dist` (if "Root Directory" is repository root) OR `dist` (if "Root Directory" is `healthcare_site`).

    **Let's assume the following for clarity in Cloudflare settings:**
    *   **Project Name**: `your-healthcare-project-name`
    *   **Production Branch**: `main` (or your primary branch)
    *   **Framework Preset**: `Eleventy`
    *   **Build command**: `npm run build:health`
    *   **Build output directory**: `healthcare_site/dist`
    *   **Root Directory (under Build system version -> Environment variables in settings):** Leave as repository root if `build:health` correctly outputs. If issues arise, explore setting Root Directory to `healthcare_site` and simplifying the build command.

3.  **Save and Deploy:**
    *   Click **Save and Deploy**.

Cloudflare Pages will then build and deploy this specific sub-site.
