<script>
	import TypeWriter from '$lib/TypeWriter.svelte';
	import BergiPic from '../resources/tim.png';
	import BergiText from '../resources/tim-t.png';
	import DiscordPic from '../resources/discord.png';
	import DiscordText from '../resources/discord-t.png';
</script>

<section class="title-container">
	<span class="subtitle t-grey">Die "FTF"-Redaktion präsentiert</span>
	<div class="title">
		<span class="t-white">Bergflix</span>
		<span class="dot t-red">.</span>
		<TypeWriter class="t-red" words={['Originals', 'Movies', 'Series', 'Partymode']} />
	</div>
</section>
<section class="info">
	<div class="part">
		<div class="s-title-container">
			<span class="subtitle t-white">Unsere Mission?</span>
			<span class="title t-red">Eine On-Demand Plattform.</span>
		</div>
		<div class="text">
			<div class="paragraph">
				Bergflix ist eine Plattform, gegründet aus dem Kerngedanke eine eigene On-Demand
				Streamingplattform für Kurzfilme und Serien des in die jahregekommenden YouTube Kinderstars <span
					class="t-red">”</span
				>
				<span class="t-white">Herr Bergmann</span>
				<span class="t-red">”</span> zu erschaffen.
			</div>
			<div class="paragraph">
				Unser Dev-Team fand seinem Ursprung im November 2019.
				<div>
					<span class="t-red"> ”</span>
					<span class="t-white">
						Stellt euch mal Bergflix als wirklich richtige Streamingplattform vor...
					</span>
					<span class="t-red">” </span>
				</div>
				Joar, und seitdem arbeiten wir mal mehr mal weniger an dieser Plattform.
			</div>
		</div>
	</div>
	<div class="part">
		<div class="s-title-container">
			<span class="subtitle t-white">Wann ist Bergflix fertig?</span>
			<span class="title t-red">Wenn wir ehrlich sind, wir haben selbst keinen Plan.</span>
		</div>
		<div class="text">
			<div class="paragraph">
				Die Entwicklung von Bergflix dauert wesentlich länger als angenommen. Im Gegensatz zu vielen
				anderen Communityprojekten der “FTF”-Redaktion ist unsere komplette Webseite eine" "
				<span class="t-red">”</span>
				<span class="t-white">In-House Produktion</span>
				<span class="t-red">”</span>.
			</div>
			<div class="paragraph">
				Wir werden uns für die Entwicklung von Bergflix so viel Zeit lassen wie wir benötigen, um
				unsere eigenen Anspruche an die Plattform umsetzten zu können.
			</div>
		</div>
	</div>
	<div class="picture-container tim">
		<span class="picture ">
			<a href="https://www.youtube.com/HerrBergmann" target="_blank">
				<img class="pic" src={BergiPic} alt="TimPic" />
			</a>
			<img class="text" src={BergiText} alt="TimText" />
		</span>
	</div>
	<div class="picture-container discord">
		<span class="picture">
			<img class="text" src={DiscordText} alt="DiscordText" />
			<a href="https://discord.gg/9SumTae" target="_blank">
				<img class="pic" src={DiscordPic} alt="DiscordPic" />
			</a>
		</span>
	</div>
</section>

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/proportions.scss';

	.dot {
		margin-right: 1rem;
	}

	.info {
		display: grid;
		grid-template-columns: auto 40rem;
		place-items: start start;

		height: 100%;

		.section {
			grid-column: 1;
		}

		.picture-container {
			display: grid;
			place-items: center start;
			height: 100%;
			width: 100%;

			grid-column: 2;

			.picture {
				position: relative;

				.pic {
					z-index: 1;
				}

				.text {
					z-index: 2;
				}
			}

			&.tim {
				grid-row: 1;

				.picture {
					.pic {
						border-radius: 4px;
						width: 250px;

						transition: transform 0.2s ease-out;

						&:hover {
							cursor: pointer;
							transition: transform 0.5s ease;
							transform: scale(1.05);
						}
					}

					.text {
						position: absolute;
						top: 25px;
						left: 11rem;
						width: 330px;
					}
				}
			}

			&.discord {
				grid-row: 2;

				.picture {
					place-self: end center;

					.pic {
						width: 400px;

						transition: transform 0.2s ease-out;

						&:hover {
							cursor: pointer;
							transition: transform 0.5s ease;
							transform: scale(1.05);
						}
					}

					.text {
						position: absolute;
						top: -5.6rem;
						left: 4em;
						width: 400px;
					}
				}
			}
		}
	}
</style>
