import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			prerender: {
				entries: ['*']
			}
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : '',
		},
	},
	preprocess: vitePreprocess(),
	alias: {
		$lib: './src/lib'
	}
};

export default config;
