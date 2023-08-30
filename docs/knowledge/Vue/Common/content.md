## 指令

### 🥠 v-model

在表单元素或组件上创建双向绑定

- 绑定元素

  1. `<input>`
  2. `<textarea>`
  3. `<select>`
  4. `components`

- 修饰符

  1. `.lazy`：将默认监听 input 事件改为 change 事件
  2. `.number`：将输出的字符串转为 Number 类型
  3. `.trim`：删除内容前后的空格

### 🥠 v-solt

用于声明 具名插槽 或 作用域插槽

- 缩写：`#`

- 绑定元素：

  1. `<template>`
  2. `components`

- 示例：

  ```Vue
  <!-- 具名插槽 -->
  <BaseLayout>
    <template #header>
      Header content
    </template>

    <template #default>
      Default slot content
    </template>
  </BaseLayout>

  <!-- 接收 prop 的具名插槽 -->
  <InfiniteScroll>
    <template #item="slotProps">
      <div class="item">
        {{ slotProps.item.text }}
      </div>
    </template>
  </InfiniteScroll>

  <!-- 接收 prop 的默认插槽，并解构 -->
  <Mouse v-slot="{ x, y }">
    Mouse position: {{ x }}, {{ y }}
  </Mouse>
  ```

## 组件

### `<Transition>`

为**单个**元素或组件提供动画过渡效果

| 属性 | 说明                                                                           | 类型    | 可选值 | 默认值 |
| ---- | ------------------------------------------------------------------------------ | ------- | ------ | ------ |
| name | 自动生成过渡 CSS class 名，例如 `name: 'fade'` 自动扩展为 `.fade-enter-active` | string  | -      | -      |
| css  | 是否应用 CSS 过渡 class                                                        | boolean | -      | `true` |
| type | 等待的过渡事件类型                                                             | string  | transition、animation | -      |

将进入和离开动画通过默认插槽传递给它的元素或组件上，进入和离开的条件：

- `v-if` 或者 `v-show` 触发
- `<component>` 动态组件
- 改变特殊 `key` 属性

### `<KeepAlive>`

`<KeepAlive>` 包裹动态组件时，会缓存不活跃的组件实例，而不是销毁它们。

当一个组件在 `<KeepAlive>` 中被切换时，它的 `activated` 和 `deactivated` 生命周期钩子将被调用，用来替代 `mounted` 和 `unmounted。`

```TypeScript
interface KeepAliveProps {
  // 只有与 `include` 名称，匹配的组件才会被缓存。
  include?: MatchPattern
  // 任何名称与 `exclude`，匹配的组件都不会被缓存。
  exclude?: MatchPattern
  // 最多可以缓存多少组件实例。
  max?: number | string
}

type MatchPattern = string | RegExp | (string | RegExp)[]
```

```Vue
<template>
  <KeepAlive>
    <component :is="view" />
  </KeepAlive>
</template>
```

使用 `include` / `exclude`：

```Vue
<template>
  <!-- 用逗号分隔的字符串 -->
  <KeepAlive include="a,b">
    <component :is="view" />
  </KeepAlive>

  <!-- 正则表达式 (使用 `v-bind`) -->
  <KeepAlive :include="/a|b/">
    <component :is="view" />
  </KeepAlive>

  <!-- 数组 (使用 `v-bind`) -->
  <KeepAlive :include="['a', 'b']">
    <component :is="view" />
  </KeepAlive>
</template>
```

## 特殊元素

## `<component>`

结合 `:is` 渲染**动态组件**或元素的组件

is 的值可以是字符串：HTML 标签名也可以是组件的注册名；is 也可以直接绑定到组件的定义。

::: code-group

```Vue [vue3.vue]
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <!-- name/year/dataUpdate 属性和方法会绑定在所有组件上 -->
  <component
    :is="Math.random() > 0.5 ? Foo : Bar"
    name="dudoit"
    :year="currentYear"
    @dataUpdate="update"
  />
</template>
```

```Vue [vue2.vue]
<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: { Foo, Bar },
  data() {
    return {
      view: 'Foo'
    }
  }
}
</script>

<template>
  <component :is="view" />
</template>
```

:::

渲染 HTML 元素：

```Vue
<component :is="href ? 'a' : 'span'"></component>
```

## `<solt>`

插槽内容的出口

```JavaScript
interface SlotProps {
  /**
   * 任何传递给 <slot> 的 prop 都可以作为作用域插槽
   * 的参数传递
   */
  [key: string]: any
  /**
   * 保留，用于指定插槽名。
   */
  name?: string
}
```

## `<template>`

对 `<template>` 的特殊处理只有在它与以下任一指令一起使用时才会被触发：

- `v-if`、`v-else-if` 或 `v-else`
- `v-for`
- `v-slot`
