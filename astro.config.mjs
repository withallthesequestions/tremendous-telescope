// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
	site: 'https://tremendous-telescope-six.vercel.app',
	integrations: [mdx(), pagefind()],
});
