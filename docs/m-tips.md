## 常用格式

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

web开发做题系统 缓解移动端压力
视频加密

## 其他

5 的 2 次方 -> 5 ** 2

一个对象的方法例如 const obj = { get: () => {} } ，obj.get() 的上层作用域是外层作用域，

```JavaScript
function foo() {
  function oo() {
    console.log(this)
  }
}

const obj = {
  get: () => {
    console.log(this) // window
  }
}
```

可以通过 `函数.length` 属性查看函数所需要接收的参数
```JavaScript
function foo(a, b, c, d) {}
console.log(foo.length); // 5
```

## IOS 的存储目录

IOS 为了安全性， 把每个应用都放在一个沙盒中

`Documents` 存储长久保存的数据 不建议存储大文件 (iTunes会自动备份该目录)
`Library/Caches` 一般存储的是缓存文件，例如图片视频等，此目录下的文件不会再应用程序退出时删除。在手机备份的时候，iTunes不会备份该目录。例如音频,视频等文件存放其中
`Libray/Preference` 存储偏好设置,比如:应用程序是否是第一次启动、保存用户名和密码.我们最常用这个 (iTunes会自动备份该目录)，我们不应该直接在这里创建文件，而是需要通过NSUserDefault这个类来访问应用程序的偏好设置。
`tem` 临时文件目录，在程序重新运行的时候，和开机的时候，会清空tmp文件夹。

缓存在iOS设备的/Library/Caches目录中的文件通常由相应的应用程序负责管理和清理。以下情况下，应用程序可能会自动删除该目录中的文件：

1. 应用程序主动进行缓存管理：某些应用程序在使用过程中会自动清理缓存文件，以保持设备的存储空间。这些应用程序通常会在后台定期清理，或者根据一定的缓存空间限制自动删除旧的缓存文件。

2. 设备存储空间不足：当iOS设备的存储空间不足时，系统会自动清理缓存文件以释放空间。这通常会涉及到清理应用程序的缓存文件，其中包括/Library/Caches目录中的文件。


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

