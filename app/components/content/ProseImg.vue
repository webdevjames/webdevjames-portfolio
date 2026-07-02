<template>
	<NuxtImg :src="src" :alt="alt" :width="width" :height="height" format="webp" quality="80" loading="lazy" class="portfolio-content-image rounded-lg my-6 w-full h-auto" />
</template>

<script setup lang="ts">
	// Nuxt Content automatically passes these props whenever it matches markdown image syntax
	defineProps({
		src: {
			type: String,
			default: "",
		},
		alt: {
			type: String,
			default: "",
		},
		width: {
			type: [String, Number],
			default: undefined,
		},
		height: {
			type: [String, Number],
			default: undefined,
		},
	});
</script>
