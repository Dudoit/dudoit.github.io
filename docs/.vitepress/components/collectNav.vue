<template>
  <div class="nav-wrapper">
    <h2>{{ navs.title }}</h2>
    <div class="nav-list">
      <div v-for="nav in navs.websites" :key="nav.title" class="nav-item">
        <div class="nav-info">
          <img :src="nav.iconUrl" :alt="nav.title">
          <div>
            <slot name="title" :link="nav.link" :title="nav.title"></slot>
            <p>{{ nav.describe }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const prop = defineProps(["navs"])
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1152px;
  margin: 60px auto;
}

.nav-wrapper h2 {
  line-height: 36px;
  font-size: 24px;
  font-weight: 500;
  white-space: pre-wrap;
  color: rgba(60, 60, 67, 0.75);
  margin: 10px 0;
}

.nav-list {
  display: flex;
  flex-wrap: wrap;
}

.nav-item {
  width: calc(100% / 4);
  padding: 8px;
}

.nav-info {
  display: flex;
  padding: 24px;
  height: 100%;
  border-radius: 12px;
  background-color: #f6f6f7;
}

.nav-info img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 48px;
  height: 48px;
  font-size: 24px;
  margin-right: 10px;
}

.nav-info h3 {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.nav-info p {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(60, 60, 67, 0.75);
}
</style>