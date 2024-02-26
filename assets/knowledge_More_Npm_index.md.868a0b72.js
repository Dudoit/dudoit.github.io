import{_ as e,o as p,c as n,O as a}from"./chunks/framework.51846e02.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/More/Npm/index.md","filePath":"knowledge/More/Npm/index.md"}'),o={name:"knowledge/More/Npm/index.md"},t=a('<h2 id="npm-install" tabindex="-1">npm install <a class="header-anchor" href="#npm-install" aria-label="Permalink to &quot;npm install&quot;">​</a></h2><ul><li><p>全局安装</p><p>npm install webpack -g</p></li><li><p>局部安装</p><p>npm install webpack</p></li></ul><p>如何选择 全局安装 or 局部安装 ？</p><p>局部安装意味着项目中存在着对某个包的依赖，但项目之间依赖的包的版本又可能存在着差异，所以只适用于局部安装</p><p>全局安装通常作为一个工具使用，例如各种的脚手架工具，yarn，等等 并不和某个项目联系</p><p>仅执行 npm install 时，会在项目的 package.json 中寻找依赖(dependencies/devDependencies)进行安装</p><p><code>--save</code> <code>-S</code> -&gt; dependencies</p><p><code>--save-dev</code> <code>-D</code> -&gt; devDependencies</p><p>npm get cache</p><p>npm uninstall package</p><p>npm rebuild</p><p>npm clear cache</p><p>npx 常用于调用项目（node_modules）中某个模块的指令</p><p>./node_modules/.bin/webpack --version</p><p>script: { &quot;webpack&quot;: &quot;webpack --version&quot; }</p><p>npx webpack --version</p>',16),c=[t];function d(s,i,l,r,_,m){return p(),n("div",null,c)}const h=e(o,[["render",d]]);export{k as __pageData,h as default};