---
title: Introduction
description: An overview of this documentation template and what it includes.
order: 1
---

Welcome. This is a documentation template built with [Astro](https://astro.build) and Tailwind CSS v4. It's designed to be readable, fast, and easy to maintain — content lives in plain Markdown files, and the site takes care of everything else.

## What's included

- **Auto-generated navigation** from your file structure — no config required
- **Dark mode** with system preference detection and localStorage persistence
- **Full-text search** powered by [Pagefind](https://pagefind.app) (runs after `bun run build`)
- **Table of contents** with active heading tracking as you scroll
- **Prev/Next navigation** across all pages, crossing section boundaries
- **Breadcrumbs** derived from your folder structure
- **Code blocks** with syntax highlighting and a copy button
- **Anchor links** on every heading for easy deep linking

## How content is organized

Pages live in `src/content/docs/`. Subdirectories become navigation groups. Files are ordered by their numeric prefix, which is stripped from the URL:

```
src/content/docs/
  getting-started/
    01-introduction.md   →  /docs/getting-started/introduction
    02-installation.md   →  /docs/getting-started/installation
  guides/
    01-configuration.md  →  /docs/guides/configuration
```

The directory name becomes the group label in the sidebar. `getting-started` becomes **Getting Started**, `guides` becomes **Guides**, and so on.

## Frontmatter

Every page supports a small set of frontmatter fields:

```yaml
---
title: My Page        # Required — shown in the sidebar, breadcrumb, and <h1>
description: ...      # Optional — used in <meta name="description">
order: 1              # Optional — overrides filename-based sort order
hidden: true          # Optional — excludes the page from navigation and search
---
```

## Philosophy

Documentation should get out of the way. This template uses a quiet visual language — high contrast, minimal decoration, readable typography. It adapts from the same design system as [kong.ly](https://kong.ly), adjusted for reading comfort rather than editorial impact.

The template is meant to be forked and customized. Start with `src/config.ts` to set your project name, version, and GitHub URL.
