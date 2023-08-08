## 动态组件

```Vue
<!-- currentTab 改变时组件也改变 -->
<component :is="tabs[currentTab]"></component>
```

`:is` 的值可以是：被注册的组件名；导入的组件对象

::: info
当使用 `<component :is="...">` 在多个组件间切换时，被切换掉的组件会被卸载。可以通过 `<KeepAlive>` 强制被切换掉的组件保持“存活”的状态。
:::

## v-model 组件使用

如果想在一个组件上使用 `v-model` 时，

```Vue
<template>
  <CustomInput v-model="searchText" />
</template>
```

它会被展开为如下的形式：

```Vue

<template>
  <CustomInput
    :modelValue="searchText"
    @update:modelValue="newValue => searchText = newValue"
  />
</template>
```

要让这个例子实际工作起来，组件 `<CustomInput>` 组件内部需要做两件事：

1. 将内部原生 `<input>` 元素的 `value` attribute 绑定到 `modelValue` prop

2. 当原生的 `input` 事件触发时，触发一个携带了新值的 `update:modelValue` 自定义事件

代码示例：

```Vue
<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

更优雅的实现方式：

```Vue
<!-- CustomInput.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```

默认情况下，`v-model` 在组件上都是使用 `modelValue` 作为 prop，并以 `update:modelValue` 作为对应的事件

我们可以通过给 `v-model` 指定一个参数来更改这些名字

```Vue
<MyComponent v-model:title="bookTitle" />
```

在这个例子中，子组件应声明一个 `title` prop，并通过触发 `update:title` 事件更新父组件值：

```Vue
<!-- MyComponent.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps(['title'])
const emit = defineEmits(['update:title'])

const title = computed({
  get() {
    return props.title
  },
  set(value) {
    emit('update:title', value)
  }
})
</script>

<template>
  <input type="text" v-model="title" />
</template>
```

### 多个 `v-model` 绑定

::: code-group
```Vue [Home.vue]
<template>
  <UserName
    v-model:first-name="first"
    v-model:last-name="last"
  />
</template>
```

```Vue [UserName.vue]
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```
:::

### 自定义 `v-model` 修饰符

创建一个自定义的修饰符 `capitalize`，我们的任务是将 `v-model` 绑定输入的字符串值第一个字母转为大写

```Vue
<MyComponent v-model.capitalize="myText" />
```

```Vue{4,9}
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

defineEmits(['update:modelValue'])

console.log(props.modelModifiers) // { capitalize: true }
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

有了这个 prop，我们就可以检查 modelModifiers 对象的键，**并编写一个处理函数来改变抛出的值**

```Vue{11-13}
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```