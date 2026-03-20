# Shiva Krishna Kosari — Portfolio (Next.js)

> Migrated from React.js + JavaScript → **Next.js 14 App Router + TypeScript**  
> Premium dark design with clean animations, full SEO metadata, and production-ready structure.

---

## 🗂 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout + SEO metadata
│   ├── page.tsx            ← Single-page entry
│   └── globals.css         ← Design tokens + global styles
│
├── components/
│   ├── navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.css
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── about/
│   │   ├── About.tsx
│   │   └── About.module.css
│   ├── experience/
│   │   ├── Experience.tsx
│   │   └── Experience.module.css
│   ├── skills/
│   │   ├── Skills.tsx
│   │   └── Skills.module.css
│   ├── projects/
│   │   ├── Projects.tsx
│   │   └── Projects.module.css
│   ├── certificates/
│   │   ├── Certificates.tsx
│   │   └── Certificates.module.css
│   ├── statistics/
│   │   ├── Statistics.tsx
│   │   └── Statistics.module.css
│   ├── contact/
│   │   ├── Contact.tsx
│   │   └── Contact.module.css
│   └── footer/
│       ├── Footer.tsx
│       └── Footer.module.css
│
├── data/
│   └── portfolio.ts        ← All your content in one file
│
├── lib/
│   └── utils.ts            ← Helper functions
│
└── types/
    └── index.ts            ← All TypeScript interfaces
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your images to /public/images/
#    - /public/images/myphoto.png
#    - /public/images/projects/eduhub.png
#    - /public/images/projects/stylespot.png
#    - /public/images/projects/cartrade.png
#    - /public/images/projects/megamart.png
#    - /public/images/projects/fashionkart.png
#    - /public/images/projects/fashionverce.png
#    - /public/images/certificates/prompt-engineer-cert.jpg
#    - /public/images/certificates/fullstack-cert.jpg

# 3. Run dev server
npm run dev

# 4. Build for production
npm run build
npm start
```

---

## 🚀 Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

---

## ✅ What's New vs Old React App

| Feature | Old (React JS) | New (Next.js) |
|---|---|---|
| Routing | React Router | App Router (file-based) |
| Language | JavaScript | TypeScript |
| SEO | ❌ None | ✅ Full metadata + OG tags |
| Performance | Client-side only | SSR + Static Generation |
| Images | `<img>` tags | Next.js `<Image>` (optimized) |
| Styling | Plain CSS files | CSS Modules + Tailwind |
| Animations | Framer Motion | Framer Motion + CSS |
| Fonts | Google CDN | next/font (self-hosted) |
| Structure | Flat Components/ | Component-per-folder pattern |

---

## 📦 Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility classes
- **CSS Modules** — Component-scoped styles
- **Framer Motion** — Animations
- **react-icons** — Icon library
- **react-intersection-observer** — Scroll animations
- **react-github-calendar** — GitHub stats
