import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dudoit-blog",
  description: "A VitePress Site",
  themeConfig: {
    logo: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c94f4f5c114a4bf4b5f40ae5a8d6b805~tplv-k3u1fbpfcp-no-mark:230:230:230:0.awebp',
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
