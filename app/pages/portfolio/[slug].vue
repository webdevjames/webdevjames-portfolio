<script setup lang="ts">
	const route = useRoute();

	// 1. Fetch the specific project based on the URL slug
	const { data: page } = await useAsyncData(route.path, () => queryCollection("projects").path(route.path.replace("/portfolio", "/projects")).first());

	// 2. Automatically generate all SEO and Social Share tags!
	useSeoMeta({
		title: () => `${page.value?.title} | James Frazier - Portfolio`,
		description: () => page.value?.description || "View my latest web development project.",
		ogTitle: () => page.value?.title,
		ogDescription: () => page.value?.description,
		ogImage: () => page.value?.image || "/default-social-card.jpg",
		twitterImage: "/default-social-card.jpg",
	});
</script>
<template>
	<div v-if="page">
		<section class="section-main contained section-intro relative overflow-y-hidden bg-no-repeat bg-cover h-auto min-h-[80vh] items-end!" :style="{ backgroundImage: `url(${page.heroImage})`, backgroundPosition: `${page.heroPosition}` }">
			<div class="container z-2">
				<div class="container-inner">
					<p class="subheading">Portfolio Project</p>
					<h1>{{ page.title }}</h1>
					<p>{{ page.description }}</p>
				</div>
			</div>
			<div class="absolute inset-0 bg-black/50 w-full h-full z-1"></div>
		</section>
		<section class="section-main">
			<div class="container">
				<div class="container-inner py-4!">
					<ul class="flex items-center justify-center flex-wrap gap-2.5 list-none space-y-2.5">
						<slot v-for="spec in page.specs" :key="spec">
							<li class="text-xs text-white/90! bg-white/15 py-1 px-3 rounded-xl m-0!">
								{{ spec }}
							</li>
						</slot>
					</ul>
				</div>
			</div>
		</section>
		<ContentRenderer :value="page" />
		<section class="section-main mt-4 md:mt-8">
			<div class="container">
				<div class="container-inner border-t-4 border-blue-500">
					<h2>Thanks for checking out {{ page.title }}</h2>
					<p>Want to see more web development projects?</p>
					<div class="button-wrap">
						<NuxtLink to="/portfolio" class="button"><span>Back to Portfolio</span></NuxtLink>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div v-else>
		<section class="section-main section-intro">
			<div class="container">
				<div class="container-inner">
					<h1 class="text-white">Project not found</h1>
					<p class="text-white">Please go back to the Portfolio.</p>
					<div class="button-wrap mt-0!">
						<NuxtLink to="/portfolio" class="button alt"><span>Back to Portfolio</span></NuxtLink>
					</div>
				</div>
			</div>
		</section>
	</div>
	<CallToAction />
</template>
<style scoped></style>
