# Care Home Rehabilitation Centre — Kolkata

[![React](https://img.shields.io/badge/React-18.3-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Radix_UI-black.svg)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)](#)

> Official web application for **Care Home Rehabilitation Centre**, a premier 24x7 residential healthcare and de-addiction facility located in Garia, Kolkata, West Bengal.

- **Live Production URL:** [https://www.carehomekolkata.in](https://www.carehomekolkata.in)
- **Primary Contacts:** `+91 7980611010` / `+91 6289424181` / `+91 9073012566`
- **Location:** Panchpota Dhalai Bridge, Gomkol Bus Stop, Garia Station Road, Kolkata – 700152, West Bengal, India

---

## Table of Contents

- [1. Overview & Healthcare Mission](#1-overview--healthcare-mission)
- [2. Key Features & Architectural Highlights](#2-key-features--architectural-highlights)
- [3. Complete Project Directory & File Structure](#3-complete-project-directory--file-structure)
  - [Root Configuration Files](#root-configuration-files)
  - [Public Assets (`/public`)](#public-assets-public)
  - [Automation Scripts (`/scripts`)](#automation-scripts-scripts)
  - [Source Code Architecture (`/src`)](#source-code-architecture-src)
- [4. Media Pipeline & High-Performance Video Optimization](#4-media-pipeline--high-performance-video-optimization)
- [5. Application Routes & Pages Map](#5-application-routes--pages-map)
- [6. Development Workflow & Commands](#6-development-workflow--commands)
- [7. Production Build & Deployment](#7-production-build--deployment)
- [8. Contact & Emergency Inquiries](#8-contact--emergency-inquiries)

---

## 1. Overview & Healthcare Mission

**Care Home Rehabilitation Centre** has been serving families across Kolkata, South 24 Parganas, Garia, Narendrapur, Sonarpur, and surrounding regions since 2022. The centre specializes in evidence-based recovery and clinical care across five core domains:

1. **Medically Supervised Detoxification:** Safe, 24/7 clinically monitored management of acute withdrawal symptoms.
2. **De-Addiction & 12-Step Rehabilitation:** Structured therapies for chemical dependency, substance abuse, and alcoholism.
3. **Co-Occurring Disorders & Dual Diagnosis:** Integrated psychiatric support for addiction combined with psychological distress.
4. **Mild Psychological Disorder Treatment:** Therapeutic counseling, Cognitive Behavioral Therapy (CBT), and psychiatric guidance for depression, anxiety, and mood disorders.
5. **24x7 Old Age & Retirement Home Care:** Compassionate long-term residential assisted living, palliative support, and specialized care for bedridden or post-operative patients.

---

## 2. Key Features & Architectural Highlights

- **Lightning-Fast SPA Performance:** Built with Vite 8 and React 18, utilizing Route-level Code Splitting (`React.lazy` + `Suspense`) to ensure minimal initial bundle load.
- **High-Performance Gallery Pipeline:**
  - Zero-bandwidth grid loading: Over 350 MB of raw video files are abstracted through an automated headless frame extraction pipeline, serving ultra-lightweight JPEG posters (~20KB–70KB) that eliminate blank boxes entirely.
  - Desktop hover video previews with safe Promise rejection handling.
  - Mobile-first touch playback with glassmorphism Play overlays.
  - Interactive Lightbox with keyboard navigation (<kbd>Esc</kbd>, <kbd>←</kbd>, <kbd>→</kbd>), mobile touch swipe gestures, and background scroll locking.
- **Dynamic SEO Engine:** The custom `useSEO` hook dynamically injects route-specific meta titles, structured descriptions, localized keywords, canonical tags, and OpenGraph/Twitter social cards on every page navigation.
- **Conversion-Driven UX:**
  - One-click floating WhatsApp chat (`https://wa.me/916289424181`).
  - Emergency direct telephone dialers across headers, footers, and floating action buttons.
  - Direct PDF downloads for official admission brochures and accommodation pricing tables.
- **Fluid UI & Micro-Interactions:** Tailwind CSS combined with `framer-motion` for kinetic word-by-word hero reveals, scroll-triggered fade-ins, stagger animations, and animated counter metrics.

---

## 3. Complete Project Directory & File Structure

```
CareHome_Rehab_Website/
├── .gitignore                    # Git version control ignore rules
├── .hintrc                       # Webhint code quality configuration
├── components.json               # shadcn/ui configuration & path aliases
├── eslint.config.js              # ESLint v9 configuration
├── index.html                    # Single Page Application HTML entry point with preconnects
├── package.json                  # NPM dependencies, scripts, and project metadata
├── postcss.config.js             # PostCSS plugins (Tailwind CSS, Autoprefixer)
├── README.md                     # Comprehensive project documentation
├── tailwind.config.ts            # Tailwind theme, colors, typography & animation definitions
├── tsconfig.json                 # TypeScript base configuration
├── tsconfig.app.json             # TypeScript project compiler configuration
├── tsconfig.node.json            # TypeScript Node tooling configuration
├── vercel.json                   # Vercel SPA URL rewrite rules
├── vite.config.ts                # Vite build config, vendor chunking & alias definitions
├── vitest.config.ts              # Unit test configuration with Vitest
│
├── public/                       # Static public assets (copied directly to dist root)
│   ├── _redirects                # Cloudflare/Netlify SPA rewrite fallback
│   ├── favicon.ico               # Website favicon
│   ├── g1.jpeg, g2.jpeg, g3.jpeg # Legacy facility preview images
│   ├── google*.html              # Google Search Console domain verification token
│   ├── placeholder.svg           # Scalable vector placeholder image
│   ├── robots.txt                # Search engine crawler directives & sitemap location
│   └── sitemap.xml               # Canonical XML sitemap with all routes & priorities
│
├── scripts/                      # Build-time automation and media pipelines
│   └── generate-thumbs.mjs       # Headless Chrome script extracting video poster frames
│
└── src/                          # Application source code
    ├── App.css                   # Global application styles
    ├── App.tsx                   # Master Router, Route-level lazy loading & providers
    ├── index.css                 # Tailwind directives, CSS variables & design tokens
    ├── main.tsx                  # React DOM root entry point
    ├── vite-env.d.ts             # Vite TypeScript type declarations
    │
    ├── assets/                   # Static media, icons, certificates, photos & videos
    │   ├── Certificates/         # Official government & accredited certification images
    │   │   ├── Certificate_1.jpeg # West Bengal Govt - Drug Abuse Prevention
    │   │   ├── Certificate_2.jpeg # UTC Substance Use Disorders (Courses 3 & 4)
    │   │   ├── Certificate_3.jpeg # Ministry of Social Justice - Elderly Care
    │   │   ├── Certificate_4.jpeg # UTC Substance Use Disorders (Courses 1 & 2)
    │   │   └── Certificate_5.jpeg # UTC Substance Use Disorders (Courses 5 to 8)
    │   │
    │   ├── gallery/              # Gallery media collection
    │   │   ├── images/           # High-resolution facility & resident activity photos
    │   │   ├── thumbnails/       # 29 pre-generated, lightweight video poster JPEGs
    │   │   └── videos/           # 29 full-length MP4 video files (therapy, recovery, staff)
    │   │
    │   ├── photos/               # Facility photography collection (photo0 to photo39)
    │   ├── founder-saibal-home.jpeg # Saibal Sanyal (Founder & Coach) portrait
    │   ├── founder-soumya-home.jpg  # Soumyo Subhra Sengupta (Co-Founder) portrait
    │   ├── hero-certificates.jpg    # Hero banner for Certificates page
    │   ├── hero-contact.jpg         # Hero banner for Contact page
    │   ├── logo.png                 # Official Care Home vector-rendered logo
    │   ├── ServiceImage.jpeg        # Primary service showcase banner
    │   └── VisitingCard.jpeg        # Official Care Home visiting card
    │
    ├── components/               # Modular, reusable React UI components
    │   ├── animations/           # Kinetic animation wrappers
    │   │   └── FadeIn.tsx        # Framer Motion fade-in & staggered container wrappers
    │   │
    │   ├── ui/                   # shadcn/ui components built on Radix UI primitives
    │   │   ├── alert.tsx         # Alert callout notification component
    │   │   ├── badge.tsx         # Status & category badge component
    │   │   ├── button.tsx        # Primary, secondary, outline & ghost buttons
    │   │   ├── card.tsx          # Flexible container card with header, content & footer
    │   │   ├── dialog.tsx        # Modal dialog overlay component
    │   │   ├── skeleton.tsx      # Shimmer loading skeleton placeholder
    │   │   ├── sonner.tsx        # Sonner toast notifications container
    │   │   ├── toaster.tsx       # Standard Radix toast provider
    │   │   └── tooltip.tsx       # Hover tooltip popover component
    │   │
    │   ├── FloatingButtons.tsx   # Persistent floating WhatsApp & Telephone quick-dialers
    │   ├── Footer.tsx            # Comprehensive footer with quick links, contacts & hours
    │   ├── HeroSection.tsx       # Standard inner-page hero banner with title & breadcrumb
    │   ├── HomeHeroSection.tsx   # Fullscreen homepage hero slider with word-by-word reveal
    │   ├── Layout.tsx            # Master shell: ScrollToTop, Navbar, Outlet, Footer, FAB
    │   ├── LazyMedia.tsx         # Performance-optimized LazyImage & LazyVideo components
    │   ├── Navbar.tsx            # Sticky header, responsive drawer menu & emergency Call CTA
    │   ├── SEO.tsx               # Declarative SEO component
    │   └── TeamSection.tsx       # Leadership & multidisciplinary clinical specialists section
    │
    ├── hooks/                    # Custom React hooks
    │   ├── use-mobile.tsx        # Responsive breakpoint detector (isMobile < 768px)
    │   ├── use-toast.ts          # Toast dispatch state machine & dispatcher
    │   ├── useScrollReveal.ts    # Animated number counter hook triggered on scroll
    │   └── useSEO.ts             # Dynamic document title, meta tags & OpenGraph manager
    │
    ├── lib/                      # Shared helper utilities
    │   └── utils.ts              # Tailwind CSS class merging helper (`cn` using clsx & twMerge)
    │
    └── pages/                    # Route-level views (lazy loaded in App.tsx)
        ├── AboutPage.tsx         # Organization history, founders' vision & multidisciplinary team
        ├── AccommodationPage.tsx # Pricing tiers (Dormitory, AC, Attached Bath) & admission terms
        ├── CertificatesPage.tsx  # Govt & Colombo Plan DAP accreditation credentials with Lightbox
        ├── ContactPage.tsx       # Physical address, Google Maps link, phone numbers & WhatsApp form
        ├── DrugAbuseDayDetailsPage.tsx # International Drug Abuse Awareness Day event gallery
        ├── FacilitiesPage.tsx    # Infrastructure (Doctor visits, geyser, power backup, hygiene)
        ├── GalleryPage.tsx       # Filterable Photos (110) & Videos (29) with Lightbox modal
        ├── HomePage.tsx          # Landing page with slideshow, counters, service previews & testimonials
        ├── NewSlider.tsx         # Standalone testimonial/service carousel slider
        ├── NotFound.tsx          # 404 error page with navigation fallback
        ├── ServicesPage.tsx      # In-depth breakdown of Detox, De-addiction, Elderly care & Rehab
        └── SocialActivitiesPage.tsx # Community initiatives, NGO partnerships & reintegration programs
```

---

## 4. Media Pipeline & High-Performance Video Optimization

### The Problem Solved
Originally, rendering 28+ raw MP4 videos in the Gallery DOM caused two major failure modes:
1. Videos defaulted to `preload="none"` with no poster images, rendering **11 out of 12 cards as blank grey rectangles** until hovered.
2. Browsers on mobile and lower-bandwidth networks experienced severe connection exhaustion attempting to stream upwards of **350+ MB** of video content just to display the grid.

### The Architecture Implemented
1. **Headless Video Frame Extraction (`scripts/generate-thumbs.mjs`):**
   - Automatically spins up an HTTP streaming server and launches a headless Chrome instance.
   - For every MP4 in `src/assets/gallery/videos/`, it decodes the video frame at $t = 1.0\text{s}$, scales it to 640px on an HTML5 `<canvas>`, and saves an 82% quality JPEG into `src/assets/gallery/thumbnails/`.
   - Shrinks the entire media index payload from **350+ MB** to **~1.4 MB** total.
2. **Intelligent Video Card (`LazyVideo` in `LazyMedia.tsx`):**
   - Renders the pre-generated poster image immediately, eliminating layout shift and grey voids.
   - On desktop, hovering smoothly begins a muted preview video. Handled asynchronously with Promise interception to prevent `AbortError` / interrupted play warnings.
   - On mobile/touch, presents an inviting glassmorphism Play button and category badge.
   - Tapping any card opens the dedicated Lightbox modal with high-definition playback, audio, timeline controls, keyboard shortcuts, and mobile swipe navigation.

---

## 5. Application Routes & Pages Map

| Route Path | Component | Purpose & Description |
|------------|-----------|------------------------|
| `/` | `HomePage.tsx` | Main landing page featuring animated hero slideshow, statistics counters, founder intros, and program highlights. |
| `/about` | `AboutPage.tsx` | Detailed background of Care Home, founders Saibal Sanyal & Soumyo Sengupta, and medical mission. |
| `/facilities` | `FacilitiesPage.tsx` | Overview of residential amenities: 24/7 doctors, nursing attendants, TV, power backup, geysers, etc. |
| `/accommodation` | `AccommodationPage.tsx` | Transparent fee structures for Dormitory, Dormitory with Bed, AC, and Attached Bathroom plans. |
| `/services` | `ServicesPage.tsx` | Medical descriptions for Detoxification, De-addiction, Dual Diagnosis, Mild Psychological Care & Senior Living. |
| `/certificates` | `CertificatesPage.tsx` | Verified credentials from Government of West Bengal, IOP-COE SSKM Hospital, and UTC Colombo Plan. |
| `/gallery` | `GalleryPage.tsx` | Filterable media library containing 110 facility photos and 29 video testimonials/walkthroughs. |
| `/social-activities` | `SocialActivitiesPage.tsx` | Awareness programs, community reintegration, and NGO initiatives with IIT and Ramakrishna Mission. |
| `/social-activities/drug-abuse-day` | `DrugAbuseDayDetailsPage.tsx` | Photo gallery and report of the annual June 26th International Day Against Drug Abuse events. |
| `/contact` | `ContactPage.tsx` | Address at Panchpota Dhalai Bridge, telephone directory, business hours, and WhatsApp inquiry form. |
| `*` | `NotFound.tsx` | 404 error handler redirecting visitors back to home. |

---

## 6. Development Workflow & Commands

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher (v20+ recommended)
- [npm](https://www.npmjs.com/) v9.0.0 or higher
- Google Chrome (optional, required only if regenerating video poster thumbnails)

### Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/your-username/CareHome_Rehab_Website.git
cd CareHome_Rehab_Website
npm install
```

### Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Starts the Vite local development server at `http://localhost:8080/` with hot module replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds production bundles into the `dist/` directory. |
| `npm run build:dev` | Compiles the project in development mode with source maps for debugging. |
| `npm run generate:thumbs` | Runs the automated headless Chrome pipeline to extract poster thumbnails from all MP4 videos. |
| `npm run preview` | Starts a local HTTP server to preview the production build output from `dist/`. |
| `npm run lint` | Lints all `.ts`, `.tsx`, and `.js` files using ESLint. |
| `npm test` | Runs unit and component test suites via Vitest. |

---

## 7. Production Build & Deployment

### Build Output Optimization
The application uses Rollup manual chunking inside `vite.config.ts` to separate large vendor libraries into isolated, long-term cached bundles:
- `vendor-react`: `react`, `react-dom`, `react-router-dom`
- `vendor-motion`: `framer-motion`
- `vendor-icons`: `lucide-react`
- `vendor-radix`: `@radix-ui/*` primitives

### Vercel Deployment
The repository includes a [vercel.json](file:///e:/GitHubCloneProject\CareHome_Rehab_Website\vercel.json) rewrite rule that routes all incoming HTTP requests to `/index.html`, ensuring client-side React Router navigation functions seamlessly across deep links.

Deploy directly via the Vercel CLI:
```bash
npm install -g vercel
vercel
```
Or connect the Git repository to the [Vercel Dashboard](https://vercel.com/) for automated continuous deployment (CI/CD) on pushes to the `main` branch.

---

## 8. Contact & Emergency Inquiries

**CARE HOME Rehabilitation Centre**  
*A Unit Dedicated to De-Addiction, Psychiatric Care & Senior Living*

- **Helpline 1:** [+91 7980611010](tel:7980611010) (Mobile / WhatsApp)
- **Helpline 2:** [+91 6289424181](tel:6289424181) (Saibal Sanyal)
- **Helpline 3:** [+91 9073012566](tel:9073012566) (Soumyo Subhra Sengupta)
- **Email:** [carehomekol@gmail.com](mailto:carehomekol@gmail.com)
- **Address:** Panchpota Dhalai Bridge, Gomkol Stopage, Garia Station Road, Kolkata – 700152, South 24 Parganas, West Bengal, India
- **Operating Hours:** 24 Hours / 7 Days a Week (Admission & Emergency Support)

---
*Maintained by the Digital Exposure Online Services.*
