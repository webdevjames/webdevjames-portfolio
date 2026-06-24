import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: { lang: "en" },
			titleTemplate: "%s | James Frazier - webdevjames",
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "James Frazier" }],
		},
	},

	// 1. ADD SECURITY HEADERS TO ALL ROUTES ('/**')
	routeRules: {
		"/**": {
			headers: {
				"X-Content-Type-Options": "nosniff",
				"X-Frame-Options": "SAMEORIGIN",
				"X-XSS-Protection": "0",
				"Referrer-Policy": "strict-origin-when-cross-origin",
				"Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
				"Content-Security-Policy": "frame-ancestors 'self'; object-src 'self'; upgrade-insecure-requests",
			},
		},
	},

	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ["swiper/element/bundle", "@nuxtjs/mdc > remark-gfm", "@nuxtjs/mdc > remark-emoji", "@nuxtjs/mdc > remark-mdc", "@nuxtjs/mdc > remark-rehype", "@nuxtjs/mdc > rehype-raw", "@nuxtjs/mdc > parse5", "@nuxtjs/mdc > unist-util-visit", "@nuxtjs/mdc > unified", "@nuxtjs/mdc > debug", "@nuxtjs/mdc > extend"],
		},
	},

	modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/content", "nuxt-swiper", "@vercel/speed-insights", "nuxt-gtag"],
	content: {
		renderer: { anchorLinks: false },
	},
	gtag: {
		id: "G-S5V1B3FSBG",
	},
});
