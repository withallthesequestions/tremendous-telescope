// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://tremendous-telescope-six.vercel.app',
	base: 'https://tremendous-telescope-six.vercel.app',
	integrations: [mdx()],
});
