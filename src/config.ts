export interface SiteConfig {
    name: string;
    description: string;
    version: string;
    githubUrl: string;
    url: string;
}

export const SITE: SiteConfig = {
    name: 'My Library',
    description: 'Beautiful documentation, built with Astro.',
    version: '1.0.0',
    githubUrl: 'https://github.com/yourusername/yourrepo',
    url: 'https://docs.example.com',
};
