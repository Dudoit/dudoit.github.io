# 渲染优化

## 服务端渲染

## 浏览器渲染

**CSS 优化**

CSS 引擎查找样式表，对每条规则都按从右到左的顺序去匹配：

```CSS
#myList  li {}
```

这样的写法其实很常见。大家平时习惯了从左到右阅读的文字阅读方式，会本能地以为浏览器也是从左到右匹配 CSS 选择器的，因此会推测这个选择器并不会费多少力气：#myList 是一个 id 选择器，它对应的元素只有一个，查找起来应该很快。定位到了 myList 元素，等于是缩小了范围后再去查找它后代中的 li 元素，没毛病。

事实上，CSS 选择符是从右到左进行匹配的。我们这个看似“没毛病”的选择器，实际开销相当高：浏览器必须遍历页面上每个 li 元素，并且每次都要去确认这个 li 元素的父元素 id 是不是 myList，你说坑不坑！

根据上面的分析，我们至少可以总结出如下性能提升的方案：

避免使用通配符，只对需要用到的元素进行选择。

关注可以通过继承实现的属性，避免重复匹配重复定义。

少用标签选择器，用类选择器替代。

减少嵌套，尽可能使用类来关联每一个标签元素。


DOM 和 CSSOM 合力才能构建渲染树。这一点会给性能造成严重影响：默认情况下，CSS 是阻塞的资源。浏览器在构建 CSSOM 的过程中，不会渲染任何已处理的内容。只有当我们开始解析 HTML 后、解析到 link 标签或者 style 标签时，CSS 才登场，CSSOM 的构建才开始。

我们可以做到

将 CSS 放在 head 标签里

启用 CDN 实现静态资源加载速度的优化