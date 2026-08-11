# Md Sohan Khan — Personal Portfolio

A professional single-page personal website for **Md Sohan Khan**, a Disaster
Management researcher specializing in GIS & Remote Sensing. Built with Next.js
(App Router), TypeScript and Tailwind CSS v4, featuring a "scientific
cartography" aesthetic, a topographic backdrop, an animated experience
timeline and scroll-reveal transitions.

## Sections

- **Hero** — name, title, tagline and key stats
- **About** — professional summary, research focus & interests
- **Experience** — full work history + volunteering timeline
- **Research** — journal articles, reports, posters & conference work
- **Education** — academic background
- **Skills** — spatial analysis, programming, languages & training
- **Awards** — grants, fellowships & achievements
- **Contact** — email, phone, address, references & social links

All content lives in a single data file: [`lib/cv-data.ts`](lib/cv-data.ts).
Edit that file to update any information on the site.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or newer
- [pnpm](https://pnpm.io/) (recommended). You can also use `npm` or `yarn`.

### Installation

```bash
# 1. Clone your repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
pnpm install
# or: npm install

# 3. Start the development server
pnpm dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command      | Description                                  |
| ------------ | -------------------------------------------- |
| `pnpm dev`   | Start the development server (hot reload)    |
| `pnpm build` | Create an optimized production build         |
| `pnpm start` | Run the production build locally             |
| `pnpm lint`  | Run ESLint                                   |

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration needed. Click **Deploy**.

The site is fully static and can be hosted on any platform that supports
Next.js (Netlify, Render, a Node server, etc.).

## Project Structure

```
.
├── app/
│   ├── globals.css        # Theme tokens, fonts & utilities
│   ├── layout.tsx         # Root layout, metadata & fonts
│   └── page.tsx           # Page composition
├── components/
│   ├── hero.tsx
│   ├── site-nav.tsx
│   ├── reveal.tsx         # Scroll-reveal wrapper
│   ├── topo-backdrop.tsx  # Cartographic backdrop
│   ├── section-heading.tsx
│   └── sections/          # About, Experience, Research, etc.
├── lib/
│   ├── cv-data.ts         # ← All site content lives here
│   └── utils.ts
├── public/                # Icons & static assets
└── next.config.mjs
```

## Customizing Content

To update any text, publication, role or link, edit
[`lib/cv-data.ts`](lib/cv-data.ts). The components read directly from these
exported objects, so changes appear automatically.

## License

This project is provided for personal portfolio use.
