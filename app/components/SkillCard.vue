<script setup lang="ts">
	// 1. Update your TypeScript interface to accept the array of objects
	interface SkillItem {
		name: string;
		icon: string;
	}

	defineProps<{
		title: string;
		items: SkillItem[];
	}>();
</script>
<template>
	<div class="break-inside-avoid border-2 border-blue-500 rounded-lg overflow-hidden mb-10 last:mb-0! h-fit print:border-black print:mb-6 print:border-0 print:overflow-visible print:rounded-none print:last:mb-6!">
		<h5 class="bg-blue-500 text-white font-bold py-2 px-5 text-base print:bg-transparent print:text-black! print:p-0 print:border-b print:border-black print:text-sm">{{ title }}:</h5>

		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 px-5 py-4 list-none text-gray-300 print:text-black print:pb-1 print:px-1 print:py-0! print:grid-cols-3!">
			<li v-for="item in items" :key="item.name" class="flex items-center text-sm tracking-wide print:before:content-['•'] print:before:mr-1 print:text-xs print:m-0! print:p-0! print:items-start! print:tracking-normal!">
				<Icon :name="item.icon" class="max-w-[30px] text-xl text-blue-400 mr-2 shrink-0 print:hidden!" />
				<span class="text-white print:text-black!">{{ item.name }}</span>
			</li>
		</ul>
	</div>
</template>
