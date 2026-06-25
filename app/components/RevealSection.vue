<script setup lang="ts">
	import { ref, onMounted, onBeforeUnmount } from "vue";

	defineProps({
		// 1. Accept an "as" prop to dynamically swap the HTML element type
		as: {
			type: String,
			default: "div",
		},
		animation: {
			type: String,
			default: "fade-up",
		},
		delay: {
			type: String,
			default: "0ms",
		},
	});

	const sectionRef = ref<HTMLElement | null>(null);
	let observer: IntersectionObserver | null = null;

	onMounted(() => {
		if (!sectionRef.value) return;

		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					sectionRef.value?.classList.add("reveal-active");
					if (observer && sectionRef.value) {
						observer.unobserve(sectionRef.value);
					}
				}
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -60px 0px",
			},
		);

		observer.observe(sectionRef.value);
	});

	onBeforeUnmount(() => {
		if (observer) observer.disconnect();
	});
</script>

<template>
	<component :is="as" ref="sectionRef" :class="['reveal-init', `reveal-${animation}`]" :style="{ transitionDelay: delay }">
		<slot />
	</component>
</template>
