/// <reference path="../.astro/types.d.ts" />

declare module '/pagefind/pagefind.js' {
    interface PagefindSearchResult {
        data: () => Promise<PagefindResultData>;
    }

    interface PagefindResultData {
        url: string;
        excerpt: string;
        meta: Record<string, string>;
    }

    export function init(): Promise<void>;
    export function search(query: string): Promise<{ results: PagefindSearchResult[] }>;
}
