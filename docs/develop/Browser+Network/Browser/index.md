# 浏览器基础知识

## 浏览器内核

浏览器内核可以分成两部分：渲染引擎 和 JS 引擎。早期渲染引擎和 JS 引擎并没有十分明确的区分，但随着 JS 引擎越来越独立，内核也成了渲染引擎的代称。渲染引擎又包括了 HTML 解释器、CSS 解释器、布局、网络、存储、图形、音视频、图片解码器等等零部件。

Trident：IE 浏览器

EdgeHTML：Edge 浏览器，用于替代旧版 Trident

Gecko：Firefox 浏览器

WebKit：Safari 浏览器

Blink：Chrome 浏览器、Opera 浏览器；基于 WebKit 分支而开发的内核

## JS 引擎

由于 CPU 只认识自己的指令集，所以高级的编程语言最终都要转成机器指令执行

JavaScript 引擎的作用就是：将 JavaScript 代码翻译为 CPU 指令执行

::: info 浏览器内核 和 JavaScript 引擎的关系
浏览器内核是整个浏览器的核心组件，通常分为两部分。一部分负责 HTML 解析、布局、渲染等内容；而 JavaScript 引擎则是浏览器内核中负责解析和执行 JavaScript 代码的部分。
:::

## V8 引擎

AST expiorer 是一个根据词/语法分析生成抽象语法树结构的网站

V8 引擎中的一些模块：

- [Parse](https://v8.dev/blog/scanner)：用于将 JavaScript 代码转换为 AST 抽象语法树

- [Ignition](https://v8.dev/blog/ignition-interpreter)：解释器，用于将 AST 转换为 ByteCode 字节码

- [TurboFan](https://v8.dev/blog/turbofan-jit)：编译器，将字节码编译为 CPU 可以执行的机器码
