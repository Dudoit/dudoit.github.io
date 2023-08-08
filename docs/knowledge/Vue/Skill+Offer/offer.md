## 🍞 基础知识

### 简述对 MVC、MVP、MVVM 的理解

MVC（ Model-View-Controller）、MVP（Model-View-Presenter）、MVVM（ Model-View-ViewModel）都是比较流行的架构模式

这三种架构模式的目的都是为了解耦 Model 和 View

- MVC

- MVP

- MVVM

  Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑

  View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来

  ViewModel 是一个同步 View 和 Model 的对象

  在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的，因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

  ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

### 组件 keep-alive 的作用

`keep-alive` 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。一旦使用keepalive包裹组件，此时mouted，created等钩子函数只会在第一次进入组件时调用，当再次切换回来时将不会调用。此时如果我们还想在每次切换时做一些事情，就需要用到另外的周期函数，actived和deactived，这两个钩子函数只有被keepalive包裹后才会调用。

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