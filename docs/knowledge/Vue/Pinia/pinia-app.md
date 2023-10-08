# Pinia 配置指南

## Pinia

```JavaScript
import { createPinia } from 'pinia'
// pinia 插件
import persist from './plugin/persist'

const pinia = createPinia()
pinia.use(persist)

export default pinia
```

## Modules

### user

```JavaScript
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {},
  actions: {

  }
})
```

### permission

```JavaScript
import { defineStore } from 'pinia'
import useUserStore from './user'
import router from '@/router'

const usePermissionStore = defineStore('permission', {
  state: () => {
    permissionRoutes: []
  },
  getters: {},
  actions: {
    async initPermissionRoute() {
      const userStore = useUserStore()

      const accessRoutes = await getRouteByRole(userStore.roleId)
      const mapRoutes = mapTwoLevelRouter(accessRoutes)

      // [添加] 动态路由
      mapRoutes.forEach(it => router.addRoute(it))
      this.permissionRoutes = [...constantRoutes, ...accessRoutes]
    }
  }
})
```