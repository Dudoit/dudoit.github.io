// import { DefaultTheme } from 'vitepress';
import { Knowledge, Develop } from '../components/config';

// export const nav: DefaultTheme.NavItem[] = [
export const nav = [
  { text: '首页', link: '/' },
  Knowledge, // 知识清单
  Develop, // 开发手册
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
      { text: 'Github', link: 'https://github.com/Dudoit/' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/2849570377958872'
      },
    ]
  }
];