# kong.ly docs template

A fast, readable documentation site built with [Astro](https://astro.build) and Tailwind CSS v4. Content lives in plain Markdown/MDX files, with full-text search powered by [Pagefind](https://pagefind.app).

## Bootstrap a new docs site

The quickest way to start is the `create-kongly-docs` scaffolder, which copies this template into a new directory and installs dependencies for you:

```bash
# npm
npm create kongly-docs@latest my-docs

# bun
bun create kongly-docs my-docs

# pnpm
pnpm create kongly-docs my-docs

# yarn
yarn create kongly-docs my-docs
```

Omit the directory name to be prompted for it. The scaffolder asks for a project name, detects your package manager, downloads this template, and runs install. It does **not** create a git repository, so it's safe to run inside an existing one.

### Manual setup

If you'd rather clone directly:

```bash
git clone https://github.com/brandondkong/docs.git my-docs
cd my-docs
bun install   # or pnpm install / npm install / yarn
bun dev
```

## Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `bun dev`       | Start the dev server at `http://localhost:4321`.     |
| `bun run build` | Build to `dist/` and generate the Pagefind index.    |
| `bun preview`   | Preview the production build locally.                |
| `bun run check` | Run `astro check` (type and content validation).     |

## Writing content

Documentation pages live in `src/content/docs/`. Create a `.md` or `.mdx` file anywhere under that directory and it becomes a page automatically. Each file needs frontmatter:

```md
---
title: Installation
description: How to install and configure the project.
order: 2
---

Your content here.
```

| Field         | Required | Description                                            |
| ------------- | -------- | ------------------------------------------------------ |
| `title`       | yes      | Page title, shown in the sidebar and `<title>`.        |
| `description` | no       | Used for the page meta description.                    |
| `order`       | no       | Controls sidebar ordering within a section.            |
| `hidden`      | no       | Set `true` to exclude the page from navigation.        |

Folders under `src/content/docs/` become sidebar sections (e.g. `getting-started`, `guides`, `reference`).

## Project structure

```
src/
├── components/   # UI and docs components (e.g. Tabs.astro)
├── content/      # docs collection + schema (config.ts)
│   └── docs/     # your Markdown/MDX pages
├── layouts/      # page layouts
├── lib/          # helpers
├── pages/        # routes ([...slug].astro renders docs pages)
└── styles/       # global styles
```
