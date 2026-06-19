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
	<section class="section-main">
		<div class="container">
			<div class="container-inner">
				<div class="current-project relative overflow-hidden bg-cover bg-center rounded-xl w-full" :style="{ backgroundImage: `url(${cpImage})` }" role="img" :aria-label="cpImageAlt">
					<div class="current-project-content w-full h-auto bg-black/75 flex items-center justify-start">
						<div class="current-project-content-inner p-6 md:p-12 lg:p-15 md:max-w-[50%] max-w-full">
							<p class="subheading">Featured Project</p>
							<h2>{{ cpTitle }}</h2>
							<p>{{ cpDescription }}</p>
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
</template>
<style scoped></style>
