# HTML

## html5 有哪些新特性、移除了哪些元素

**新特性**

语义化扩展标签：`header`、`nav`、`footer`、`aside`、`article`、`section`

音频和视频 API：`audio`、`video`

画布 API：`Canvas`

拖拽和释放 API：`Drag and drop`

地理定位 API：`Geolocation`

本地离线存储：`localStorage`、`sessionStorage` 

表单控件：`calendar`、`date`、`time`、`email`、`url`、`search`

新的技术：`webworker`、`websocket`

**移除的元素**

纯表现元素：`<basefont>`、`<font>` 、 `<center>` 、 `<u>` 、 `<big>`、`<strike>`、 `<tt>`

对可用性产生负面影响的元素：`<frameset>`、`<noframes>`、`<frame>`

## 如何理解 HTML 结构的语义化

HTML 的语义化是指合理使用 HTML 标签以传达文档结构和内容的含义，使标签在没有 CSS 样式或脚本的情况下也能够表达出正确的含义和层次。符合 W3C 统一的规范标准，减少差异化。

方便其他设备解析，屏幕阅读器等。

通过合理使用语义化的 HTML 结构，可以提升网页的可访问性、可读性和可维护性；同时也让爬虫更好地解析，对 SEO 也有积极影响。

## Doctype 的作用

`<!DOCTYPE>` 声明于 HTML 文档的第一行，用于定义文档类型；告知浏览器应该用什么文档类型、规范解析此文档。

## HTML 中的 title 和 alt 属性

title 属性是可选的，它可以用在除了 `<base>`，`<basefont>`，`<head>`，`<html>`，`<meta>`，`<param>`，`<script>` 和 `<title>` 之外的所有标签；通常在鼠标悬停在元素时显示提示信息。

alt 属性是 img 标签独有的，通常用来在图片无法正常显示时替换的文字，也是必需的，合理的填写可提升网站的可访问性。

## HTML 中的 data-* 属性是什么

data-* 是用户自定义的属性，可用于存储或展示数据，也可以在 JavaScript 中被访问。

## HTML 中常见的图片格式以及区别

常用的图片格式：png、jpg、svg、base64、webp

| 图片格式 | 压缩方式 | 特征 | 缺点 |
| --- | --- | --- | --- |
| png | 无损压缩 | 支持透明、质量高 | 体积大 |
| jpg | 有损压缩 | 体积小、加载快 | 有损压缩、不支持透明 |
| gif | 无损压缩 | 动态图 | 支持颜色少 |
| svg | 无损压缩 | 体积小、可缩放 | 渲染成本高 |
| base64 | 无损压缩 | 文本文件 | 图片大小膨胀 |
| webp | 有损压缩、无损压缩 | 支持透明、动态 | 兼容性差 |

WebP由Google开发，WebP在保证图像质量的同时减小文件大小，提供更快的加载速度和更低的带宽消耗。WebP图像通常比相同质量的JPEG图像小约26％。