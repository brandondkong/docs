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
