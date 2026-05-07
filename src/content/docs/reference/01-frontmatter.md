---
title: Frontmatter Reference
description: Complete reference for all supported frontmatter fields.
order: 1
---

Every Markdown file in `src/content/docs/` supports the following frontmatter fields.

## Fields

### `title`

**Required.** The page title. Used in:

- The sidebar navigation link
- The breadcrumb trail
- The `<h1>` rendered by the layout
- The `<title>` element: `Page Title — Site Name`
- The `og:title` meta tag

```yaml
title: Getting Started
```

### `description`

**Optional.** A short description of the page. If omitted, falls back to the site-level description from `src/config.ts`.

Used in `<meta name="description">` and `og:description`.

```yaml
description: An overview of the installation process.
```

Keep descriptions under 160 characters for best SEO display.

### `order`

**Optional.** A number that controls sort order within the page's group. Lower numbers appear first.

```yaml
order: 3
```

If omitted, pages are sorted by their filename's numeric prefix (`01-`, `02-`, etc.). If neither `order` nor a numeric prefix is present, pages are sorted alphabetically.

Pages in the same group with the same `order` value are sorted alphabetically by filename.

### `hidden`

**Optional.** If `true`, the page is excluded from the sidebar navigation and from search indexing. The page still builds and is accessible at its URL.

```yaml
hidden: true
```

Use this for draft pages, changelog entries, or internal reference pages you don't want surfaced in the nav.

## Full example

```yaml
---
title: Advanced Configuration
description: Deep-dive into all available configuration options.
order: 4
hidden: false
---
```

## Schema

The content collection schema validates frontmatter at build time. If a required field is missing or a field has the wrong type, the build will fail with a descriptive error.

The schema is defined in `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        order: z.number().optional(),
        hidden: z.boolean().optional().default(false),
    }),
});

export const collections = { docs };
```

To add new frontmatter fields, extend the `schema` object and update the layout or components that consume them.
