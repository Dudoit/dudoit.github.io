import{_ as a,o as s,c as n,O as l}from"./chunks/framework.51846e02.js";const d=JSON.parse('{"title":"JavaScript 中神奇的操作","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/JavaScript+ES6/JavaScript/magic.md","filePath":"knowledge/JavaScript+ES6/JavaScript/magic.md"}'),e={name:"knowledge/JavaScript+ES6/JavaScript/magic.md"},o=l(`<h1 id="javascript-中神奇的操作" tabindex="-1">JavaScript 中神奇的操作 <a class="header-anchor" href="#javascript-中神奇的操作" aria-label="Permalink to &quot;JavaScript 中神奇的操作&quot;">​</a></h1><h2 id="一元加减操作符" tabindex="-1">一元加减操作符 <a class="header-anchor" href="#一元加减操作符" aria-label="Permalink to &quot;一元加减操作符&quot;">​</a></h2><p>一元加减操作符 应用到 非数值，其效果与 Number() 转型函数一样</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> numberValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> stringValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">max</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> booleanValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dateValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Date</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">numberValue </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">stringValue </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">booleanValue </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dateValue </span><span style="color:#676E95;font-style:italic;">// 1694487802624</span></span></code></pre></div>`,4),p=[o];function t(c,r,i,D,y,C){return s(),n("div",null,p)}const F=a(e,[["render",t]]);export{d as __pageData,F as default};