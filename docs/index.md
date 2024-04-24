---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: dudoit 的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "dudoit"
  text: "PINKY SWEAR"
  tagline: A FE Developer Blog
  image:
      src: https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.4/blog/images/home-illustration.png
      alt: home-illustration
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: 🛴 Nav Page
      link: /nav-page

features:
  - icon: 🧊
    title: Past
    details: I miss the past
  - icon: 🧊
    title: WEB 前端
    details: 在家乡生活的程序员
  - icon: 🧊
    title: Forward
    details: At the same time, I also look forward to the future
---

<!-- 自定义组件 -->
<script setup>
import collectNav from './.vitepress/components/collectNav.vue';
import { homeNav } from './.vitepress/components/config.ts';

const openNav = (link) => window.open(link, "_blank")
</script>

<collectNav v-for="navs in homeNav" :key="navs.title" :navs="navs" #title="titleProps">
  <h3 @click="openNav(titleProps.link)" class="slot-nav-title">{{ titleProps.title }}</h3>
</collectNav>
