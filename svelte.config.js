import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		files: {
			assets: 'public/'
		}
	},

	preprocess: sveltePreprocess()
};

export default config;
