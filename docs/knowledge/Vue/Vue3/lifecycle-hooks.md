# 生命周期

`onMounted`、`onUpdated`、`onUnmounted`、`onBeforeMount`、`onBeforeUpdate`、`onBeforeUnmount`、`onActivated`、`onDeactivated` 钩子在服务器端渲染期间不会被调用

## onMounted

注册一个回调函数，在组件挂载完成后执行

```Vue
<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  el.value // <div>
})
</script>

<template>
  <div ref="el"></div>
</template>
```

## onUpdated

注册一个回调函数，在组件<span class="blue-text">因为响应式状态变更而更新其 DOM 树之后</span>调用

父组件的更新钩子将在其子组件的更新钩子之后调用

::: warning
不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！
:::

```Vue
<script setup>
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() => {
  // 文本内容应该与当前的 `count.value` 一致
  console.log(document.getElementById('count').textContent)
})
</script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>
```

## onUnmounted

注册一个回调函数，在组件实例被卸载之后调用

**可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接**

```Vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    // ...
  })
})

onUnmounted(() => clearInterval(intervalId))
</script>
```

## onBeforeMount

注册一个钩子，在组件被挂载之前被调用

当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程

## onBeforeUpdate

注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用

这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。在这个钩子中更改状态也是安全的

## onBeforeUnmount

注册一个钩子，在组件实例被卸载之前调用

当这个钩子被调用时，组件实例依然还保有全部的功能

## onActivated

注册一个回调函数，若组件实例是 `<KeepAlive>` 缓存树的一部分，组件被**插入**到 DOM 中时调用

## onDeactivated

注册一个回调函数，若组件实例是 `<KeepAlive>` 缓存树的一部分，组件从 DOM 中被**移除**时调用