import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dudoit-blog",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/avatar.png',
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
