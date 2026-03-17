# My Personal Website

This is my personal website and project front page. I use it to share who I am, what I am working on right now, and how people can reach me.

I built it with Astro, and I only use React for the theme toggle.

## Features

- Hero section with my current profile and direction
- Current role, impact, and focus sections
- Selected project cards with live demo and GitHub links
- Contact section with direct ways to reach me
- Dark/light mode toggle that remembers my choice
- Purple glassmorphism-inspired visual style
- Responsive layout for desktop, tablet, and mobile
- Accessibility-friendly structure with reduced-motion support

## Local Development

If I want to run this locally:

```bash
npm install
npm run dev
```

If I want a production build:

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

I deploy this site with GitHub Actions using `.github/workflows/deploy-pages.yml`.

It will:

- Run on push to `main`
- Install dependencies with `npm ci`
- Build with `npm run build`
- Deploy `dist/` to GitHub Pages

One-time setup in repository settings:

1. Go to **Settings -> Pages**
2. Set **Source** to **GitHub Actions**

## Customize Content

When I want to update content, I edit `src/pages/index.astro`:

- Name and intro text in the hero section
- Project URLs under the projects section
- Contact email and social links

## File Structure

- `src/pages/index.astro` Main page content and structure
- `src/layouts/BaseLayout.astro` Shared layout and global scripts
- `src/components/ThemeToggle.tsx` Theme toggle component
- `src/styles/global.css` Global styling and responsive behavior
- `astro.config.mjs` Astro setup for static output
