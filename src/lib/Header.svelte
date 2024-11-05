<script>
	import logo from '$lib/assets/smrt.png';
</script>

<div class="navigation-header">
	<nav>
		<ul>
			<li><img src={logo} alt="SMRT Esports"></li>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</div>

<style>
	.navigation-header {
			@apply max-w-screen-md;
			@apply my-3;
			@apply mx-auto;
	}
	.navigation-header nav img {
			@apply w-24 h-16;
	}
	.navigation-header nav ul {
			@apply flex;
			@apply justify-between;
			@apply items-center;
			@apply uppercase;
			@apply font-heading;
			@apply font-bold;
	}
</style>