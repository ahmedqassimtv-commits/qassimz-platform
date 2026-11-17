// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// قَاسِمز — Astro 5 + Tailwind v4 + GSAP + Lenis + Three.js
// base "/" يبقى كما هو حتى يعمل النشر على Cloudflare Pages
// وعلى GitHub Pages عبر --base في أمر البناء إن لزم.
export default defineConfig({
  site: 'https://qassimz.com',
  base: '/',
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
