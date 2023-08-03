import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '知识清单',
    items: [
      {
        text: 'HTML+CSS',
        link: '/knowledge/HTML+CSS/'
      },
      {
        text: 'JavaScript+ES6',
        link: '/knowledge/JavaScript+ES6/JavaScript/'
      },
      {
        text: 'Vue',
        link: '/knowledge/Vue/Vue3/'
      },
      {
        text: 'Webpack+Vite',
        link: '/knowledge/Webpack+Vite/'
      },
    ]
  },
  {
    text: '开发手册',
    items: [
      {
        text: '浏览器+网络',
        link: '/develop/Browser+Network/Browser/'
      },
      {
        text: '开发优化',
        link: '/develop/Performance/'
      },
      {
        text: '业务场景+算法',
        link: '/develop/Work+Algorithm/Work/'
      },
    ]
  },
  // {
  //   text: '个人成长',
  //   items: [
  //     {
  //       text: '大江南北游记',
  //       link: '/column/Travel/' // 表示docs/column/Travel/index.md
  //     },
  //     {
  //       text: '所思·所想',
  //       link: '/column/Growing/' // 表示docs/column/Growing/index.md
  //     }
  //   ]
  // },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
    ]
  }
];