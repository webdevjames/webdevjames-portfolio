// plugins/reveal.ts
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("reveal", {
		// 1. CLIENT-SIDE ONLY: This hook only runs when the browser mounts the HTML
		mounted(el, binding) {
			el.classList.add("reveal-init");

			const animationType = binding.value || "fade-up";
			el.classList.add(`reveal-${animationType}`);

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							el.classList.add("reveal-active");
							observer.unobserve(el);
						}
					});
				},
				{
					threshold: 0.1,
					rootMargin: "0px 0px -60px 0px",
				},
			);

			observer.observe(el);
		},

		// 2. SERVER-SIDE ONLY: This hook tells the Nuxt SSR engine how to safely compile it
		getSSRProps(binding, vnode) {
			// Returns an empty object to the server rendering process so it passes safely without 404/500 crashes
			return {};
		},
	});
});
