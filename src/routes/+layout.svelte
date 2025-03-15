<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { browser } from '$app/environment'
	import '$lib/i18n' // Import to initialize. Important :)
	import { locale, waitLocale } from 'svelte-i18n'
	import type { LayoutLoad } from './$types'
	import favicon32 from '$lib/assets/favicon-32x32.png';
	import favicon16 from '$lib/assets/favicon-16x16.png';
	import appleTouch from '$lib/assets/apple-touch-icon.png';
	import manifest from '$lib/assets/site.webmanifest'

	export const load: LayoutLoad = async () => {
		if (browser) {
			locale.set(window.navigator.language)
		}
		await waitLocale()
	}
	let { children } = $props();

	load()
</script>

<svelte:head>
	<title>Home - SMRT Esports</title>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouch}>
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32}>
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16}>
	<link rel="manifest" href={manifest}>
</svelte:head>
<Header />
{@render children()}
<Footer />