import { z, defineCollection } from 'astro:content';

const destinosCollection = defineCollection({
    type: 'data',
    schema: z.object({
      slug: z.string(),
      title: z.string(),
      images: z.array(
        z.object({
          isFeatured: z.boolean(),
          url: z.string(),
          label: z.string()
        })),
      rate: z.string(),
      description: z.string(),
      location: z.string(),
      locationMin: z.string(),
      region: z.string(),
      chords: z.array(z.string()),
      contactLinks: z.array(z.string()),
      pageLink: z.string(),
  })
});

export const collections = {
  'destinos': destinosCollection,
};