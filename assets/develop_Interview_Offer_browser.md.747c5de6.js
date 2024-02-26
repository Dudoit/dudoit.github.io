import{_ as e,o,c as a,O as l}from"./chunks/framework.51846e02.js";const _=JSON.parse('{"title":"浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"develop/Interview/Offer/browser.md","filePath":"develop/Interview/Offer/browser.md"}'),p={name:"develop/Interview/Offer/browser.md"},t=l('<h1 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h1><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2><ul><li><p>什么跨域</p><p>跨域是指 <span class="p-txt">浏览器</span> 拒绝执行其他网站的脚本。</p><p>这是浏览器自身的 <strong>同源策略</strong> 导致的，目的是为了减少可能被攻击的媒介。</p></li><li><p>常见的跨域场景</p><p>不同端口、不同协议、不同域名 会导致跨域</p></li><li><p>跨域的解决方案 ⭐⭐⭐</p><ul><li>CORS 跨域资源共享</li></ul><p>CORS 是一种基于 HTTP 头的机制，允许服务器标识自己以外的其它源（域、协议或端口），使浏览器允许这些源访问加载自己的资源</p><p>开启 CORS 的关键主要是通过服务端设置 <code>Access-Control-Allow-Origin</code> 的值，例如：</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.example.com</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">CORS &amp; JSONP</p><p>在面试中，CORS 经常会拿来与 JSONP 做比较，它们两个的使用目的相同，但是 CORS 比 JSONP 更强大，对比现在使用的频率就知道了。其次，在请求方式上，JSONP 仅支持 GET 请求，而 CORS 支持所有类型的 HTTP 请求；在处理方式上，使用CORS，前端不需要额外的改动；在兼容性方面，JSONP 会更胜一筹</p></div><ul><li>Node 代理</li></ul><p>利用服务端没有同源策略的条件，Node 代理转发请求。如果代理服务器不同域、不同端口等，依然需要开启 CORS。</p><ul><li>Nginx 反向代理</li></ul><p>一般会在项目最终上线时，在 Nginx 服务器上开启。开启方法和 CORS 类似。</p></li></ul><h2 id="cookie-storage-indexdb" tabindex="-1">Cookie/Storage/IndexDB <a class="header-anchor" href="#cookie-storage-indexdb" aria-label="Permalink to &quot;Cookie/Storage/IndexDB&quot;">​</a></h2><ul><li><p>Cookie</p><p>限制：每个 cookie 不能超过 4kb；每次请求都会携带在 HTTP 头中，过量的 cookie 会影响性能</p></li><li><p>Storage</p><p>sessionStorage：只在当前页面有效</p><p>localStorage：只能通过 JavaScript 删除或用户手动删除</p><p>sessionStorage 或 localStorage 发生变化时会触发 <code>storage</code> 事件</p><p>限制：每个源 5MB 空间限制</p></li><li><p>IndexDB</p></li></ul><h2 id="浏览器的渲染过程" tabindex="-1">浏览器的渲染过程 <a class="header-anchor" href="#浏览器的渲染过程" aria-label="Permalink to &quot;浏览器的渲染过程&quot;">​</a></h2><ol><li><p>处理 HTML 构建 DOM 树</p></li><li><p>处理 CSS 构建 CSSOM 树</p></li><li><p>将 DOM 和 CSSOM 合并为渲染树</p></li><li><p>根据渲染树布局，计算每个节点的位置</p></li><li><p>调用 GPU 绘制，合成图层，显示在屏幕上</p></li></ol>',7),s=[t];function i(r,n,c,d,S,u){return o(),a("div",null,s)}const C=e(p,[["render",i]]);export{_ as __pageData,C as default};
