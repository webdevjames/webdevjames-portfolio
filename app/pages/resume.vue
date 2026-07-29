<script setup lang="ts">
	import skillsData from "../../assets/data/skills.json";

	useSeoMeta({
		title: "Resume of James Frazier | Agency and Freelance Front-End Web Designer & Developer (webdevjames)",
		description: "James Frazier is a Front-End Web Developer and Designer and Designer with a focus on WordPress CMS and Vue.js / Nuxt front-end framework.",
		ogTitle: "Resume of James Frazier | Front-End Web Designer & Developer",
		ogDescription: "James Frazier resume showcasing experience in Full-Stack Web Development and Design for agency and freelance projects.",
		ogImage: "/default-social-card.jpg",
		twitterImage: "/default-social-card.jpg",
	});

	useHead({
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ProfilePage",
					url: "https://webdevjames.com/resume",
					mainEntity: {
						"@type": "Person",
						name: "James Frazier",
						knowsAbout: ["Vue.js", "Nuxt", "Tailwind CSS", "WordPress", "Front-End Design"],
						// Converted from a raw string into a structured data node
						alumniOf: {
							"@type": "EducationalOrganization",
							name: "Collins College",
						},
					},
				}),
			},
		],
	});
</script>
<template>
	<section class="section-main contained section-intro blueprint-grid">
		<div class="container">
			<div class="container-inner text-left print:py-4!">
				<p class="subheading print:hidden!">Resume</p>
				<h1>James Frazier</h1>
				<p>Results-driven Web Developer with over 12 years of fast-paced digital marketing and agency experience specializing in custom WordPress engineering, Vue.js / Nuxt applications, and core web technologies (HTML, PHP, JS). Proven track record of collaborating across cross-functional client, PM, and UI/UX design teams to deliver highly responsive, performance-optimized web and custom HTML email experiences on-time and within budget.</p>
				<div class="button-wrap multi print:hidden!">
					<NuxtLink to="/contact" target="_self" class="button alt">
						<span>Hire Me</span>
					</NuxtLink>
					<NuxtLink to="/james-frazier-resume-ats.pdf" target="_blank" class="button alt">
						<span>ATS-Friendly Resume</span>
					</NuxtLink>
					<NuxtLink to="/james-frazier-resume-designed.pdf" target="_blank" class="button alt">
						<span>Standard Resume</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<section class="section-main">
		<div class="container">
			<div class="container-inner">
				<h2>Technical Skills</h2>
				<div class="columns-1 gap-10 mt-8 print:gap-6">
					<SkillCard v-for="skillGroup in skillsData" :key="skillGroup.title" :title="skillGroup.title" :items="skillGroup.items" />
				</div>
			</div>
		</div>
	</section>
	<section class="section-main contained">
		<div class="container">
			<div class="container-inner">
				<h2>Professional Experience</h2>
				<article class="job job-1">
					<h4 class="mt-10 mb-0! border-l-4 border-blue-500 pl-4"><strong>Sr. Web Developer</strong> | ps:studios (Phoenix, AZ)</h4>
					<p class="mb-0! border-l-4 border-blue-500 pt-2 pl-4"><em>Aug 2015 &ndash; Present</em></p>
					<div class="border-l-4 border-white pl-4 py-6">
						<ul>
							<li><strong class="text-blue-500">Full-Lifecycle Development:</strong> Architect, design, and launch 40+ custom-built WordPress and static HTML web platforms from complex Figma and InDesign design systems.</li>
							<li><strong class="text-blue-500">Modern Web Architecture:</strong> Engineer highly performant headless WordPress API applications leveraging Vue.js and Nuxt framework technologies.</li>
							<li><strong class="text-blue-500">AI Workflow Optimization:</strong> Leverage AI tools into the development pipeline, reducing boilerplate and complex coding hours by 12% and accelerating time-to-market.</li>
							<li><strong class="text-blue-500">Infrastructure & Database Management:</strong> Orchestrate cloud and traditional hosting architecture across Plesk, cPanel, WP Engine, and Pantheon, successfully executing secure SQL database configurations and complex migrations with zero downtime.</li>
							<li><strong class="text-blue-500">Bespoke WordPress Engineering:</strong> Develop tailored custom WP themes utilizing Advanced Custom Fields (ACF) alongside native Gutenberg blocks and builder ecosystems (Elementor, Enfold) to maximize client editing flexibility.</li>
							<li><strong class="text-blue-500">API Integration:</strong> Program robust, secure data pipelines linking external 3rd-party enterprise platforms (Salesforce, MailChimp, Constant Contact) via the Gravity Forms API to streamline automated client lead collection.</li>
							<li><strong class="text-blue-500">Leadership & Scoping:</strong> Drive project accuracy by assisting in technical engineering estimates, authoring structured internal documentation, and conducting comprehensive technical training seminars for non-technical clients.</li>
							<li><strong class="text-blue-500">DevOps Standardizations:</strong> Revolutionized internal team workflows by deploying customized Webpack configurations, successfully standardizing local development environments and cutting code initialization time.</li>
							<li><strong class="text-blue-500">Asset Optimization:</strong> Create and optimize production-ready vector assets and digital imagery via Photoshop and Illustrator, improving overall site performance and Core Web Vitals.</li>
							<li><strong class="text-blue-500">Performance Tracking:</strong> Initialize Google Analytics (GA4) tracking and reporting in combination with corresponding Google Tag Manager (GTM) event tracking.</li>
							<li><strong class="text-blue-500">Email Engineering:</strong> Build modular, responsive HTML email templates for MailChimp and Campaign Monitor, ensuring flawless cross-client rendering through rigorous Litmus testing.</li>
						</ul>
					</div>
				</article>
				<article class="job job-1">
					<h4 class="mt-8 mb-0! border-l-4 border-blue-500 pl-4 print:mt-0!"><strong>HTML Email / Web Developer</strong> | McMURRY/TMG (Phoenix, AZ)</h4>
					<p class="mb-0! border-l-4 border-blue-500 pt-2 pl-4"><em>Feb 2013 &ndash; Aug 2015 </em></p>
					<div class="border-l-4 border-white pl-4 py-6">
						<ul>
							<li><strong class="text-blue-500">Responsive Architecture:</strong> Built cross-browser compatible, mobile-first responsive websites using Bootstrap/Foundation frameworks, HTML5, CSS3, SCSS, and jQuery.</li>
							<li><strong class="text-blue-500">Enterprise Email Campaigns:</strong> Designed and hand-coded high-volume, responsive HTML email templates deployment-ready for major enterprise ESP platforms including Salesforce / ExactTarget, MailChimp, and Act-On.</li>
							<li><strong class="text-blue-500">Quality Assurance:</strong> Maintained strict QA workflows, utilizing Litmus testing to verify pixel-perfect design rendering across over 15+ unique browser and inbox configurations.</li>
							<li><strong class="text-blue-500">CMS Security Operations:</strong> Proactively monitored, patched, and maintained system-level client security architectures on highly targeted CMS instances including WordPress and Drupal.</li>
						</ul>
					</div>
				</article>
			</div>
		</div>
	</section>
	<section class="section-main contained">
		<div class="container">
			<div class="container-inner">
				<h2>Education</h2>
				<article class="education">
					<h4 class="mt-8 mb-0! border-l-4 border-blue-500 pl-4"><strong>Collins College</strong> (Tempe, AZ)</h4>
					<p class="mb-0! border-l-4 border-blue-500 pt-2 pl-4"><em>Jul 2006 &ndash; Jun 2009 </em></p>
					<div class="border-l-4 border-white pl-4 py-6">
						<ul>
							<li class="print:m-0!"><strong class="text-blue-500">Bachelor of Arts:</strong> Visual Art</li>
							<li class="print:m-0!"><strong class="text-blue-500">Graduate Honors:</strong> Valedictorian, Dean's List for 3 years</li>
						</ul>
					</div>
				</article>
				<div class="button-wrap multi print:hidden!">
					<NuxtLink to="/contact" target="_self" class="button">
						<span>Hire Me</span>
					</NuxtLink>
					<NuxtLink to="/james-frazier-resume-ats.pdf" target="_blank" class="button">
						<span>ATS-Friendly Resume</span>
					</NuxtLink>
					<NuxtLink to="/james-frazier-resume-designed.pdf" target="_blank" class="button">
						<span>Standard Resume</span>
					</NuxtLink>
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
