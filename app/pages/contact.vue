<script setup lang="ts">
	import { reactive, ref } from "vue";

	const form = reactive({
		firstName: "",
		lastName: "",
		company: "",
		role: "",
		email: "",
		phone: "",
		city: "",
		state: "",
		message: "",
	});

	const isSubmitting = ref(false);
	const submissionStatus = ref<{ type: "success" | "error" | null; message: string }>({
		type: null,
		message: "",
	});

	const US_STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

	async function handleFormSubmit() {
		isSubmitting.value = true;
		submissionStatus.value = { type: null, message: "" };

		try {
			await $fetch("/api/contact", {
				method: "POST",
				body: form,
			});

			submissionStatus.value = {
				type: "success",
				message: "Thank you! Your message has been sent successfully.",
			};

			// Clear the form after a successful submission
			Object.keys(form).forEach((key) => (form[key as keyof typeof form] = ""));
		} catch (error) {
			submissionStatus.value = {
				type: "error",
				message: "Oops! Something went wrong. Please check your fields and try again.",
			};
		} finally {
			isSubmitting.value = false;
		}
	}
</script>
<template>
	<section class="section-main contained section-intro">
		<div class="container">
			<div class="container-inner text-left">
				<p class="subheading">Contact</p>
				<h1>Hire me to be a part of your growing team</h1>
				<p>Let's work together to enhance your company's digital offerings (and maximize your revenue in the process). Whether you have a seasoned Developer team of 20 or are a start-up looking to build your team, I have the right knowledge and positive attitude to integrate well into any organization.</p>
				<div class="button-wrap multi">
					<NuxtLink to="#reach-out" class="button alt">
						<span>Reach Out Now</span>
					</NuxtLink>
					<NuxtLink to="/resume-james-frazier.pdf" external target="_blank" class="button alt">
						<span>View Resume</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
	<section id="reach-out" class="section-main scroll-mt-25 md:scroll-mt-20">
		<div class="container">
			<div class="container-inner">
				<form @submit.prevent="handleFormSubmit" class="space-y-6">
					<!-- Grid layout for side-by-side elements on desktop -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">First Name*</label>
							<input v-model="form.firstName" type="text" required class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">Last Name*</label>
							<input v-model="form.lastName" type="text" required class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">Company</label>
							<input v-model="form.company" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">Role</label>
							<input v-model="form.role" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">Email Address*</label>
							<input v-model="form.email" type="email" required class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">Phone</label>
							<input v-model="form.phone" type="tel" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">City*</label>
							<input v-model="form.city" type="text" required class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight" />
						</div>
						<div>
							<label class="block text-sm font-medium mb-2 text-slate-300">State*</label>
							<select v-model="form.state" required class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight appearance-none">
								<option value="" disabled selected>Select your state</option>
								<option v-for="state in US_STATES" :key="state" :value="state">{{ state }}</option>
							</select>
						</div>
					</div>

					<div>
						<label class="block text-sm font-medium mb-2 text-slate-300">Message</label>
						<textarea v-model="form.message" rows="5" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-slate-600 font-extralight resize-none"></textarea>
					</div>

					<!-- Submission Feedback UI -->
					<div v-if="submissionStatus.type" :class="['p-4 rounded-lg text-sm', submissionStatus.type === 'success' ? 'bg-white/10 border border-blue-500 text-white' : 'bg-red-500/50 border border-red-500 text-white']">
						{{ submissionStatus.message }}
					</div>

					<div class="text-center button-wrap">
						<button type="submit" :disabled="isSubmitting" class="button">
							<span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>
<style scoped></style>
