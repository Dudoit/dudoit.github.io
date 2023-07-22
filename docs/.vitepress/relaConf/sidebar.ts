import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/knowledge/Webpack+Vite/': [
    {
      text: 'Webpack',
      items: [
        {
          text: 'Webpack',
          link: '/knowledge/Webpack+Vite/Webpack'
        },
        {
          text: '常见的 loader 配置',
          link: '/knowledge/Webpack+Vite/Webpack/loader'
        },
        {
          text: '常见的 plugin 配置',
          link: '/knowledge/Webpack+Vite/Webpack/plugin'
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
  '/knowledge/Develop/': [
    {
      text: 'Webpack',
      items: [
        {
          text: 'Webpack',
          link: '/knowledge/Webpack+Vite/Webpack'
        },
        {
          text: 'Webpack',
          link: '/knowledge/Webpack+Vite/Webpack'
        },
      ]
    },
  ],

  '/develop/Browser/': [
    {
      text: '浏览器',
      items: [
        {
          text: 'Webpack',
          link: '/knowledge/Webpack+Vite/Webpack'
        },
      ]
    },
  ],
  '/develop/Performance/': [
    {
      text: '前端性能优化',
      items: [
        {
          text: '网络篇',
          link: '/develop/Performance/network'
        },
        {
          text: '图片',
          link: '/develop/Performance/image'
        },
      ]
    },
  ]
};