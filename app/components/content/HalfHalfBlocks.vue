<script setup lang="ts">
	defineProps({
		reverse: { type: Boolean, default: false },
	});
</script>

<template>
	<div :class="['flex flex-col items-center gap-4 md:gap-8 py-4 md:py-8', reverse ? 'md:flex-row-reverse' : 'md:flex-row']">
		<div class="w-full md:w-1/2 rounded-xl overflow-hidden">
			<!-- mdc-unwrap="p" strips the layout-breaking paragraph tag from around the markdown image -->
			<slot name="half-image" mdc-unwrap="p" />
		</div>

		<div class="w-full md:w-1/2">
			<slot name="half-title" />
			<slot name="half-description" />
		</div>
	</div>
</template>
