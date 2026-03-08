Visit my portfolio!

## Search indexing

This site is configured to stay out of search engine results while still being publicly accessible on GitHub Pages.

- `public/robots.txt` contains:
	- `User-agent: *`
	- `Disallow: /`
- `src/layouts/Layout.astro` includes:
	- `<meta name="robots" content="noindex, nofollow" />`
	- `<meta name="googlebot" content="noindex, nofollow" />`

If the site was indexed before these settings were added, use Google Search Console URL removal for faster deindexing.
