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
          text: 'Webpack',
          link: '/knowledge/Webpack+Vite/Webpack'
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
  ]
};