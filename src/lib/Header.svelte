<script>
	import logo from '$lib/assets/smrt.png';
</script>

<div class="navigation-header">
	<nav>
		<ul>
			<li><img src={logo} alt="SMRT Esports"></li>
			<li><a href="/">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#mission">Mission</a></li>
			<li><a href="#gallery">Gallery</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</div>

<style>
	.navigation-header {
			@apply max-w-screen-md;
			@apply my-3;
			@apply mx-auto;
			@apply sticky;
			@apply top-1;
			@apply z-50;
			@apply left-1/2;
			@apply -translate-x-1/2;
			@apply bg-background;
			@apply px-5;
			@apply rounded-md;
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