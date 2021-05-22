<script>
	import BergflixIconS from '../resources/bergflix-short.png';
	import BergflixIconL from '../resources/bergflix-long.png';
</script>

<section class="title-container">
	<span class="subtitle t-grey">Die "FTF"-Redaktion präsentiert</span>
	<div class="title t-white">
		<span class="t-white">Bergflix</span>
		<span class="dot t-red">. Branding</span>
	</div>
</section>
<section>
	<div class="part">
		<div class="s-title-container">
			<span class="subtitle t-white">Unsere Brand</span>
			<span class="title t-red">Nichts offizielles, aber dennoch wichtig.</span>
		</div>
		<div class="text">
			<div class="paragraph">
				Bergflix ist kein angemeldetes Unternehmen, geschweige irgendeine offizielle Organisation.
				Dennoch haben wir für uns einen speziellen
				<span class="t-red">”</span><span class="t-white">Brand-Kodex</span><span class="t-red"
					>”</span
				>
				geschaffen, welcher im Verbund mit dem Namen Bergflix möglichst beachtet werden sollte.
			</div>
		</div>
	</div>
	<div class="part colors">
		<div class="s-title-container">
			<span class="subtitle t-white">
				Das ”Bergflix<span class="t-red">.</span>” Logo
			</span>
			<span class="title t-red">Unsere Markenzeichen.</span>
		</div>
		<div class="s-title-container">
			<span class="subtitle t-white">
				Die ”Bergflix<span class="t-red">.</span>” Farben
			</span>
			<span class="title t-red">Unsere Markenfarben.</span>
		</div>
		<div class="logo logo-short">
			<img src={BergflixIconS} alt="Logo Icon" />
		</div>
		<div class="description logo-short">Bergflix Icon</div>
		<div class="logo logo-long">
			<img src={BergflixIconL} alt="Logo Icon" />
		</div>
		<div class="description logo-long">Bergflix Logo</div>
		<div class="color primary">#FF0230</div>
		<div class="description primary">Schickes Rot</div>
		<div class="color white">#FFFFFF</div>
		<div class="description white">Naja, Weiß halt</div>
		<div class="color black">#000000</div>
		<div class="description black">Unsere Seele</div>
		<div class="color dark-grey">#111111</div>
		<div class="description dark-grey">Unsere Seele 2</div>
		<div class="color grey">#6B6B6B</div>
		<div class="description grey">Delorean</div>
		<div class="color light-grey">#989898</div>
		<div class="description light-grey">Plattenbau</div>
	</div>
</section>

<style lang="scss">
	@import '../styles/proportions.scss';
	@import '../styles/colors.scss';

	.colors {
		margin-top: 4rem;

		display: grid;

		$gap: 4rem;
		$first-row-h: auto;
		$box-size: calc((100vw - 2 * #{$page-border} - 5 * #{$gap}) / 6);
		grid-template-columns: repeat(6, $box-size);
		grid-template-rows: $first-row-h repeat(2, $box-size $gap);
		column-gap: $gap;

		.s-title-container {
			margin-bottom: 3rem;

			&:first-child {
				grid-column-start: 1;
				grid-column-end: 4;
			}

			&:nth-child(2) {
				grid-column-start: 4;
				grid-column-end: 7;
			}
		}

		img {
			width: calc(100% - 5rem);
		}

		.logo {
			width: 100%;

			display: grid;
			place-items: center;

			background-color: $background;

			&.logo-short {
				grid-column: 1;
				grid-row: 2;
			}

			&.logo-long {
				grid-column-start: 2;
				grid-column-end: 4;
			}
		}

		.color {
			width: 100%;
			height: 100%;

			display: grid;
			place-items: center;

			font-size: 1.8rem;

			&.primary {
				grid-column: 4;
				grid-row: 2;

				background-color: $primary;
			}

			&.white {
				grid-column: 5;
				grid-row: 2;

				color: black;
				background-color: #ffffff;
			}

			&.black {
				grid-column: 6;
				grid-row: 2;

				border: 2px solid white;

				color: white;
				background-color: $background-dark;
			}

			&.dark-grey {
				grid-column: 4;
				grid-row: 4;

				color: white;
				background-color: $background;
			}

			&.grey {
				grid-column: 5;
				grid-row: 4;

				color: white;
				background-color: $background-light;
			}

			&.light-grey {
				grid-column: 6;
				grid-row: 4;

				color: white;
				background-color: $text-secondary;
			}
		}

		.description {
			font-weight: 500;
			font-size: 1.5rem;
			color: $text-secondary;

			display: grid;
			place-items: center;
			text-align: center;

			margin-bottom: 1.2rem;

			&.logo-short {
				grid-column: 1;
				grid-row: 3;
			}

			&.logo-long {
				grid-column-start: 2;
				grid-column-end: 4;
				grid-row: 3;
			}

			&.primary {
				grid-column: 4;
				grid-row: 3;
			}

			&.white {
				grid-column: 5;
				grid-row: 3;
			}

			&.black {
				grid-column: 6;
				grid-row: 3;
			}

			&.dark-grey {
				grid-column: 4;
				grid-row: 5;
			}

			&.grey {
				grid-column: 5;
				grid-row: 5;
			}

			&.light-grey {
				grid-column: 6;
				grid-row: 5;
			}
		}
	}
</style>
