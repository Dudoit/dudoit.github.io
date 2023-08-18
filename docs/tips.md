sh ./vitepress-starter/deploy.sh
<!-- 彩票格子：彩票分为格子刮 -->
<!-- 需调整目录(未使用中文标点): More/Npm -->

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