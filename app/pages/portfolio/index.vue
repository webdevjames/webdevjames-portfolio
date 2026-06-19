<script setup lang="ts">
	const { data: projects } = await useAsyncData("projects", () => queryCollection("projects").all());
</script>
<template>
	<section class="section-main contained section-intro">
		<div class="container">
			<div class="container-inner">
				<p class="subheading">Portfolio</p>
				<h1>A collection of my favorite projects</h1>
				<p>This is collection of featured web and HTML email development projects that span over a decade. This is not an exhaustive list. To reference more projects, please refer to my LinkedIn profile.</p>
				<div class="button-wrap multi">
					<NuxtLink to="/contact" target="_self" class="button alt">
						<span>Hire Me</span>
					</NuxtLink>
					<NuxtLink to="https://www.linkedin.com/in/jamesfrazierdesign/details/projects/" target="_blank" class="button alt">
						<span>LinkedIn</span>
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
						<img :src="project.heroImage" class="w-full rounded-xl mb-2" alt="" />
						<h4 class="mb-0!">{{ project.title }}</h4>
						<p class="bg-blue-500 absolute top-2 right-2 inline rounded-xl text-[10px] text-white uppercase tracking-widest font-bold px-2 pt-1 pb-0.5 m-0 z-2 block">{{ project.category }}</p>
						<p class="text-sm mt-1 mb-0 block">{{ project.blurb }}</p>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<!-- <section class="section-main section-more-projects">
		<div class="container">
			<div class="container-inner">
				<h2>More noteworthy projects</h2>
				<ul class="list-disc ml-[1rem]">
					<li>Project 1</li>
					<li>Project 2</li>
					<li>Project 3</li>
				</ul>
			</div>
		</div>
	</section> -->
	<CallToAction />
</template>
<style scoped></style>
