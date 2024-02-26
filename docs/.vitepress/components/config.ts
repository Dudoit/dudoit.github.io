import { Excalidraw, wxMiniProgram, weTab } from "./base64"

// 一、首页导航
// 技术博客
const BlogWebsites = {
  title: '技术博客',
  websites: [
    {
      title: "稀土掘金",
      describe: "一个帮助开发者成长的社区",
      link: "https://juejin.cn/",
      iconUrl: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin.7948662.png"
    },
    {
      title: "小林coding",
      describe: "图解计算机基础",
      link: "https://xiaolincoding.com/",
      iconUrl: "https://xiaolincoding.com/logo.webp"
    },
  ]
}

// 官方文档
const OfficialWebsites = {
  title: '官网文档',
  websites: [
    {
      title: "Vue3 中文文档",
      describe: "渐进式 JavaScript 框架",
      link: "https://cn.vuejs.org/",
      iconUrl: "https://router.vuejs.org/logo.svg"
    },
    {
      title: "Webpack 中文文档",
      describe: "现代 JavaScript 应用程序的 静态模块打包工具",
      link: "https://www.webpackjs.com/",
      iconUrl: "https://www.webpackjs.com/icon-square-small.85ba630cf0c5f29ae3e3.svg"
    },
    {
      title: "Vite 中文文档",
      describe: "下一代的前端工具链",
      link: "https://cn.vitejs.dev/",
      iconUrl: "https://cn.vitejs.dev/logo.svg"
    },
    {
      title: "Pina 中文文档",
      describe: "符合直觉的 Vue.js 状态管理库",
      link: "https://pinia.vuejs.org/zh/",
      iconUrl: "https://pinia.vuejs.org/logo.svg"
    },
    {
      title: "微信小程序",
      describe: "微信小程序开发文档",
      link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      iconUrl: wxMiniProgram
    },
    {
      title: "Element Plus",
      describe: "Vue3 UI 框架",
      link: "https://element-plus.org/zh-CN/",
      iconUrl: "https://element-plus.org/images/element-plus-logo.svg"
    },
    {
      title: "Vuetify",
      describe: "Google 团队研发的 Vue UI 组件库",
      link: "https://vuetifyjs.com/zh-Hans/",
      iconUrl: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg"
    },
    {
      title: "Ant Design",
      describe: "阿里系 UI 组件库",
      link: "https://ant-design.antgroup.com/index-cn",
      iconUrl: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    },
    {
      title: "Bootstrap",
      describe: "中文网，非官方",
      link: "https://www.bootcss.com/",
      iconUrl: "https://www.bootcss.com/assets/img/navlogo-small.png"
    },
  ]
}

// 一些网站导航
const SomeWebsites = {
  title: '一些网站导航',
  websites: [
    {
      title: "Excalidraw",
      describe: "手绘图表工具",
      link: "https://excalidraw.com/",
      iconUrl: Excalidraw
    },
    {
      title: "snappify",
      describe: "代码块图片生成",
      link: "https://snappify.com/",
      iconUrl: "https://snappify.com/images/logo.png"
    },
    {
      title: "阿里云",
      describe: "阿里云官网",
      link: "https://cn.aliyun.com/",
      iconUrl: "https://ecmb.bdimg.com/tam-ogel/1815134652_-1760084283_1200_1200.png"
    },
    {
      title: "文心一言",
      describe: "百度 AI 助手",
      link: "https://yiyan.baidu.com/",
      iconUrl: "https://ecmb.bdimg.com/tam-ogel/-338790426_-1324895150_88_88.png"
    },
    {
      title: "WeTab",
      describe: "小组件，大世界",
      link: "https://www.wetab.link/",
      iconUrl: weTab
    },
  ]
}

export const homeNav = [
  BlogWebsites,
  OfficialWebsites,
  SomeWebsites,
]

// 二、站内导航
const iconUrl = Symbol("icon-url")


/**
 * 1. 知识清单 - 前端技能自检清单
 */
export const Knowledge = {
  text: '知识清单',
  items: [
    {
      text: 'HTML+CSS',
      link: '/knowledge/HTML+CSS/',
      [iconUrl]: 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/1f423.svg'
    },
    {
      text: 'JavaScript+ES6',
      link: '/knowledge/JavaScript+ES6/JavaScript/',
      [iconUrl]: 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/1f425.svg'
    },
    {
      text: 'Vue',
      link: '/knowledge/Vue/Vue3/',	
      [iconUrl]: 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/1f995.svg'
    },
    {
      text: 'Webpack+Vite',
      link: '/knowledge/Webpack+Vite/',
      [iconUrl]: 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/1f433.svg'
    },
    {
      text: 'More+',
      link: '/knowledge/More/Npm/',
      [iconUrl]: 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/1f4ab.svg'
    },
  ]
}

/**
 * 2. 开发手册 - 项目开发中的记录
 */
export const Develop = {
  text: '开发手册',
  items: [
    {
      text: '浏览器+网络',
      link: '/develop/Browser+Network/Browser/',
    },
    {
      text: '开发优化+业务',
      link: '/develop/Performance/'
    },
    {
      text: '面试',
      link: '/develop/Interview/Outline',
    },
  ]
}

/**
 * 格式化博客导航对象，主要用于适配 collectNav 组件
 * @param { Object } nav vitepress 标准格式的 nav
 * @returns { Object } 处理好 nav 对象
 */
const formatBlogNav = (nav) => {
  // 更改 key 的名称
  const newKeyNav = nav.items.map(item => {
    return {
      title: item.text,
      describe: item.describe,
      link: item.link,
      iconUrl: item[iconUrl] || 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/1f42c.svg'
    }
  })

  return {
    title: nav.text,
    websites: newKeyNav
  }
}

export const blogNav = [
  formatBlogNav(Knowledge),
  formatBlogNav(Develop),
]