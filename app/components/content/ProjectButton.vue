<script setup lang="ts">
	defineProps({
		link: { type: String, required: true },
		text: { type: String, required: true },
		external: { type: Boolean, default: true },
	});
</script>

<template>
	<div class="button-wrap mt-6">
		<NuxtLink :to="link" :target="external ? '_blank' : '_self'" class="button">
			<span>{{ text }}</span>
			<!-- You can easily drop an SVG arrow icon here later if you want! -->
		</NuxtLink>
	</div>
</template>
