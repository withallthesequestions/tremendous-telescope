// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://withallthesequestions.github.io',
	base: '/tremendous-telescope',
	integrations: [mdx()],
});
