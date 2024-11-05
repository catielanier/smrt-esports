<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Home - SMRT Esports</title>
</svelte:head>
<Header />
{@render children()}
