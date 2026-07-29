import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: { lang: "en" },
			titleTemplate: "%s | James Frazier - webdevjames",
			meta: [
				{
					charset: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "author",
					content: "James Frazier",
				},
				{
					name: "apple-mobile-web-app-title",
					content: "webdev james",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon/favicon-96x96.png",
					sizes: "96x96",
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon/favicon.svg",
				},
				{
					rel: "shortcut icon",
					href: "/favicon/favicon.ico",
				},
				{
					rel: "apple-touch-icon",
					href: "/favicon/apple-touch-icon.png",
					sizes: "180x180",
				},
				{
					rel: "manifest",
					href: "/favicon/site.webmanifest",
				},
			],
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
		// Cleaned up the obsolete optimizeDeps block entirely!
	},

	// Configure your custom local SVG compilation layer
	icon: {
		customCollections: [
			{
				prefix: "custom", // This defines the string prefix used in your JSON file
				dir: "./assets/icons", // Path to your local custom SVG directory
			},
		],
	},

	// Added "@nuxt/image" to the end of your active module ecosystem
	modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/content", "nuxt-swiper", "@vercel/speed-insights", "nuxt-gtag", "@nuxt/image"],

	content: {
		renderer: { anchorLinks: false },
	},
	gtag: {
		id: "G-S5V1B3FSBG",
	},
});
