<script lang="ts">
	import axios from 'axios';
	import {t} from 'svelte-i18n'
	// import smrt1 from "$lib/assets/smrt-1.jpg"
	// import smrt2 from '$lib/assets/smrt-2.jpg'
	// import smrt3 from '$lib/assets/smrt-3.jpg'
	// import smrt4 from '$lib/assets/smrt-4.jpg'
	// import smrt5 from '$lib/assets/smrt-5.jpg'
	// import smrt6 from '$lib/assets/smrt-6.jpg'
	// import smrt7 from '$lib/assets/smrt-7.jpg'
	// import smrt8 from '$lib/assets/smrt-8.jpg'
	// const imgArray = [smrt1, smrt2, smrt3, smrt4, smrt5, smrt6, smrt7, smrt8];

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
		<h1 class="text-5xl font-heading">{$t('heading')}</h1>
	</header>

	<!-- About Section -->
	<section class="py-12 px-6" id="about">
		<div class="inner">
			<h2 class="text-3xl font-heading text-accent">{$t('about.title')}</h2>
			{#each $t('about.paragraphs') as item}
				{#if typeof item === 'string'}
					<p class="p-4">{item}</p>
				{:else}
					{#each item?.timeline as timeline}
						<h3 class="p-4 text-accent text-lg font-bold font-heading">{timeline.year}</h3>
						<ul class="list-inside list-disc px-8">
							{#each timeline.achievements as achievement}
								<li>{achievement}</li>
							{/each}
						</ul>
					{/each}
				{/if}
			{/each}
		</div>
	</section>

	<!-- Calendar Section -->
	<section class="py-12 px-6 bg-secondary text-highlight" id="mission">
		<div class="inner">
			<h2 class="text-3xl font-heading">{$t('mission.title')}</h2>
			<div>
				{#each $t('mission.paragraphs') as item}
					<p class="p-4">{item}</p>
				{/each}
			</div>
		</div>
	</section>

<!--	<section class="py-12 px-6" id="gallery">-->
<!--		<Carousel class="inner" autoplay={true} autoplaySpeed={5000}>-->
<!--			{#each imgArray as img}-->
<!--				<img src={img} />-->
<!--			{/each}-->
<!--		</Carousel>-->
<!--	</section>-->

	<!-- Contact Section -->
	<section class="py-12 px-6" id="contact">
		<div class="inner">
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
		</div>
	</section>

	{#if formSuccess}
		<div class="bg-primary text-highlight text-center py-12">
			<p class="text-xl font-subheading">
				Your message has been sent successfully!
			</p>
		</div>
	{/if}
</div>

<style>
	.inner {
			max-width: 1080px;
			margin-left: auto;
			margin-right: auto;
	}
</style>