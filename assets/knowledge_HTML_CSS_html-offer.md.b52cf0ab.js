import{_ as t,o as e,c as d,O as o}from"./chunks/framework.51846e02.js";const b=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/HTML+CSS/html-offer.md","filePath":"knowledge/HTML+CSS/html-offer.md"}'),a={name:"knowledge/HTML+CSS/html-offer.md"},c=o('<h1 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h1><h2 id="html5-有哪些新特性、移除了哪些元素" tabindex="-1">html5 有哪些新特性、移除了哪些元素 <a class="header-anchor" href="#html5-有哪些新特性、移除了哪些元素" aria-label="Permalink to &quot;html5 有哪些新特性、移除了哪些元素&quot;">​</a></h2><p><strong>新特性</strong></p><p>语义化扩展标签：<code>header</code>、<code>nav</code>、<code>footer</code>、<code>aside</code>、<code>article</code>、<code>section</code></p><p>音频和视频 API：<code>audio</code>、<code>video</code></p><p>画布 API：<code>Canvas</code></p><p>拖拽和释放 API：<code>Drag and drop</code></p><p>地理定位 API：<code>Geolocation</code></p><p>本地离线存储：<code>localStorage</code>、<code>sessionStorage</code></p><p>表单控件：<code>calendar</code>、<code>date</code>、<code>time</code>、<code>email</code>、<code>url</code>、<code>search</code></p><p>新的技术：<code>webworker</code>、<code>websocket</code></p><p><strong>移除的元素</strong></p><p>纯表现元素：<code>&lt;basefont&gt;</code>、<code>&lt;font&gt;</code> 、 <code>&lt;center&gt;</code> 、 <code>&lt;u&gt;</code> 、 <code>&lt;big&gt;</code>、<code>&lt;strike&gt;</code>、 <code>&lt;tt&gt;</code></p><p>对可用性产生负面影响的元素：<code>&lt;frameset&gt;</code>、<code>&lt;noframes&gt;</code>、<code>&lt;frame&gt;</code></p><h2 id="如何理解-html-结构的语义化" tabindex="-1">如何理解 HTML 结构的语义化 <a class="header-anchor" href="#如何理解-html-结构的语义化" aria-label="Permalink to &quot;如何理解 HTML 结构的语义化&quot;">​</a></h2><p>HTML 的语义化是指合理使用 HTML 标签以传达文档结构和内容的含义，使标签在没有 CSS 样式或脚本的情况下也能够表达出正确的含义和层次。符合 W3C 统一的规范标准，减少差异化。</p><p>方便其他设备解析，屏幕阅读器等。</p><p>通过合理使用语义化的 HTML 结构，可以提升网页的可访问性、可读性和可维护性；同时也让爬虫更好地解析，对 SEO 也有积极影响。</p><h2 id="doctype-的作用" tabindex="-1">Doctype 的作用 <a class="header-anchor" href="#doctype-的作用" aria-label="Permalink to &quot;Doctype 的作用&quot;">​</a></h2><p><code>&lt;!DOCTYPE&gt;</code> 声明于 HTML 文档的第一行，用于定义文档类型；告知浏览器应该用什么文档类型、规范解析此文档。</p><h2 id="html-中的-title-和-alt-属性" tabindex="-1">HTML 中的 title 和 alt 属性 <a class="header-anchor" href="#html-中的-title-和-alt-属性" aria-label="Permalink to &quot;HTML 中的 title 和 alt 属性&quot;">​</a></h2><p>title 属性是可选的，它可以用在除了 <code>&lt;base&gt;</code>，<code>&lt;basefont&gt;</code>，<code>&lt;head&gt;</code>，<code>&lt;html&gt;</code>，<code>&lt;meta&gt;</code>，<code>&lt;param&gt;</code>，<code>&lt;script&gt;</code> 和 <code>&lt;title&gt;</code> 之外的所有标签；通常在鼠标悬停在元素时显示提示信息。</p><p>alt 属性是 img 标签独有的，通常用来在图片无法正常显示时替换的文字，也是必需的，合理的填写可提升网站的可访问性。</p><h2 id="html-中的-data-属性是什么" tabindex="-1">HTML 中的 data-* 属性是什么 <a class="header-anchor" href="#html-中的-data-属性是什么" aria-label="Permalink to &quot;HTML 中的 data-* 属性是什么&quot;">​</a></h2><p>data-* 是用户自定义的属性，可用于存储或展示数据，也可以在 JavaScript 中被访问。</p><h2 id="html-中常见的图片格式以及区别" tabindex="-1">HTML 中常见的图片格式以及区别 <a class="header-anchor" href="#html-中常见的图片格式以及区别" aria-label="Permalink to &quot;HTML 中常见的图片格式以及区别&quot;">​</a></h2><p>常用的图片格式：png、jpg、svg、base64、webp</p><table><thead><tr><th>图片格式</th><th>压缩方式</th><th>特征</th><th>缺点</th></tr></thead><tbody><tr><td>png</td><td>无损压缩</td><td>支持透明、质量高</td><td>体积大</td></tr><tr><td>jpg</td><td>有损压缩</td><td>体积小、加载快</td><td>有损压缩、不支持透明</td></tr><tr><td>gif</td><td>无损压缩</td><td>动态图</td><td>支持颜色少</td></tr><tr><td>svg</td><td>无损压缩</td><td>体积小、可缩放</td><td>渲染成本高</td></tr><tr><td>base64</td><td>无损压缩</td><td>文本文件</td><td>图片大小膨胀</td></tr><tr><td>webp</td><td>有损压缩、无损压缩</td><td>支持透明、动态</td><td>兼容性差</td></tr></tbody></table><p>WebP由Google开发，WebP在保证图像质量的同时减小文件大小，提供更快的加载速度和更低的带宽消耗。WebP图像通常比相同质量的JPEG图像小约26％。</p>',29),l=[c];function r(h,p,i,n,s,m){return e(),d("div",null,l)}const f=t(a,[["render",r]]);export{b as __pageData,f as default};