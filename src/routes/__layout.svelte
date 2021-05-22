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
		:root {
			font-family: 'Gellix', 'Helvetica Neue', sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-size: 16px;
		}

		*::selection {
			background: $primary;
			color: $text-primary;
		}

		*::-moz-selection {
			background: $primary;
			color: $text-primary;
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

		a {
			text-decoration: none;
			color: $text-primary;
		}

		a:hover {
			cursor: pointer;
		}

		// Global classes
		.t-grey {
			color: $text-secondary;
		}

		.t-red {
			color: $primary;
		}

		.t-white {
			color: $text-primary;
		}

		.title-container {
			height: calc(100vh - 2 * #{$header-total-h});
			margin-bottom: $header-total-h;

			display: flex;
			flex-direction: column;
			justify-content: center;

			.subtitle {
				font-size: 38px;
				font-weight: 600;
				color: $text-secondary;
			}

			.title {
				display: inline-flex;

				margin-top: -25px;
				margin-left: -5px;
				font-size: 150px;
				font-weight: bold;

				.dot {
					margin-right: 2rem;
				}
			}
		}

		.section {
			display: flex;
			flex-direction: column;

			font-weight: bold;

			margin-top: 3rem;

			&:first-child {
				margin-top: 0;
			}

			.s-title-container {
				display: flex;
				flex-direction: column;

				.subtitle {
					font-size: 28px;
					font-weight: bold;
				}

				.title {
					margin-top: -5px;

					font-size: 45px;
					font-weight: bold;
				}
			}

			.text {
				margin-top: 30px;
				margin-left: 100px;

				width: calc(100vw / 2 - 4rem);

				font-size: 20px;
				font-weight: 600;

				.t-red {
					font-weight: bold;
				}

				.paragraph {
					color: $text-secondary;
					margin-top: 50px;

					&:first-child {
						margin-top: 0;
					}
				}
			}
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
