<script setup lang="ts">
	const navLinks = ref([
		{
			title: "Portfolio",
			url: "/portfolio",
		},
		{
			title: "About",
			url: "/about",
		},
		{
			title: "Contact",
			url: "/contact",
		},
	]);
	const logoSrc = "/logo-webdevjames-white-blue.svg";
</script>
<template>
	<nav class="w-full fixed top-0 left-0 h-[88px] z-9">
		<div class="w-full m-auto py-0 md:py-2">
			<div class="w-full max-w-[1234px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 pl-4 md:pl-8 pr-2 md:pr-4 py-4 bg-black/80 backdrop-blur-xs md:rounded-4xl m-auto border border-white/10 shadow-xl">
				<div class="logo flex items-center justify-center text-white">
					<NuxtLink to="/" class="text-white no-underline">
						<img :src="logoSrc" alt="" class="w-full max-w-30 md:max-w-40 h-auto" />
					</NuxtLink>
				</div>
				<ul class="flex gap-x-0 md:gap-x-2 items-center justify-between">
					<li v-for="link in navLinks" :key="link.title" class="m-0">
						<NuxtLink :to="link.url" class="text-white text-xs md:text-sm tracking-wider font-medium bg-transparent hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors duration-300 ease-in-out px-3 py-2 md:px-5 md:py-3 rounded-4xl">{{ link.title }}</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<style scoped></style>
