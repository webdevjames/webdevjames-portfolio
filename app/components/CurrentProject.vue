<script setup lang="ts">
	defineProps({
		cpImage: {
			type: String,
			default: "/webdevjames-project-banner-sanctuary-watson-lake.jpg",
		},
		cpImageAlt: {
			type: String,
			default: "Sanctuary at Watson Lake",
		},
		cpTitle: {
			type: String,
			default: "Sanctuary at Watson Lake",
		},
		cpDescription: {
			type: String,
			default: "A pristene setting to build a home. This developer desired an elegant design, interactive map and ease-of-use for future additions and editing.",
		},
		cpLink: {
			type: String,
			default: "/portfolio/sanctuary-at-watson-lake",
		},
	});
</script>
<template>
	<section class="section-main">
		<div class="container">
			<div class="container-inner">
				<div class="current-project relative overflow-hidden min-h-100">
					<img :src="cpImage" :alt="cpImageAlt" class="h-full w-full object-cover rounded-xl min-h-100" />
					<div class="current-project-content absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center backdrop-blur-xs">
						<div class="current-project-content-inner text-center p-6 md:p-12 lg:p-20 md:max-w-[75%] max-w-full">
							<p class="subheading">Current Project</p>
							<h2>{{ cpTitle }}</h2>
							<p>{{ cpDescription }}</p>
							<div class="button-wrap center">
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
