<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Home - SMRT Esports</title>
</svelte:head>
<Header />
{@render children()}
<Footer />