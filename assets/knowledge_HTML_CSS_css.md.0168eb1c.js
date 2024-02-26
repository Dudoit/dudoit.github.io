import{_ as s,o as a,c as n,O as l}from"./chunks/framework.51846e02.js";const A=JSON.parse('{"title":"CSS 理解","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/HTML+CSS/css.md","filePath":"knowledge/HTML+CSS/css.md"}'),p={name:"knowledge/HTML+CSS/css.md"},o=l(`<h1 id="css-理解" tabindex="-1">CSS 理解 <a class="header-anchor" href="#css-理解" aria-label="Permalink to &quot;CSS 理解&quot;">​</a></h1><h2 id="层叠" tabindex="-1">层叠 <a class="header-anchor" href="#层叠" aria-label="Permalink to &quot;层叠&quot;">​</a></h2><p>CSS - Cascading Style Sheets 层叠样式表</p><ul><li>Cascading 层叠</li><li>Style Sheets 样式表</li></ul><p>样式表用于规定声明的集合，声明中可能会产生冲突；层叠 的作用就是 <span class="p-b-txt">解决冲突</span></p><p><strong>层叠三大规则</strong></p><p>样式表来源 &gt; 选择器优先级 &gt; 源码位置</p><div class="info custom-block"><p class="custom-block-title">好的代码 📝</p><ol><li>选择器尽量少用 id （不利于 CSS 的复用；且优先级较高不利于后续样式覆盖）</li><li>尽量不要用 !important （后续的扩展和灵活性降低）</li><li>自己编写的样式加载在引用库后面 （保证自己的样式生效）</li></ol></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><p><span class="p-txt">大部分具有继承特性的属性跟文本相关</span></p><p>color、font、font-family、font-size、font-weight、font-style、line-height、letter-spacing、text-align、text-indent、white-space</p><ul><li>inherit 关键字</li></ul><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="css-的值和单位" tabindex="-1">CSS 的值和单位 <a class="header-anchor" href="#css-的值和单位" aria-label="Permalink to &quot;CSS 的值和单位&quot;">​</a></h2><h2 id="特殊样式" tabindex="-1">特殊样式 <a class="header-anchor" href="#特殊样式" aria-label="Permalink to &quot;特殊样式&quot;">​</a></h2><ul><li>三角形</li></ul><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">triangle-bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#A6ACCD;"> solid transparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#A6ACCD;"> solid pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>固定比例的矩形</li></ul><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ratio-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* width 是父元素宽度的 100% */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* padding-bottom 是父元素宽度的 75% */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">75%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>渐变边框</li></ul><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">awesome-border</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#A6ACCD;"> solid transparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-clip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> padding-box</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> padding-box</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">135deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">e941ab</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">a557ef</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="常规流布局" tabindex="-1">常规流布局 <a class="header-anchor" href="#常规流布局" aria-label="Permalink to &quot;常规流布局&quot;">​</a></h2><ul><li><p>块级格式化上下文</p></li><li><p>内联格式化上下文</p></li></ul><h2 id="z-index" tabindex="-1">z-index <a class="header-anchor" href="#z-index" aria-label="Permalink to &quot;z-index&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">好的代码 📝</p><p>使用 css 变量管理 z-index 的值： --z-loading-indicator: 100; --z-nav-menu: 200; --z-dropdown-menu: 300; --z-model-backdrop: 400; --z-model-body: 410;</p></div><h2 id="响应式设计" tabindex="-1">响应式设计 <a class="header-anchor" href="#响应式设计" aria-label="Permalink to &quot;响应式设计&quot;">​</a></h2><p>响应式应遵循的原则：</p><ol><li>优选流式布局，如百分比、flex、grid</li><li>使用响应式图片，匹配尺寸，节省带宽</li><li>使用媒体查询为不同的设备类型做适配</li><li>给移动端设备设置简单、统一的视口</li><li>使用相对长度，em、rem、vw 作为长度度量</li></ol><h3 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h3><p>媒体查询允许某些样式只在页面 <span class="p-txt">满足特定条件时</span> 才生效</p><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">320px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div><h3 id="相对长度的使用" tabindex="-1">相对长度的使用 <a class="header-anchor" href="#相对长度的使用" aria-label="Permalink to &quot;相对长度的使用&quot;">​</a></h3><ul><li><p><strong>em</strong></p><p>在非 font-size 属性中使用是相对于自身的字体大小</p><p>在 font-size 上使用是相对于父元素的字体大小（由于 font-size 的继承特性，多重嵌套。通常不这么使用）</p><p>应用场景：展示区域根据字号的不同，做出缩放调整</p><div class="language-CSS"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;div class=&quot;font-small paragraph&quot;&gt;&lt;/div&gt; */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;div class=&quot;font-large paragraph&quot;&gt;&lt;/div&gt; */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">font-small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">font-large</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">paragraph</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p><strong>rem</strong></p></li></ul><p>根元素字体大小，通过 伪类:root 或者 html选择器 选定</p><p>VScode 插件 - px2rem ：利用插件指令完成全局转换（设计图默认 750px，转换基准 75px）</p><ul><li><strong>vw &amp; vh</strong></li></ul><p>需要确保 <code>scale=1</code> ，保持视口和屏幕宽度一致</p><div class="language-HTML"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>VScode 插件 - px2vw ：利用插件指令完成全局转换（设计图默认 750px）</p><h2 id="css-预处理器" tabindex="-1">CSS 预处理器 <a class="header-anchor" href="#css-预处理器" aria-label="Permalink to &quot;CSS 预处理器&quot;">​</a></h2><p>使用 CSS 预处理器的本质是为了 <span class="p-txt">提高研发效率</span></p><ul><li><p>预处理器如何提高研发效率？</p><ol><li><p>设置自定义变量：提高可复用性</p></li><li><p>嵌套、作用域：避免全局污染、结构层次清晰、减少复杂组合选择器</p></li><li><p>mixins、继承：提高可复用、可维护性</p></li><li><p>操作符、条件/循环语句、自定义函数：提高编程能力、增加灵活性</p></li></ol><div class="language-LESS"><button title="Copy Code" class="copy"></button><span class="lang">LESS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">primary-font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 默认字体大小 */</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">primary-blue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #245bdb</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 默认蓝色 */</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">54px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 默认字体大小 */</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 使用变量和逻辑语句 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 使用变量 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">primary-font-size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">primary-blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  .</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-desc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">font-size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-SCSS"><button title="Copy Code" class="copy"></button><span class="lang">SCSS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">column-width</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$col</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $total</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">percentage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$col</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">$total</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">col-1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">column-width</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* width: 10% */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">col-3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">column-width</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* width: 30% */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul><h2 id="css-后处理器" tabindex="-1">CSS 后处理器 <a class="header-anchor" href="#css-后处理器" aria-label="Permalink to &quot;CSS 后处理器&quot;">​</a></h2><p>常见的后处理器框架 postcss</p><h2 id="css-模块化" tabindex="-1">CSS 模块化 <a class="header-anchor" href="#css-模块化" aria-label="Permalink to &quot;CSS 模块化&quot;">​</a></h2><p>CSS Module 是为了解决 全局污染问题，本质上是保证样式集合对应的选择器是唯一的。常见的方案：</p><ul><li><p>BEM 命名规范</p><p>通过 <code>.header-btn__prev</code>、<code>.header-btn__next</code> 的命名规范约束开发者</p></li><li><p>vue-loader 的 scoped</p><p>通过编译，在元素上添加 data-xxx 的唯一属性，CSS 属性添加选择器 <code>[data-xxx]</code> 的方式实现样式隔离</p></li><li><p>CSS Modules</p><p>通过编译的方式，转换唯一命名（css-loader、postcss-module）</p></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><p>掘金 - 字节前端训练营</p><p><a href="https://bytedance.feishu.cn/file/BsO2btmpEoCxgcxu4DwcwuM0nfg" target="_blank" rel="noreferrer">https://bytedance.feishu.cn/file/BsO2btmpEoCxgcxu4DwcwuM0nfg</a></p>`,50),e=[o];function t(c,r,D,C,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
