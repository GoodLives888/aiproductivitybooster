# AIProductivityBooster.com - Style Guide

This style guide outlines the visual design standards for the AIProductivityBooster.com website. Adhering to these guidelines will ensure a consistent, professional, and modern user experience across all pages and components.

## 1. Color Palette

The color palette is based on **Option 2: Tech-Inspired Blues, Whites, and Accents**, chosen for its clean, professional, and trustworthy feel, suitable for a technology-focused website.

### Primary Colors:
*   **Brand Primary (Deep Blue):** `#0A2540` (Used for main headings, primary buttons, and key branding elements. Evokes trust and stability.)
*   **Brand Secondary (Bright Blue):** `#007BFF` (Used for secondary headings, accents, and interactive elements. Provides a vibrant, energetic contrast.)

### Accent Colors:
*   **Accent Teal:** `#00C49F` (Used for highlights, call-to-action emphasis, and graphical elements. Adds a touch of modern tech feel.)
*   **Accent Orange (for specific CTAs/warnings, use sparingly):** `#FF8C00` (To be used for high-impact CTAs or warning/alert states if needed, providing a strong visual cue.)

### Neutral Colors:
*   **Background Main (Off-White/Light Gray):** `#F8F9FA` (Primary background for most content areas, ensuring readability and a clean look.)
*   **Background Alt (Slightly Darker Gray):** `#E9ECEF` (Used for secondary background sections or to differentiate content blocks.)
*   **Text Primary (Dark Gray/Near Black):** `#212529` (Main text color for body copy, ensuring high readability.)
*   **Text Secondary (Medium Gray):** `#6C757D` (For subheadings, secondary text, and captions.)
*   **Text Tertiary (Light Gray):** `#ADB5BD` (For placeholder text, disabled states, or very subtle information.)
*   **Border Subtle (Light Gray):** `#DEE2E6` (For subtle borders on cards, inputs, and dividers.)
*   **White:** `#FFFFFF` (Used for text on dark backgrounds, card backgrounds, and clean interface elements.)

### Semantic Colors (Conceptual - to be applied as needed):
*   **Success:** `#28A745` (For success messages, validation.)
*   **Warning:** `#FFC107` (For warnings, non-critical alerts.)
*   **Error:** `#DC3545` (For error messages, critical alerts.)

## 2. Typography

The typography is based on **Option B: Bold and Modern**, aiming for clarity, readability, and a contemporary feel. We will use a combination of sans-serif fonts available through common systems or Google Fonts for wide compatibility.

*   **Primary Font (Headings):** `Manrope` (Bold, clean, and modern sans-serif. Weights: Bold (700) for main headings, Semi-Bold (600) for sub-headings.)
    *   *Fallback:* `Helvetica Neue, Arial, sans-serif`
*   **Secondary Font (Body Text & UI Elements):** `Inter` (Highly readable sans-serif, excellent for UI and longer text passages. Weights: Regular (400) for body text, Medium (500) for UI elements or emphasis.)
    *   *Fallback:* `Helvetica, Arial, sans-serif`

### Font Sizing (Responsive):
*   **H1 (Page Titles):** 32px (mobile) / 40px (tablet) / 48px (desktop) - `font-heading`
*   **H2 (Section Titles):** 28px / 32px / 36px - `font-heading`
*   **H3 (Sub-Section Titles):** 22px / 26px / 28px - `font-heading`
*   **Body Text:** 16px / 17px / 18px - `font-sans`
*   **Small Text/Captions:** 14px / 15px / 16px - `font-sans`

### Line Height:
*   **Headings:** 1.2 - 1.3
*   **Body Text:** 1.6 - 1.7 (for optimal readability)

## 3. Layout and Spacing

*   **Minimalist Approach:** Layouts should be clean, uncluttered, and prioritize content. Ample white space is crucial.
*   **Grid System:** A flexible grid system (e.g., 12-column) is used for consistent alignment and responsive design.
*   **Spacing Scale:** Utilize a consistent spacing scale (e.g., multiples of 4px or 8px) for margins, padding, and gaps between elements to maintain visual rhythm.
    *   Example: `p-4` (16px), `mb-6` (24px), `gap-8` (32px) in Tailwind CSS.
*   **Container Widths:** Max container width for content is typically 1140px or 1280px on larger screens, with appropriate padding.

## 4. UI Elements

### Buttons (CTAButton Component):
*   **Primary:** Solid background (Brand Primary or Accent Teal), white text. Clear hover and active states (e.g., slightly darker background, subtle scale transform).
*   **Secondary/Outline:** Transparent background with colored border (Brand Primary or Accent Teal), colored text. Hover state might involve a background fill or border/text color change.
*   **Padding:** Generous padding for a modern, clickable feel.
*   **Border Radius:** Consistent border-radius (e.g., 6px or 8px) for a soft, modern look.

### Forms:
*   **Inputs:** Clean design, clear labels, adequate padding. Subtle border (Border Subtle), with a highlighted border (Brand Accent or Brand Secondary) on focus.
*   **Accessibility:** Ensure proper `aria-labels` and keyboard navigation.

### Cards:
*   **Background:** White or very light neutral.
*   **Shadows:** Subtle box shadows to create depth and separation (e.g., `shadow-lg`, `shadow-xl` from Tailwind).
*   **Border Radius:** Consistent with buttons.
*   **Padding:** Adequate internal padding.

## 5. Iconography

*   **Style:** Clean, modern, and easily recognizable. Lucide Icons are used for consistency.
*   **Sizing:** Icons should be scaled appropriately for their context, maintaining clarity.
*   **Color:** Typically use Text Secondary or Brand Accent, depending on emphasis.

## 6. Imagery and Graphics

*   **High-Quality:** All images and graphics should be high-resolution and optimized for the web.
*   **AI-Themed:** Graphics should align with the AI and productivity theme, using abstract representations, network motifs, or clean illustrations.
*   **Hero Graphic:** The generated hero graphic (`ai_hero_graphic_sample_1.png`) sets the tone.
*   **Alt Text:** All images must have descriptive alt text for accessibility and SEO.

## 7. Animations and Micro-interactions

*   **Subtlety:** Animations should be smooth, subtle, and purposeful, enhancing the user experience without being distracting. Framer Motion is used for implementation.
*   **Examples:**
    *   Hover effects on interactive elements (slight scale, color change).
    *   Page transitions (fade-in, subtle slide-in).
    *   Element entrance animations (e.g., items in a list appearing sequentially).
    *   Feedback on actions (e.g., button press effect).
*   **Performance:** Animations should be optimized for performance to avoid jank or lag.

## 8. Design Principles

*   **User-Centric:** Design decisions should always prioritize the user experience.
*   **Clarity:** Information should be presented clearly and concisely.
*   **Consistency:** Maintain consistency in design elements, patterns, and interactions across the entire website.
*   **Accessibility:** Strive to meet WCAG guidelines (e.g., color contrast, keyboard navigation, semantic HTML).
*   **Modern & Professional:** The overall aesthetic should be contemporary, clean, and reflect the professionalism of an AI-focused resource.
*   **Mobile-First & Responsive:** Design and develop with a mobile-first approach, ensuring a seamless experience across all device sizes.

This style guide is a living document and may be updated as the website evolves.

