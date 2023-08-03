# 组件间通信

## 父组件向子组件传递数据

::: code-group

```Vue [parent.vue]
<template>
  <child name="dudoit" />
</template>
```

```Vue [child.vue]
<script setup>
const props = defineProps({
  name: String
})
</script>
```

:::

## 子组件向父组件传递数据

::: code-group

```Vue [parent.vue]
<template>
  <child @change="childChange" />
</template>
```

```Vue [child.vue]
<script setup>
const emit = defineEmits(['change', 'delete'])
</script>
```

:::

## 依赖注入（根组件向子组件传递数据）

一个父组件相对于其所有的后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。

`provide` 提供依赖；`inject` 注入依赖

![依赖注入](https://cn.vuejs.org/assets/provide-inject.3e0505e4.png)

### Provide

为组件后代提供数据，使用 `provide()` 函数：

`provide()` 接收两个参数：**注入的 key**（字符串或者 symbol）；**注入的值**。

```Vue
<script setup>
import { provide } from 'vue'

// 提供静态值
provide('name', '张三')

// 提供响应式的值
const count = ref(0)
provide('count', count)
</script>
```

### Inject

注入上层组件提供的数据，使用 `inject()` 函数：

**第一个参数是注入的 key：** Vue 会遍历父组件链，通过匹配 key 来确定所提供的值。如果父组件链上多个组件对同一个 key 提供了值，那么**离得更近**的组件将会“覆盖”链上更远的组件所提供的值。如果没有能通过 key 匹配到值，inject() 将返回 undefined，除非**提供了默认值**。

**第二个参数是可选的：** 即在没有匹配到 key 时使用的默认值。

```Vue
<script setup>
import { inject } from 'vue'

// 注入不含默认值的静态值
const foo = inject('foo')

// 注入响应式的值
const count = inject('count')

// 通过 Symbol 类型的 key 注入
const foo2 = inject(fooSymbol)

// 注入一个值，若为空则使用提供的默认值
const bar = inject('foo', 'default value')

// 注入一个值，若为空则使用提供的函数类型的默认值
const fn = inject('function', () => {})

// 注入一个值，若为空则使用提供的工厂函数；第三个参数表示默认值应该被当作一个工厂函数。
const baz = inject('factory', () => new ExpensiveObject(), true)
</script>
```

### 和响应式数据配合使用

当提供 / 注入响应式的数据时，**建议尽可能将任何对响应式状态的变更都保持在供给方组件中**。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。

有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数：

::: code-group

```Vue [parent.vue]
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
```

```Vue [child.vue]
<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

:::

如果想确保提供的数据不能被注入方的组件更改，可以使用 `readonly()` 包装提供的值。

```Vue
<script setup>
import { ref, provide, readonly } from 'vue'

const count = ref(0)
provide('read-only-count', readonly(count))
</script>
```

## EventBus 事件总线

安装 Mitt

```Bash
npm install mitt
```

使用 Mitt：

::: code-group

```Vue [parent.vue]
<script setup>
import emitter from './eventBus'

emitter.on("get", (info) => {
  console.log(info)
})

// 监听所有事件
emitter.on("*", (type, info) => {
  console.log(info)
})
</script>
```

```Vue [child.vue]
<script setup>
import emitter from './eventBus'
emitter.emit("get", { name: '111' })
</script>
```

:::