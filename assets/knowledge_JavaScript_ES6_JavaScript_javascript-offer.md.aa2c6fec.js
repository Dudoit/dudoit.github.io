import{_ as s,o as a,c as n,O as l}from"./chunks/framework.51846e02.js";const u=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/JavaScript+ES6/JavaScript/javascript-offer.md","filePath":"knowledge/JavaScript+ES6/JavaScript/javascript-offer.md"}'),p={name:"knowledge/JavaScript+ES6/JavaScript/javascript-offer.md"},e=l(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h2 id="javascript-的内置类型有哪些" tabindex="-1">JavaScript 的内置类型有哪些？ <a class="header-anchor" href="#javascript-的内置类型有哪些" aria-label="Permalink to &quot;JavaScript 的内置类型有哪些？&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. 空类型: null</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 未定义: undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 布尔: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 数字: number</span></span>
<span class="line"><span style="color:#A6ACCD;">5. 字符串: string</span></span>
<span class="line"><span style="color:#A6ACCD;">6. 符号: symbol(ES6新增)</span></span>
<span class="line"><span style="color:#A6ACCD;">7. 大整数: bigint</span></span>
<span class="line"><span style="color:#A6ACCD;">8. 对象: object</span></span>
<span class="line"><span style="color:#A6ACCD;">除了对象之外,其他为基本类型.</span></span></code></pre></div><h2 id="typeof-区分类型的原理" tabindex="-1">typeof 区分类型的原理 <a class="header-anchor" href="#typeof-区分类型的原理" aria-label="Permalink to &quot;typeof 区分类型的原理&quot;">​</a></h2><p>原理：不同的对象在底层都表示为二进制，在 Javascript 中二进制前三位存储其类型信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">000: 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">010: 浮点数</span></span>
<span class="line"><span style="color:#A6ACCD;">100:字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">110: 布尔</span></span>
<span class="line"><span style="color:#A6ACCD;">1: 整数</span></span></code></pre></div><p>typeof null 为 &quot;object&quot;，原因是不同的对象在底层都表示为二进制，在Javascript中二进制前三位都为0的话会被判断为Object类型，null的二进制表示全为0，自然前三位也是0，所以执行 typeof 时会返回&quot;object&quot;</p><h2 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*-------------------显式转换---------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">1. toString()     // 转化为字符串，不可以转 null 和 underfined</span></span>
<span class="line"><span style="color:#A6ACCD;">2. String()       // 转换为字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">3. Number()       // 转换为数字，字符串中有一个不是数值的字符，返回NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">4. parseInt()     // 转换为数字，第一个字符不是数字或者符号就返回NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">5. Boolean()      // 转换为布尔值</span></span>
<span class="line"><span style="color:#A6ACCD;">/*-------------------隐式转换(+-)---------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">当 JavaScript 尝试操作一个 &quot;错误&quot; 的数据类型时，会自动转换为 &quot;正确&quot; 的数据类型</span></span>
<span class="line"><span style="color:#A6ACCD;">1. num  +  &quot;&quot;  -&gt; String</span></span>
<span class="line"><span style="color:#A6ACCD;">2. num + bool -&gt; num</span></span>
<span class="line"><span style="color:#A6ACCD;">// 当加号运算符时，String和其他类型时，其他类型都会转为 String；其他情况，都转化为Number类型</span></span>
<span class="line"><span style="color:#A6ACCD;">// 布尔值为 true 时，对应数字为 1；布尔值为 false 时，对应数字为 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3. string - num -&gt; num</span></span>
<span class="line"><span style="color:#A6ACCD;">// 其他运算符时， 基本类型都转换为 Number，String类型的带有字符的比如： </span></span>
<span class="line"><span style="color:#A6ACCD;">4. &#39;a1&#39; - num -&gt; NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">// 与undefined 一样。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/*-------------------隐式转换(逻辑表达式)---------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1. 对象和布尔值比较</span></span>
<span class="line"><span style="color:#A6ACCD;">对象和布尔值进行比较时，对象先转换为字符串，然后再转换为数字，布尔值直接转换为数字</span></span>
<span class="line"><span style="color:#A6ACCD;">[] == true;  //false  []转换为字符串&#39;&#39;,然后转换为数字0,true转换为数字1，所以为false</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 对象和字符串比较</span></span>
<span class="line"><span style="color:#A6ACCD;">对象和字符串进行比较时，对象转换为字符串，然后两者进行比较。</span></span>
<span class="line"><span style="color:#A6ACCD;">[1,2,3] == &#39;1,2,3&#39; // true  [1,2,3]转化为&#39;1,2,3&#39;，然后和&#39;1,2,3&#39;， so结果为true;</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 对象和数字比较</span></span>
<span class="line"><span style="color:#A6ACCD;">对象和数字进行比较时，对象先转换为字符串，然后转换为数字，再和数字进行比较。</span></span>
<span class="line"><span style="color:#A6ACCD;">[1] == 1;  // true  \`对象先转换为字符串再转换为数字，二者再比较 [1] =&gt; &#39;1&#39; =&gt; 1 所以结果为true</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 字符串和数字比较</span></span>
<span class="line"><span style="color:#A6ACCD;">字符串和数字进行比较时，字符串转换成数字，二者再比较。</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;1&#39; == 1 // true</span></span>
<span class="line"><span style="color:#A6ACCD;">5. 字符串和布尔值比较</span></span>
<span class="line"><span style="color:#A6ACCD;">字符串和布尔值进行比较时，二者全部转换成数值再比较。</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;1&#39; == true; // true </span></span>
<span class="line"><span style="color:#A6ACCD;">6. 布尔值和数字比较</span></span>
<span class="line"><span style="color:#A6ACCD;">布尔值和数字进行比较时，布尔转换为数字，二者比较。</span></span>
<span class="line"><span style="color:#A6ACCD;">true == 1 // true</span></span></code></pre></div><h2 id="说说你对-javascript-的作用域的理解。什么是作用域链" tabindex="-1">说说你对 JavaScript 的作用域的理解。什么是作用域链？ <a class="header-anchor" href="#说说你对-javascript-的作用域的理解。什么是作用域链" aria-label="Permalink to &quot;说说你对 JavaScript 的作用域的理解。什么是作用域链？&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">在 JavaScript 中有两种作用域类型：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1. 局部作用域:只能在函数内部访问它们</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 全局作用域:网页的所有脚本和函数都能够访问它</span></span>
<span class="line"><span style="color:#A6ACCD;">JavaScript 拥有函数作用域：每个函数创建一个新的作用域。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">作用域决定了这些变量的可访问性（可见性）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">函数内部定义的变量从函数外部是不可访问的（不可见的）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">作用域链：</span></span>
<span class="line"><span style="color:#A6ACCD;">当查找变量的时候，会先从当前上下文的变量对象中查找，</span></span>
<span class="line"><span style="color:#A6ACCD;">如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。</span></span>
<span class="line"><span style="color:#A6ACCD;">这样由多个执行上下文的变量对象构成的链表就叫做作用域链</span></span></code></pre></div><h2 id="解释下-let-和-const-的块级作用域" tabindex="-1">解释下 let 和 const 的块级作用域 <a class="header-anchor" href="#解释下-let-和-const-的块级作用域" aria-label="Permalink to &quot;解释下 let 和 const 的块级作用域&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*------------let-----------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">1. let声明的仅在块级作用域内有效，</span></span>
<span class="line"><span style="color:#A6ACCD;">2. let不会发生变量提升的现象，所以一定要在定义后使用，否则报错。</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 暂时性死区：只要块级作用域内存在let命令，它所声明的变量就绑定这个区域，不再受外部影响。</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 不允许重复声明，let不允许在相同作用域内，重复声明同一个变量：</span></span>
<span class="line"><span style="color:#A6ACCD;">/*-----------const----------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">1. 声明一个只读的常量。一旦声明，常量的值就不能改变。</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 一旦声明，就要立即初始化，否则也报错。</span></span>
<span class="line"><span style="color:#A6ACCD;">3. const命令声明的常量也不提升，同样存在暂时性死区，只能在声明的位置后使用。</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 也不可以重复声明。</span></span></code></pre></div>`,13),o=[e];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
