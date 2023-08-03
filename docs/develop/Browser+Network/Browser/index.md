# 浏览器基础知识

## 浏览器内核

浏览器内核可以分成两部分：渲染引擎 和 JS 引擎。早期渲染引擎和 JS 引擎并没有十分明确的区分，但随着 JS 引擎越来越独立，内核也成了渲染引擎的代称。渲染引擎又包括了 HTML 解释器、CSS 解释器、布局、网络、存储、图形、音视频、图片解码器等等零部件。

Trident：IE 浏览器

EdgeHTML：Edge 浏览器，用于替代旧版 Trident

Gecko：Firefox 浏览器

WebKit：Safari 浏览器

Blink：Chrome 浏览器、Opera 浏览器；基于 WebKit 分支而开发的内核