# 浏览器

## 跨域

- 什么跨域

  跨域是指 <span class="p-txt">浏览器</span> 拒绝执行其他网站的脚本。

  这是浏览器自身的 **同源策略** 导致的，目的是为了减少可能被攻击的媒介。

- 常见的跨域场景

  不同端口、不同协议、不同域名 会导致跨域

- 跨域的解决方案 ⭐⭐⭐

  - CORS 跨域资源共享

  CORS 是一种基于 HTTP 头的机制，允许服务器标识自己以外的其它源（域、协议或端口），使浏览器允许这些源访问加载自己的资源

  开启 CORS 的关键主要是通过服务端设置 `Access-Control-Allow-Origin` 的值，例如：

  ```JavaScript
  "Access-Control-Allow-Origin": "http://www.example.com"
  ```

  :::info CORS & JSONP
  在面试中，CORS 经常会拿来与 JSONP 做比较，它们两个的使用目的相同，但是 CORS 比 JSONP 更强大，对比现在使用的频率就知道了。其次，在请求方式上，JSONP 仅支持 GET 请求，而 CORS 支持所有类型的 HTTP 请求；在处理方式上，使用CORS，前端不需要额外的改动；在兼容性方面，JSONP 会更胜一筹
  ::: 

  - Node 代理

  利用服务端没有同源策略的条件，Node 代理转发请求。如果代理服务器不同域、不同端口等，依然需要开启 CORS。

  - Nginx 反向代理

  一般会在项目最终上线时，在 Nginx 服务器上开启。开启方法和 CORS 类似。


## Cookie/Storage/IndexDB

- Cookie

  限制：每个 cookie 不能超过 4kb；每次请求都会携带在 HTTP 头中，过量的 cookie 会影响性能

- Storage

  sessionStorage：只在当前页面有效

  localStorage：只能通过 JavaScript 删除或用户手动删除

  sessionStorage 或 localStorage 发生变化时会触发 `storage` 事件

  限制：每个源 5MB 空间限制

- IndexDB

## 浏览器的渲染过程

  1. 处理 HTML 构建 DOM 树

  2. 处理 CSS 构建 CSSOM 树

  3. 将 DOM 和 CSSOM 合并为渲染树

  4. 根据渲染树布局，计算每个节点的位置

  5. 调用 GPU 绘制，合成图层，显示在屏幕上