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

1. 减少了页面间的跳转，用户体验好
2. 减少了一定的网络请求次数，减轻了服务端压力
3. 渲染少部分需要更新的内容即可，减轻浏览器压力


缺点：

1. 由于页面为动态生成，起初为 `<div id="app"></div>` ，对 SEO 并不友好；
2. 首次加载时间长，容易导致白屏。SPA 需要预加载所有资源，包括 JavaScript、CSS、模板

解决方法：

1. 代码分割：将大型 JavaScript 代码拆分较小的分片
2. 异步路由：延迟加载首屏非必需的内容
3. 资源压缩
4. SSR 服务端渲染

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


## Vue2/3 响应式原理

在Vue中，响应式主要通过数据劫持和依赖追踪来实现。

2. Vue2响应式的工作原理

2.1 数据劫持
Vue通过Object.defineProperty方法对对象的属性进行劫持。当属性被访问或修改时，会触发相应的回调函数（如getter和setter）。例如：
```js
const obj = { name: 'Vue' };
Object.defineProperty(obj, 'name', {
  get() {
    console.log('访问了name属性');
  },
  set(value) {
    console.log('修改了name属性');
  }
});
obj.name; // 输出: 访问了name属性
obj.name = 'React'; // 输出: 修改了name属性
```

2.2 依赖追踪
当数据被访问时，Vue会记录哪些组件或计算属性依赖于该数据。这通过一个名为effect的函数实现。每次数据变化时，Vue会重新执行依赖于该数据的所有effect函数，从而更新视图

2.3 触发更新
当数据发生变化时，Vue会调用setter方法，并通过依赖追踪机制触发所有依赖该数据的effect函数。这些函数会重新计算并更新视图。

3. Vue 3中的响应式实现

Vue 3引入了基于Proxy对象的响应式系统，取代了Vue2中的Object.defineProperty。Proxy提供了更全面的拦截能力，包括读取、设置、枚举等操作。

3.1 创建响应式对象
Vue 3使用reactive函数将普通对象转换为响应式对象。例如：

```js
import { reactive } from 'vue';

const state = reactive({ count: 0 });
state.count++; // 自动触发更新
```
reactive函数内部通过Proxy对象实现了对属性的拦截。

3.2 依赖收集与更新
Vue 3通过track和trigger机制来收集依赖和触发更新。track用于记录依赖，而trigger用于触发更新。这些机制共同协作，确保数据变化时视图能够及时更新。

4. 响应式的优势
数据驱动视图：数据变化时，视图会自动更新，无需手动操作DOM。
开发效率：开发者只需关注数据的变化，无需手动维护视图逻辑。
性能优化：通过依赖追踪和异步更新队列，Vue能够高效地处理大量数据变化。


5. 响应式系统的局限性
复杂性：响应式系统的实现相对复杂，需要理解数据劫持、依赖追踪等概念。
性能开销：频繁的数据变化可能会导致性能问题，特别是在大型应用中。
冻结属性：某些属性（如计算属性）需要冻结以避免意外修改。

6. 总结
Vue响应式系统是其核心特性之一，通过数据劫持和依赖追踪实现了数据与视图的自动同步。Vue 3通过引入Proxy对象进一步优化了响应式系统的实现，使其更加高效和简洁。

## 虚拟 DOM

是什么？
答：用普通 JS 对象描述真实 DOM，减少浏览器的重绘和重排开销，提高渲染性能。

为什么？
答：浏览器中操作 DOM 的代价比较昂贵，频繁操作 DOM 会产生性能问题

虚拟 DOM 的优势
答：
1. 性能优化：
减少 DOM 操作：直接操作真实 DOM 会触发浏览器的重绘和重排，耗性能。虚拟 DOM 只需在内存中操作，避免了这些开销。
高效更新：通过 Diff 算法，Vue 只更新真实 DOM 中变化的部分，而不是整个页面，提高渲染效率。
2. 跨平台能力：
虚拟 DOM 提供了跨平台的能力，不仅限于浏览器，还可以应用于移动端、桌面应用等场景。
3. 易于调试和维护：
虚拟 DOM 是 JavaScript 对象，可以通过开发者工具轻松调试和修改。

虚拟 DOM 的原理
答：
1. 创建虚拟 DOM：
Vue 组件首次渲染时，会生成一个虚拟 DOM 树。这个树由 JavaScript 对象组成，每个节点代表一个真实的 DOM 节点。虚拟 DOM 树的结构与真实的 DOM 树相对应，仅在内存中存在。
2. 数据变化与虚拟 DOM 更新：
当组件的数据发生变化时，Vue 会重新生成一个新的虚拟 DOM 树，并与旧的虚拟 DOM 树进行比较。通过 Diff 算法（也称为 Patch 算法），Vue 找出两棵树之间的差异，并只更新真实 DOM 中需要变化的部分。
3. 渲染过程：
编译阶段：Vue 将模板编译为渲染函数（render function），该函数返回一个虚拟 DOM 树。
更新阶段：当数据变化时，Vue 重新生成虚拟 DOM 树，并通过 Diff 算法计算差异，最后将差异应用到真实 DOM 上。

虚拟 DOM 的原理细节
答：
VNode（虚拟节点）：
Vue 中的虚拟 DOM 树由 VNode（虚拟节点）构成。每个 VNode 包含标签名、属性、子节点等信息，是虚拟 DOM 的基本单元。

Diff 算法：
Diff 算法用于比较新旧虚拟 DOM 树之间的差异。Vue 使用深度优先的遍历方式，逐层比较节点的标签、属性和子节点，找出需要更新的部分。

Patching（补丁）：
根据 Diff 算法的结果，Vue 生成补丁（Patch），将这些补丁应用到真实 DOM 上，完成更新过程。

## Diff 算法

Diff算法是虚拟DOM更新的核心机制，主要是通过高效比较新旧虚拟DOM树的差异，最小化DOM操作，从而提升页面渲染性能。

Diff算法的基本原理

Diff算法的核心思想是通过比较新旧虚拟DOM树的差异，找出需要更新的部分，并应用到实际DOM上。

- 同层级比较：只比较同一层级的节点，避免跨层级比较，从而减少复杂度。
- 节点类型和key相同：只有当节点类型和key相同的情况下，才会进行深度比较。

Diff算法的具体实现步骤如下：

1. 根节点比较：首先比较新旧虚拟DOM树的根节点，如果类型不同，则直接替换旧节点；如果类型相同，则继续比较其属性和子节点。
2. 属性比较：如果根节点类型相同，则比较其属性，如果属性不同，则更新旧节点的属性。
3. 子节点比较：如果根节点类型和属性都相同，则递归地比较其子节点列表。根据子节点的变化情况，决定是否插入、删除或移动子节点。
4. 递归更新：对于子节点中的每个节点，再次进行上述比较过程，直到所有节点都被处理完毕。

Diff算法的优化策略

首尾指针法：在比较子节点时，使用首尾指针法进行双向比较，减少不必要的遍历。
Key的作用：为每个节点提供唯一Key，帮助Vue快速定位和复用节点。Key的使用可以显著提高Diff效率。
列表优化：通过v-for指令和key属性高效地对列表进行排序和复用。
延迟DOM更新：Vue采用延迟更新策略，将需要更新的操作缓存起来，等到合适时机再执行，从而减少频繁的DOM操作。

Diff算法在不同版本中的演变

- Vue 2：采用双向递归比对策略，通过首尾指针法进行双向比较，虽然效率较高，但不如Vue 3的快速Diff算法高效。
- Vue 3：引入了快速Diff算法，通过预处理虚拟DOM树，分类处理不同情况，减少了DOM操作次数。此外，Vue 3还引入了去头尾的最长递增子序列算法，进一步提升了性能

Diff算法的实际应用

组件更新：当组件状态发生变化时，Vue会生成新的虚拟DOM树，并通过Diff算法计算出需要更新的部分，最终将这些更新应用到实际DOM上。
列表渲染：对于复杂的列表渲染场景，Diff算法通过Key属性和列表优化策略，显著提高了渲染效率。
性能优化：通过合理使用Key属性、避免不必要的更新和使用异步组件等方法，可以进一步提升应用性能。

Diff算法是虚拟DOM更新的核心技术，通过高效地比较新旧虚拟DOM树的差异，最小化DOM操作，从而提升页面渲染性能。其核心思想包括同层级比较、节点类型和key相同、首尾指针法等。随着Vue版本的演进，Diff算法也在不断优化，特别是在Vue 3中引入的快速Diff算法，显著提升了性能。理解Diff算法的工作原理和优化策略，对于开发高性能的Vue应用至关重要。

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

让用户可以扩展组件，更好地 复用组件 和 定制化处理

插槽的基本概念
插槽可以理解为一个占位符，在组件 `template` 中预留了一个位置，等待父组件传递内容填充。
插槽的核心思想是父组件负责提供内容，子组件负责展示内容。

插槽的分类：默认插槽、具名插槽和作用域插槽。

默认插槽（Default Slot）
默认插槽，通常用于在组件模板中直接插入内容。
如果父组件没有提供内容，子组件会显示默认内容。

具名插槽（Named Slot）
父组件通过name属性值传递内容到指定的具名插槽中。
具名插槽允许子组件更灵活地处理不同类型的插槽内容。

作用域插槽（Scope Slot）
父组件传递数据到子组件，子组件可以通过作用域插槽访问这些数据。
在Vue 2.6及之前版本中，作用域插槽使用`slot-scope`属性；在Vue 3中，作用域插槽被简化为`v-slot`语法。

插槽的使用场景

用户拓展组件
父组件向子组件传递不同的内容，实现组件的定制和复用。

不同场景下的复用
用于布局组件、表格组件、下拉选框等场景，通过不同的插槽内容实现不同的功能。

动态加载内容
使用TSX语法，可以在插槽中动态加载内容，例如创建可重用的头部、主体和尾部插槽。

解构Prop
插槽可以将内容解构为对象，以便更灵活地处理数据。

插槽的高级特性

`v-slot`语法
在Vue 3中，`v-slot`语法被引入，简化了插槽的使用。例如，可以使用`v-slot:header="{ title }"`来访问作用域插槽中的数据。

动态插槽名
插槽名可以是动态变化，使得插槽更加灵活。

重命名和默认定义
插槽可以重命名，并且可以为未匹配的插槽提供默认内容。

插槽的优势
灵活性，插槽允许父组件控制内容的展示位置和方式。
复用性，组件可以更容易地被复用到不同的场景中。
模块化，使得组件更加模块化，每个组件各司其职。

总结
插槽是一种内容分发机制，通过默认插槽、具名插槽和作用域插槽三种类型，实现了组件的灵活性和复用性。Vue 3中引入的`v-slot`语法进一步简化了插槽的使用。


## Vuex 和 Pinia 的理解

Vuex 和 Pinia 都是 Vue 生态中的**状态管理工具**

Vuex

核心概念：
State：存储应用的状态。
Mutations：同步修改状态的方法。
Actions：异步操作，可以调用Mutations。
Getters：基于State的计算属性。
Modules：模块化管理，将状态分割成多个模块。

必须通过 Mutations 修改 State，以确保状态变化的可追踪性，但这也增加了代码复杂度。
模块化需通过 modules 实现，适合大型项目分层管理。

特点：
调试友好：支持时间旅行调试和详细的日志记录。
模块化：通过Modules实现状态的模块化管理，适用于大型复杂项目。
TypeScript支持：虽然支持TypeScript，但不如Pinia的TypeScript支持完善。

Pinia

核心概念：
State：存储应用的状态。
Getters：基于State的计算属性。
Actions：异步操作，可以同步或异步执行。
Store：每个Store既是模块也是状态容器，支持直接修改状态。

特点：
简化架构：仅有 State、Getters、Actions，移除了 Mutations，允许直接在 Actions 中处理同步和异步逻辑。
扁平化模块管理：每个 Store 自动成为独立模块，无需嵌套 modules。
更符合 Vue3 组合式 API，支持响应式解构（需用 storeToRefs），与Vue3的开发模式更加契合。
TypeScript支持：Pinia对TypeScript有很好的支持，自动补全功能强大，Vuex 虽然也支持 TS，但在类型推断和代码提示上不如 Pinia 直观。

对比分析

API设计：
Vuex使用严格的单一store模式，需要通过Mutations和Actions来修改状态。
Pinia采用组合式API，允许直接修改State，简化了代码逻辑。

调试与维护：
Vuex提供详细的调试工具和日志记录功能，适合复杂项目。
Pinia虽然没有详细的调试工具，但其简洁的API和模块化设计使得维护更加容易。

性能与兼容性：
Pinia 体积更小，在性能上优于Vuex，特别是在TypeScript支持和代码优化方面。
Vuex由于其丰富的功能和调试工具，在大型项目中仍然有其优势。

## Vue-router

Vue-router 为构建单页面应用（SPA）设计，通过动态管理 URL 与组件的映射关系，实现无刷新页面切换

路由管理
Vue-router 允许开发者定义路由规则，将不同 URL 路径映射到对应的 Vue 组件。例如，路径 /home 可关联 Home 组件，而 /user/:id 支持动态参数匹配。

优势：

高效渲染：基于虚拟 DOM 机制，仅更新局部视图，无需重新加载页面。
灵活导航：支持声明式（`<router-link>`）和编程式（router.push()）导航。
嵌套路由：通过 children 属性实现多层级路由结构，适用于复杂界面布局。

路由模式
Hash 模式：默认模式，利用 URL 的 # 部分（如 [http://example.com/#/home ](http://example.com/#/home )），通过监听 hashchange 事件实现路由切换。
History 模式：基于 HTML5 History API，路径更简洁（如 [http://example.com/home ](http://example.com/home )），需服务器配置支持。


参数传递与响应

动态路由（如 /user/:id）的参数通过 $route.params 获取。
查询参数（如 ?name=John）通过 $route.query 访问。
当路由参数变化时，组件可通过监听 $route 对象或使用 beforeRouteUpdate 钩子响应更新。

核心实现原理
响应式路由系统
Vue-router 通过 Vue.util.defineReactive 将当前路由对象 _route 设为响应式，使 `<router-view>` 能动态渲染匹配组件。当 URL 变化时，触发路由匹配逻辑，更新 _route 并驱动视图变化。

路由跳转机制
Hash 模式：监听 hashchange 事件，解析 location.hash 获取路径。
History 模式：利用 pushState 和 replaceState 修改路径，监听 popstate 事件处理浏览器前进/后退。
跳转方法（如 push()、replace()）最终调用 transitionTo()，执行路由匹配、导航守卫和视图更新。

导航守卫
提供全局钩子（如 beforeEach）、路由独享钩子（beforeEnter）和组件内钩子（如 beforeRouteEnter），用于权限控制、数据预加载等场景。


三、关键对象区分
$router 与 $route
$router：VueRouter 实例，管理全局路由配置和导航方法（如 push()、replace()）。
$route：当前活跃路由信息对象，包含 path、params、query 等属性，用于获取参数和状态。

四、高级应用场景
服务端渲染（SSR）
在 SSR 中，Vue-router 需配合服务器端路由匹配，确保首屏渲染正确。
动态路由加载
结合 Webpack 的代码分割，实现路由组件的懒加载，优化首屏性能：
路由元信息
通过 meta 字段存储路由额外信息（如页面标题、权限标识），便于全局守卫统一处理。

## `<keep-alive>`

`<keep-alive>` 用于缓存组件实例的内置组件，作用是避免组件重复渲染，同时保留组件状态。

1. 核心作用与机制
缓存组件实例：当包裹动态组件或路由组件时，`<keep-alive>` 会将不活动的组件实例保留在**内存**中，而非销毁它们。避免了重复DOM渲染和初始化过程。
状态保留：在表单填写页面切换后返回时，输入内容可保留，无需重新填写。

2. 关键属性

include与exclude：通过组件名称（需与name属性一致）或正则表达式，指定需要缓存（include）或排除（exclude）的组件。
示例：`<keep-alive :include="['Home', 'Profile']">` 仅缓存名为Home和Profile的组件。

max：限制最大缓存实例数（默认无限制）。超出时，淘汰最久未使用的实例，防止内存溢出。
示例：`<keep-alive :max="5">` 最多缓存5个组件。

3. 生命周期钩子
activated与deactivated：
当组件被激活（切回前台）时触发activated，适合**执行数据刷新**等操作（如实时数据请求）。
当组件停用（切到后台）时触发deactivated，可用于**清理定时器或释放资源**。
注意：被缓存的组件不会触发destroyed等销毁钩子，因此需通过上述钩子管理状态。

4. 与路由结合使用
路由元信息（meta字段）：
在vue-router中，通过路由配置的meta.keepAlive控制是否缓存。例如：
```js
{
  path: '/home',
  component: Home,
  meta: { keepAlive: true }  // 需要缓存
}
```
在模板中动态判断：`<keep-alive><router-view v-if="$route.meta.keepAlive" /></keep-alive>`。


5. 使用场景与注意事项
适用场景：频繁切换但状态需保留的组件（如Tab页、列表-详情页）。
组件初始化成本高（如复杂计算或大量数据请求）。
潜在问题：
内存占用：过度缓存可能导致内存压力，需合理设置max属性。
数据陈旧：若需每次进入时刷新数据，应在activated中主动请求。
生命周期冲突：避免在created或mounted中执行仅需一次的操作，防止重复调用。

总结
`<keep-alive>`通过缓存机制优化了Vue应用的性能与用户体验，但其使用需权衡内存消耗与数据时效性。合理利用include、exclude、max属性和生命周期钩子，结合路由配置，可精准控制缓存逻辑，适用于高频切换且状态敏感的页面场景。

## watch

一、watch的特性与原理

特性
显式监听与灵活性：watch需要显式指定监听的数据源，可以是ref、reactive对象、getter函数或数组。
支持复杂场景：可通过deep: true深度监听对象属性变化，immediate: true立即执行回调。

原理
底层通过ReactiveEffect类创建副作用实例，在初始化时执行effect.run()触发数据源的getter拦截，从而收集依赖。
当数据变化时，触发setter拦截，执行调度器（scheduler）中的回调。
对于深度监听，Vue3会调用traverse(source)遍历对象所有属性，强制触发依赖收集。

适用场景
需要精确控制监听的数据源。
需要获取变化前后的值（oldValue和newValue）。
需要延迟执行副作用（如仅在数据变化时触发异步请求。

二、watchEffect的特性与原理
自动依赖收集
watchEffect无需显式声明依赖，其回调函数中的响应式引用会被自动追踪。
立即执行：初始化时立即运行一次回调以收集依赖。

实现原理
与watch共享底层逻辑（doWatch函数），区别在于watchEffect的回调函数直接作为getter。
执行时，响应式数据的getter会收集当前ReactiveEffect实例作为依赖。
同步依赖追踪：仅在同步执行期间追踪依赖，异步操作中的响应式引用不会被自动收集。

适用场景
简单副作用逻辑（如日志输出、DOM操作）。
需要自动追踪多个依赖，减少代码冗余。

特性	watch	watchEffect
依赖声明	显式指定数据源	自动收集回调中的依赖
初始执行	需配置immediate: true才立即执行	默认立即执行
新旧值获取	支持（newValue和oldValue）	仅能获取当前值
深度监听	支持（deep: true）	不支持，需手动遍历属性
异步依赖处理	无限制	异步代码块中的依赖无法自动追踪
性能开销	较高（需显式处理复杂逻辑）	较低（自动追踪，代码简洁）

## computed

函数式定义：需通过import { computed } from 'vue'引入，采用函数式写法定义计算属性。例如：
```js
const sum = computed(() => num1.value + num2.value);
```
这种写法简化了代码结构，直接通过箭头函数表达计算逻辑。

Options写法：支持传入包含get和set方法的对象，实现读写分离。例如：
```js
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => { count.value = val - 1; }
});
```

核心特性与优化
缓存机制：缓存计算结果，仅当依赖的响应式数据变化才会重新计算，避免重复执行开销。若依赖未变化，多次访问直接返回缓存值。
惰性求值：计算属性不会在组件初始化时立即执行，仅在首次被访问或依赖变化后触发计算。
依赖追踪：基于Vue 3的响应式系统（如Proxy），自动追踪计算函数内的依赖项。当依赖变更时，标记计算属性为“脏值”，触发重新计算。

实现原理
底层类ComputedRefImpl：创建计算属性时生成此对象，内部通过dirty标志位管理缓存状态。首次访问时执行计算并缓存结果；依赖变化时标记dirty为true，下次访问触发重新计算。
副作用函数与调度器：利用effect函数注册副作用，结合scheduler配置控制计算逻辑的执行时机，例如延迟计算或批量更新。

应用场景
复杂逻辑封装：将模板中的复杂表达式（如数据过滤、格式化）移至计算属性，提升可读性。例如：
```js
const reversedMessage = computed(() => message.value.split('').reverse().join(''));
```
依赖多数据的派生状态：如根据姓和名生成全名，或基于列表生成筛选后的子集。
可写计算属性：通过set方法实现双向绑定。例如，修改fullName时自动拆分并更新firstName和lastName。

与普通函数的区别
缓存优势：普通函数每次调用均执行，而计算属性依赖不变时复用缓存结果，性能更优。
响应式联动：计算属性自动参与Vue的响应式更新流程，依赖变化时触发视图更新，普通函数需手动管理。

注意事项
避免副作用：计算函数应为**纯函数**，不修改外部状态或执行异步操作，否则可能导致难以追踪的依赖问题。
类型推断：在TypeScript中，若返回函数需显式声明类型，否则可能因类型推导错误导致运行时问题。

computed通过组合式API提供了更灵活的代码组织方式，结合响应式系统的依赖追踪与缓存优化，既简化了派生状态的管理，又保障了性能。其核心价值在于声明式地表达数据依赖关系，使代码更清晰、维护性更高，适用于大多数需要基于响应式数据动态计算的场景。

结合 get 和 set 实现复杂双向绑定
场景：需要基于计算属性的读写操作触发更复杂的逻辑（例如修改多个源数据）。
示例：实现一个可编辑的全名计算属性，拆分/合并姓和名：
```js
const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (newName) => {
    const parts = newName.split(' ');
    firstName.value = parts[0] || '';
    lastName.value = parts[1] || '';
  }
});
```

动态计算属性名称
场景：根据运行时条件动态生成计算属性名称。
示例：使用动态键名创建计算属性：
```js
const dynamicKey = ref('age');
const user = reactive({ name: 'Alice', age: 30 });

const dynamicProp = computed(() => user[dynamicKey.value]);
```
效果：修改 dynamicKey.value 可切换依赖的属性（如 dynamicKey.value = 'name'）。

3. 返回函数用于事件处理
场景：基于响应式数据生成动态事件处理函数。
示例：根据当前状态返回不同的点击处理逻辑：
```js
const isEditing = ref(false);

const clickHandler = computed(() => {
  return isEditing.value 
    ? () => { saveData(); isEditing.value = false; }
    : () => { fetchData(); isEditing.value = true; };
});
```

与 v-model 结合实现可写派生状态
场景：通过 v-model 直接绑定一个可写的计算属性。
示例：将输入框的值映射到格式化后的数据：
```js
const rawValue = ref(100);
const formattedValue = computed({
  get: () => `$${rawValue.value}`,
  set: (val) => {
    const num = parseInt(val.replace(/\D/g, ''));
    rawValue.value = isNaN(num) ? 0 : num;
  }
});
```

```vue
<input v-model="formattedValue" />
```

效果：输入 $200 会自动更新 rawValue 为 200。


性能优化：缓存昂贵的计算
场景：避免重复执行高开销计算（如大数据量过滤）。
示例：缓存大型列表的筛选结果：

```js
const list = ref([/* 大型数组 */]);
const filterText = ref('');

const filteredList = computed(() => {
  return list.value.filter(item => item.name.includes(filterText.value));
});
```
优势：只有 list 或 filterText 变化时才会重新计算。