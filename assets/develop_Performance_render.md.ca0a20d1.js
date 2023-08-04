import{_ as e,o as a,c as s,O as t}from"./chunks/framework.a3f41f98.js";const C=JSON.parse('{"title":"渲染优化","description":"","frontmatter":{},"headers":[],"relativePath":"develop/Performance/render.md","filePath":"develop/Performance/render.md"}'),o={name:"develop/Performance/render.md"},p=t('<h1 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h1><h2 id="服务端渲染" tabindex="-1">服务端渲染 <a class="header-anchor" href="#服务端渲染" aria-label="Permalink to &quot;服务端渲染&quot;">​</a></h2><h2 id="浏览器渲染" tabindex="-1">浏览器渲染 <a class="header-anchor" href="#浏览器渲染" aria-label="Permalink to &quot;浏览器渲染&quot;">​</a></h2><p><strong>CSS 优化</strong></p><p>CSS 引擎查找样式表，对每条规则都按从右到左的顺序去匹配：</p><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">myList</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div><p>这样的写法其实很常见。大家平时习惯了从左到右阅读的文字阅读方式，会本能地以为浏览器也是从左到右匹配 CSS 选择器的，因此会推测这个选择器并不会费多少力气：#myList 是一个 id 选择器，它对应的元素只有一个，查找起来应该很快。定位到了 myList 元素，等于是缩小了范围后再去查找它后代中的 li 元素，没毛病。</p><p>事实上，CSS 选择符是从右到左进行匹配的。我们这个看似“没毛病”的选择器，实际开销相当高：浏览器必须遍历页面上每个 li 元素，并且每次都要去确认这个 li 元素的父元素 id 是不是 myList，你说坑不坑！</p><p>根据上面的分析，我们至少可以总结出如下性能提升的方案：</p><p>避免使用通配符，只对需要用到的元素进行选择。</p><p>关注可以通过继承实现的属性，避免重复匹配重复定义。</p><p>少用标签选择器，用类选择器替代。</p><p>减少嵌套，尽可能使用类来关联每一个标签元素。</p><p>DOM 和 CSSOM 合力才能构建渲染树。这一点会给性能造成严重影响：默认情况下，CSS 是阻塞的资源。浏览器在构建 CSSOM 的过程中，不会渲染任何已处理的内容。只有当我们开始解析 HTML 后、解析到 link 标签或者 style 标签时，CSS 才登场，CSSOM 的构建才开始。</p><p>我们可以做到</p><p>将 CSS 放在 head 标签里</p><p>启用 CDN 实现静态资源加载速度的优化</p>',17),n=[p];function r(l,i,c,d,S,_){return a(),s("div",null,n)}const m=e(o,[["render",r]]);export{C as __pageData,m as default};
