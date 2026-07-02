<script setup lang="ts">
	// 1. Fetch data lazily and destructure the native 'status' reactive variable
	// Fetch data lazily with a temporary artificial delay for testing
	const { data: projects, status } = await useAsyncData(
		"projects",
		async () => {
			return queryCollection("projects").order("title", "ASC").all();
		},
		{ lazy: true, server: false },
	);

	useSeoMeta({
		title: "Portfolio of James Frazier | webdevjames",
		description: "View a sample of James Frazier's web development projects that have exceeded client expectations.",
		ogTitle: "Portfolio of James Frazier | Full-Stack Web Developer",
		ogDescription: "James Frazier's sample of web development projects for local and big brands.",
		ogImage: "/default-social-card.jpg",
		twitterImage: "/default-social-card.jpg",
	});

	useHead({
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "PortfolioPage",
					name: "Portfolio of James Frazier",
					description: "The portfolio page for webdevjames agency and freelance front-end web development and design.",
					url: "https://webdevjames.com/portfolio",
				}),
			},
		],
	});
</script>

<template>
	<section class="section-main contained section-intro blueprint-grid">
		<div class="container">
			<div class="container-inner">
				<p class="subheading">Portfolio</p>
				<h1>Agency and freelance web design and development projects</h1>
				<p>This is a collection of featured web projects that span over a decade. This is not an exhaustive list, so if you would like to see more, please refer to my LinkedIn profile.</p>
				<div class="button-wrap multi">
					<NuxtLink to="/contact" target="_self" class="button alt">
						<span>Hire Me</span>
					</NuxtLink>
					<NuxtLink to="https://www.linkedin.com/in/webdevjames/details/projects/" target="_blank" class="button alt">
						<span>LinkedIn Projects</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<section class="section-main section-projects">
		<div class="container">
			<div class="container-inner">
				<Transition name="fade" mode="out-in">
					<div v-if="status === 'pending'" key="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div v-for="n in 12" :key="n" class="relative rounded-lg bg-black/20">
							<div class="animate-pulse bg-gray-700 w-full h-48 rounded-xl mb-4"></div>
							<div class="animate-pulse bg-gray-700 w-3/4 h-5 rounded-md mb-3"></div>
							<div class="animate-pulse bg-gray-700 w-full h-3 rounded-md my-1 px-2 pt-1 pb-0.5"></div>
							<div class="animate-pulse bg-gray-700 w-full h-3 rounded-md px-2 pt-1 pb-0.5 m-0"></div>
						</div>
					</div>
					<div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<NuxtLink v-for="project in projects" :key="project.id" :to="project.path.replace('/projects', '/portfolio')" class="relative rounded-lg bg-black/20">
							<NuxtImg :src="project.heroImage" class="w-full rounded-xl mb-4 object-cover h-48" :alt="`Featured image for ${project.title}`" format="webp" quality="80" />
							<h5 class="mb-0! text-white">{{ project.title }}</h5>
							<p v-if="project.category" class="bg-blue-500 absolute top-2 right-2 inline rounded-xl text-[10px]! text-white uppercase tracking-widest font-bold px-2 pt-1 pb-0.5 m-0 z-2">{{ project.category }}</p>
							<p class="text-xs! mt-1 mb-0 block text-gray-400">{{ project.blurb }}</p>
						</NuxtLink>
					</div>
				</Transition>
			</div>
		</div>
	</section>
	<RevealSection>
		<section class="section-main contained section-more-projects">
			<div class="container">
				<div class="container-inner">
					<h2>More noteworthy projects</h2>
					<p>As the <strong>Lead WordPress Developer</strong> on these projects, they deserve an honorable mention. Each project had specific requests (and fun quirks) of their own - along with some amazing clients.</p>
					<ul class="lml-[1rem]">
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://bohnbiofilter.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Bohn Biofilter</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://cya.coffee/" target="_blank" class="ml-2 transition hover:text-blue-500">Cover Your Assets</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://davidmichaelmiller.com" target="_blank" class="ml-2 transition hover:text-blue-500">David Michael Miller Associates</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://verderiver.org/" target="_blank" class="ml-2 transition hover:text-blue-500">Friends of the Verde River</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://palmtowerphx.com/" target="_blank" class="ml-2 transition hover:text-blue-500">PALM Tower</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://pleasantharbor.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Pleasant Harbor</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://pragmaticheart.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Pragmatic Heart</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://thebazaarliving.com" target="_blank" class="ml-2 transition hover:text-blue-500">The Bazaar Living</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://toddassoc.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Todd &amp Associates</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://wellnessinverdevalleyaz.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Wellness in the Verde Valley</NuxtLink></li>
						<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <NuxtLink to="https://wildfireaz.org/" target="_blank" class="ml-2 transition hover:text-blue-500">Wildfire AZ</NuxtLink></li>
					</ul>
				</div>
			</div>
		</section>
	</RevealSection>
	<CallToAction />
</template>
<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
