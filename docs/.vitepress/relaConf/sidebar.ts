import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/knowledge/HTML+CSS/': [
    {
      text: 'HTML',
      items: [
        {
          text: 'HTML 面试',
          link: '/knowledge/HTML+CSS/html-offer'
        },
      ]
    },
    {
      text: 'CSS',
      items: [
        {
          text: 'CSS 应用',
          link: '/knowledge/HTML+CSS/css-app'
        },
        {
          text: 'CSS 面试',
          link: '/knowledge/HTML+CSS/css-offer'
        },
      ]
    },
    {
      text: 'Canvas',
      items: [
        {
          text: 'Canvas 基础用法',
          link: '/knowledge/HTML+CSS/canvas'
        },
        {
          text: 'Canvas 应用示例',
          link: '/knowledge/HTML+CSS/canvas-app'
        },
      ]
    }
  ],
  '/knowledge/JavaScript+ES6/': [
    {
      text: 'JavaScript',
      items: [
        {
          text: 'JavaScript 基础',
          link: '/knowledge/JavaScript+ES6/JavaScript/'
        },
        {
          text: 'JavaScript Array',
          link: '/knowledge/JavaScript+ES6/JavaScript/array'
        },
        {
          text: 'JavaScript String',
          link: '/knowledge/JavaScript+ES6/JavaScript/string'
        },
        {
          text: 'JavaScript 网络请求',
          link: '/knowledge/JavaScript+ES6/JavaScript/javascript-network'
        },
        {
          text: 'DOM & BOM',
          link: '/knowledge/JavaScript+ES6/JavaScript/dom-bom'
        },
        {
          text: 'JavaScript 应用',
          link: '/knowledge/JavaScript+ES6/JavaScript/javascript-app'
        },
        {
          text: 'JavaScript 面试',
          link: '/knowledge/JavaScript+ES6/JavaScript/javascript-offer'
        },
      ]
    },
    {
      text: 'ES6',
      items: [
        {
          text: 'ES6 基础',
          link: '/knowledge/JavaScript+ES6/ES6/'
        },
        {
          text: 'ES6 应用',
          link: '/knowledge/JavaScript+ES6/css-app'
        },
        {
          text: 'ES6 面试',
          link: '/knowledge/JavaScript+ES6/css-offer'
        },
      ]
    }
  ],
  '/knowledge/Vue/': [
    {
      text: 'Vue3',
      items: [
        {
          text: 'Vue3',
          link: '/knowledge/Vue/Vue3/'
        },
        {
          text: '生命周期',
          link: '/knowledge/Vue/Vue3/lifecycle-hooks'
        },
        {
          text: '组件间通信',
          link: '/knowledge/Vue/Vue3/components-communication'
        },
        {
          text: '响应式原理',
          link: '/knowledge/Vue/Vue3/reactivity'
        },
      ]
    },
    {
      text: 'Vue2',
      items: [
        {
          text: 'Vue2',
          link: '/knowledge/Vue/Vue2/'
        },
        {
          text: '生命周期',
          link: '/knowledge/Vue/Vue2/lifecycle-hooks'
        },
        {
          text: '组件间通信',
          link: '/knowledge/Vue/Vue2/components-communication'
        },
        {
          text: '响应式原理',
          link: '/knowledge/Vue/Vue2/reactivity'
        },
      ]
    },
    {
      text: '通用属性',
      items: [
        {
          text: '全局 API',
          link: '/knowledge/Vue/Common/api'
        },
        {
          text: '内置内容',
          link: '/knowledge/Vue/Common/content'
        },
      ]
    },
    {
      text: 'Pinia',
      items: [
        {
          text: 'Pinia',
          link: '/knowledge/Vue/Pinia/'
        },
        {
          text: 'Vue-Router',
          link: '/knowledge/Vue/Pinia/router'
        },
      ]
    },
    {
      text: '使用技巧&面试题',
      items: [
        {
          text: '使用技巧',
          link: '/knowledge/Vue/Skill+Offer/'
        },
        {
          text: '面试题',
          link: '/knowledge/Vue/Skill+Offer/Offer'
        },
      ]
    },
  ],
  '/knowledge/Webpack+Vite/': [
    {
      text: 'Webpack',
      items: [
        {
          text: 'Webpack',
          link: '/knowledge/Webpack+Vite/Webpack/'
        },
        {
          text: '常见的 loader 配置',
          link: '/knowledge/Webpack+Vite/Webpack/loader'
        },
        {
          text: '常见的 plugin 配置',
          link: '/knowledge/Webpack+Vite/Webpack/plugin'
        },
        {
          text: 'webpack 面试系列',
          link: '/knowledge/Webpack+Vite/Webpack/webpack-offer'
        },
      ]
    },
    {
      text: 'Vite',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ],
  '/knowledge/More/': [
    {
      text: 'Npm',
      items: [
        {
          text: 'Npm',
          link: '/knowledge/More/Npm/'
        },
      ]
    },
    {
      text: 'Git',
      items: [
        {
          text: '基础知识',
          link: '/knowledge/More/Git/'
        },
        {
          text: '错误解决方案',
          link: '/knowledge/More/Git/issue'
        },
      ]
    }
  ],
  '/develop/Browser+Network/': [
    {
      text: '浏览器',
      items: [
        {
          text: '浏览器基础知识',
          link: '/develop/Browser+Network/Browser'
        },
        {
          text: '客户端存储',
          link: '/develop/Browser+Network/Browser/storage'
        },
        {
          text: '跨域',
          link: '/develop/Browser+Network/Browser/cros'
        },
        {
          text: '浏览器调试',
          link: '/develop/Browser+Network/Browser/debug'
        },
      ]
    },
    {
      text: '网络',
      items: [
        {
          text: 'HTTP',
          link: '/develop/Browser+Network/Network/'
        },
        {
          text: '网络面试题',
          link: '/develop/Browser+Network/Network/network-offer'
        },
      ]
    },
  ],
  '/develop/Performance/': [
    {
      text: '前端性能优化',
      items: [
        {
          text: '打包优化',
          link: '/develop/Performance/webpack'
        },
        {
          text: '图片优化',
          link: '/develop/Performance/image'
        },
        {
          text: '渲染优化',
          link: '/develop/Performance/render'
        },
      ]
    },
    {
      text: 'Axios',
      items: [
        {
          text: 'Axios',
          link: '/develop/Performance/Axios/'
        },
      ]
    },
  ],
  '/develop/Interview/': [
    {
      text: '面试大纲',
      items: [
        {
          text: 'Outline',
          link: '/develop/Interview/Outline'
        },
      ]
    },
    {
      text: '业务场景',
      items: [
        {
          text: '前端',
          link: '/develop/Interview/Work/'
        },
        {
          text: 'npm',
          link: '/develop/Interview/Work/npm'
        },
      ]
    },
    {
      text: '面试',
      items: [
        {
          text: 'CSS',
          link: '/develop/Interview/Offer/css'
        },
        {
          text: 'JavaScript',
          link: '/develop/Interview/Offer/javascript'
        },
        {
          text: 'Vue',
          link: '/develop/Interview/Offer/vue'
        },
        {
          text: 'Browser',
          link: '/develop/Interview/Offer/browser'
        },
        {
          text: 'Network',
          link: '/develop/Interview/Offer/network'
        },
      ]
    },
    {
      text: '手写代码',
      items: [
        {
          text: '实现',
          link: '/develop/Interview/Code/'
        },
      ]
    },
    {
      text: '算法',
      items: [
        {
          text: '算法',
          link: '/develop/Interview/algorithm'
        },
      ]
    },
  ],
  '/develop/Bug/': [
    {
      text: 'Bug',
      items: [
        {
          text: 'Bug',
          link: '/develop/Bug/Bug'
        },
      ]
    },
  ]
};