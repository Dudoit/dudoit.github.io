# ES6 基础知识

## 数组 Array

## Proxy

`Proxy` 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义

`Proxy()` 构造器可以用来创建 Proxy 对象，它接收 2 个参数：

`target` 被代理的对象，数组，函数甚至是另一个代理对象；`handler` 提供某些操作的处理函数
```JavaScript
new Proxy(target, handler)
```

### handler.get()

`handler.get()` 方法用于拦截对象的 **读取属性** 操作

`get()` 方法接收 3 个参数：`target` 目标对象；`property` 被获取的属性名；`receiver` Proxy

```JavaScript
const p = new Proxy(target, {
  get: function (target, property, receiver) {},
});
```

### set()

`handler.set()` 方法用于 **设置属性值** 操作

`set()` 方法接收 4 个参数：`target` 目标对象；`property` 被获取的属性名；`value` 新属性值；`receiver` Proxy

```JavaScript
const p = new Proxy(target, {
  set: function(target, property, value, receiver) {}
});
```