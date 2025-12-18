import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    ogImage: z.string(),
  }),
});

const socialLinks = defineCollection({
  loader: file("src/content/socials.json"),
  schema: ({ image }) =>
    z.array(
      z.object({
        name: z.string(),
        link: z.string(),
        icon: image(),
      }),
    ),
});

export const collections = {
  blog,
  socials: socialLinks,
};
