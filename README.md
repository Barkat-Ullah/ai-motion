# 🤖 AI Motion Template

A modern, animated **AI overview / SaaS landing page** built with **Next.js (App Router)**, **Framer Motion**, and **Tailwind CSS v4**. It showcases a next-gen AI chatbot product ("Kelo AI") — complete with a cinematic video hero, feature showcases, an integrations marquee, pricing, FAQ, and blog sections.

> 🚀 **Live Demo:** [https://aimotion-barkat.vercel.app](https://aimotion-barkat.vercel.app)

---

## ✨ Highlights

- 🎬 **Cinematic hero** with full-screen video background, animated headline, and staggered entrance animations
- 🧭 **Fixed sticky navbar** with a glassy blur effect that darkens on scroll, smooth-scrolling anchor navigation, and a mobile menu
- 🏢 **"Trusted by" company logo marquee** (Google, Amazon, Microsoft, Netflix, Spotify, Meta, Apple, Airbnb, Slack)
- ⚡ **Feature section** with animated workflow diagrams (NLP Engine, Multi-channel, Context-Aware Learning, Automated Workflows, Conversational Insights)
- 🔄 **How It Works** — a 3-step visual storytelling section (Analyze → Automate → Predict)
- 🔌 **Integrations marquee** with 25+ tool logos (Next.js, Figma, Notion, Slack, GitHub, Vercel, ChatGPT, and more)
- 💳 **3-tier pricing** (Starter, Growth, Custom) with a highlighted "popular" plan
- ❓ **Tabbed FAQ accordion** (Product / Support / Payments)
- 📰 **Blog section** with article cards
- 📬 **Newsletter footer** with glassmorphism design
- 🎨 Framer Motion scroll-into-view animations throughout (`whileInView`, stagger variants)
- 📱 Fully responsive — desktop pill nav + animated mobile drawer

---

## 🛠 Tech Stack

| Technology          | Purpose                       |
| ------------------- | ----------------------------- |
| **Next.js 16**      | App Router, Turbopack         |
| **React 19**        | UI library                    |
| **TypeScript**      | Type safety                   |
| **Tailwind CSS v4** | Utility-first styling         |
| **Framer Motion**   | Animations & transitions      |
| **lucide-react**    | Icon set                      |
| **Vercel**          | Deployment                    |

---

## 📁 Project Structure

```
├── public/                      # Static assets
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout (fonts, globals.css)
    │   ├── globals.css          # Tailwind v4 + theme variables
    │   └── (layout)/
    │       ├── layout.tsx       # Common layout (Header + Footer)
    │       └── page.tsx         # Home route
    └── modules/
        ├── Home.tsx             # Assembles all landing sections
        ├── shared/
        │   ├── Header.tsx       # Fixed sticky navbar
        │   └── Footer.tsx       # Newsletter + footer links
        └── component/
            ├── Feature.tsx      # "Explore the Power of Kelo AI"
            ├── HowItWork.tsx    # "Transform your business in 3 simple steps"
            ├── Integration.tsx  # "Works With Your Stack"
            ├── Price.tsx        # Pricing plans
            ├── Faq.tsx          # Tabbed FAQ accordion
            └── Blog.tsx         # Latest updates / articles
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18+ (recommended: 20+)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ai-motion-template

# 2. Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser — hot reload is enabled, so edits update live.

---

## 📦 Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server (Turbopack)     |
| `npm run build`   | Create a production build            |
| `npm run start`   | Run the production build locally     |
| `npm run lint`    | Run ESLint                           |

---

## 🎨 Customization

### Navigation

Edit `src/modules/shared/Header.tsx`:

```tsx
const navItems = ["Features", "Solutions", "Pricing", "About", "Blog"] as const;
```

Each nav item renders an anchor link (`href="#blog"`). For navigation to work, **the target section must have a matching `id`** on its `<section>` element (plus `scroll-mt-28` so the fixed navbar doesn't cover headings):

```tsx
<section id="blog" className="scroll-mt-28 ...">
```

| Nav Link    | Target Component | Section `id` |
| ----------- | ---------------- | ------------ |
| Features    | `Feature.tsx`    | `#features`  |
| Solutions   | `HowItWork.tsx`  | `#solutions` |
| Pricing     | `Price.tsx`      | `#pricing`   |
| About       | `Faq.tsx`        | `#about`     |
| Blog        | `Blog.tsx`       | `#blog`      |

### Sections & content

Every landing section lives in `src/modules/component/`. Edit headings, copy, images, pricing tiers, FAQ items, and blog posts directly inside the corresponding file — the section order is controlled in `src/modules/Home.tsx`.

### Theme & colors

Tailwind v4 theme tokens are defined in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

Accent colors (e.g. `#00bc7d`) are used inline throughout the components — swap them to rebrand.

### Remote images & videos

Assets load from external hosts (e.g. `cdn.jiro.build`). Allowed hosts are configured in `next.config.ts` under `images.remotePatterns` — add your own host there when replacing media.

---

## 🌐 Deployment

The easiest way to ship this site is on **Vercel**:

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel
```

---

## 📄 License

This is a private template. See the [Next.js App Router docs](https://nextjs.org/docs) for framework documentation and best practices.
