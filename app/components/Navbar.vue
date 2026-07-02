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
	<nav class="section-main fixed top-0 left-0 w-full h-[75px] md:h-[75px] z-50 transition-all duration-300 bg-black/80 backdrop-blur-xs m-auto shadow-xl print:hidden!">
		<div class="container">
			<div class="container-inner">
				<div class="relative w-full flex flex-row items-center justify-between gap-6 py-3 md:py-4">
					<div class="logo flex items-center justify-center text-white">
						<NuxtLink to="/" @click="closeMenu" class="text-white no-underline">
							<img :src="logoSrc" alt="webdevjames logo" class="w-full max-w-30 md:max-w-40 h-auto" />
						</NuxtLink>
					</div>

					<ul class="hidden md:flex gap-x-2 items-center justify-between">
						<li v-for="link in navLinks" :key="link.title" class="m-0!">
							<NuxtLink :to="link.url" class="inline-flex relative overflow-hidden cursor-pointer bg-transparent px-6 py-1 md:px-5 md:py-2 rounded-3xl z-2 before:absolute before:-left-full before:top-0 before:w-full before:h-full before:transition-all before:duration-500 before:bg-linear-to-r before:from-cyan-500 before:to-blue-500 before:rounded-3xl before:z-1 hover:before:left-0">
								<span class="relative z-3 text-white font-medium text-xs md:text-sm tracking-wide">{{ link.title }}</span>
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
