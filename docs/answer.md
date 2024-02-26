## 1.

string number boolean undefined symbol bigInt 

object

## 2.

typeof 判断基本类型，因为引用类型都会显示object

instanceof 原型

toString.

### 3. 

可以访问自由变量的函数，自由变量指的是外部作用域中的变量

作用：保护变量，变量私有化，延长变量的生命周期

用途：防抖、节流、Vue2的响应式原理

缺点：可能会导致内存泄露

怎么处理：在变量不使用时，给变量赋值为null

### 4.

对象的原型：每个对象上都有一个 `[[prototype]]`，可以通过 `__proto__` 或者 `Object.getPrototypeOf()` 获取

从哪来的？

函数的原型：函数上有内置属性 `prototype`，可以通过 `Function.prototype` 获取，使用 new 创建对象实例时，会将 Function.prototype 赋值给对象的 `[[prototype]]`，函数上还有一个 `Function.prptotype.constructor` 指向函数本身

原型链：在对象上获取属性，若没有获取到则向上查询，顶层是 Object

### 5. 

this 是执行上下文，通常在函数中使用，this 指向调用者。在全局使用时，this 指向window。

隐式绑定：绑定调用者

显式绑定：call apply bind

call(this, ...args) 剩余参数

```
Function.prototype.mycall = function (thisBings, ...args) {
  thisBings = thisBings ? Object(thisBings) : ''
  
}
```

apply(this, []) 数组

bind() 创建一个新的函数，可以重复调用

箭头函数中的 this 指向父级作用域

settimetout 执行window

### new

创建一个空对象
将创建的函数的prototype 赋值给`[[]]`
返回引用地址

### 7.

原型链继承

父类的对象赋值给子类原型链

缺点：不能传递参数、引用类型，使用混乱

借用构造函数继承

call(this)

解决了传递参数的问题，方法不能访问

组合继承

缺点：调用了两次

原型式继承

创建对象的方法，用 Object.create 创建

缺点：和原型链一样

寄生式继承

可以传更多的参数

缺点：和原型链一样

寄生组合式继承

ES6继承

extends super()

### 8.

事件循环，由于JavaScript是单线程的，所以为了不阻塞执行

区分了同步任务和异步任务
 
异步任务又分为宏任务和微任务

宏任务 setTimeout

微任务 promise que

promise 的 then方法才是微任务 Promise 因为会立即执行所以不是微任务

宏任务执行前要先清空微任务队列

### 9.

在不刷新网页的情况下更新内容

局部更新

常用来进行网络请求，XHR XML HTTP Request

xhr.open

xhr.send

xhr.onreadyStateChange

0 未开始
1 open
2 send
3 接收中
4 完成

### 10

### 11

var 可以重复定义 变量提升 函数作用域

let const 块级作用域 不能重复定义 暂时性死区

const 需要赋值且不能修改

### 12

没有this 不能用显式绑定更改

### 13

处理异步编程的一种方式，用来解决回调地狱的问题

三种状态：pending fulfilled rejected

三种对象方法：then catch finlly

六种类方法：resolve reject all allsettld race any

all 全部成功

allsettld 全部执行 无论成功

race 最快的

any 最快的成功的

优点：可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数；Promise 对象提供统一的接口，使得控制异步操作更加容易、规范

缺点：无法取消 Promise；如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部；当处于 Pending 状态时，无法得知目前进展到哪一个阶段

### 14.

catch可以链式调用

then中是一个参数

### 15 

promise 语法糖

async 可以单独使用，作用和promise一样

### 16

this

class 是代理没有this
function 可以绑定this

constructor

function 的constructor 指向函数本身
class 中的 constructor 是一个属性

function 可以重复定义 class 不行

class不能枚举 function可以枚举

### 17

```JavaScript
Function.prototype.mycall = function(thisBings, ...args) {
  thisBings = thisBings ? Object(thisBings) : window
  thisBings.fn = this

  const result = thisBings.fn(...args)
  delete thisBings.fn
  return result
}
```

### 17

```JavaScript
Function.prototype.myapply = function(thisBings, args) {
  thisBings = thisBings ? Object(thisBings) : window
  thisBings.fn = this

  if (!args) {
    thisBings.fn()
  } else {
    var result = thisBings.fn(...args)
  }

  delete thisBings.fn
  return result
}
```

### 18

```JavaScript
Function.prototype.myapply = function(thisBings, bindArgs) {
  thisBings = thisBings ? Object(thisBings) : window
  thisBings.fn = this

  return function(...newArgs) {
    const args = [...bindArgs, ...newArgs]
    return thisBings.fn(...args)
  }
}
```

### 19 

```JavaScript
function debonce(fn, delay) {
  let timer = null

  function _debonce(...args) {
    if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.call(this, args)
      }, delay)
  }

  return _debonce
}
```

### 

```JavaScript
function throttle(fn, wait, option={ leading: true, trailling: false }) {
  let previous = 0
  let time = null
  

  function _throttle(...args) {
    const nowTime = +new Date()
    // if (!previous && )

    if (nowTime - previous > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      fn.apply(this, args)
      previous = nowTime
      return
    }

    
  }

  return _throttle
}
```

### 22. 深拷贝

```js
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue) {
  if (!isObject(originValue)) {
    return originValue
  }

  const cloneObject = Array.isArray(originValue) ? [] : {}
  for (const key in originValue) {
    cloneObject[key] = deepClone(originValue[key])
  }

  return cloneObject
}
```

### 23. Promise.all


## CSS

### 1.

!important > 内联 > id > class > 标签 > 通配符选择器

### 2. 

根本区别在于有没有创建新的节点

伪类：用户行为 hover active focus

伪元素：::before ::after

### 3.

重排是指元素的大小、位置、显式隐藏发生改变

重绘是指。。颜色，背景，透明度发生改变

重排一定重绘，重绘不一定重排

重拍的情况：添加、删除DOM节点 移动DOM节点 调整窗口大小

解决：用class集中修改样式，减少table布局，绝对定位

### 4.

background/border z-index<0 block float inline-block z-index=0 z-index>0

### 5. 

标准 width = content + padding + maring + border
怪异 width = (content + padding + border) + margin
box-size
border-box
content-box

### 6.

relative 相对 原点在元素左上角，受top、left影响

absolute 绝对 相对与最近的父元素且position不为static 脱离文档流 不占位置

fixed 固定 相对于窗口 脱离文档流 不占位置

sticky 粘性 超出阈值为固定未超出为相对，top/left...只能有一个值

static 默认

### 7.

宽度已知

宽度未知 transform

relative

absolute
top 50%
left 50%


### 8.

块级格式化上下文，BFC内层元素不会受外层影响

触发条件：float不为none display:flex inline-block table-cell

overflow：hidden html根元素

作用：解决父元素塌陷，清除浮动，margin重叠

### 9.

创建BFC

clearfix

### 10.

### 11.

display: none
visible: none
opicty: 0
高度0
缩小比例0
绝对定位移出
hidden=true

### 12.

vw

width: 100%
hight: 0
padding-bottom: -10px

### 13

border

width: 50px
height: 50px
border: 10px slider tanslate
border-top: pink