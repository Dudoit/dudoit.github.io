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
  tagline: 弗拉基米尔 | 乐芙兰
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
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🧊
    title: WEB 前端
    details: 在家乡生活的程序员
  - icon: 🧊
    title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
