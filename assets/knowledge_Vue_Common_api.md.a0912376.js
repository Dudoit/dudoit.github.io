import{_ as s,o as n,c as a,O as o}from"./chunks/framework.51846e02.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/Vue/Common/api.md","filePath":"knowledge/Vue/Common/api.md"}'),e={name:"knowledge/Vue/Common/api.md"},p=o(`<h2 id="defineasynccomponent-异步组件" tabindex="-1">defineAsyncComponent() 异步组件 <a class="header-anchor" href="#defineasynccomponent-异步组件" aria-label="Permalink to &quot;defineAsyncComponent() 异步组件&quot;">​</a></h2><p>异步组件，它在运行时是懒加载的。</p><p>利于 webpack 分包，优化首屏加载速度</p><div class="language-Vue"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineAsyncComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> AsyncHome </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineAsyncComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,4),l=[p];function t(c,r,y,D,i,C){return n(),a("div",null,l)}const d=s(e,[["render",t]]);export{A as __pageData,d as default};