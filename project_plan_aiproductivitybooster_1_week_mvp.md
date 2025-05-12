# AIProductivityBooster.com: 1-Week MVP Project Plan

**Project:** Design and develop a Minimum Viable Product (MVP) for the AIProductivityBooster.com affiliate marketing website.

**Goal:** To deliver a functional, responsive, and easily customizable MVP website within a 1-week timeframe, emphasizing automation and reusability for future projects. This version will focus on core structure, essential pages, and placeholder content, ready for rapid deployment and subsequent iteration.

**Timeline:** 7 Days

**Key Principles for 1-Week MVP:**
*   **Speed & Automation:** Leverage templates and automated processes wherever possible.
*   **Core Functionality First:** Prioritize essential features for a functional affiliate site.
*   **Placeholders & Iteration:** Use well-structured placeholders for content and design elements that can be easily updated by the user later.
*   **Reusability:** Build components and structures with future replication in mind.
*   **Minimized User Input:** To maintain speed, I will make standard professional choices for design elements (colors, fonts) and use generic placeholders, which can be refined later.

---

## Daily Breakdown & Tasks:

### Day 1: Foundational Structure & Core Branding
*   **Objective:** Establish the basic skeleton of the website with navigation and branding placeholders.
*   **Tasks:**
    1.  **Confirm React Project:** (Already initialized and working locally for you).
    2.  **Implement Site Layout:** Create reusable `Header`, `Footer`, and `Navigation` components.
        *   `Header`: Will include a text-based placeholder logo: "AIProductivityBooster.com".
        *   `Footer`: Will include contact info: "Pete Armstrong | admin@aiproductivitybooster.com" and a copyright notice.
    3.  **Basic Page Shells:** Create React component shells for: `HomePage`, `AboutPage`, `ContactPage`, `PrivacyPolicyPage`, and a `BlogListPage` (structure only).
    4.  **Initial Styling Definition (Internal):** Define a simple, clean, and professional color palette (e.g., primary blue: `#007bff`, neutral grays: `#f8f9fa`, `#6c757d`, text: `#212529`) and select a standard, highly readable font pairing (e.g., Sans-serif like Open Sans or Roboto for body, a slightly bolder sans-serif for headings). These will be documented in the final brief style guide.
*   **Deliverable by EOD:** Basic site shell navigable via header/footer links, displaying empty placeholder pages. Project structure for pages and core components established.

### Day 2: Homepage MVP & Essential Static Pages
*   **Objective:** Develop a functional Homepage MVP and populate essential static pages with placeholder content.
*   **Tasks:**
    1.  **Homepage MVP Development:**
        *   Create a simple Hero section with a placeholder headline (e.g., "Boost Your Productivity with AI Tools") and a brief introductory paragraph (placeholder).
        *   Add a primary Call-to-Action (CTA) button (e.g., "Explore Top AI Tools") linking to a placeholder section or future tools page.
    2.  **Populate Static Pages (Placeholders):**
        *   `AboutPage`: Draft professional placeholder text introducing AIProductivityBooster.com as a resource for AI productivity tools.
        *   `PrivacyPolicyPage`: Integrate a generic, standard privacy policy template (clearly marked as a placeholder requiring legal review).
        *   `ContactPage`: Implement a simple page displaying the email address `admin@aiproductivitybooster.com` and a brief message (e.g., "For inquiries, please contact Pete Armstrong at admin@aiproductivitybooster.com"). A functional form will be a post-MVP enhancement to maintain speed.
*   **Deliverable by EOD:** Homepage with hero section and CTA. About and Privacy pages populated with placeholder text. Basic Contact page content.

### Day 3: Core UX (Responsiveness) & Blog Structure
*   **Objective:** Ensure the core pages are responsive and set up the basic structure for the blog.
*   **Tasks:**
    1.  **Responsive Design:** Ensure `HomePage`, `AboutPage`, and `ContactPage` are reasonably responsive across common device sizes (desktop, tablet, mobile) using CSS media queries or utility classes from Tailwind CSS (which is part of the template).
    2.  **Basic Interactive Elements:** Implement simple hover effects for navigation links and CTA buttons.
    3.  **Blog Structure Setup:**
        *   `BlogListPage`: Create a layout to list blog post summaries (will use placeholder summaries for now).
        *   `BlogPostPage`: Create a template for displaying a single blog post (will use placeholder title and content).
*   **Deliverable by EOD:** Core pages are responsive. Basic blog list and single post templates are structured (no actual posts yet).

### Day 4: Affiliate Content Focus (Placeholders) & Initial Content Structure
*   **Objective:** Integrate placeholder structures for affiliate product listings and example content.
*   **Tasks:**
    1.  **Product/Tool Listing Component:** Design and implement a simple, reusable React component to display an AI tool/product (e.g., with fields for Tool Name, Brief Description, Placeholder Image, Affiliate Link Button).
    2.  **Integrate Placeholder Listings:** Add 2-3 instances of this component on the `HomePage` or create a new `ToolsPage` shell and add them there, using generic AI tool names and placeholder details.
        *   **Note:** Affiliate links will be placeholders (e.g., `#product1-link`).
    3.  **Example Article Structure:** Draft placeholder content structure for one sample article (e.g., "Top 5 AI Tools for X" or "How AI Streamlines Y") to demonstrate blog post layout. This will be plain text within the `BlogPostPage` template.
*   **USER INPUT (Optional - for slightly more relevant placeholders, if provided quickly):** If you have 1-2 specific AI tool *categories* (e.g., "AI Writing Assistants", "AI Project Management") you definitely want to feature, let me know by end of Day 3. Otherwise, I will use generic placeholders like "AI Tool A", "AI Tool B".
*   **Deliverable by EOD:** Homepage or Tools page includes placeholder product listings. One blog post template shows example structured content.

### Day 5: Basic SEO & Lead Capture Structure
*   **Objective:** Implement foundational SEO elements and a placeholder for lead capture.
*   **Tasks:**
    1.  **Basic SEO Meta Tags:** Add placeholder `<title>` and `<meta name="description">` tags to `index.html` (for global defaults) and for `HomePage`, `AboutPage`, `ContactPage` (component-level if using a library like React Helmet, or simple static updates for MVP).
    2.  **Lead Capture Placeholder:** Design a simple section (e.g., in the footer or on the homepage) for an email opt-in form. This will be a visual placeholder (e.g., "Subscribe for AI Productivity News!") with an input field and a button, but no backend integration for this 1-week MVP.
*   **Deliverable by EOD:** Basic SEO meta tag placeholders implemented. Visual placeholder for lead capture form integrated.

### Day 6: Technical Polish, Review & Build Prep
*   **Objective:** Conduct a quick technical review, ensure basic consistency, and prepare for the build process.
*   **Tasks:**
    1.  **Code Cleanup & Consistency Check:** Quick review of components for basic consistency in styling and structure.
    2.  **Internal Linking Check:** Ensure all internal navigation links (header, footer, CTAs) point to the correct pages/sections within the MVP.
    3.  **Image Placeholders:** Ensure any image placeholders used are clearly marked and consistently sized.
    4.  **Prepare for Build:** Confirm the `pnpm run build` command runs successfully and generates the `dist` folder.
*   **Deliverable by EOD:** Internally reviewed and polished MVP codebase. Successful local build confirmed.

### Day 7: Finalization, Brief Documentation & Handoff
*   **Objective:** Finalize all elements, create minimal essential documentation, and package deliverables for handoff.
*   **Tasks:**
    1.  **Create Brief Style Guide:** Document the primary colors and fonts used in a simple section within the `README.md` or a new `STYLE_GUIDE.md`.
    2.  **Prepare Concise MVP Report:** Briefly outline what was built, key features of the MVP, and suggested next steps for Pete to customize content and add real affiliate links.
    3.  **Final Code Package:** Ensure all project files (excluding `node_modules`) are clean and ready.
    4.  **Update `todo.md`:** Mark all MVP-completed tasks and note what was simplified for the 1-week sprint.
    5.  **Package Deliverables:** Zip the project files, style guide, and MVP report.
*   **Deliverable by EOD:** Zipped MVP codebase, brief style guide, MVP report, and updated `todo.md`. Website is ready for user customization and Netlify deployment.

---

This accelerated 1-week plan focuses on delivering a functional and extensible MVP. I will begin immediately with Day 1 tasks. The first item I will work on is the site layout (Header, Footer, Navigation).
