---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: dudoit 的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "dudoit"
  text: "欢迎来到导航清单"
---

<!-- 自定义组件 -->
<script setup>
import collectNav from './.vitepress/components/collectNav.vue';
import { blogNav } from './.vitepress/components/config.ts';

const openNav = (link) => location.href = link
</script>

<collectNav v-for="navs in blogNav" :key="navs.title" :navs="navs" #title="titleProps">
  <h3 @click="openNav(titleProps.link)" class="slot-nav-title">{{ titleProps.title }}</h3>
</collectNav>