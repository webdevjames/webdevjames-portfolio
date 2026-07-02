<script setup lang="ts">
	defineProps({
		cpImage: {
			type: String,
			default: "/webdevjames-project-banner-liberty-wildlife.jpg",
		},
		cpImageAlt: {
			type: String,
			default: "Liberty Wildlife",
		},
		cpTitle: {
			type: String,
			default: "Liberty Wildlife",
		},
		cpDescription: {
			type: String,
			default: "Learn about the challenges Liberty Wildlife was having with their previous website and the rehabilitation solutions that enabled their online presence to soar the skies once again.",
		},
		cpLink: {
			type: String,
			default: "/portfolio/liberty-wildlife",
		},
	});
</script>
<template>
	<RevealSection>
		<section class="section-main">
			<div class="container">
				<div class="container-inner">
					<div class="current-project relative overflow-hidden rounded-xl w-full">
						<NuxtImg :src="cpImage" :alt="cpImageAlt" format="webp" quality="80" loading="lazy" class="absolute inset-0 w-full h-full object-cover z-1" />
						<div class="current-project-content relative w-full h-auto bg-black/75 flex items-center justify-start z-2">
							<div class="current-project-content-inner p-6 md:p-12 lg:p-15 md:max-w-[50%] max-w-full">
								<p class="subheading">Featured Project</p>
								<h2 class="text-white">{{ cpTitle }}</h2>
								<p class="text-white">{{ cpDescription }}</p>
								<div class="button-wrap">
									<NuxtLink :to="cpLink" class="button">
										<span>View the Project</span>
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</RevealSection>
</template>
<style scoped></style>
