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
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore static assets
				if (path.startsWith('/static')) {
					return;
				}
				
				// Otherwise, fail the build
				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess(),
	alias: {
		$lib: './src/lib'
	}
};

export default config;
