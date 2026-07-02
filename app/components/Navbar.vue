<script setup lang="ts">
	import { ref } from "vue";

	const navLinks = ref([
		{ title: "Portfolio", url: "/portfolio" },
		{ title: "About", url: "/about" },
		{ title: "Resume", url: "/resume" },
		{ title: "Contact", url: "/contact" },
	]);
	const logoSrc = "/logo-webdevjames-white-blue.svg";

	// 1. Manage Mobile Menu State
	const isMenuOpen = ref(false);
	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value;
	};
	const closeMenu = () => {
		isMenuOpen.value = false;
	};
</script>

<template>
	<nav class="section-main fixed top-0 left-0 w-full h-[75px] md:h-[88px] z-50 transition-all duration-300 print:hidden!">
		<div class="container px-2! md:px-8!">
			<div class="container-inner p-0!">
				<div class="relative w-full flex flex-row items-center justify-between gap-4 pl-5 md:pl-8 pr-5 md:pr-4 py-3 md:py-4 bg-black/80 backdrop-blur-xs rounded-4xl m-auto border border-white/10 shadow-xl">
					<div class="logo flex items-center justify-center text-white">
						<NuxtLink to="/" @click="closeMenu" class="text-white no-underline">
							<img :src="logoSrc" alt="webdevjames logo" class="w-full max-w-30 md:max-w-40 h-auto" />
						</NuxtLink>
					</div>

					<ul class="hidden md:flex gap-x-2 items-center justify-between">
						<li v-for="link in navLinks" :key="link.title" class="m-0!">
							<NuxtLink :to="link.url" class="text-white text-xs md:text-sm tracking-wider font-medium bg-transparent hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors duration-300 ease-in-out px-3 py-2 md:px-5 md:py-3 rounded-4xl">
								{{ link.title }}
							</NuxtLink>
						</li>
					</ul>

					<button @click="toggleMenu" type="button" class="flex md:hidden flex-col justify-center items-center w-7 h-7 gap-1.5 focus:outline-none z-50 cursor-pointer rounded-full p-0" aria-label="Toggle navigation menu">
						<span :class="['w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
						<span :class="['w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : '']"></span>
						<span :class="['w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
					</button>
				</div>

				<div :class="['absolute left-0 right-0 top-full px-2! md:px-8! mt-2 w-full  transition-all duration-300 ease-in-out md:hidden origin-top z-9', isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none']">
					<div class="bg-black/80 backdrop-blur-xs border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden">
						<ul class="flex flex-col gap-y-4 text-center">
							<li v-for="link in navLinks" :key="link.title + '-mobile'" class="gap-3 m-0!">
								<NuxtLink :to="link.url" @click="closeMenu" class="block text-white text-base tracking-wider font-medium py-3 rounded-2xl bg-gray-800/95 hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200">
									{{ link.title }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<style scoped></style>
