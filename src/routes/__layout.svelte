<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />
<div class="content-container">
	<slot />
</div>
<Footer />

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/proportions.scss';

	:global {
		@import '../styles/classes.scss';

		:root {
			font-family: 'Gellix', 'Helvetica Neue', sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-size: 16px;
		}

		html,
		body,
		#svelte {
			width: 100vw;
			height: 100vh;
			margin: 0;
			padding: 0;
		}

		body {
			color: $text-primary;
			background-color: $background-dark;

			overflow: hidden scroll;
		}

		section {
			height: 100vh;
			width: calc(100vw - 2 * #{$page-border});

			&:first-child {
				height: calc(100vh - 2 * #{$header-total-h});
				padding-bottom: $header-total-h;
			}
		}

		a {
			text-decoration: none;
			color: $text-primary;
		}

		a:hover {
			cursor: pointer;
		}

		// Custom selection
		*::selection {
			background: $primary;
			color: $text-primary;
		}

		*::-moz-selection {
			background: $primary;
			color: $text-primary;
		}

		// Custom scrollbar
		/* Works on Firefox */
		* {
			scrollbar-width: thin;
			scrollbar-color: $scrollbar-foreground $scrollbar-background;
		}

		/* Works on Chrome, Edge, and Safari */
		*::-webkit-scrollbar {
			width: thin;
		}

		*::-webkit-scrollbar-track {
			background: $scrollbar-background;
		}

		*::-webkit-scrollbar-thumb {
			background-color: $scrollbar-foreground;
			border-radius: 20px;
			border: 3px solid $scrollbar-background;
		}
	}

	.content-container {
		padding: 0 $page-border $page-padding-bottom;
	}
</style>
