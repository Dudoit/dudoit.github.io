# Vue Router

## 路由的基本使用

```JavaScript
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 导入页面
import Home from '../pages/Home.vue'

// 配置路由映射
const routes = [
  // 重定向/默认路径
  { path: '/', redirect: '/home' },

  // 嵌套路由
  {
    path: '/home',
    component: Home
    children: [
      {
        path: '',
        redirect: '/home/main'
      },
      {
        path: 'main',
        component: () => import('../page/main.vue')
      }
    ]
  },

  // 路由懒加载：分割代码块，import函数返回 Promise，动态导入组件
  { path: '/about', component: () => import('../page/About.vue') },

  // 对分包命名：webpack 打包后的文件名称 -> nav-chunk.213a24c5.js.map
  { path: '/nav', component: () => import(/* webpackChunkName: "nav-chunk" */ '../page/Nav.vue') },

  // 动态路由匹配：添加路径参数 /user/201
  // 参数获取：V2: this.$route.params.id | V3: const route = useRoute() route.params.id
  { path: '/user/:id', component: () => import('../page/User.vue') },

  // 404 页面
  { path: '/:pathMatch(.*)', component: () => import('../page/404.vue') },
]

// 创建 router 对象
const router = createRouter({
  routes, // 传入路由映射
  history: createWebHashHistory() // 配置 history 模式
})
```

## 组件

```Vue
<!-- router-link 将渲染一个带有 href 属性的 a 标签 -->
<router-link to="/">Go to Home</router-link>
<router-link to="/about">Go to About</router-link>

<!-- 路由出口 -->
<router-view></router-view>
```

### `<router-link>`

渲染一个链接组件，该链接被点击时触发导航

属性配置

- to：跳转的地址，可以是字符串或对象（命名路由）

  ```Vue
  <router-link :to="{ name: 'user', params: { username: 'erina' }}">
    User
  </router-link>
  ```

- replace：调用 router.replace()
- active-class：激活该链接的 class 属性
- exact-active-class：链接被精准激活时的 class 属性

**v-slot**

```Vue
<template>
  <router-link to="/about" v-slot="{ href, route, navigate, isActive, isExactActive }">
    <p @click="navigate">跳转</p>
    <p>{{ href }}</p>
    <!-- .... -->
  </router-link>
</template>
```

### `<router-view>`

显示当前路由组件

```Vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>
```

**v-slot**

## 动态路由

在路径中使用一个动态字段来实现，路径参数：

```JavaScript
const routes = [
  // 动态路由匹配：添加路径参数 /user/201
  // 参数获取 -> V2: this.$route.params.id
  //            V3: const route = useRoute() route.params.id
  { path: '/user/:id', component: () => import('../page/User.vue') },
]
```

当路由被匹配时，它的 params 将以 `this.$route.params` 的形式暴露出来

| 匹配模式                       | 匹配路径                 | $route.params                            |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

### 参数的变化

像 `/users/201` 和 `/users/202` 这样的 URL 都会映射到同一个路由

当用户从 `/users/201` 导航到 `/users/202` 时，<span class="blue-text">相同的组件实例将被重复使用</span>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<span class="blue-text">不过，这也意味着组件的生命周期钩子不会被调用</span>。

处理方法，使用 watch 监听 `route.params` ：

```JavaScript
const User = {
  template: '...',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    )
  },
}
```

## 编程式导航

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="...">`         | `router.push(...)`    |
| `<router-link :to="..." replace>` | `router.replace(...)` |

`router.push`、`router.replace`、`router.go` 相当于 👇

`window.history.pushState`、`window.history.replaceState`、`window.history.go`

### push

`router.push` 方法会向 history 栈添加一个新的记录，所以，当点击浏览器后退按钮时，会回到之前的 URL

```JavaScript
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

使用 `path` 路径时，`params` 应使用动态路由，将参数添加到地址中

```JavaScript
// `params` 不能与 `path` 一起使用
router.push({ path: '/user', params: { username } }) // -> /user
// 编程式导航可以使用以下方式：
router.push(`/user/${username}`) // -> /user/eduardo
router.push({ path: `/user/${username}` }) // -> /user/eduardo
```

### replace

导航时不会向 history 添加新记录，取代当前条目

```JavaScript
router.replace({ path: '/home' })
// 相当于
router.push({ path: '/home', replace: true })
```

### go

在历史堆栈中前进或后退 n 步，类似 `window.history.go(n)`

```JavaScript
// 向前移动一条记录，与 router.forward() 相同
router.go(1)

// 返回一条记录，与 router.back() 相同
router.go(-1)

// 如果没有那么多记录，静默失败
router.go(-100)
router.go(100)
```

## addRoute/removeRoute

### 动态添加路由 addRoute

```JavaScript
const NavRoute = {
  path: '/nav',
  component: () => import('../pages/Nav.vue')
}

router.addRoute(NavRoute)
// 嵌套路由：第一个参数为需要添加的 name
router.addRoute('name', NavRoute)
```

### 动态删除路由 removeRoute


```JavaScript
// 方式一：removeRoute，传入路由名称
router.addRoute({ path: '/', name: 'Home'. component: Home})
router.removeRoute('Home')
// 方式二：addRoute回调
const removeRoute = router.addRoute(routeRecord)
removeRoute()
// 方式二：名称覆盖，由于名称是唯一的，所以前一个会被删除
router.addRoute({ path: '/', name: 'Home'. component: Home})
router.addRoute({ path: '/about', name: 'Home'. component: About})
```

## 路由导航守卫

### 全局前置守卫 router.beforeEach

触发的导航会被守卫监听，等待守卫 “放行”

beforeEach 的参数：

- `to`：即将进入的路由
- `from`：正要离开的路由（当前导航）
- `next`：<span class="secondary-text">基本不再使用</span>

beforeEach 可返回的值：

- `false`：取消当前导航
- `路由地址`：`return { path: '/login' }`、`return { name: 'Login' }`

### 全局解析守卫 router.beforeResolve

### 组件内的守卫

- beforeRouteEnter

- beforeRouteUpdate

  在当前路由改变，但是该组件被复用时调用

  举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候

  由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。组件已经挂载好了，导航守卫可以访问组件实例 `this`

  ```JavaScript
  import { onBeforeRouteUpdate } from 'vue-router'

  const userData = ref()
  // 在 Vue3 中，无法访问 `this`
  onBeforeRouteUpdate(async (to, from) => {
    //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
    if (to.params.id !== from.params.id) {
      userData.value = await fetchUser(to.params.id)
    }
  })
  ```

- beforeRouteLeave

  离开守卫 通常用来预防用户在还未保存修改前突然离开，也可以访问组件实例 `this`

  ```JavaScript
  import { onBeforeRouteLeave } from 'vue-router'

  // 在 Vue3 中，无法访问 `this`
  onBeforeRouteLeave((to, from) => {
    const answer = window.confirm(
      'Do you really want to leave? you have unsaved changes!'
    )
    // 取消导航并停留在同一页面上
    if (!answer) return false
  })
  ```



### 登录守卫

```JavaScript
router.beforeEach((to, from) => {
  if (to.path !== './login') {
    const token = window.localStorage.getItem('token')

    if (!token) {
      return { path: '/login' }
    }
  }
})
```