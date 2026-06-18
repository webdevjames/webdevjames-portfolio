<script setup lang="ts">
	const containerRef = ref(null);
	const swiper = useSwiper(containerRef);
	const slides = [
		{
			image: "/logo-fullbay.svg",
			company: "Fullbay",
			quote:
				"I had the pleasure of working with James as a consultant for our website service offering which has evolved into a huge line of business for Fullbay, Deiselmatic. James worked diligently with our team to improve our design and then implement that design into a captivating template in WordPress. After our initial conversations with early customers went well, James joined us in launching 20+ customer sites in 3 months. His dedication extended to training a new hire on the website building process. We often escalated hard to solve problems to James and he was able to solve them quickly due to his years of expertise. I would highly recommend working with James to take your project to the next level.",
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
			image: "/logo-laughing-pony-rescue.svg",
			company: "Laughing Pony Rescue",
			quote: "Laughing Pony rescue is a 501c3 and has been operating for over 20 years. We have saved over a thousand equines and farm animals from slaughter. What we didn't have was an engaging website that would attract new donors and tell our story in a more impactful way. We looked at several website developers and found that James Frazier had the talent and vision that we needed. Since James became involved, our donations have increased and our message is resonating throughout the community. I would strongly recommend talking with James to see if he can help you like he has helped us.",
			author: "Joe & Debby McCloskey",
			link: "https://laughingponyrescue.org/",
		},
	];
</script>
<template>
	<section class="section-main contained section-intro">
		<div class="container">
			<div class="container-inner text-left">
				<p class="subheading">About</p>
				<h1>Nice to meet you - I'm James Frazier</h1>
				<p>Get to know about my professional experience, a taste of my personal life, and how we would make a great team.</p>
			</div>
		</div>
	</section>
	<section class="section-main contained">
		<div class="container">
			<div class="container-inner text-left pb-0!">
				<h2>My experience</h2>
				<p>I have been around the block (once or twice). From building websites using <code>&lt;table&gt;</code> tags to structuring modern frameworks, my years of experience have been to the benefit of both agencies and clients, alike. My proven knowledge and outstanding communication with clients has allowed me to grow in not only my own skillset, but has provided me with the privilage of working on some amazing brands including:</p>
			</div>
		</div>
	</section>
	<section class="section-main">
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
	</section>
	<section class="section-main">
		<div class="container">
			<div class="container-inner">
				<ClientOnly>
					<swiper-container ref="containerRef">
						<swiper-slide v-for="(slide, idx) in slides" :key="idx">
							<div class="w-full grid grid-cols-1 md:grid-cols-[1fr_225px] gap-6 md:gap-10 px-8 py-6 border border-white/20 bg-radial-[at_25%_25%] from-white/20 to-white/5 to-75% rounded-xl">
								<div class="slide-content order-2 md:order-1">
									<p>
										<em>{{ slide.quote }}</em>
									</p>
									<p class="font-bold!">&mdash; {{ slide.author }}</p>
									<div class="button-wrap">
										<a :href="slide.link" target="_blank" class="button"
											><span>Visit {{ slide.company }}</span></a
										>
									</div>
								</div>
								<div class="slide-attributon order-1 md:order-2">
									<div class="slide-attribution-container w-[150px] md:w-[225px] h-[150px] md:h-[225px] bg-white rounded-[100%] flex items-center justify-center flex-col m-auto md:m-0">
										<img :src="slide.image" :alt="slide.company" class="max-w-[100px] md:max-w-[150px]" />
									</div>
								</div>
							</div>
						</swiper-slide>
					</swiper-container>
				</ClientOnly>

				<!-- Go back one slide -->
				<button @click="swiper.prev()">Prev</button>
				<!-- Go forward one slide -->
				<button @click="swiper.next()">Next</button>
			</div>
		</div>
	</section>
	<CallToAction />
</template>
<style scoped></style>
