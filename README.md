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

## Diplomas For Courses And Certificates

You can add a downloadable diploma to any item in `courses` or `certificates` in `cv.json`.

1. Put the file in `public/diplomas/` (for example `public/diplomas/ai-3016-diploma.pdf`).
2. Add these optional fields on the item:

```json
"diplomaUrl": "/diplomas/ai-3016-diploma.pdf",
"diplomaLabel": "Last ned diplom"
```

When `diplomaUrl` is present, the Education section automatically shows a clickable download link.
