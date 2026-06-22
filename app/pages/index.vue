<script setup lang="ts"></script>
<template>
	<section class="section-main h-dvh blueprint-grid">
		<div class="container">
			<div class="container-inner max-w-250">
				<h1 class="text-4xl/12 md:text-5xl/15 lg:text-6xl/18">Full-Stack Web Developer Specializing in Agency-Scale Web Applications</h1>
				<div class="button-wrap multi">
					<NuxtLink to="/portfolio" class="button">
						<span>See the Work</span>
					</NuxtLink>
					<NuxtLink to="/resume-james-frazier.pdf" external target="_blank" class="button">
						<span>View Resume</span>
					</NuxtLink>
				</div>
				<NuxtLink to="#next" class="absolute bottom-0 left-0 w-full h-20 flex items-center justify-center">
					<Icon name="lucide:chevron-down" class="animate-bounce text-center m-auto inline-block text-4xl" />
				</NuxtLink>
			</div>
		</div>
	</section>
	<section id="next" class="section-main contained scroll-mt-25 md:scroll-mt-20">
		<div class="container">
			<div class="container-inner text-left">
				<p class="subheading">About</p>
				<h2>I build web applications and HTML email</h2>
				<p>For over 10 years, I have supported agencies and customers by designing, developing and supporting their marketing initiatives. Utilizing experience in collaborating with digital marketing specialists and UX/UI designers, I develop with the end-users' needs in mind.</p>
				<div class="button-wrap">
					<NuxtLink to="/about" class="button">
						<span>More About Me</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<FeaturedProject />
	<section class="section-main contained">
		<div class="container">
			<div class="container-inner pb-0!">
				<h2>Websites of all shapes and sizes</h2>
				<p>From small nonprofits to enterprise-level build scale, I create web experiences that appeal to clients and their consumers.</p>
			</div>
		</div>
	</section>
	<section class="section-main">
		<div class="container">
			<div class="container-inner pt-0!">
				<div class="info-blocks mt-4">
					<div class="info-block text-left">
						<h4>Sweating the <span class="text-blue-500!">small</span> stuff</h4>
						<p>These are true passion projects. The less complex the scale, the more creative freedom is available for smaller budgets. Smaller scale sites have trended toward the arts, nonprofits and portfolio websites.</p>
					</div>
					<div class="info-block text-left">
						<h4>It's kind of a <span class="text-blue-500!">big</span> deal</h4>
						<p>Challenges enable growth. Resolving pain-points and troubleshooting data and CMS access issues for large-scale clients can be both exciting and satisfying - much like piecing together a puzzle.</p>
					</div>
				</div>
				<div class="button-wrap">
					<NuxtLink to="/portfolio" class="button">
						<span>View Portfolio</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<CallToAction />
</template>
<style scoped></style>
