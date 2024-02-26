import { Knowledge, Develop } from '../components/config';

export const nav = [
  { text: '首页', link: '/' },
  Knowledge,
  Develop,
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