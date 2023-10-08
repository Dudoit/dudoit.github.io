# Vue-router 配置指南

## 路由导出 router/index.js

```JavaScript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: 
})

export default router
```

## 路由守卫 guard

### 权限判断 permission

```JavaScript
// 获取 store 数据
import useAuthStore from '@/store/modules/auth'
// 导入 router 对象
import router from '..'

// 白名单路由
const whiteRoutes = ['/login', '/404', '/403', '/500']

function usePermissionGuard() {
  router.beforeEach(async (to) => {
    // 白名单过滤
    if (whiteRoutes.includes(to.path)) {
      return true
    }

    // store 中保存 token 的值，也可以使用 localStorage.getItem('token')
    const authStore = useAuthStore()
    if (!authStore.hasToken()) {
      // token 不存在，跳转至 "登录页"，且后缀保留当前 路径地址
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      }
    }
  })
}

export default usePermissionGuard
```