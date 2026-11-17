import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string().default('مقالات'),
    excerpt: z.string().default(''),
  }),
})

export const collections = { articles }
