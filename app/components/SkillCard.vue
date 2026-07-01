<script setup lang="ts">
	defineProps<{
		title: string;
		items: string[];
	}>();
</script>
<template>
	<div class="break-inside-avoid w-full border-2 border-blue-500 rounded-lg overflow-hidden h-fit print:border-black mb-6">
		<h5 class="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold py-2 px-5 text-base print:bg-transparent print:text-black print:p-0 print:border-b print:border-black print:text-sm">{{ title }}</h5>
		<ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1.5 px-5 py-4 list-none text-white print:text-black print:py-2 print:px-2">
			<li v-for="item in items" :key="item" class="text-sm tracking-wide before:content-['•'] before:text-blue-500 before:mr-2 print:before:text-black print:text-xs">{{ item }}</li>
		</ul>
	</div>
</template>
