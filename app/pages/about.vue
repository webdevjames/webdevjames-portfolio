<script setup lang="ts">
	const containerRef = ref(null);
	const swiper = useSwiper(containerRef);
	const slides = [
		{
			image: "/logo-fullbay.svg",
			company: "Fullbay",
			quote:
				"I had the pleasure of working with James as a consultant for our website service offering which has evolved into a huge line of business for Fullbay, Dieselmatic. James worked diligently with our team to improve our design and then implement that design into a captivating template in WordPress. After our initial conversations with early customers went well, James joined us in launching 20+ customer sites in 3 months. His dedication extended to training a new hire on the website building process. We often escalated hard to solve problems to James and he was able to solve them quickly due to his years of expertise. I would highly recommend working with James to take your project to the next level.",
			author: "Sarah Hyde",
			link: "https://fullbay.com/",
		},
		{
			image: "/logo-tk-creative-industries.svg",
			company: "T&K Creative Industries",
			quote: "When I led brand for a B2B SaaS edtech firm I relied on James for strategy and execution support on numerous web projects. He never failed to deliver. James is communicative, skilled, upbeat, and always looks out for your user experience. Whether the project was small, like updates to existing assets, or large, like a complete rebrand, James approached it with the utmost care and concern. I'd work with James again in a heartbeat.",
			author: "Tracy Skochil",
			link: "https://www.tnkcreativeindustries.com/",
		},
		{
			image: "/logo-campuslogic.svg",
			company: "campuslogic",
			quote: "James did extensive web development for our SaaS company, CampusLogic, and we were always so pleased with his work. He is kind, knowledgeable, and such a pleasure to work with. He completed projects on-time, and he was always there to answer our questions as they arose when it came to managing the site on our end afterwards.",
			author: "Sam Rapp",
			link: "https://campuslogic.com/",
		},
		{
			image: "/logo-liberty-wildlife.svg",
			company: "Liberty Wildlife",
			quote:
				"When updating our old website, we chose James as he understood our mission well. He spent early years as a volunteer. Seeing how a person volunteers is a great window into how they work! That was huge in our seeking him for help. We couldn't have been more pleased. He listened to our needs and desires. He kindly guided us when we went terribly astray. And the end result was better than we could have imagined. Our public finds our site very accessible. Anything that needed adapting was done quickly with all of the sage advice needed to help some pretty novice customers. And, he is readably available when needed. Responses are quick and decisive. Overall, we are very pleased with James and the product he delivered to us.",
			author: "Megan Mosby",
			link: "https://libertywildlife.org/",
		},
		{
			image: "/logo-laughing-pony-rescue.svg",
			company: "Laughing Pony Rescue",
			quote: "Laughing Pony rescue is a 501c3 and has been operating for over 20 years. We have saved over a thousand equines and farm animals from slaughter. What we didn't have was an engaging website that would attract new donors and tell our story in a more impactful way. We looked at several website developers and found that James Frazier had the talent and vision that we needed. Since James became involved, our donations have increased and our message is resonating throughout the community. I would strongly recommend talking with James to see if he can help you like he has helped us.",
			author: "Joe & Debby McCloskey",
			link: "https://laughingponyrescue.org/",
		},
	];

	useSeoMeta({
		title: "About James Frazier | webdevjames",
		description: "Get to know James Frazier and how he can help your web development team succeed.",
		ogTitle: "About James Frazier | Front-End Web Designer & Developer",
		ogDescription: "Learn how James Frazier can help grow or integrate into your web development team.",
		ogImage: "/default-social-card.jpg",
		twitterImage: "/default-social-card.jpg",
	});

	useHead({
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ContactPage",
					name: "Contact James Frazier",
					description: "The about page for webdevjames agency and freelance web development services.",
					url: "https://webdevjames.com/about",
				}),
			},
		],
	});
</script>
<template>
	<section class="section-main contained section-intro blueprint-grid">
		<div class="container">
			<div class="container-inner text-left">
				<p class="subheading">About</p>
				<h1>Nice to meet you... <br class="hide" />I'm James Frazier</h1>
				<p>Get to know about my dedicated and stable professional experience, my personal life, and how we would make a great team.</p>
				<div class="button-wrap multi">
					<NuxtLink to="/contact" target="_self" class="button alt">
						<span>Hire Me</span>
					</NuxtLink>
					<NuxtLink to="https://www.linkedin.com/in/webdevjames/" target="_blank" class="button alt">
						<span>LinkedIn Profile</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<section class="section-main contained">
		<div class="container">
			<div class="container-inner text-left pb-0!">
				<h2>My experience</h2>
				<p>I have been around the block (once or twice). From building websites using <code>&lt;table&gt;</code> tags to structuring modern frameworks, my years of experience have been to the benefit of both agencies and clients, alike. My proven knowledge and outstanding communication with clients has allowed me to grow in not only my own skillset, but has provided me with the privilege of working on some amazing brands including:</p>
			</div>
		</div>
	</section>
	<RevealSection class="section-main">
		<div class="container">
			<div class="container-inner">
				<ul class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg-gap-8">
					<li class="flex items-center justify-center"><img src="/logo-arizona-state-university.svg" alt="Arizona State University" class="max-w-[75px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-az-cancer-foundation-for-children.svg" alt="AZ Cancer Foundation for Children" class="max-w-[150px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-azarchitecture.svg" alt="azarchitecture / Jarson & Jarson Real Estate" class="max-w-[150px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-city-of-scottsdale.svg" alt="City of Scottsdale" class="max-w-[100px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-ifc-world-bank-group.svg" alt="IFC World Bank Group" class="max-w-[150px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-illy-north-america.svg" alt="illy North America" class="max-w-[50px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-landscape-forms.svg" alt="Landscape Forms" class="max-w-[150px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-lisa-sette-gallery.svg" alt="Lisa Sette Gallery" class="max-w-[150px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-rosies-house.svg" alt="Rosies's House" class="max-w-[150px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-sanctuary-at-watson-lake.svg" alt="Sanctuary at Watson Lake" class="max-w-[100px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-sigler-western-museum.svg" alt="Sigler Western Museum" class="max-w-[100px]" /></li>
					<li class="flex items-center justify-center"><img src="/logo-wheelwright-museum.svg" alt="Wheelwright Museum of the American Indian" class="max-w-[150px]" /></li>
				</ul>
			</div>
		</div>
	</RevealSection>
	<RevealSection class="section-main relative">
		<div class="container">
			<div class="container-inner pb-0!">
				<ClientOnly>
					<swiper-container
						ref="containerRef"
						:loop="true"
						:autoplay="{
							delay: 3000,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}"
						:pagination="{ clickable: true }"
						class="z-1 w-full px-6 md:px-10 pt-8 pb-4 border border-white/20 bg-radial-[at_25%_25%] from-white/20 to-white/5 to-75% rounded-xl m-auto"
					>
						<swiper-slide v-for="(slide, idx) in slides" :key="idx" class="w-full grid grid-cols-1 md:grid-cols-[1fr_225px] gap-6 md:gap-10 overflow-hidden pb-10">
							<div class="slide-content order-2 md:order-1">
								<p>
									<em>{{ slide.quote }}</em>
								</p>
								<p class="font-bold!">&mdash; {{ slide.author }}</p>
								<div class="button-wrap">
									<a :href="slide.link" target="_blank" class="button md:px-6! md:py-2!"
										><span>Visit {{ slide.company }}</span></a
									>
								</div>
							</div>
							<div class="slide-attributon order-1 md:order-2">
								<div class="slide-attribution-container w-[150px] md:w-[225px] h-[150px] md:h-[225px] bg-white rounded-[100%] flex items-center justify-center flex-col m-auto md:m-0">
									<img :src="slide.image" :alt="slide.company" class="max-w-[100px] md:max-w-[150px]" />
								</div>
							</div>
						</swiper-slide>
					</swiper-container>
				</ClientOnly>
			</div>
		</div>
	</RevealSection>
	<RevealSection class="section-main contained">
		<div class="container">
			<div class="container-inner text-left pb-0!">
				<h2>Let's explore what would make me a great fit for your team</h2>
				<p>Web development is my primary objective, but isn't the extent of what my agency experience brings to the table. Here are some other aspects of digital marketing that will make our partnership worthwhile:</p>
				<ul>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Asset manipulation and optimization for web (using Adobe Photoshop and Illustrator)</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Asset collection from Figma, Adobe XD and InDesign files</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>AI prompting and integration for time-saving boilerplate and / or complex resolution finding</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Implementation of search engine optimization tools and data / SCHEMA</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Effective collaboration with design, UI/UX and project management teams</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Client training and documentation creation</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>HTML email template development and integration with popular email management platforms (MailChimp, Hubspot, Constant Contact, Campaign Monitor)</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>WordPress security and maintenance</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Popular hosting setup and migration (Vercel, cPanel, Plesk, Pantheon, WP Engine)</span>
					</li>
					<li class="grid grid-cols-[20px_1fr] gap-3">
						<div class="flex items-start justify-start mt-1"><Icon name="iconamoon:check-bold" style="color: var(--color-blue-500) !important" /></div>
						<span>Standardized local development methods (MAMP Pro, Sequel Pro, Local, Webpack, Sass, Tailwind CSS, Bootstrap)</span>
					</li>
				</ul>
			</div>
		</div>
	</RevealSection>
	<RevealSection class="section-main">
		<div class="container">
			<div class="container-inner pb-0!">
				<img src="/webdevjames-about-james-frazier.jpg" alt="About James Frazier" class="w-full h-auto rounded-xl" />
			</div>
		</div>
	</RevealSection>
	<RevealSection class="section-main contained">
		<div class="container">
			<div class="container-inner text-left pb-0!">
				<h2>My personal life</h2>
				<p>I absolutely love web development, so I never actually have to work. I built my first website way back in 2010 and I was hooked. I left my job in sales / customer service and have never looked back. Since then, I have been developing for agencies and freelancing for a variety of clientele.</p>
			</div>
		</div>
	</RevealSection>
	<section class="section-main">
		<div class="container">
			<div class="container-inner pt-0!">
				<div class="info-blocks mt-4">
					<RevealSection class="info-block text-left">
						<h4>Rooted in my <span class="text-blue-500!">faith</span></h4>
						<p>My faith in Christ guides my values and work ethic (Colossians 3:23). I strive to provide my best in every project - which not only honors God, but honors those I serve. (Ephesians 6:7-8)</p>
					</RevealSection>
					<RevealSection delay="200ms" class="info-block text-left">
						<h4><span class="text-blue-500!">Family</span> time</h4>
						<p>I enjoy spending time with my wife, three kids and our dog Milo. When we're not hanging out at home in the pool or playing video games, we're at the Phoenix Zoo, going on a day trip up north to Sedona or Jerome or making play dates with friends and their families.</p>
					</RevealSection>
					<RevealSection class="info-block text-left">
						<h4>Playing <span class="text-blue-500!">mechanic</span></h4>
						<p>I'm always working on modifications for my own car (2013 MazdaSpeed 3) or helping others with their general maintenance. If I wasn't in web development, I'd like to believe I would be a mechanic. I love everything car-related and dream to one day own a Dodge Viper.</p>
					</RevealSection>
					<RevealSection delay="200ms" class="info-block text-left">
						<h4>PGA Tour <span class="text-blue-500!">wannabe</span></h4>
						<p>Golf is my latest obsession. I'm all in with clubs, a backyard net to practice, YouTube deep dives and a few rounds under my belt. It is so fun and frustrating at the same time. How is that possible? To love and hate something so much?! 😅</p>
					</RevealSection>
				</div>
			</div>
		</div>
	</section>
	<CallToAction />
</template>
<style>
	swiper-container {
		--swiper-pagination-color: var(--color-blue-500);
		--swiper-pagination-bullet-inactive-color: #ffffff;
		--swiper-pagination-bullet-inactive-opacity: 1;
		--swiper-pagination-bullet-size: 8px;
		--swiper-pagination-bullet-horizontal-gap: 6px;
	}

	swiper-container::part(bullet-active) {
		width: 20px; /* Expands the bullet horizontally into a pill shape */
		border-radius: 8px;
	}
</style>
