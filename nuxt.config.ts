import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			titleTemplate: "%s | James Frazier - webdevjames",
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "James Frazier" }],
		},
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	// 1. Tell Nuxt where your master global stylesheet lives
	css: ["~~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ["swiper/element/bundle", "@nuxtjs/mdc > remark-gfm", "@nuxtjs/mdc > remark-emoji", "@nuxtjs/mdc > remark-mdc", "@nuxtjs/mdc > remark-rehype", "@nuxtjs/mdc > rehype-raw", "@nuxtjs/mdc > parse5", "@nuxtjs/mdc > unist-util-visit", "@nuxtjs/mdc > unified", "@nuxtjs/mdc > debug", "@nuxtjs/mdc > extend"],
		},
	},

	modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/content", "nuxt-swiper", "@vercel/speed-insights"],
	content: {
		renderer: {
			anchorLinks: false, // This stops Nuxt from turning headings into <a> tags
		},
	},
});
