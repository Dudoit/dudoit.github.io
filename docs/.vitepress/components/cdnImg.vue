<template>
  <img class="cdn-img" :src="imgUrl" :alt="alt">
</template>

<script lang="ts" setup>
const prop = defineProps(["src", "alt"])
const imgUrl = "https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.3/blog/images/" + prop.src + ".png"
</script>

<style>
.cdn-img {
  width: 100%;
}
</style>