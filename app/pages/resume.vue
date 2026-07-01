<script setup lang="ts">
	import skillsData from "../../assets/data/skills.json";

	useSeoMeta({
		title: "Resume of James Frazier | Agency and Freelance Full-Stack Web Developer (webdevjames)",
		description: "James Frazier is a Full-Stack Web Developer with a focus on WordPress CMS and Vue.js / Nuxt front-end framework.",
		ogTitle: "Resume of James Frazier | Full-Stack Web Developer",
		ogDescription: "James Frazier resume showcasing experience in Full-Stack Web Development for agency and freelance projects.",
		ogImage: "/default-social-card.jpg",
		twitterImage: "/default-social-card.jpg",
	});
</script>
<template>
	<section class="section-main contained section-intro blueprint-grid">
		<div class="container">
			<div class="container-inner text-left">
				<p class="subheading">Resume</p>
				<h1>James Frazier</h1>
				<p>Results-driven Web Developer with over 12 years of fast-paced digital marketing and agency experience specializing in custom WordPress engineering, Vue.js / Nuxt applications, and core web technologies (HTML, PHP, JS). Proven track record of collaborating across cross-functional client, PM, and UI/UX design teams to deliver highly responsive, performance-optimized web and custom HTML email experiences on-time and within budget.</p>
				<div class="button-wrap multi">
					<NuxtLink to="/contact" target="_self" class="button alt">
						<span>Hire Me</span>
					</NuxtLink>
					<NuxtLink to="/James_Frazier_Resume_ATS.docx" target="_blank" class="button alt">
						<span>ATS-Friendly Resume</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<section class="section-main">
		<div class="container">
			<div class="container-inner">
				<h2>Technical Skills</h2>
				<div class="columns-1 md:columns-2 gap-10 my-8 print:gap-6">
					<SkillCard v-for="skillGroup in skillsData" :key="skillGroup.title" :title="skillGroup.title" :items="skillGroup.items" />
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped>
	@media print {
		/* Global cleanups for the printer */
		:deep(body) {
			background: white !important;
			color: black !important;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			color: #111111 !important;
			page-break-after: avoid; /* Prevents headings from sitting alone at the bottom of a page */
		}

		p,
		li {
			font-size: 11pt;
			line-height: 1.4;
			color: #333333;
		}
	}
</style>
