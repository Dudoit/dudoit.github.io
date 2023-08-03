# Pinia

同时支持 Vue 2 和 Vue 3，拥有组合式 API 的 Vue 状态管理库

[Pinia中文文档](https://pinia.vuejs.org/zh/)

## 安装 Pinia

```Bash
yarn add pinia
# 或者
npm install pinia
```

创建一个 pinia 实例 (根 store) 并将其传递给应用：

```JavaScript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

## Store (Pinia) 是什么？

Store 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods。

## 应该在什么时候使用 Store (Pinia) ？

一个 Store 应该包含可以在整个应用中访问的数据。这包括在许多地方使用的数据，例如显示在导航栏中的用户信息，以及需要通过页面保存的数据，例如一个非常复杂的多步骤表单。

另一方面，你应该避免在 Store 中引入那些原本可以在组件中保存的本地数据，例如，一个元素在页面中的可见性。

并非所有的应用都需要访问全局状态，但如果你的应用确实需要一个全局状态，那 Pinia 将使你的开发过程更轻松。

## 基础示例

pinia API 的基本用法，先创建一个 Store：

::: code-group

```JavaScript [stores / counter.js]
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

```JavaScript [stores / counter.js]
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```
:::

然后就可以在一个组件中使用该 store 了：

```Vue
<script setup>
  import { useCounterStore } from '@/stores/counter'
  const counter = useCounterStore()
  counter.count++
  counter.$patch({ count: counter.count + 1 })
  counter.increment()
</script>
<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>
```

### 更真实的示例

这是一个更完整的 Pinia API 示例，在 JavaScript 中也使用了类型提示

```JavaScript
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 类型将自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动补全！ ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 调用其他带有自动补全的 getters ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // 接受任何数量的参数，返回一个 Promise 或不返回
    addTodo(text) {
      // 你可以直接变更该状态
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```

## State

在 Pinia 中，state 被定义为一个返回初始状态的函数，也是最核心的部分。

```JavaScript
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  state: () => {
    return {
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
```

### 访问 State

默认情况下，可以通过 store 实例访问 state，直接对其进行读写。

```JavaScript
const store = useStore()

store.count++
```

### 变更 State

除了用 `store.count++` 直接改变 store，还可以调用 $patch 方法。<p style="color: rgb(5, 117, 197)">它允许同一时间更改多个属性：</p>

```JavaScript
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
```

或者可以传入一个函数直接修改 state

```JavaScript
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

### 重置 State

```JavaScript
const store = useStore()

store.$reset()
```

### 替换 State

不能完全替换掉 store 的 state，因为那样会破坏其响应性。但是可以使用 patch。

```JavaScript
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```

### 订阅 State

```JavaScript
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})
```

## Getter

Getter 完全等同于 store 的 state 的计算值。推荐使用箭头函数，并且它将接收 state 作为第一个参数：

```JavaScript
export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
```

使用 Getter

```Vue
<script setup>
  import { useCounterStore } from './counterStore'
  const store = useCounterStore()
</script>
<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>
```

### 访问 Getter

```JavaScript
export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,

    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
  },
})
```

### 传递参数

Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。不过，你可以从 getter 返回一个函数，该函数可以接受任意参数：

```JavaScript
export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
```

```Vue
<script setup>
  import { useUserListStore } from './store'
  const userList = useUserListStore()
  const { getUserById } = storeToRefs(userList)
</script>

<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
```

## Action

Action 相当于组件中的 method。它们可以通过 defineStore() 中的 actions 属性来定义，并且它们也是定义业务逻辑的完美选择。

action 可以是异步的

```JavaScript
export const useCounterStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
```

```JavaScript
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    },
  },
})
```

使用 Action

```Vue
<script setup>
  const store = useCounterStore()
  store.randomizeCounter()
</script>
<template>
  <!-- 即使在模板中也可以 -->
  <button @click="store.randomizeCounter()">Randomize</button>
</template>
```