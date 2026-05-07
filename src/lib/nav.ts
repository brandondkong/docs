import type { CollectionEntry } from 'astro:content';

export interface NavItem {
    title: string;
    href: string;
    id: string;
}

export interface NavGroup {
    label: string;
    items: NavItem[];
}

/** Strips leading numeric prefixes from each path segment.
 *  "getting-started/01-introduction" → "getting-started/introduction" */
export function getCleanSlug(id: string): string {
    return id
        .split('/')
        .map((seg) => seg.replace(/^\d+-/, '').replace(/\.mdx?$/, ''))
        .join('/');
}

/** Converts a directory/file name segment to a display label.
 *  "getting-started" → "Getting Started" */
function toLabel(segment: string): string {
    return segment
        .replace(/^\d+-/, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractLeadingNumber(segment: string): number {
    const match = /^(\d+)/.exec(segment);
    return match ? parseInt(match[1], 10) : 999;
}

export function buildNav(entries: CollectionEntry<'docs'>[]): NavGroup[] {
    type GroupEntry = { sortKey: string; entries: CollectionEntry<'docs'>[] };
    const groupMap = new Map<string, GroupEntry>();

    for (const entry of entries) {
        const parts = entry.id.split('/');
        const groupKey = parts.length > 1 ? parts[0] : '_root';

        if (!groupMap.has(groupKey)) {
            groupMap.set(groupKey, { sortKey: groupKey, entries: [] });
        }
        groupMap.get(groupKey)!.entries.push(entry);
    }

    const sortedGroups = [...groupMap.values()].sort((a, b) =>
        a.sortKey.localeCompare(b.sortKey),
    );

    return sortedGroups.map(({ sortKey, entries: groupEntries }) => {
        const sortedEntries = [...groupEntries].sort((a, b) => {
            const aOrder = a.data.order ?? extractLeadingNumber(a.id.split('/').at(-1) ?? '');
            const bOrder = b.data.order ?? extractLeadingNumber(b.id.split('/').at(-1) ?? '');
            return aOrder !== bOrder ? aOrder - bOrder : a.id.localeCompare(b.id);
        });

        return {
            label: sortKey === '_root' ? '' : toLabel(sortKey),
            items: sortedEntries.map((entry) => ({
                title: entry.data.title,
                href: `/docs/${getCleanSlug(entry.id)}`,
                id: entry.id,
            })),
        };
    });
}

/** Flattens all nav groups into a single ordered list — used for prev/next. */
export function flattenNav(groups: NavGroup[]): NavItem[] {
    return groups.flatMap((g) => g.items);
}

export function getAdjacentPages(
    groups: NavGroup[],
    currentPath: string,
): { prev: NavItem | null; next: NavItem | null } {
    const flat = flattenNav(groups);
    const idx = flat.findIndex((item) => item.href === currentPath);
    return {
        prev: idx > 0 ? (flat[idx - 1] ?? null) : null,
        next: idx < flat.length - 1 ? (flat[idx + 1] ?? null) : null,
    };
}
