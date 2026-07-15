# 🚀 webdevjames.com | Professional Portfolio

Welcome to the repository for the official professional portfolio and agency hub of **James Frazier (webdevjames)**. Built as a high-performance, single-page application and server-side rendered (SSR) experience, this site showcases over a decade of web development, custom theme architecture, and UI/UX engineering.

🔗 **Live URL:** [https://webdevjames.com](https://webdevjames.com)

---

## What I'm Using

This project is built using a modern, lightweight, and blazingly fast front-end framework stack optimized for flawless Core Web Vitals, dynamic content delivery, and automated SEO.

- **Core Engine:** [Nuxt 3/4](https://nuxt.com/) & [Vite](https://vitejs.dev/) (Vue.js Composition API)
- **Styling & Layout:** [Tailwind CSS v4](https://tailwindcss.com/) & Sass/SCSS
- **Content Engine:** [@nuxt/content (v3)](https://content.nuxt.com/) for flat-file Markdown case study mapping
- **Media Optimization:** [@nuxt/image](https://image.nuxt.com/) for automated IPX WebP generation
- **Iconography:** [@nuxt/icon](https://icon.nuxt.com/) with hybrid open-source and custom local vector sets

---

## Key Architectural Highlights

### 1. Advanced Image Performance Engine

- **Responsive Sizing:** Implements the "Absolute Layering" technique inside responsive containers to replace legacy CSS `background-image` properties with native `<NuxtImg>` elements, unlocking native lazy-loading and dynamic mobile `srcset` viewports.
- **Global Markdown Overrides:** Features a custom `ProseImg.vue` interceptor component that automatically maps raw Markdown syntax (`![Alt](/path.png)`) directly into highly optimized WebP format targets.
- **Programmable Composables:** Utilizes the `useImage()` hook combined with Vue computed state listeners to elegantly process and inject dynamic background position rules from custom Markdown headers.

### 2. Micro-Interaction Loading Framework

- **Unified Transition Grids:** Incorporates Vue `<Transition mode="out-in">` wrappers to handle asynchronous UI handoffs.
- **Deterministic Skeletons:** Leverages a `server: false` and `lazy: true` data fetching footprint via `useAsyncData`. The page mounts instantly, displaying layout-locked `animate-pulse` skeleton placeholder cards before smoothly transitioning to alphabetically sorted (`.order("title", "ASC")`) project layouts.

### 3. Structural SEO & JSON-LD Knowledge Graph

- **Dynamic Metadata:** Leverages reactive `useSeoMeta()` and `useHead()` closures to prevent hydration timing bugs, ensuring data-driven pages swap fallback values seamlessly upon promise resolution.
- **Granular Schema Vocabularies:** Fully implements semantic schema trees across distinct viewports to maximize crawl visibility:
  - `WebSite` & `ProfessionalService` on the Homepage to link human entity identity to business entity tags.
  - `CollectionPage` on the directory indexes.
  - `ItemPage` nesting a distinct `CreativeWork` block on single dynamic portfolio case studies.
  - `ProfilePage`, `AboutPage`, and `ContactPage` configurations on informational routes.

### 4. Semantic Hardcopy Print Optimization

- **A4 Sheet Formatting:** Fine-tuned `@media print` directives inside the CSS system safely strip structural layout elements, utility footers, and color-centric graphical assets.
- **Data Integrity Translation:** Web-centric layout mechanisms smoothly adjust for physical paper layouts (e.g., hiding screen-only interactive SVG icons while bringing back classic semantic browser bullet markers on the data-driven Resume subpage).

---

## Local Development Setup

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/webdevjames-portfolio.git](https://github.com/your-username/webdevjames-portfolio.git)
cd webdevjames-portfolio
```
