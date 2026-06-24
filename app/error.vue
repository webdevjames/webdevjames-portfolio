<script setup lang="ts">
	import Footer from "./components/Footer.vue";

	defineProps({
		error: Object,
	});

	const clearErrorAndGoHome = () => clearError({ redirect: "/" });
</script>
<template>
	<Navbar />
	<section class="section-main contained section-intro">
		<div class="container">
			<div class="container-inner text-left">
				<h1>404</h1>
			</div>
		</div>
	</section>
	<section class="section-main contained">
		<div class="container">
			<div class="container-inner text-left pb-0!">
				<p>Oops! I can't find that page. Please navigate back to the Home page below.</p>
				<div class="button-wrap">
					<NuxtLink @click="clearErrorAndGoHome" to="/contact" target="_self" class="button">
						<span>Back to Home Page</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<Footer />
</template>
<style scoped></style>
