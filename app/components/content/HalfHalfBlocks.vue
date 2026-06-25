<script setup lang="ts">
	import { computed } from "vue";

	const props = defineProps({
		// Tell Vue that receiving a String or a Boolean is totally acceptable
		reverse: {
			type: [Boolean, String],
			default: false,
		},
	});

	// Normalize the value: check if it is the boolean true OR the string text "true"
	const isReversed = computed(() => {
		return props.reverse === true || props.reverse === "true";
	});
</script>

<template>
	<div :class="['flex flex-col items-center gap-4 md:gap-8 py-4 md:py-8', isReversed ? 'md:flex-row-reverse' : 'md:flex-row']">
		<RevealSection class="w-full md:w-1/2 rounded-xl overflow-hidden mb-2">
			<slot name="half-image" mdc-unwrap="p" />
		</RevealSection>
		<RevealSection delay="200ms" class="w-full md:w-1/2">
			<slot name="half-title" />
			<slot name="half-description" />
		</RevealSection>
	</div>
</template>
