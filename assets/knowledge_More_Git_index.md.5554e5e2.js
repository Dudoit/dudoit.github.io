import{_ as s,o as n,c as a,O as l}from"./chunks/framework.51846e02.js";const E=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/More/Git/index.md","filePath":"knowledge/More/Git/index.md"}'),p={name:"knowledge/More/Git/index.md"},o=l(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><h2 id="bash-命令" tabindex="-1">Bash 命令 <a class="header-anchor" href="#bash-命令" aria-label="Permalink to &quot;Bash 命令&quot;">​</a></h2><p>bash 是 linux 系统的命令</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># cd 改变目录  （change directory）</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">images</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#进入images文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#进入上一层目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">#进入用户根目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># tab  自动补全，当我们输命令或者目录很长时，可以使用tab键进行自动补全。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 按两次tab，会把所有符合要求的内容都列出来。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pwd 打印当前目录的路径 （print work directory）</span></span>
<span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ls 展示当前目录列表（list）</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 展示当前目录</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># 展示全部内容，包括隐藏文件</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># 以列表的形式展示内容</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-al</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 以列表的形式展示所有的内容，包括隐藏文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 查看ls所有的参数。</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">images</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 展示images目录下的文件，如果没有写目录，默认展示当前目录。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># clear reset清屏</span></span>
<span class="line"><span style="color:#FFCB6B;">clear</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 清除屏幕内容，滚动条，保留了历史</span></span>
<span class="line"><span style="color:#FFCB6B;">reset</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 重置，历史记录没了。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mkdir  创建一个文件夹 （make directory）</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 创建一个css的文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">js</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 创建了三个文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># rmdir  删除一个空的文件夹（没啥用）</span></span>
<span class="line"><span style="color:#FFCB6B;">rmdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">img</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 删除文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># touch  创建文件</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#创建了一个index.html文件</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css/index.css</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 在css目录下创建index.css文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># rm 删除一个文件获取文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 删除index.html文件</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">js</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 删除空的js文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 递归删除一个文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mv 移动文件（move）</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">js</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 将html文件移动到js文件夹中</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index2.html</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 将index.html重命名为index2.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cp 复制文件（cp）</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index2.html</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 复制index.html文件，命名为index2.html</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css02</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 如果复制的是文件夹，需要使用-r参数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cat 查看文件全部内容</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># less 查看文件部分内容</span></span>
<span class="line"><span style="color:#FFCB6B;">less</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># q退出查看</span></span></code></pre></div><h2 id="git-基本操作" tabindex="-1">Git 基本操作 <a class="header-anchor" href="#git-基本操作" aria-label="Permalink to &quot;Git 基本操作&quot;">​</a></h2><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 初始化 git 仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 git 状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将更改的文件提交到 git 暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交本次全部更改的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将暂存区的文件提交到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看提交日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果只是新建了空的文件夹，文件夹中并没有内容，那么是不会触发 git add . 的</p></div><h2 id="远程仓库" tabindex="-1">远程仓库 <a class="header-anchor" href="#远程仓库" aria-label="Permalink to &quot;远程仓库&quot;">​</a></h2><h3 id="提交远程仓库" tabindex="-1">提交远程仓库 <a class="header-anchor" href="#提交远程仓库" aria-label="Permalink to &quot;提交远程仓库&quot;">​</a></h3><p><code>git push 代码地址/别名 分支</code></p><p>仓库地址：<code>git push git@github.com:Dudoit/resources.git master</code></p><p>别名：<code>git push origin master</code></p><h3 id="从远程仓库更新代码" tabindex="-1">从远程仓库更新代码 <a class="header-anchor" href="#从远程仓库更新代码" aria-label="Permalink to &quot;从远程仓库更新代码&quot;">​</a></h3><p><code>git pull</code></p><h3 id="克隆远程仓库" tabindex="-1">克隆远程仓库 <a class="header-anchor" href="#克隆远程仓库" aria-label="Permalink to &quot;克隆远程仓库&quot;">​</a></h3><p><code>git clone git@github.com:Dudoit/resources.git</code></p><h3 id="设置别名" tabindex="-1">设置别名 <a class="header-anchor" href="#设置别名" aria-label="Permalink to &quot;设置别名&quot;">​</a></h3><p><code>git remote add 仓库别名 仓库地址</code></p><p><code>git remote add origin git@github.com:Dudoit/resources.git</code></p><h2 id="git-分支" tabindex="-1">Git 分支 <a class="header-anchor" href="#git-分支" aria-label="Permalink to &quot;Git 分支&quot;">​</a></h2><p>常用于工作中多任务并行的场景，使用分支可以避免开发相互影响</p><h3 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-label="Permalink to &quot;创建分支&quot;">​</a></h3><p>git branch 分支名称</p><h3 id="查看分支" tabindex="-1">查看分支 <a class="header-anchor" href="#查看分支" aria-label="Permalink to &quot;查看分支&quot;">​</a></h3><p>git branch</p><h3 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h3><p>git checkout 分支名称</p><h3 id="创建并切换分支" tabindex="-1">创建并切换分支 <a class="header-anchor" href="#创建并切换分支" aria-label="Permalink to &quot;创建并切换分支&quot;">​</a></h3><p>git checkout -b 分支名称</p><h3 id="删除分支" tabindex="-1">删除分支 <a class="header-anchor" href="#删除分支" aria-label="Permalink to &quot;删除分支&quot;">​</a></h3><p>git checkout -d 分支名称</p><h3 id="合并分支" tabindex="-1">合并分支 <a class="header-anchor" href="#合并分支" aria-label="Permalink to &quot;合并分支&quot;">​</a></h3><p>git merge 分支名称</p><h2 id="git-忽略文件" tabindex="-1">Git 忽略文件 <a class="header-anchor" href="#git-忽略文件" aria-label="Permalink to &quot;Git 忽略文件&quot;">​</a></h2><p><code>.gitignore</code> 文件</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 忽视idea.txt文件</span></span>
<span class="line"><span style="color:#FFCB6B;">idea.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽视.gitignore文件</span></span>
<span class="line"><span style="color:#FFCB6B;">.gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽视css下的index.js文件</span></span>
<span class="line"><span style="color:#FFCB6B;">css/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽视css下的所有的js文件</span></span>
<span class="line"><span style="color:#FFCB6B;">css/*.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽视css下的所有文件</span></span>
<span class="line"><span style="color:#FFCB6B;">css/*.*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 忽视css文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">css</span></span></code></pre></div><h2 id="配置用户名和邮箱" tabindex="-1">配置用户名和邮箱 <a class="header-anchor" href="#配置用户名和邮箱" aria-label="Permalink to &quot;配置用户名和邮箱&quot;">​</a></h2><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># user.name 用户名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># user.email 邮箱</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dudoit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dudoit@email.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dudoit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dudoit@email.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看配置信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span></span></code></pre></div><h2 id="命令汇总" tabindex="-1">命令汇总 <a class="header-anchor" href="#命令汇总" aria-label="Permalink to &quot;命令汇总&quot;">​</a></h2><h3 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> [url]</span></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> [--global] user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[name]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> [--global] user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[email address]</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h3 id="代码提交" tabindex="-1">代码提交 <a class="header-anchor" href="#代码提交" aria-label="Permalink to &quot;代码提交&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> [file1] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ... -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;"> [file1] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span></code></pre></div><h3 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-label="Permalink to &quot;分支&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> [branch] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--track</span><span style="color:#A6ACCD;"> [branch] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--set-upstream</span><span style="color:#A6ACCD;"> [branch] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry-pick</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--delete</span><span style="color:#A6ACCD;"> [branch-name]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-dr</span><span style="color:#A6ACCD;"> [remote/branch]</span></span></code></pre></div><h3 id="查看信息" tabindex="-1">查看信息 <a class="header-anchor" href="#查看信息" aria-label="Permalink to &quot;查看信息&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> [tag] HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> [tag] HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--follow</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">whatchanged</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortlog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blame</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> [first-branch]...</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">second-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--shortstat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@{0 day ago}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name-only</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> [commit]:</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reflog</span></span></code></pre></div><h3 id="远程同步" tabindex="-1">远程同步 <a class="header-anchor" href="#远程同步" aria-label="Permalink to &quot;远程同步&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> [shortname] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> [remote] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [remote] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [remote] --all</span></span></code></pre></div><h3 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-label="Permalink to &quot;撤销&quot;">​</a></h3><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> [commit] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--keep</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span></code></pre></div>`,53),e=[o];function t(c,i,r,y,C,A){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{E as __pageData,F as default};
