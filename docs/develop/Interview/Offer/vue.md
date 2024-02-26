<script setup>
import cdnImg from '/.vitepress/components/cdnImg.vue';
</script>

# Vue

## MVVM

  `MVVM` 是 `Model-View-ViewModel` 的缩写，也就是将 `MVC` 中的 `Controller` 演变为 `ViewModel`。

  `Model` 代表 **数据模型**；`View` 代表 **视图组件**；`ViewModel` 是一个同步 `View` 和 `Model` 的对象。

  数据绑定到 `ViewModel` 并自动将数据渲染到页面中，视图变化会通知 `ViewModel` 更新数据。

## SPA

SPA，单页面应用（Sigle Page Application）。是一种 WEB 应用程序的设计模式，就是只有一张 WEB 页面的应用。加载单个 HTML，通过动态加载内容而无需重新加载整个页面。

优势：

用户体验好，SPA 


缺点：

1. 由于页面为动态生成，起初为 `<div id="app"></div>` ，对 SEO 并不友好；
2. 首次加载时间长，容易导致白屏。SPA 需要预加载所有资源，包括 JavaScript、CSS、模板

## 生命周期

:::info 父子组件的执行顺序
<span class="blue-text">父组件 beforeCreate -> 父组件 created -> 父组件 beforeMount</span> -> 子组件 beforeCreate -> 子组件 created -> 子组件 beforeMount -> 子组件 mounted -> <span class="blue-text">父组件 mounted</span>
:::

## Vue3 和 Vue2 的差异

- **Composition API 和 Option API**

  Composition API 根据逻辑的相关性组织代码，提升代码的可读性和可维护性，类似 react 的 hook 写法

  Composition API 能更好地复用逻辑代码，在 Option API 通过使用 Mixins 复用代码，容易发生命名冲突的问题

  Composition API 解决了在生命周期函数中不相关逻辑的抽离问题。例如在 mounted 中设置定时器，但是需要在 destroyed 中清除定时器，将同一逻辑分离到不同位置，造成后期代码维护困难。

- **响应式原理**

  Vue3 采用 ES6 的 <span class="blue-text">Proxy API</span> 重写响应式逻辑，劫持对象中属性的变化，再通过 <span class="blue-text">Reflect</span> 对源对象的属性进行操作。

  优点：可以监听 动态新增/删除的属性，数组索引以及 length 属性

  Vue2 中响应式系统的核心是 `Object.defineProperty`，劫持整个对象并深度遍历所有属性，给每个属性添加 getter 和 setter

- **diff 算法**

  Vue2 使用深度优先遍历：逐层对比 Virtual DOM 节点，找出差异并更新响应的组件

  Vue3 使用静态标记：结合深度优先遍历和按需更新，在编译阶段将模板标记为 静态 和 动态。当动态节点发生变化时，使用深度优先遍历比较和更新

- **生命周期钩子名称**

  Vue2 中的 `destroyed` 钩子在 Vue3 中改为了 `unmounted`

- **根节点数量**

  Vue2 中，每个组件只允许存在 1 个根节点；Vue3 则允许存在 多个节点

- **对 TypeScript 的支持**

  Vue3 提供了更好的类型推断和严格的类型检查，Composition API 也提升了 TypeScript 的开发体验

## 虚拟 DOM

浏览器中操作 DOM 的代价比较昂贵，频繁操作 DOM 会产生性能问题

虚拟 DOM 的作用是在每一次响应式数据发生变化而引起页面重新渲染时，对比更新前后的虚拟 DOM ，找出需要更新的真实 DOM

https://blog.csdn.net/liuliuliuliumin123/article/details/107943687

## Diff 算法

## Key 的作用

- key 的使用场景

  使用 `v-for` 进行列表渲染时，通常会给子项绑定 `key` 属性

- `key` 的作用

  为了更高效地对比 <span class="blue-text">虚拟 DOM</span> 中每个节点是否为相同节点

- key 的判断依据

  Vue 在 patch 过程中判断两个节点是否为同一节点，`key` 是一个必要条件

  使用 `key`，会基于 key 的变化重新排列元素顺序，进行更新、移动或删除；如果不使用 `key`，Vue 会尝试 修改/复用 同类型元素。

- 结论

  diff 算法过程中，会先进行新旧节点的首尾交叉对比，当无法匹配的时候会用新节点的 key 与旧节点比对，算出差异；所以使用 `key`，可以有效提高 diff 算法性能，避免重复渲染和更新无关的组件和元素

:::warning 不建议使用索引 index
index 会随着数组的变化而变化，所以本质上并不能真正地定义 nodes 。所以使用 index 只能消除控制台警告，并不能利用 diff 算法达到更好的效果
:::

## 组件间的通讯方式

- **`props`、`$emit`**

  `props` 属性传递；`$emit` 发送事件

- **依赖注入 `Provide`、`Inject`**

  祖先组件中通过 `provide` 提供依赖；子孙组件通过 `Inject` 注入依赖

- **事件总线 `EventBus`、`Mitt`**

  `EventBus` 使用 发布/订阅 模式，通过空的 Vue 实例作为事件总线，用来触发事件和监听事件

  Vue3 中移除了 `$on`、`$off` 等方法，`EventBus` 不再使用，替换为 `mitt.js`

- **状态管理 `Vuex`、`Pinia`**

- **`$root`、`$parent`、`$children`**

  访问 根组件、父组件、子组件 实例


## 双向绑定/v-model

`v-model` 是 Vue 的双向绑定指令，通常用在元素表单上。例如：`<input>`、`<textarea>`、`<select>`...

`v-model` 双向绑定本质上是一种语法糖（value + event），用于监听输入事件以更新数据

```Vue
<!-- v-model 原理 -->
<input :value="search" @input="search = $event.target.value" />
```

`v-model` 也可以在 自定义组件 上使用，不过需要自定义 `prop` 和 `event`

## setup

### setup 中如何获取组件实例

在 vue2  中， Options API 可以使用 this 来获取组件的实例，但是到现在的 vue3 ，已经被摒弃掉了。在 setup 和其他 Composition API 中没有 this ，但是它提供了一个 getCurrentInstance 来获取当前的实例。

## slot 插槽

- 插槽的作用

  让用户可以扩展组件，更好地 复用组件 和 定制化处理