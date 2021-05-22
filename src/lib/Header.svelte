<script>
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import Logo from '$lib/Logo.svelte';

	const navItems = [
		{
			title: 'Über uns',
			href: '/about'
		},
		{
			title: 'Branding',
			href: '/branding'
		},
		{
			title: 'Rechtliches',
			href: '/rights'
		},
		{
			title: 'Entwicklungsversion',
			href: '/dev'
		}
	];

	let location;

	const unsubscribe = page.subscribe((data) => {
		location = data.path;
	});

	onDestroy(unsubscribe);
</script>

<header>
	<span class="item">
		<Logo />
	</span>
	{#each navItems as item}
		<a href={item.href} class="item link" class:active={location === item.href}>
			{item.title}
		</a>
	{/each}
</header>

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/proportions.scss';

	header {
		display: flex;
		align-items: center;

		height: $header-h;
		line-height: $header-h;
		padding: $header-padding-h $page-border;

		.item {
			margin-right: 2rem;

			&:last-child {
				margin-right: 0;
			}
		}

		.link {
			font-size: 1.25rem;
			font-weight: 600;

			color: $text-light;
			padding: 1rem;
			border-radius: 5px;

			transition: all 0.2s ease;

			&:hover {
				color: $primary;
			}

			&.active {
				color: $primary;
			}
		}
	}
</style>
