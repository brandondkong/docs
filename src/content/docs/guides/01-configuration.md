---
title: Configuration
description: All configurable options for the docs template.
order: 1
---

## Site config

All site-level configuration lives in `src/config.ts`. This is the first file you should edit when setting up a new docs site.

```ts
// src/config.ts
export const SITE = {
    name: 'My Library',        // Shown in the header, page titles, and landing page
    description: '...',        // Used in <meta name="description"> and the landing page
    version: '1.0.0',          // Shown as a badge in the header
    githubUrl: 'https://...',  // Header GitHub link and landing page button
    url: 'https://...',        // Canonical base URL — must match astro.config.mjs site
};
```

## Astro config

`astro.config.mjs` controls the build pipeline. The key fields to change:

| Field | Default | Description |
|---|---|---|
| `site` | `https://docs.example.com` | Your deployed URL — used for canonical links and sitemap |
| `fonts[].weights` | `[300, 400, 500, 600, 700]` | Inter weight subset to load |
| `markdown.shikiConfig.themes` | `github-light / github-dark-dimmed` | Code block themes |

## Fonts

The template loads **Inter** (UI and headings) and **Lora** (prose body) via Astro's font provider, which handles subsetting and preloading automatically.

To swap fonts, update `astro.config.mjs`:

```js
fonts: [
    {
        provider: fontProviders.fontsource(),
        name: 'Geist',          // Any Fontsource-available font
        cssVariable: '--font-inter',
        weights: [400, 500, 600, 700],
    },
],
```

Then update `src/styles/global.css` — the `--font-inter` CSS variable is referenced throughout the styles, so if you change the semantic variable name you'll need to update all references.

## Colors

Colors are defined as CSS custom properties in `src/styles/global.css`:

```css
:root {
    --fg: #0a0a0a;
    --bg: #ffffff;
    --muted: #525252;
    --subtle: #737373;
    --border: #e5e5e5;
    --surface: #f5f5f5;
    --surface-raised: #ebebeb;
}

[data-theme='dark'] {
    --fg: #fafafa;
    --bg: #0c0c0c;
    --muted: #a3a3a3;
    --border: #262626;
    --surface: #171717;
    --surface-raised: #262626;
}
```

Edit these values to match your brand. The Tailwind token layer (`@theme inline`) references these via `var()`, so dark mode is automatic.

## Landing page

The landing page at `src/pages/index.astro` reads from `SITE` config. To customize the layout or add features (feature grid, changelog, etc.), edit this file directly — it's a plain Astro page with no special constraints.

To point the "Get Started" button at a different first page, update the `firstDocHref` variable near the top of the file.

## Navigation order

Sidebar groups are sorted alphabetically by directory name. Files within each group are sorted by their numeric prefix (`01-`, `02-`, etc.), then alphabetically.

To override sort order without renaming files, use the `order` frontmatter field:

```yaml
---
title: My Page
order: 5
---
```

This takes precedence over the filename prefix.
