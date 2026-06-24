<script setup lang="ts">
	// This injects the Tailwind class directly onto the root HTML element on load
	useHead({
		htmlAttrs: {
			class: "scroll-smooth",
		},
		script: [
			{
				type: "application/ld+json",
				// We stringify a JavaScript object to create the JSON-LD format
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "James Frazier",
					jobTitle: "Web Developer",
					url: "https://webdevjames.com",
					sameAs: ["https://www.linkedin.com/in/webdevjames", "https://github.com/webdevjames"],
				}),
			},
		],
	});
</script>
<template>
	<Navbar />
	<div class="page-wrapper">
		<NuxtPage />
	</div>
	<Footer />
</template>
<style></style>
