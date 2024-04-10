# ES Module

ECMA 2015 提出模块化规范，需要浏览器自身支持 ES Module

```JavaScript
// 导出方式
export {}
export const name = ''

// 导入方式
import { name } from './person.js'
import * as person from './person.js'
```

导入导出结合使用
```JavaScript
import { name } from './person.js'
import { xxx } from './xxx.js'

export { name, xxx }

// or
export { name } from './person.js'
// or
export * from './person.js'
```

import 导入函数

```JavaScript
  // 通常在满足某些条件时，导入所需模块
  const importPromise = import("./utils")
  // import 导入函数返回一个 Promise 对象
  importPromise.then(res => {
    console.log(res)
  })
```

1. 构建
  下载文件中依赖的模块

<!-- 
  掌握 HTML、CSS 、JavaScript 以及 ES6 新特性
  熟悉 Vue2.x、Vue3.x 以及相关技术栈
  熟悉 Ant Design、Element-plus、Vant 等组件库
  熟悉 Webpack、Vite 前端构建工具
  熟悉 小程序开发、APICloud 移动端开发，了解 Flutter 跨端开发
  掌握 Git 基本命令用于版本控制和协同开发
  熟悉 Node，能够简单使用 Express、Egg 等框架搭建后台 api 接口
 -->