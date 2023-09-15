import{_ as s,o as a,c as n,O as l}from"./chunks/framework.a3f41f98.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"m-tips.md","filePath":"m-tips.md"}'),o={name:"m-tips.md"},p=l(`<h2 id="常用格式" tabindex="-1">常用格式 <a class="header-anchor" href="#常用格式" aria-label="Permalink to &quot;常用格式&quot;">​</a></h2><p>1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟</p><div class="info custom-block"><p class="custom-block-title">小知识点 💡</p><p>一些文字</p></div><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h2><p>JSON 可用于做深拷贝</p><p>JSON.stringify() 将对象转换为字符串，JSON.parse() 再将字符串转换为对象，从而实现深拷贝</p><p>缺点：由于 JSON 数据格式自身无法处理函数，所以无法对函数做处理</p><p>浅拷贝是指普通值的修改没有问题，但如果对象发生了改变，由于指向一致，浅拷贝所创建的对象也会改变</p><h2 id="indexeddb" tabindex="-1">IndexedDB <a class="header-anchor" href="#indexeddb" aria-label="Permalink to &quot;IndexedDB&quot;">​</a></h2><p>事务型数据库，基于 JavaScript 面向对象数据库</p><p>和数据库建立连接 open() const dbRequest = indexedDB.open(&quot;user&quot;);</p><p>dbRequest.onerror = () =&gt; { console.log(&quot;打开数据库失败&quot;); }</p><p>dbRequest.onsuccess = () =&gt; { console.log(&quot;打开数据库失败&quot;); }</p><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h2><p>Vue 中 <code>&lt;style&gt;</code> 标签中的 scope 属性为了防止组件间的样式污染</p><p>加上 scope 后，会在元素中添加 data-v-xxxxx 属性</p><p>不希望组件的根节点继承非定义的 attribute，可以在组件中设置 inheritAttrs: false 属性</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;h1 :class=&quot;$attrs.class&quot;&gt;&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 或 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;h1 v-bind=&quot;$attrs&quot;&gt;&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><p>动态样式绑定</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:class=&quot;active: currentIndex === index&quot;</span></span></code></pre></div><p>动态组件 component</p><h2 id="m" tabindex="-1">m <a class="header-anchor" href="#m" aria-label="Permalink to &quot;m&quot;">​</a></h2><p>当前：2002</p><p>住：</p><ul><li>郑州：106</li><li>大连：608</li><li>哈尔滨：622 + 666</li></ul><h2 id="综合业务" tabindex="-1">综合业务 <a class="header-anchor" href="#综合业务" aria-label="Permalink to &quot;综合业务&quot;">​</a></h2><p>新增功能时，对业务需求进行分析，是否为影响原本业务，类似广告的功能</p><p>如果是需要实现用户可选工具，有选项可关闭其内容</p><p>web开发做题系统 缓解移动端压力 视频加密</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>5 的 2 次方 -&gt; 5 ** 2</p><p>一个对象的方法例如 const obj = { get: () =&gt; {} } ，obj.get() 的上层作用域是外层作用域，</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">oo</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// window</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>可以通过 <code>函数.length</code> 属性查看函数所需要接收的参数</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 5</span></span></code></pre></div><h2 id="ios-的存储目录" tabindex="-1">IOS 的存储目录 <a class="header-anchor" href="#ios-的存储目录" aria-label="Permalink to &quot;IOS 的存储目录&quot;">​</a></h2><p>IOS 为了安全性， 把每个应用都放在一个沙盒中</p><p><code>Documents</code> 存储长久保存的数据 不建议存储大文件 (iTunes会自动备份该目录) <code>Library/Caches</code> 一般存储的是缓存文件，例如图片视频等，此目录下的文件不会再应用程序退出时删除。在手机备份的时候，iTunes不会备份该目录。例如音频,视频等文件存放其中 <code>Libray/Preference</code> 存储偏好设置,比如:应用程序是否是第一次启动、保存用户名和密码.我们最常用这个 (iTunes会自动备份该目录)，我们不应该直接在这里创建文件，而是需要通过NSUserDefault这个类来访问应用程序的偏好设置。 <code>tem</code> 临时文件目录，在程序重新运行的时候，和开机的时候，会清空tmp文件夹。</p><p>缓存在iOS设备的/Library/Caches目录中的文件通常由相应的应用程序负责管理和清理。以下情况下，应用程序可能会自动删除该目录中的文件：</p><ol><li><p>应用程序主动进行缓存管理：某些应用程序在使用过程中会自动清理缓存文件，以保持设备的存储空间。这些应用程序通常会在后台定期清理，或者根据一定的缓存空间限制自动删除旧的缓存文件。</p></li><li><p>设备存储空间不足：当iOS设备的存储空间不足时，系统会自动清理缓存文件以释放空间。这通常会涉及到清理应用程序的缓存文件，其中包括/Library/Caches目录中的文件。</p></li></ol><p>ios 5.0.1版将提供一个新的功能，可对一个文件设定一个属性，告诉系统即使在低存储的情况下，对这个文件也不会进行删除，这样的文件在用户备份到iCloud或iTunes的时候也不会被备份，所以需要开发人员手动进行管理。</p><div class="language-Objective-C"><button title="Copy Code" class="copy"></button><span class="lang">Objective-C</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">sys/xattr.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> AddSkipBackupAttributeToFile: </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">NSURL</span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;"> url</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">u_int8_t</span><span style="color:#F07178;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setxattr</span><span style="color:#89DDFF;">([[</span><span style="color:#F07178;">url </span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fileSystemRepresentation</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.apple.Mobile</span></span>
<span class="line"><span style="color:#C3E88D;">Backup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,43),t=[p];function e(c,r,i,y,F,D){return a(),n("div",null,t)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};
