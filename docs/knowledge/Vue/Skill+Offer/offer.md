## 🍞 基础知识

### 简述对 MVC、MVP、MVVM 的理解

MVC（ Model-View-Controller）、MVP（Model-View-Presenter）、MVVM（ Model-View-ViewModel）都是比较流行的架构模式

这三种架构模式的目的都是为了解耦 Model 和 View

- MVC

- MVP

- MVVM

  `MVVM` 是 `Model-View-ViewModel` 的缩写，也就是把 `MVC` 中的 `Controller` 演变成 `ViewModel`

  `Model` 代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑

  `View` 代表 UI 视图组件，它负责将数据模型转化成 UI 展现出来

  `ViewModel` 是一个同步 View 和 Model 的对象，`View` 和 `Model` 的桥梁

  数据绑定到 ViewModel 并自动将数据渲染到页面中，视图变化会通知 ViewModel 更新数据

  在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的，因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

  ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

### v-for 中，key 的作用

在使用 `v-for` 进行列表渲染时，通常会给组件绑定 `key` 属性

key 的作用主要是为了更高效的对比虚拟 DOM 中每个节点是否是相同节点

Vue 在 patch 过程中判断两个节点是否是相同节点，`key` 是一个必要条件，渲染一组列表时，`key` 是唯一标识，如果不定义 key，Vue 只能认为比较的两个节点是同一个，会导致频繁地更新元素，使得 patch 过程比较低效，影响性能。

Vue 判断两个节点是否相同时，主要判断两者的 key 和元素类型等，如果不设置 key 则默认为 undefined，会造成大量的 dom 更新操作。

如果不使用 key，Vue 会尝试修改/复用同类型元素。即有相同节点，不予对比，直接赋值新的元素

使用 key，会基于 key 的变化重新排列元素顺序，并移除/销毁key

使用 key，diff 操作可以更准确、更快速；diff 算法的过程中，先进行新旧节点的首尾交叉对比，当无法匹配的时候会用新节点的 key 与旧节点进行比对，然后算出差异

:::warning 不建议使用索引 index
index 会随着数组的变化而变化，所以本质上并不能真正地定义 nodes 。所以使用 index 只能消除控制台警告，并不能利用 diff 算法实现更好的效果
:::

### v-model

`v-model` 是 Vue 的双向绑定指令，通常用在表单元素上，例如：input（checkbox、radio）、textarea、select 上

本质上是一种语法糖（value + input），用于监听用户的输入事件来更新数据

```Vue
<!-- v-model 原理 -->
<input :value="search" @input="search = $event.target.value" />
```

`v-model` 也可以在自定义组件上使用，需要使用 prop 和 event 自定义处理


### Computed 和 Watch

- computed 计算属性

  属性的结果会被缓存，当 computed 中的函数所依赖的属性没有发生改变，此时调用当前函数的结果会从缓存中读取。当依赖的属性变化时才会重新计算，主要当作属性使用，computed 中的函数必须用 return 返回最终结果。

- watch 属性监听

  watch 是一个对象，键是需要观察的属性，值是对应的回调函数。主要用来监听特定数据的变化，从而进行某些具体的业务逻辑操作。

### 组件 keep-alive 的作用

`keep-alive` 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

一旦使用 `<keep-alive>` 包裹组件，此时 mouted，created 等钩子函数只会在第一次进入组件时调用，当再次切换回来时将不会调用。

此时如果我们还想在每次切换时做一些事情，就需要用到另外的周期函数，actived 和 deactived，这两个钩子函数只有被 `<keep-alive>` 包裹后才会调用。

## 🌮 Vue3、Vue2 差异

### Composition API 和 Option API

在Compostion API 中时根据逻辑相关组织代码的，提高可读性和可维护性，类似于react的hook写法

更好的重用逻辑代码，在Options API中通过 MIxins 重用逻辑代码，容易发生命名冲突且关系不清

解决在生命周期函数经常包含不相关的逻辑，但又不得不把相关逻辑分离到了几个不同方法中的问题，如在mounted中设置定时器，但需要在destroyed中来清除定时器，将同一功能的代码拆分到不同的位置，造成后期代码维护的困难。

### 响应式原理

- Vue2

  Vue2.x 中的响应式系统核心是 `Object.defineProperty`，劫持整个对象并深度遍历所有属性，给每个属性添加 getter 和 setter。

- Vue3

  Vue3.x 使用 **Proxy 代理** 重写响应式逻辑，拦截对象中任意属性的变化；再通过 Reflect 对源对象的属性进行操作。
  
  可以监听动态新增的属性，删除的属性，数组索引以及 length 属性

## 🧀 Vue3

我个人感觉使用 Vue3 最大的爽点在于 - 可以肆无忌惮地使用 ES6 中的语法特性，无需考虑兼容性（即然使用 Vue3 就不考虑兼容性了）

## 🍰 Vue2

## 🥪 Vue-Router

### 如何去除 url 中的 `#`

## 🍯 Vuex & Pinia