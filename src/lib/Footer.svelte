<script>
	import { faXTwitter, faBluesky, faInstagram, faMastodon, faThreads } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<footer class="bg-secondary text-highlight py-8">
	<div class="container mx-auto text-center">
		<h2 class="text-xl font-heading">Follow Us</h2>
		<p class="mt-2 text-sm font-body">
			Stay connected with us through our social media.
		</p>
		<div class="flex justify-center gap-4 mt-4">
			<!-- Twitter -->
			<a
				href="https://twitter.com/smrtesports"
				target="_blank"
				rel="noopener noreferrer"
				class="text-highlight hover:text-accent"
			>
				<FontAwesomeIcon icon={faXTwitter} class="text-2xl" />
			</a>

<!--			&lt;!&ndash; Facebook &ndash;&gt;-->
<!--			<a-->
<!--				href="https://facebook.com"-->
<!--				target="_blank"-->
<!--				rel="noopener noreferrer"-->
<!--				class="text-highlight hover:text-accent"-->
<!--			>-->
<!--				<FontAwesomeIcon icon={faBluesky} class="text-2xl" />-->
<!--			</a>-->

<!--			&lt;!&ndash; Instagram &ndash;&gt;-->
<!--			<a-->
<!--				href="https://instagram.com"-->
<!--				target="_blank"-->
<!--				rel="noopener noreferrer"-->
<!--				class="text-highlight hover:text-accent"-->
<!--			>-->
<!--				<FontAwesomeIcon icon={faInstagram} class="text-2xl" />-->
<!--			</a>-->

<!--			&lt;!&ndash; LinkedIn &ndash;&gt;-->
<!--			<a-->
<!--				href="https://linkedin.com"-->
<!--				target="_blank"-->
<!--				rel="noopener noreferrer"-->
<!--				class="text-highlight hover:text-accent"-->
<!--			>-->
<!--				<FontAwesomeIcon icon={faMastodon} class="text-2xl" />-->
<!--			</a>-->

<!--			<a-->
<!--				href="https://linkedin.com"-->
<!--				target="_blank"-->
<!--				rel="noopener noreferrer"-->
<!--				class="text-highlight hover:text-accent"-->
<!--			>-->
<!--				<FontAwesomeIcon icon={faThreads} class="text-2xl" />-->
<!--			</a>-->
		</div>

		<p class="mt-8 text-sm font-body">
			&copy; {new Date().getFullYear()} SMRT eSports. All rights reserved.
		</p>
	</div>
</footer>
