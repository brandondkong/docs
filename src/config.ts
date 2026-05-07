export interface SiteConfig {
    name: string;
    description: string;
    version: string;
    githubUrl: string;
    url: string;
}

export const SITE: SiteConfig = {
    name: 'Documentation Template',
    description: 'Beautiful documentation, built with Astro.',
    version: '1.0.0',
    githubUrl: 'https://github.com/brandondkong/docs',
    url: 'https://docs.kong.ly',
};
