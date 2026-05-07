---
title: Writing Content
description: How to write and format documentation pages.
order: 2
---

All content is written in Markdown. Create a `.md` file anywhere inside `src/content/docs/` and it becomes a page automatically.

## Page structure

The layout renders your frontmatter `title` as the `<h1>`. Start your content at `<h2>` — do not write a top-level heading in the body of your Markdown file.

```markdown
---
title: My Page
---

## First section

Content starts here at h2.
```

## Headings

Use `##` (h2) for major sections and `###` (h3) for subsections. These are the levels that appear in the Table of Contents on the right. H4 and below are supported in prose but don't show in the TOC.

Every heading gets an auto-generated anchor link — hover a heading to reveal the `#` link.

## Code blocks

Fenced code blocks are highlighted with Shiki. Specify the language after the opening fence:

````markdown
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
````

Renders as:

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

Hover the block to reveal the copy button. Both light and dark themes are supported — the block switches automatically with the page theme.

## Inline code

Wrap `inline code` in single backticks.

## Links

Standard Markdown links work for both external URLs and internal pages:

```markdown
[External link](https://example.com)
[Internal link](/docs/guides/configuration)
```

## Images

```markdown
![Alt text describing the image](./path-to-image.png)
```

Images render full-width inside the prose column with a subtle border. Always include descriptive alt text.

## Blockquotes

Use blockquotes for notes, warnings, or highlighted information:

```markdown
> This is a note. Use it sparingly — too many blockquotes dilute their impact.
```

> This is a note. Use it sparingly — too many blockquotes dilute their impact.

## Tables

```markdown
| Column A | Column B | Column C |
|---|---|---|
| Value 1  | Value 2  | Value 3  |
```

| Column A | Column B | Column C |
|---|---|---|
| Value 1  | Value 2  | Value 3  |

Tables use the Inter font at a slightly smaller size, with a subtle background on the header row.

## Lists

Unordered and ordered lists both work. Nest them with two spaces of indentation:

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

1. First step
2. Second step
3. Third step
```

## Horizontal rules

A `---` rule renders as a full-width divider:

---

## Hiding pages

To hide a page from navigation and search (useful for drafts), set `hidden: true` in frontmatter:

```yaml
---
title: Draft Page
hidden: true
---
```

The page still builds and is accessible at its URL — it's just not linked from anywhere.
