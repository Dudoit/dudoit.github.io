import{_ as e,o as p,c as t,O as o}from"./chunks/framework.51846e02.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"copy-tips.md","filePath":"copy-tips.md"}'),a={name:"copy-tips.md"},s=o('<h2 id="常用格式" tabindex="-1">常用格式 <a class="header-anchor" href="#常用格式" aria-label="Permalink to &quot;常用格式&quot;">​</a></h2><h2 id="牛客面经" tabindex="-1">牛客面经 <a class="header-anchor" href="#牛客面经" aria-label="Permalink to &quot;牛客面经&quot;">​</a></h2><ul><li><p>数字马力（郑州）</p><p><a href="https://www.nowcoder.com/discuss/542420716893831168?sourceSSR=users" target="_blank" rel="noreferrer">https://www.nowcoder.com/discuss/542420716893831168?sourceSSR=users</a></p><p><a href="https://www.nowcoder.com/discuss/544218492749234176?sourceSSR=post" target="_blank" rel="noreferrer">https://www.nowcoder.com/discuss/544218492749234176?sourceSSR=post</a></p></li></ul><p>JSON.stringify() 将对象转换为字符串，JSON.parse() 再将字符串转换为对象，从而实现深拷贝</p><p>缺点：由于 JSON 数据格式自身无法处理函数，所以无法对函数做处理</p><p>浅拷贝是指普通值的修改没有问题，但如果对象发生了改变，由于指向一致，浅拷贝所创建的对象也会改变</p><h2 id="indexeddb" tabindex="-1">IndexedDB <a class="header-anchor" href="#indexeddb" aria-label="Permalink to &quot;IndexedDB&quot;">​</a></h2><p>事务型数据库，基于 JavaScript 面向对象数据库</p><p>和数据库建立连接 open() const dbRequest = indexedDB.open(&quot;user&quot;);</p><p>dbRequest.onerror = () =&gt; { console.log(&quot;打开数据库失败&quot;); }</p><p>dbRequest.onsuccess = () =&gt; { console.log(&quot;打开数据库失败&quot;); }</p><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h2><p>Vue 中 <code>&lt;style&gt;</code> 标签中的 scope 属性为了防止组件间的样式污染</p><p>加上 scope 后，会在元素中添加 data-v-xxxxx 属性</p><p>不希望组件的根节点继承非定义的 attribute，可以在组件中设置 inheritAttrs: false 属性</p><p>教育网站开发</p><p>相关技术：Vue2、JavaScript、Webpack、Element-Plus UI组件库、Axios、阿里云视频模块</p><p>项目介绍：教育备考类 Web 学习平台，对接相应的 App 的业务功能，为用户群体提供更多的学习方式。核心功能与 App 基本一致，提供备考课程的学习，题库练习等功能。</p><p>主要职责：</p><p>负责整个项目的技术选型、前端开发</p><p>WEB 端同样接入了阿里云私有加密技术，降低视频泄露的风险。</p><p>使用 Axios 封装 HTTP 请求，并通过封装请求/响应拦截器，实现网络请求的统一处理和异常处理</p><p>微信小程序开发</p><p>相关技术：微信原生小程序框架、云开发、Vant 组件库</p><p>项目介绍：独立完成两款小程序开发（a.课程打卡类小程序、b.题库练习类小程序）</p><p>a) 打卡小程序：以 30 天为一周期的课程学习，每日分发学习任务。主要功能是完成当日任务并打卡分享的前提下，会在第二天开放新的学习任务。核心模块有：课程学习模块、打卡补卡模块、学员圈子模块、日历模块等。</p><p>b) 题库小程序：一方面对接 APP ，使答题多渠道；另一方面开放免费题库，利用微信社群引流。主要功能是答题练习、分享学习资讯。核心模块有：答题模块、答题数据模块、答题历史模块、错题模块、收藏模块、笔记模块、资讯模块等。该项目主要难点是对题目状态的判断和保存。</p><p>项目亮点：采用骨架屏和图片懒加载，在弱网络环境下提升用户体验。</p><p>内部管理后台开发</p><p>相关技术：Vue3、TypeScript、Vite、Arco-design UI组件库、TinyMCE 富文本编辑器</p><p>项目介绍：公司内部的员工管理协作平台，方便公司人事/主管向下管理成员考勤，业绩，周报等模块；面向其他职能部门的辅助工具，内部学习平台，公告发布。</p><p>主要职责：</p><p>负责项目的技术选型</p><p>引用 Arco-design 组件库，封装表格配置，条件查询，对话框配置，图片上传等功能，减少日常开发 20% 的代码。</p><p>使用 TinyMCE 模块开发富文本编辑器，支持 HTML 格式文本导出、图片粘贴，自动保存等功能，配合后端帮助其他业务节省开发时长。</p><p>负责学习园地的开发，为各部门的会议总结提供线上学习，视频收藏等功能，取消原始线下学习制度，提高学习效率。</p>',36),r=[s];function c(n,i,d,u,l,h){return p(),t("div",null,r)}const x=e(a,[["render",c]]);export{b as __pageData,x as default};