<script setup lang="ts">
	const { data: projects } = await useAsyncData("projects", () => queryCollection("projects").all());
</script>
<template>
	<section class="section-main contained section-intro">
		<div class="container">
			<div class="container-inner">
				<p class="subheading">Portfolio</p>
				<h1>A collection of my favorite agency and freelance web projects</h1>
				<p>This is collection of featured web and HTML email development projects that span over a decade. This is not an exhaustive list. To reference more projects, please refer to my LinkedIn profile.</p>
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
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<NuxtLink v-for="project in projects" :key="project.id" :to="project.path.replace('/projects', '/portfolio')" class="relative border rounded-lg transition">
						<img :src="project.heroImage" class="w-full rounded-xl mb-4" alt="" />
						<h5 class="mb-0!">{{ project.title }}</h5>
						<p v-if="project.category" class="bg-blue-500 absolute top-2 right-2 inline rounded-xl text-[10px] text-white uppercase tracking-widest font-bold px-2 pt-1 pb-0.5 m-0 z-2 block">{{ project.category }}</p>
						<p class="text-xs mt-1 mb-0 block">{{ project.blurb }}</p>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<section class="section-main contained section-more-projects">
		<div class="container">
			<div class="container-inner">
				<h2>More noteworthy projects</h2>
				<p>As the <strong>Lead WordPress Developer</strong> on these projects, they deserve an honorable mention. Each project had specific requests (and fun quirks) of their own - along with some amazing clients.</p>
				<ul class="lml-[1rem]">
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://bohnbiofilter.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Bohn Biofilter</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://cya.coffee/" target="_blank" class="ml-2 transition hover:text-blue-500">Cover Your Assets</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://davidmichaelmiller.com" target="_blank" class="ml-2 transition hover:text-blue-500">David Michael Miller Associates</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://verderiver.org/" target="_blank" class="ml-2 transition hover:text-blue-500">Friends of the Verde River</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://palmtowerphx.com/" target="_blank" class="ml-2 transition hover:text-blue-500">PALM Tower</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://pleasantharbor.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Pleasant Harbor</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://pragmaticheart.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Pragmatic Heart</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://thebazaarliving.com" target="_blank" class="ml-2 transition hover:text-blue-500">The Bazaar Living</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://toddassoc.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Todd &amp Associates</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://wellnessinverdevalleyaz.com/" target="_blank" class="ml-2 transition hover:text-blue-500">Wellness in the Verde Valley</a></li>
					<li class="flex items-center justify-start"><Icon name="akar-icons:link-out" class="text-blue-500!" /> <a href="https://wildfireaz.org/" target="_blank" class="ml-2 transition hover:text-blue-500">Wildfire AZ</a></li>
				</ul>
			</div>
		</div>
	</section>
	<CallToAction />
</template>
<style scoped></style>
