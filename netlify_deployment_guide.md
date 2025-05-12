# Netlify Deployment Guide for Your React Website (AIProductivityBooster.com)

This guide will walk you through deploying your React application, which was built using Vite, to Netlify. Netlify is a great platform for hosting static websites and modern frontend applications.

## Prerequisites:

1.  **A Netlify Account:** If you don't have one, sign up at [https://www.netlify.com/](https://www.netlify.com/).
2.  **A Git Repository:** Your project code needs to be in a Git repository hosted on GitHub, GitLab, or Bitbucket. Netlify will connect to this repository to build and deploy your site.

## Deployment Steps:

### Step 1: Prepare Your Project and Push to Git

1.  **Navigate to your project directory:**
    Open your terminal or command prompt and go to the `/home/ubuntu/aiproductivitybooster/` directory (or wherever you have unzipped the project).

2.  **Initialize Git (if not already done) and commit your files:**
    The project was initialized with Git. If you've made changes or are starting fresh with the provided zip:
    ```bash
    cd /path/to/your/aiproductivitybooster
    git init # Only if it's a new directory without .git
    git add .
    git commit -m "Initial commit for AIProductivityBooster.com"
    ```

3.  **Create a new repository on GitHub/GitLab/Bitbucket:**
    Go to your preferred Git hosting service and create a new repository. Do *not* initialize it with a README, .gitignore, or license if you're pushing an existing repository.

4.  **Link your local repository to the remote repository and push:**
    Follow the instructions provided by your Git host. It will typically look like this:
    ```bash
    git remote add origin <your-remote-repository-url.git>
    git branch -M main
    git push -u origin main
    ```

### Step 2: Deploy on Netlify

1.  **Log in to your Netlify account.**

2.  **Add a new site:**
    From your Netlify dashboard, click on "Add new site" (or "Sites" then "Add new site") and choose "Import an existing project".

3.  **Connect to your Git provider:**
    Select the Git provider where you hosted your repository (GitHub, GitLab, Bitbucket) and authorize Netlify to access your repositories.

4.  **Pick your repository:**
    Search for and select the repository you just created for `aiproductivitybooster.com`.

5.  **Configure your site’s settings:**
    Netlify will usually auto-detect that it's a Vite project (which is what the React template uses). However, verify the following settings:
    *   **Branch to deploy:** `main` (or your default branch).
    *   **Build command:** The `package.json` uses `pnpm` (as per the template structure). If you have `pnpm` installed locally and in your Netlify build environment (Netlify supports pnpm), you can use:
        `pnpm install && pnpm run build`
        Alternatively, if you prefer npm (ensure you have a `package-lock.json` by running `npm install` first if you switch):
        `npm install && npm run build`
        The template uses `pnpm`, so sticking to it is recommended. Netlify's build image should handle `pnpm` if a `pnpm-lock.yaml` file is present (which it should be after `pnpm install`).
    *   **Publish directory:** For Vite projects, this is typically `dist`.
        Verify this by looking at the `vite.config.js` or `vite.config.ts` in your project, or by running the build command locally and seeing where the output files are placed.
The `create_react_app` template uses Vite, and its build output directory is `dist`.

6.  **Environment Variables (Optional but Recommended):**
    If your application needs any environment variables (e.g., API keys for analytics, though none are configured in the base template yet), you can add them under "Environment variables" in the site settings. For example:
    *   `NODE_VERSION`: You might want to set this to a recent LTS version like `18` or `20` if you encounter build issues related to Node.js versioning.

7.  **Deploy site:**
    Click the "Deploy site" button. Netlify will start the build process. You can watch the deploy log in real-time.

### Step 3: Post-Deployment

1.  **Check your site:** Once the deployment is complete, Netlify will provide you with a unique URL (e.g., `random-name-12345.netlify.app`). Visit this URL to see your live website.

2.  **Custom Domain:** To use your `aiproductivitybooster.com` domain:
    *   Go to your site's settings in Netlify.
    *   Find the "Domain management" section.
    *   Click "Add custom domain" and enter `aiproductivitybooster.com`.
    *   Follow the instructions to verify ownership and configure your DNS records with your domain registrar to point to Netlify. This usually involves adding `ALIAS`, `ANAME`, or `CNAME` records, and/or changing your nameservers to Netlify's.

3.  **Enable HTTPS:** Netlify automatically provisions SSL certificates for custom domains, providing HTTPS for free.

## Future Updates:

Whenever you push changes to your connected Git repository's main branch, Netlify will automatically trigger a new build and deploy the updates.

## Troubleshooting:

*   **Build fails:** Check the deploy log on Netlify for errors. Common issues include missing dependencies (ensure `package.json` is correct and all dependencies are installed by the build command), incorrect build commands, or wrong publish directory.
*   **Site doesn't look right:** Use your browser's developer tools to check for console errors or network issues. Ensure all assets are loading correctly.

This guide should help you get your AIProductivityBooster.com website live on Netlify. The provided project is a starting point; you'll need to customize the content and components further based on the `todo.md` checklist to fully realize your vision.

