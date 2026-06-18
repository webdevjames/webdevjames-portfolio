import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: "2025-07-15",
				devtools: { enabled: true },
				// 1. Tell Nuxt where your master global stylesheet lives
				css: ["~~/assets/css/main.css"],
				vite: {
								plugins: [tailwindcss()],
				},
				optimizeDeps: {
								include: [],
				},
				modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/content", "nuxt-swiper"],
				content: {
								renderer: {
												anchorLinks: false, // This stops Nuxt from turning headings into <a> tags
								},
				},
});