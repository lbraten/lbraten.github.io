
// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      /**
       * Én felles fargekilde: colors.skin
       * => Gir deg: text-skin-*, bg-skin-*, border-skin-*, ring-skin-*, fill-skin-*, stroke-skin-*
       * og støtter alpha-modifikatorer som /50, /80, etc.
       *
       * NB: CSS-variablene skal være "r, g, b" (uten rgb()) i themes.css.
       */
      colors: {
        skin: {
          // Tekst
          base: 'rgb(var(--color-text-base) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          inverted: 'rgb(var(--color-text-inverted) / <alpha-value>)',

          // Generelt fyll / bakgrunn
          fill: 'rgb(var(--color-fill) / <alpha-value>)',
          mutedbg: 'rgb(var(--muted) / <alpha-value>)',

          // Aksent/hue
          hue: 'rgb(var(--color) / <alpha-value>)',

          // Knapper
          'button-accent': 'rgb(var(--color-button-accent) / <alpha-value>)',
          'button-accent-hover': 'rgb(var(--color-button-accent-hover) / <alpha-value>)',
          'button-muted': 'rgb(var(--color-button-muted) / <alpha-value>)',

          // Panel/input
          'bg-elevated': 'rgb(var(--color-bg-elevated) / <alpha-value>)',
          'bg-input': 'rgb(var(--color-bg-input) / <alpha-value>)',

          // Border & ring
          border: 'rgb(var(--color-border) / <alpha-value>)',
          ring: 'rgb(var(--color-ring) / <alpha-value>)',
          'ring-muted': 'rgb(var(--color-ring-muted) / <alpha-value>)',
        },
      },

      /**
       * Valgfritt: navngitt bakgrunnsbilde/gradient.
       * Brukes via className="bg-lond-dark".
       */
      backgroundImage: {
        'lond-dark':
          'linear-gradient(180deg, rgba(var(--lond-grad-from),1) 0%, rgba(var(--lond-grad-to),1) 100%)',
      },
    },
  },
  plugins: [
    // Legg til plugins hvis du bruker dem (typography, forms, etc.)
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};
