# ES6 基础知识

## 数组 Array

### 扩展运算符

```JavaScript
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
```

### Array.prototype.find()

`find()` 方法，用于找出第一个符合条件的数组成员；如果没有，返回 `undefined`

`find()` 的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 `true` 的成员，返回该成员

```JavaScript
[1, 4, -5, 10].find((n) => n < 0) // -5

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

### Array.prototype.findIndex()

`findIndex()` 方法，返回第一个符合条件的数组成员的位置，如果没有，返回 `-1`

```JavaScript
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```

`find()` 、`findIndex()` 都可以接受第二个参数，用来绑定回调函数的 `this` 对象

```JavaScript
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
```

### Array.prototype.findLast()

和 `find()` 方法用法一样，只是从数组结尾开始向前查询

### Array.prototype.findLastIndex()

和 `findIndex()` 方法用法一样，只是从数组结尾开始向前查询

### Array.prototype.includes()

`includes()` 方法返回一个布尔值，表示某个数组是否包含给定的值

```JavaScript
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
// 第二个参数表示搜索的起始位置，默认为 0；如果第二个参数为负数，则表示倒数的位置
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

封装兼容性方法：

```JavaScript
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false
```

### Array.prototype.entries()

### Array.prototype.keys()

### Array.prototype.values()

### Array.prototype.copyWithin()

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