# Personal Subdomain Hub

Modern, responsive landing page for presenting your personal subdomain ecosystem to recruiters, clients, and collaborators.

Built with Astro as the primary framework and React only for the interactive theme toggle.

## Features

- Hero section with clear professional positioning
- What I do section
- Project and subdomain cards
- Contact section with direct call to action
- Dark and light mode toggle with local preference persistence
- Glassmorphism styling with a purple visual identity
- Responsive layout for desktop, tablet, and mobile
- Accessibility-minded semantic structure and reduced-motion support

## Local Development

Install dependencies and start Astro:

```bash
npm install
npm run dev
```

Build static output:

```bash
npm run build
npm run preview
```

## Customize Content

Update these values in `src/pages/index.astro`:

- Name and intro text in the hero section
- Subdomain URLs under the projects section
- Contact email and social links

## File Structure

- `src/pages/index.astro` Main page structure and content
- `src/layouts/BaseLayout.astro` Shared layout and global scripts
- `src/components/ThemeToggle.tsx` React interactive component
- `src/styles/global.css` Global visual design and responsive behavior
- `astro.config.mjs` Astro configuration with static output
