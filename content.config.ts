// content.config.ts
import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		projects: defineCollection({
			type: "page",
			source: "projects/**/index.md",
			schema: z.object({
				title: z.string(),
				category: z.string(),
				heroImage: z.string(),
				heroPosition: z.string(),
				blurb: z.string(),
				description: z.string(),
				specs: z.array(z.string()).optional(),
			}),
		}),
	},
});
