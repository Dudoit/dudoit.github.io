## 常用格式

<span class="blue-text"></span>
<span class="p-txt"></span>

1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟

:::info 小知识点 💡
一些文字
:::

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## JSON

JSON 可用于做深拷贝

JSON.stringify() 将对象转换为字符串，JSON.parse() 再将字符串转换为对象，从而实现深拷贝

缺点：由于 JSON 数据格式自身无法处理函数，所以无法对函数做处理

浅拷贝是指普通值的修改没有问题，但如果对象发生了改变，由于指向一致，浅拷贝所创建的对象也会改变

## IndexedDB

事务型数据库，基于 JavaScript 面向对象数据库

和数据库建立连接 open()
const dbRequest = indexedDB.open("user");

dbRequest.onerror = () => {
  console.log("打开数据库失败");
}

dbRequest.onsuccess = () => {
  console.log("打开数据库失败");
}

## Vue

Vue 中 `<style>` 标签中的 scope 属性为了防止组件间的样式污染

加上 scope 后，会在元素中添加 data-v-xxxxx 属性


不希望组件的根节点继承非定义的 attribute，可以在组件中设置 inheritAttrs: false 属性

```
<div>
  <h1 :class="$attrs.class"></h1>
  <!-- 或 -->
  <h1 v-bind="$attrs"></h1>
</div>
```


动态样式绑定
```
:class="active: currentIndex === index"
```

动态组件 component


## m

当前：2002

住：
- 郑州：106
- 大连：608
- 哈尔滨：622 + 666

## 综合业务

新增功能时，对业务需求进行分析，是否为影响原本业务，类似广告的功能

如果是需要实现用户可选工具，有选项可关闭其内容

08:30 - 10:00 Other
10:00 - 11:00 Study
11:00 - 12:00 Work

14:00 - 15:00 Other
15:00 - 16:30 Study
16:30 - 18:00 Work


APP 开发

相关技术：APICloud 的 AVM 多端框架、原生HTML、JavaScript

项目介绍：教育备考类 App，核心业务是提供备考课程的学习和下载，题库练习等功能。

项目亮点：起初 App 下载的视频文件能够在设备的文件管理中找到，无法保证视频的安全性。首先采用了 HLS 加密方式，验证过程中发现解密需要通过阿里云提供的接口获取密钥，而密钥有被窃取的可能，仍可以通过技术方式还原文件，以及无法真正实现离线播放。采用阿里云私有加密，将原本使用URL地址下载视频的方式替换为阿里云私有加密的方式，这个方式会提前下载一个加密文件在用户的手机上，不仅在线上播放时隐藏了接口中的视频文件地址，模块通过访问下载到本地的加密文件，将本地文件加密下载及解密播放。以及通过添加水印（用户ID）等方式，有效降低了视频泄露和盗链的问题。

开发和重构多项 APP，均已上架应用商店。对各大应用平台的规则和政策有一定了解，排查应用条件，确保应用的上线情况。

教育网站开发

相关技术：Vue2、JavaScript、Webpack、Element-Plus UI组件库、Axios、阿里云视频模块

项目介绍：教育备考类 Web 学习平台，对接相应的 App 的业务功能，为用户群体提供更多的学习方式。核心功能与 App 基本一致，提供备考课程的学习，题库练习等功能。

主要职责：

WEB 端同样接入了阿里云私有加密技术，降低了视频泄露的风险。

使用 Axios 封装 HTTP 请求，并通过封装请求/响应拦截器，实现网络请求的统一处理和异常处理

微信小程序开发

相关技术：微信原生小程序框架、云开发、Vant 组件库

项目介绍：独立完成两款小程序开发（a.课程打卡类小程序、b.题库练习类小程序）

a) 打卡小程序：以 30 天为一周期的课程学习，每日分发学习任务。主要功能是完成当日任务并打卡分享的前提下，会在第二天开放新的学习任务。核心模块有：课程学习模块、打卡补卡模块、学员圈子模块、日历模块等。

b) 题库小程序：一方面对接 APP ，使答题多渠道；另一方面开放免费题库，利用微信社群引流。主要功能是答题练习、分享学习资讯。核心模块有：答题模块、答题数据模块、答题历史模块、错题模块、收藏模块、笔记模块、资讯模块等。该项目主要难点是对题目状态的判断和保存。

项目亮点：采用骨架屏和图片懒加载，在弱网络环境下提升用户体验。

内部管理后台开发

相关技术：Vue3、TypeScript、Vite、Arco-design UI组件库、TinyMCE 富文本编辑器

项目介绍：公司内部的员工管理协作平台，方便公司人事/主管向下管理成员考勤，业绩，周报等模块；面向其他职能部门的辅助工具，内部学习平台，公告发布。

主要职责：

负责项目的技术选型

引入 Arco-design 组件库，封装条件查询、表格配置，分页查询，对话框配置，图片上传等功能，减少日常开发 20% 的代码。

使用 TinyMCE 模块开发富文本编辑器，支持 HTML 格式文本导出、图片粘贴，自动保存等功能，配合后端帮助其他业务节省开发时长。

SEO 网站开发

相关技术：HTML、CSS、JavaScript、媒体查询、SEO

项目介绍：响应式的课程产品官网，为产品提供内容展示、购买通道、学员评价。

项目亮点：通过优化网站结构、内容，并结合相关站长工具，一周内将未收录网站提升至百度首页


## 提问

- APP 开发

  1. apicloud 是什么，avm 框架是什么？
  2. 为什么选择使用 apicloud
  3. 为什么还要用 html 开发
  4. 什么是 hls 技术，如何加密？为什么会泄露密钥
  5. 阿里云私有加密的过程


## 其他


5 的 2 次方 -> 5 ** 2

一个对象的方法例如 const obj = { get: () => {} } ，obj.get() 的上层作用域是外层作用域，

## IOS 的存储目录

IOS 为了安全性， 把每个应用都放在一个沙盒中

`Documents` 存储长久保存的数据 不建议存储大文件 (iTunes会自动备份该目录)
`Library/Caches` 一般存储的是缓存文件，例如图片视频等，此目录下的文件不会再应用程序退出时删除。在手机备份的时候，iTunes不会备份该目录。例如音频,视频等文件存放其中
`Libray/Preference` 存储偏好设置,比如:应用程序是否是第一次启动、保存用户名和密码.我们最常用这个 (iTunes会自动备份该目录)，我们不应该直接在这里创建文件，而是需要通过NSUserDefault这个类来访问应用程序的偏好设置。
`tem` 临时文件目录，在程序重新运行的时候，和开机的时候，会清空tmp文件夹。

缓存在iOS设备的/Library/Caches目录中的文件通常由相应的应用程序负责管理和清理。以下情况下，应用程序可能会自动删除该目录中的文件：

1. 应用程序主动进行缓存管理：某些应用程序在使用过程中会自动清理缓存文件，以保持设备的存储空间。这些应用程序通常会在后台定期清理，或者根据一定的缓存空间限制自动删除旧的缓存文件。

2. 设备存储空间不足：当iOS设备的存储空间不足时，系统会自动清理缓存文件以释放空间。这通常会涉及到清理应用程序的缓存文件，其中包括/Library/Caches目录中的文件。
<!-- 我们在一起的这一年中，我始终觉得自己不够成熟，不敢对你对我们的以后许下承诺 -->
<!-- 但我们都在慢慢长大，如果我还不能独当一面， -->
<!-- 再见的时候，我不知道我会不会还是现在的样子，你还会不会喜欢我 -->
<!-- 但是，我会努力变好，且照顾好自己。希望你也一样 -->


ios 5.0.1版将提供一个新的功能，可对一个文件设定一个属性，告诉系统即使在低存储的情况下，对这个文件也不会进行删除，这样的文件在用户备份到iCloud或iTunes的时候也不会被备份，所以需要开发人员手动进行管理。

```Objective-C
#include <sys/xattr.h>
- (void) AddSkipBackupAttributeToFile: (NSURL*) url
{
  u_int8_t b = 1;
  setxattr([[url path] fileSystemRepresentation], "com.apple.Mobile
Backup", &b, 1, 0, 0);
}
```

IOS 为了安全性， 把每个应用都放在一个沙盒中

`Documents` 存储长久保存的数据 不建议存储大文件 (iTunes会自动备份该目录)
`Library/Caches` 一般存储的是缓存文件，例如图片视频等，此目录下的文件不会再应用程序退出时删除。在手机备份的时候，iTunes不会备份该目录。例如音频,视频等文件存放其中
`Libray/Preference` 存储偏好设置,比如:应用程序是否是第一次启动、保存用户名和密码.我们最常用这个 (iTunes会自动备份该目录)，我们不应该直接在这里创建文件，而是需要通过NSUserDefault这个类来访问应用程序的偏好设置。
`tem` 临时文件目录，在程序重新运行的时候，和开机的时候，会清空tmp文件夹。