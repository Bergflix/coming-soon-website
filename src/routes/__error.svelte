<div class="error">
	<span class="title">404</span>
	<span class="subtitle">Ooops!</span>
</div>

<style lang="scss">
	@import '../styles/proportions.scss';

	.error {
		height: calc(100vh - 2 * #{$header-total-h});
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.title {
			font-size: 4rem;
			font-weight: bold;
		}

		.subtitle {
			font-size: 2rem;
		}
	}
</style>
