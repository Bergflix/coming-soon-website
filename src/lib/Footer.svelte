<script>
	import Logo from '$lib/Logo.svelte';
	import Icon from './Icon.svelte';

	const list = [
		{
			title: 'Social Media',
			links: [
				{
					title: 'Hilf uns auf Patreon',
					icon: 'arrow-up',
					href: 'https://patreon.com/bergflix'
				},
				{
					title: 'Joine unserem Discord',
					icon: 'arrow-up',
					href: 'https://discord.gg/9SumTae'
				},
				{
					title: 'Folge uns auf Twitter',
					icon: 'arrow-up',
					href: 'https://twitter.com/BergflixToGo'
				}
			]
		},
		{
			title: 'Bergflix. Brand',
			links: [
				{
					title: 'Bergflix Branding',
					href: '/branding'
				},
				{
					title: 'Bergflix Github',
					icon: 'arrow-up',
					href: 'https://github.com/Bergflix'
				},
				{
					title: 'Bewerbe dich bei uns',
					icon: 'arrow-up',
					href: 'https://discord.com/'
				}
			]
		},
		{
			title: 'Rechtliches & Hilfe',
			links: [
				{
					title: 'Datenschutzerklärung',
					href: '/rights'
				},
				{
					title: 'Cookies & Sicherheit',
					href: '/rights'
				},
				{
					title: 'Impressum',
					href: '/impressum'
				}
			]
		},
		{
			title: 'Mehr von Herr Bergmann',
			links: [
				{
					title: 'Joine der "FTF"-Redaktion',
					icon: 'arrow-up',
					href: 'https://discord.gg/fromthefuture'
				},
				{
					title: 'Das BWL-Kreativteam',
					icon: 'arrow-up',
					href: 'https://bergwerklabs.de/'
				},
				{
					title: 'Unterstütze seine Projekte',
					icon: 'arrow-up',
					href: 'https://patreon.com/HerrBergmann'
				}
			]
		}
	];
</script>

<footer>
	<div class="links">
		<div class="column">
			<Logo />
		</div>
		{#each list as column}
			<div class="column">
				<div class={'title'}>{column.title}</div>
				{#each column.links as entry}
					<a class="action" href={entry.href} target={entry.icon ? '_blank' : ''}>
						<span class="name">
							{entry.title}
						</span>
						{#if entry.icon}
							<Icon name={entry.icon} />
						{/if}
					</a>
				{/each}
			</div>
		{/each}
	</div>
	<div class={'love'}>
		Präsentiert durch die “From The Future”-Redaktion - Programmed with 💔 by
		<span class={'t-white'}>Bergflix</span>
		<span class={'t-red'}>.</span>
	</div>
</footer>

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/proportions.scss';

	footer {
		padding: $footer-padding-h $footer-padding-w;
		border-top: solid $background 2px;

		.links {
			display: grid;
			grid-template-columns: 2fr repeat(4, 3fr);
			place-items: start;

			.column {
				display: grid;
				grid-template-rows: 2rem;
				row-gap: 0.5rem;
				place-items: stretch start;

				color: $text-secondary;
				margin-top: 1rem;

				&:first-child {
					display: inline-block;
					margin-top: 0;
				}

				.title {
					font-size: 1rem;
					font-weight: 600;
				}

				.action {
					color: $text-primary;

					display: flex;
					align-items: flex-end;

					height: 2rem;
					line-height: 2rem;

					transition: color 0.1s ease;

					font-size: 20px;
					font-weight: 700;

					vertical-align: baseline;

					.name {
						margin-right: 0.2rem;
					}

					&:hover {
						color: $primary;
					}
				}
			}
		}

		.love {
			margin-top: 3rem;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			color: $text-secondary;
			font-weight: 500;

			* {
				font-weight: 700;

				&:first-child {
					margin-left: 4px;
				}
			}
		}

		@media screen and (max-width: 800px) {
			.links {
				grid-template-columns: 1fr;

				.column {
					.action {
						height: max-content;
						line-height: max-content;
					}
				}
			}
		}
	}
</style>
