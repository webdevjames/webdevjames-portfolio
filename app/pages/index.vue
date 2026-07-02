<script setup lang="ts">
	useSeoMeta({
		title: "James Frazier (webdevjames) | Agency and Freelance Front-End Web Developer and Designer ",
		description: "Hi, I'm James Frazier. I build high-performance custom Nuxt and WordPress web applications. I also specialize in HTML email template development.",
		ogTitle: "James Frazier (webdevjames) | Front-End Web Designer & Developer",
		ogDescription: "Custom web and HTML email design and development for any application.",
		ogImage: "/default-social-card.jpg",
		twitterImage: "/default-social-card.jpg",
	});

	useHead({
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "James Frazier | webdevjames",
					url: "https://webdevjames.com",
					mainEntity: {
						"@type": "ProfessionalService",
						name: "webdevjames",
						url: "https://webdevjames.com",
						image: "https://webdevjames.com/default-social-card.jpg",
						priceRange: "$$",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Phoenix",
							addressRegion: "AZ",
							addressCountry: "US",
						},
						// This property bridges the gap to your personal profile!
						founder: {
							"@type": "Person",
							name: "James Frazier",
							jobTitle: "Front-End Web Designer & Developer",
							url: "https://webdevjames.com",
							sameAs: ["https://www.linkedin.com/in/webdevjames/"],
						},
					},
				}),
			},
		],
	});
</script>
<template>
	<section class="section-main section-intro h-dvh blueprint-grid items-start!">
		<div class="container h-full">
			<div class="container-inner relative w-full h-full flex items-start md:items-center justify-start pt-25! md:pt-35!">
				<NuxtImg src="/webdevjames-james-frazier-portrait.png" alt="James Frazier Portrait" format="webp" quality="80" class="w-full sm:max-w-[50%] md:max-w-[600px] h-auto absolute bottom-0 -right-12 md:right-0 z-1 brightness-75" />
				<div class="hero-content w-full max-w-[700px] translate-y-0 md:-translate-y-18 z-2">
					<p class="subheading" aria-hidden="true">James Frazier</p>
					<h1 class="text-2xl/7! md:text-5xl/14! font-bold"><span class="sr-only">James Frazier | </span>Front-End Web Designer & Developer</h1>
					<p>Crafting visually compelling user experiences with a designer's eye and an engineer's precision. Over 10 years of fast-paced agency experience building responsive, high-converting websites.</p>
					<div class="button-wrap multi">
						<NuxtLink to="/portfolio" class="button alt">
							<span>See the Work</span>
						</NuxtLink>
					</div>
				</div>
				<NuxtLink to="#next" class="absolute bottom-0 left-0 w-full h-20 flex items-center justify-center z-4">
					<Icon name="lucide:chevron-down" class="animate-bounce text-center m-auto inline-block text-4xl" />
				</NuxtLink>
			</div>
		</div>
	</section>
	<RevealSection id="next" class="section-main contained scroll-mt-25 md:scroll-mt-20">
		<div class="container">
			<div class="container-inner text-left">
				<p class="subheading">About</p>
				<h2>I build web applications and HTML email</h2>
				<p>I support agencies and customers by designing and developing their marketing initiatives. Utilizing experience in collaborating with digital marketing specialists, I lead efforts for UI/UX strategy, interface design, and front-end architecture with the end-users' needs in mind.</p>
				<div class="button-wrap">
					<NuxtLink to="/about" class="button">
						<span>More About Me</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</RevealSection>
	<FeaturedProject />
	<RevealSection class="section-main contained">
		<div class="container">
			<div class="container-inner pb-0!">
				<h2>Websites of all shapes and sizes</h2>
				<p>From small nonprofits to enterprise-level build scale, I create web experiences that appeal to clients and their consumers.</p>
			</div>
		</div>
	</RevealSection>
	<section class="section-main">
		<div class="container">
			<div class="container-inner pt-0!">
				<div class="info-blocks mt-4">
					<RevealSection class="info-block text-left">
						<h4>Sweating the <span class="text-blue-500!">small</span> stuff</h4>
						<p>These are true passion projects. The less complex the scale, the more creative freedom is available for smaller budgets. Smaller scale sites have trended toward the arts, nonprofits and portfolio websites.</p>
					</RevealSection>
					<RevealSection delay="200ms" class="info-block text-left">
						<h4>It's kind of a <span class="text-blue-500!">big</span> deal</h4>
						<p>Challenges enable growth. Resolving pain-points and troubleshooting data and CMS access issues for large-scale clients can be both exciting and satisfying - much like piecing together a puzzle.</p>
					</RevealSection>
				</div>
				<RevealSection class="button-wrap">
					<NuxtLink to="/portfolio" class="button">
						<span>View Portfolio</span>
					</NuxtLink>
				</RevealSection>
			</div>
		</div>
	</section>
	<CallToAction />
</template>
<style scoped></style>
