<script>
	import { onDestroy, onMount } from 'svelte';

	export let words = [];
	$: currentWord = words[0];
	let output = '';
	let letterCount = 0;
	let index = 0;

	let cursorAnimation = false;

	let typeId;
	let eraseId;
	let waitId;
	let tEraseId;

	const start = () => {
		const awaitErasing = () => {
			cursorAnimation = true;
			waitId = setTimeout(() => {
				cursorAnimation = false;
				startErasing(() => {
					selectNextWord();
					startTyping(awaitErasing);
				});
			}, 2000);
		};

		startTyping(awaitErasing);
	};

	const stop = () => {
		clearInterval(typeId);
		clearInterval(eraseId);
		clearTimeout(waitId);
		clearTimeout(tEraseId);
	};

	const selectNextWord = () => {
		if (words.length === ++index) index = 0;
		currentWord = words[index];
	};

	const startTyping = (callback, delay = 120) => {
		typeId = setInterval(() => {
			if (letterCount === currentWord.length) {
				callback.call();
				clearInterval(typeId);
				return;
			}
			type();
		}, delay);
	};

	const startErasing = (callback, delay = 30, firstEraseDelay = 330) => {
		erase();
		tEraseId = setTimeout(() => {
			eraseId = setInterval(() => {
				if (letterCount === 0) {
					callback.call();
					clearInterval(eraseId);
					return;
				}
				erase();
			}, delay);
		}, firstEraseDelay);
	};

	const type = () => {
		output = currentWord.slice(0, ++letterCount);
	};

	const erase = () => {
		output = currentWord.slice(0, --letterCount);
	};

	onMount(start);
	onDestroy(stop);
</script>

<span class={'typewriter ' + $$props.class}>
	<span class="content">
		{output}
	</span>
	<span class="cursor" class:animate={cursorAnimation} />
</span>

<style lang="scss">
	.typewriter {
		height: 100%;

		display: inline-flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;

		.content {
			margin-right: 10px;
		}

		.cursor {
			padding: 4px 50px;
			margin-bottom: 25px;
			background-color: white;

			opacity: 1;
			transition: animation 0.2s ease;

			&.animate {
				animation: blink 0.8s ease-in infinite;
			}
		}
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
