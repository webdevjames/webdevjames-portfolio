<script setup lang="ts">
	const route = useRoute();

	// 1. Fetch the specific project based on the URL slug
	const { data: page } = await useAsyncData(route.path, () => queryCollection("projects").path(route.path.replace("/portfolio", "/projects")).first());
</script>
<template>
	<div v-if="page">
		<section class="section-main contained section-intro relative overflow-y-hidden bg-no-repeat bg-cover bg-position-[center_top] h-[75vw] min-h-[70vh] max-h-[875px] items-end!" :style="{ backgroundImage: `url(${page.heroImage})` }">
			<div class="container z-2">
				<div class="container-inner py-8!">
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
		<section class="section-main">
			<div class="container">
				<div class="container-inner pt-0! flex items-center justify-center text-center">
					<div class="button-wrap">
						<a href="/portfolio" class="button mt-0!"><span>Back to Portfolio</span></a>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div v-else>
		<section class="section-main section-intro">
			<div class="container">
				<div class="container-inner">
					<h1 class="text-center">Project not found</h1>
					<p class="text-white text-center">Please go back to the Portfolio.</p>
					<div class="button-wrap mt-0!">
						<a href="/portfolio" class="button"><span>Back to Portfolio</span></a>
					</div>
				</div>
			</div>
		</section>
	</div>
	<CallToAction />
</template>
<style scoped></style>
