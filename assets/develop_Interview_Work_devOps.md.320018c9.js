import{_ as s,o as a,c as n,O as l}from"./chunks/framework.51846e02.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"develop/Interview/Work/devOps.md","filePath":"develop/Interview/Work/devOps.md"}'),p={name:"develop/Interview/Work/devOps.md"},e=l(`<h3 id="_1-2-devops开发模式" tabindex="-1">1.2. DevOps开发模式 <a class="header-anchor" href="#_1-2-devops开发模式" aria-label="Permalink to &quot;1.2. DevOps开发模式&quot;">​</a></h3><p>DevOps是Development和Operations两个词的结合，将开发和运维结合起来的模式：</p><h3 id="_1-3-持续集成和持续交付" tabindex="-1">1.3. 持续集成和持续交付 <a class="header-anchor" href="#_1-3-持续集成和持续交付" aria-label="Permalink to &quot;1.3. 持续集成和持续交付&quot;">​</a></h3><p>伴随着DevOps一起出现的两个词就是持续集成和持续交付(部署)：</p><ul><li>CI是Continuous Integration（持续集成）；</li><li>CD是两种翻译：Continuous Delivery（持续交付）或Continuous Deployment（持续部署）；</li></ul><p>持续集成CI：</p><p>持续交付和持续部署：</p><h3 id="_1-4-自动化部署流程" tabindex="-1">1.4. 自动化部署流程 <a class="header-anchor" href="#_1-4-自动化部署流程" aria-label="Permalink to &quot;1.4. 自动化部署流程&quot;">​</a></h3><h2 id="二-购买云服务器" tabindex="-1">二. 购买云服务器 <a class="header-anchor" href="#二-购买云服务器" aria-label="Permalink to &quot;二. 购买云服务器&quot;">​</a></h2><h3 id="_2-1-注册阿里云的账号" tabindex="-1">2.1. 注册阿里云的账号 <a class="header-anchor" href="#_2-1-注册阿里云的账号" aria-label="Permalink to &quot;2.1. 注册阿里云的账号&quot;">​</a></h3><p>云服务器我们可以有很多的选择：阿里云、腾讯云、华为云。</p><ul><li>目前在公司使用比较多的是阿里云；</li><li>我自己之前也一直使用阿里云，也在使用腾讯云；</li><li>之前华为云也有找我帮忙推广他们的活动；</li></ul><p>但是在我们的课程中，我选择目前使用更加广泛的阿里云来讲解：</p><p>我们需要注册阿里云账号</p><ul><li><p><a href="https://aliyun.com/" target="_blank" rel="noreferrer">https://aliyun.com/</a></p></li><li><p>注册即可，非常简单</p></li></ul><h2 id="三-搭建服务器环境" tabindex="-1">三. 搭建服务器环境 <a class="header-anchor" href="#三-搭建服务器环境" aria-label="Permalink to &quot;三. 搭建服务器环境&quot;">​</a></h2><h3 id="_3-1-jenkins自动化部署" tabindex="-1">3.1. jenkins自动化部署 <a class="header-anchor" href="#_3-1-jenkins自动化部署" aria-label="Permalink to &quot;3.1. jenkins自动化部署&quot;">​</a></h3><h4 id="_3-1-1-安装java环境" tabindex="-1">3.1.1. 安装Java环境 <a class="header-anchor" href="#_3-1-1-安装java环境" aria-label="Permalink to &quot;3.1.1. 安装Java环境&quot;">​</a></h4><p>Jenkins本身是依赖Java的，所以我们需要先安装Java环境：</p><ul><li>这里我安装了Java1.8的环境</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java-1.8</span></span>
<span class="line"><span style="color:#FFCB6B;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java-1.8.0-openjdk.x86_64</span></span></code></pre></div><h4 id="_3-1-2-安装jenkins" tabindex="-1">3.1.2. 安装Jenkins <a class="header-anchor" href="#_3-1-2-安装jenkins" aria-label="Permalink to &quot;3.1.2. 安装Jenkins&quot;">​</a></h4><p>因为Jenkins本身是没有在dnf的软件仓库包中的，所以我们需要连接Jenkins仓库：</p><ul><li>wget是Linux中下载文件的一个工具，-O表示输出到某个文件夹并且命名为什么文件；</li><li>rpm：全称为<strong>The RPM Package Manage</strong>，是Linux下一个软件包管理器；</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">–O</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/yum.repos.d/jenkins.repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 导入GPG密钥以确保您的软件合法</span></span>
<span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://pkg.jenkins.io/redhat/jenkins.io.key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key</span></span></code></pre></div><p>编辑一下文件/etc/yum.repos.d/jenkins.repo</p><ul><li>可以通过vim编辑</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[jenkins]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">name=Jenkins-stable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=http://pkg.jenkins.io/redhat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=1</span></span></code></pre></div><p>安装Jenkins</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># --nogpgcheck(可以不加)</span></span></code></pre></div><p>启动Jenkins的服务：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins</span></span></code></pre></div><p>Jenkins默认使用8080端口提供服务，所以需要加入到安全组中：</p><h4 id="_3-1-3-jenkins用户" tabindex="-1">3.1.3. Jenkins用户 <a class="header-anchor" href="#_3-1-3-jenkins用户" aria-label="Permalink to &quot;3.1.3. Jenkins用户&quot;">​</a></h4><p>我们后面会访问centos中的某些文件夹，默认Jenkins使用的用户是 <code>jenkins</code>，可能会没有访问权限，所以我们需要修改一下它的用户：</p><p>修改文件的路径：<code>/etc/sysconfig/jenkins</code></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gtt46oxg53j60n00aw75302.jpg" alt="image-20210825162827962"></p><p>之后需要重启一下Jenkins：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins</span></span></code></pre></div><h4 id="_3-1-4-jenkins配置" tabindex="-1">3.1.4. Jenkins配置 <a class="header-anchor" href="#_3-1-4-jenkins配置" aria-label="Permalink to &quot;3.1.4. Jenkins配置&quot;">​</a></h4><p>打开浏览器，输入：<a href="http://8.134.60.235:8080/" target="_blank" rel="noreferrer">http://8.134.60.235:8080/</a></p><ul><li>注意：你输入自己的IP地址</li></ul><p>获取输入管理员密码：</p><ul><li>在下面的地址中 <code>cat /var/lib/jenkins/secrets/initialAdminPassword</code></li></ul><p>![image-20201203173047824](/Users/coderwhy/Library/Application Support/typora-user-images/image-20201203173047824.png)</p><p>可以安装推荐的插件：</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glbylb26ouj30fb082js7.jpg" alt="安装推荐的插件"></p><p><strong>构建触发器：</strong></p><p>这里的触发器规则是这样的：</p><ul><li>定时字符串从左往右分别是：分 时 日 月 周</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#每半小时构建一次OR每半小时检查一次远程代码分支，有更新则构建</span></span>
<span class="line"><span style="color:#A6ACCD;">H</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#每两小时构建一次OR每两小时检查一次远程代码分支，有更新则构建</span></span>
<span class="line"><span style="color:#A6ACCD;">H H</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#每天凌晨两点定时构建</span></span>
<span class="line"><span style="color:#A6ACCD;">H </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#每月15号执行构建</span></span>
<span class="line"><span style="color:#A6ACCD;">H H </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#工作日，上午9点整执行</span></span>
<span class="line"><span style="color:#A6ACCD;">H </span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#每周1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">，</span><span style="color:#FFCB6B;">从8</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">30开始，</span><span style="color:#FFCB6B;">截止19</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">，每4小时30分构建一次</span></span>
<span class="line"><span style="color:#A6ACCD;">H</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span></span></code></pre></div><p>构建执行的任务：</p><ul><li>查看Node的版本等是否有问题；</li><li>执行 <code>npm install</code> 安装项目的依赖；</li><li>移除原来mall_cms文件的所有内容；</li><li>将打包的dist文件夹内容移动到mall_cms文件夹；</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">构建成功</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除/root/mall_cms文件夹里所有的内容</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/mall_cms/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./dist/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/mall_cms/</span></span></code></pre></div><h2 id="宝塔-docker-版本" tabindex="-1">宝塔 - docker 版本 <a class="header-anchor" href="#宝塔-docker-版本" aria-label="Permalink to &quot;宝塔 - docker 版本&quot;">​</a></h2><p><a href="https://blog.csdn.net/muge1161105403/article/details/124531323" target="_blank" rel="noreferrer">https://blog.csdn.net/muge1161105403/article/details/124531323</a></p><p>安装 <code>Docker 管理器</code></p><ul><li><p>下载 dockers 镜像</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins/jenkins:lts</span></span></code></pre></div></li><li><p>创立jenkins挂载目录并赋权限</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mydata/jenkins_home</span></span>
<span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mydata/jenkins_home/</span></span></code></pre></div></li><li><p>创立并启动Jenkins容器</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-di</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name=jenkins</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#C3E88D;">:8080</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/mydata/jenkins_home:/var/jenkins_home</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins/jenkins:lts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">标识是让</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器在后盾运行</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10240</span><span style="color:#C3E88D;">:8080</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">将镜像的8080端口映射到服务器的10240端口</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10241</span><span style="color:#C3E88D;">:50000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">将镜像的50000端口映射到服务器的10241端口</span></span>
<span class="line"><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/mydata/jenkins_home:/var/jenkins_home目录为容器jenkins工作目录，咱们将硬盘上的一个目录挂载到这个地位，不便后续更新镜像后持续应用原来的工作目录。这里咱们设置的就是下面咱们创立的</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/jenkins_mount目录</span></span>
<span class="line"><span style="color:#FFCB6B;">--name定义一个容器的名字，如果没有指定，那么会主动生成一个随机数字符串当做UUID</span></span></code></pre></div></li><li><p>获取密码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker logs jenkins</span></span></code></pre></div></li></ul><p>jenkins</p><p>用户名：dudoit 密码和宝塔一样</p>`,60),o=[e];function t(c,r,i,C,y,D){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};