<script setup>
import cdnImg from '/.vitepress/components/cdnImg.vue';
</script>

# JavaScript

## JavaScript 的内置类型

`string`、`number`、`boolean`、`null`、`undefined`、`bigint`、`symbol`、`object`

除了 `object` 为复杂类型，其他都是基本类型

## 闭包

- 什么是闭包？

  闭包：是指能够访问自由变量的函数（自由变量是指外部作用域中的变量）

  ```JavaScript{5}
  function debounce(fn, delay) {
    let timer = null // 自由变量

    function _debounce() {
      timer = setTimeout(() => {}, delay)
    }
  }
  ```

- 闭包的作用及常见用途

  作用：私有化数据，保护变量，延迟变量的生命周期

  用途：防抖、节流、Vue 响应式原理

- 闭包的缺点及解决方案

  缺点：可能会导致内存泄露，内部变量不被回收

  解决方案：在变量不被使用时，将值设置为 `null`

## 原型 & 原型链

- 原型

  1）对象的原型

  对象的内置属性 `[[Prototype]]`，可以使用 `__proto__` 或 `Object.getPrototypeOf()` 获取属性值

  2）函数的原型

  由于函数也是特殊的对象，函数上也有一个属性 `prototype`，可以直接使用 `Function.prototype` 获取

  通过 new 关键字创建对象时，对象内部的 `[[Prototype]]` 属性就会被函数的 `prototype` 赋值

  ```JavaScript
  function Person() {}

  const p1 = new Person()
  const p2 = new Person()

  p1.__proto__ === p2.__proto__ // true
  p1.__proto__ === Person.prototype // true
  ```

  `Function.prototype.constructor` 指向当前函数对象

  ```JavaScript
  function Person() {}

  console.log(Person.prototype.constructor)  // [Function: Person]
  ```

  <cdnImg src="offer-javascript-proto" />

- 原型链

  访问一个对象的属性时，如果这个对象内部不存在这个属性，那么就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，这样一直找下去，就是原型链的概念。原型链的尽头一般来说都是 `Object.prototype` 所以这就是我们新建的对象为什么能够使用 `toString()` 等方法的原因

## this

`this` 对象是执行上下文中的一个属性，通常在函数中使用

在全局调用函数时，`this` 指向 window，当被作为方法调用时，`this` 指向调用者

`call`、`apply`、`bind` 可显式地指定 `this` 的指向

绑定优先级：显式绑定 > new > bind > 隐式绑定 > 默认绑定

## new

1. 创建一个新的空对象
2. 设置原型，将函数的 `prototype` 赋值给对象的原型
3. 让函数的 this 执行这个对象，执行构造函数
4. 判断函数的返回值类型，值类型就返回创建的对象，引用类型就返回引用类型的对象

## 继承

- 通过原型链的方式继承

  缺点：如果包含引用类型的数据，会被所有的实例对象所共享，容易造成修改的混乱

- 借用构造函数

  ```JavaScript
  function Student() {
    Person.call(this)
  }

  Student.prototype = Person.prototype
  ```

  缺点：会调用两次父类构造函数，子类中会多出不必要的属性

- 原型式继承

- 寄生式继承

- 寄生组合式继承

  ```JavaScript
  function object(o) {
    function F() {}
    F.prototype = o
    return new F()
  }

  function inheritPrototype(subType, superType) {
    subType.prototype = object(superType.prototype)
    subType.prototype.constructor = subType
  }

  inheritPrototype(Student, Person)
  ```

## eventloop

JavaScript 是单线程的脚本语言，为了防止一个函数的执行时间过长而阻塞后面的代码，所以 JavaScript 会区分同步任务和异步任务

执行同步任务时，JavaScript 会从执行栈中取出同步代码并顺序执行；

执行异步任务时，JavaScript 会将其转移到相应的任务队列中，而不是立即执行

任务队列又分 **宏任务队列** 和 **微任务队列**

<span class="blue-text">在执行 宏任务队列 中的代码时，要确保 微任务队列 已清空</span>

|   任务队列   |               |
| -------- | ------------- |
|   宏任务     | 	script（整体代码）、setTimout、setInterval、<br/>setImmediate(node 独有)、requestAnimationFrame(浏览器独有)、<br/>IO、UI render（浏览器独有） |
|   微任务     | process.nextTick(node 独有)、<br/>Promise.then()、Object.observe、MutationObserver      |

:::info Node.js 和 浏览器的 Event Loop 差异
1. 实现方式：浏览器由浏览器引擎实现；Node.js 则是由自身环境实现
2. 事件类型：浏览器处理多种事件，用户交互、网络请求、定时器等；Node 多用来处理网络请求和异步操作，文件操作或数据库查询
3. 执行上限：浏览器通常会持续执行知道用户关闭页面；Node 默认循环一次就退出，除非有定时器或监听器
4. 宏任务：Node 中的宏任务又分为 timer 类型、check 类型、close callbacks 类型
:::

## AJAX

AJAX（Async JavaScript And XML），一种异步通信的方法，实现在不刷新页面的情况下从服务端获取数据

XMLHttpRequest 的属性和方法：

- `open()`：接收请求类型、请求地址、是否异步

- `send()`：发送请求到服务器

- `onreadystatechange()`：监听请求进度，即 `readyState` 属性

- `abort()`：响应前取消异步请求

:::info readyState 值说明
0：未初始化。尚未调用 open() 方法。
1：已打开。已调用 open() 方法，尚未调用 send() 方法。
2：已发送。已调用 send() 方法，尚未收到响应。
3：接收中。已经收到部分响应。
4：完成。已经收到所有响应，可以使用了。
:::

## instanceof 的原理

判断对象的 <i class="purple-text">原型链</i> 中是否能找到类型的 prototype

```JavaScript
function myInstanceof(fn, type) {
  const prototype = type.prototype
  let fn = fn.__proto__

  while (true) {
    if (fn === undefined || fn === null) {
      return false
    }
    if (fn === prototype) {
      return true
    }
    fn = fn.__proto__
  }
}
```

## var、let、const 的区别

- var 的特点

  var 遵循函数作用域，创建在全局创建的变量能用 `window.` 获取

  var 可以重复声明

- let & const 的相同点

  在同一块级作用域内，<span class="blue-text">不允许重复声明</span>

  不存在变量提升，只能在定义后使用

  暂时性死区：只要块级作用域中存在变量声明，它们所声明的变量就绑定这个区域不受外部影响，例如：

  ```JavaScript
  var value = 100

  function resetValue() {
    value = 120 // ReferenceError: Cannot access 'value' before initialization
    let value
  }
  ```

- const 的特点

  `const` 声明时就要立即赋值；且值为只读常量，一旦声明就不允许修改

## 箭头函数

箭头函数是匿名函数，不能作为构造函数，不能使用 new

箭头函数的 this 指向定义箭头函数上下文中的 this，任何方法都无法改变它的指向

箭头函数没有原型属性

箭头函数没有 arguments 对象，需要使用剩余参数获取参数列表

## promise

Promise 是处理异步请求的一种方式，比传统的解决方案（回调函数）更优

Promise 是一个容器，保存着未来才会结束的事件

特点：创建后立即执行；状态一旦改变，不能再次变更

三种状态：pedding、fulfilled、rejected

- 优点和缺点

  优点：Promise 提供统一的规范，实用性更强；链式调用避免了回调地狱的发生

  缺点：Promise 一旦创建就会立即执行，无法取消；当 Promise 处于 pedding 时，无法得知是哪个阶段

- all、allSettled、race、any

  all：所有结果都成功时返回，否则返回失败的结果

  allSettled：返回所有的结果

  race：返回最先完成的结果

  any：返回最先成功的结果

### then 方法的第二个回调和 catch 有什么不同

  `then()` 的回调不能捕获第一个回调函数中抛出的错误，`catch()` 可以

## async/await

async/await 也是异步编程的一种解决方案，它遵循的是 Generator 的语法糖，不需要额外调用即可执行，返回的是 Promise 对象

## class 关键字和 function 的区别

- this

  `function` 可以使用 call、apply、bind 的方式指定它的执行上下文

  `class` 内部做了代理，禁止了这种行为

- constructor

  `function` 中的 `prototype.constructor` 属性指向函数自身

  `class` 中 `constructor` 相当于定义在 `prototype` 上的一个属性

- 重复定义

  `function` 允许重复定义；`class` 不允许重复定义

- 枚举

  `class` 中定义的方法不可用 `Object.keys(Point.prototype)` 枚举到

   `function` 构造器原型方法可被 `Object.keys(Point.prototype)` 枚举到