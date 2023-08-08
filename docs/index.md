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
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

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
</script>

<collectNav :type="1" />
<collectNav :type="2" />
<collectNav :type="0" />