<script setup lang="ts"></script>
<template>
	<footer class="section-main bg-gray-900 border border-t-gray-800 print:hidden!">
		<div class="container">
			<div class="container-inner text-center pt-8!">
				<p class="text-xs!">&copy; {{ new Date().getFullYear() }} James Frazier (webdevjames) &#183; All images shown are the property of their respective owners. Links to each site can be found on their project page.</p>
				<p class="inline-flex items-center justify-start text-xs! text-white hover:text-blue-500">
					<NuxtLink to="https://www.linkedin.com/in/webdevjames/" target="_blank" class="inline-flex items-center justify-start text-white hover:text-blue-500! transition-colors"><Icon name="mdi:linkedin" /> <span class="ml-1 text-white hover:text-blue-500! transition-colors">Find me on LinkedIn</span></NuxtLink> &nbsp; &#183; &nbsp; <NuxtLink to="/privacy" class="hover:text-blue-500 transition-colors">Privacy Policy</NuxtLink>
				</p>
			</div>
		</div>
	</footer>
</template>
<style scoped></style>
