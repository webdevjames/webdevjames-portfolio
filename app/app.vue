<script setup lang="ts">
	// This injects the Tailwind class directly onto the root HTML element on load
	useHead({
		htmlAttrs: {
			class: "scroll-smooth",
		},
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
