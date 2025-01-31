<script lang="ts">
	import axios from 'axios';

	let today: string = new Date().toDateString();

	let name: string = "";
	let email: string = "";
	let message: string = "";
	let formSuccess: boolean = false;

	const submitForm = (): void => {
		axios
			.post(
				"https://formcarry.com/s/azgirQ7lLtr",
				{ name, email, message },
				{ headers: { Accept: "application/json" } },
			)
			.then((): void => {
					formSuccess = true;
					setTimeout(() => {
						formSuccess = false;
					}, 5000);
			})
			.catch((err) => {
				console.log(err);
			});
	};
</script>

<div class="bg-background text-text font-body min-h-screen">
	<!-- Header/Hero Section -->
	<header class="bg-primary text-highlight text-center py-12">
		<h1 class="text-5xl font-heading">Welcome to Our Page</h1>
		<p class="mt-4 text-xl font-subheading">Creating memorable experiences</p>
	</header>

	<!-- About Section -->
	<section class="py-12 px-6">
		<h2 class="text-3xl font-heading text-accent">About Us</h2>
		<p class="mt-4 text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo
			eros a odio consectetur, nec interdum massa dictum. Donec viverra nisl nec
			dui malesuada, non placerat mauris mollis.
		</p>
	</section>

	<!-- Calendar Section -->
	<section class="py-12 px-6 bg-secondary text-highlight">
		<h2 class="text-3xl font-heading">Upcoming Events</h2>
		<div class="mt-4 grid gap-4">
			<div class="bg-accent text-background p-4 rounded">
				<p><strong>Event Name:</strong> Placeholder Event 1</p>
				<p><strong>Date:</strong> {today}</p>
			</div>
			<div class="bg-accent text-background p-4 rounded">
				<p><strong>Event Name:</strong> Placeholder Event 2</p>
				<p><strong>Date:</strong> {today}</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="py-12 px-6">
		<h2 class="text-3xl font-heading text-accent">Contact Us</h2>
		<form class="mt-6 grid gap-4" on:submit|preventDefault={submitForm}>
			<input
				class="p-3 rounded bg-highlight text-background"
				type="text"
				placeholder="Your Name"
			/>
			<input
				class="p-3 rounded bg-highlight text-background"
				type="email"
				placeholder="Your Email"
			/>
			<textarea
				class="p-3 rounded bg-highlight text-background"
				placeholder="Your Message"
				rows="5"
			></textarea>
			<button
				type="submit"
				class="bg-primary text-highlight py-2 px-4 rounded font-subheading"
			>
				Send Message
			</button>
		</form>
	</section>

	{#if formSuccess}
		<div class="bg-primary text-highlight text-center py-12">
			<p class="text-xl font-subheading">
				Your message has been sent successfully!
			</p>
		</div>
	{/if}
</div>