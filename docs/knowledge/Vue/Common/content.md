## `<KeepAlive>`

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