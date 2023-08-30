# JavaScript 基础


## 内存管理

内存管理的生命周期：

- 分配你申请的内存
- 使用分配的内存
- 不使用时对其释放

JavaScript 会在定义变量是自动分配内存空间

对于基本数据类型，会将其分配给栈空间；对于复杂数据（引用）类型，会分配给堆空间


高阶函数：接收一个函数作为参数或返回值是函数的函数称为高阶函数

## 闭包

闭包由两部分组成：函数；可以访问的自由变量

所以，闭包就是指那些能够访问自由变量的函数，这里的自由变量是指外部作用域中的变量

闭包的作用：私有化数据，保护变量，延长变量的生命周期。防抖、节流、vue 响应式原理

闭包的缺陷：可能会导致内存泄露，内部变量不被回收

### 垃圾回收机制

垃圾回收 Garbage Collection，简称 GC

由于内存的大小是有限的，所以当一些内存不再使用时，要对其进行释放，腾出更多的内存空间。

GC 是如何知道哪些对象不再使用的呢？

GC 算法：

- 引用计数：一个对象被一个引用所指向时，这个对象的引用就 +1，当这个对象没有被引用时，即为 0，可以销毁。弊端：循环引用

- 标记清除：设置一个根对象，从根出发找有引用的对象，如果没有，则为不可用对象

### 内存泄露

闭包的内存泄漏是指在使用闭包时，<span class="blue-text">由于对变量的引用未被正确释放，导致内存资源无法回收而造成的浪费</span>。内存泄漏通常发生在对闭包的引用长时间存在，但实际不再被使用的情况；导致内存占用过高，影响性能

**如何避免内存泄漏**

1. **及时释放闭包：当不在使用闭包时，将闭包置为 `null`**

2. 减少闭包的作用域范围

3. 避免循环引用

## this

`this` 通常是在函数中使用，在**函数被调用时**，会创建一个执行上下文，其中记录调用栈、AO对象

函数在调用时，JavaScript 会默认给 this 绑定值；this 的绑定和定义的位置没有关系，和 **调用方式和调用位置** 有关

`this` 在全局均指向 window

### this 的绑定规则

this 有四种绑定规则：默认绑定、隐式绑定、显示绑定、new 绑定

绑定优先级：显式绑定 > new > bind > 隐式绑定 > 默认绑定

- 默认绑定

  默认绑定通常为 独立的函数调用，即没有被绑定对象调用，this 指向 window

  ```JavaScript
  function foo() {
    console.log(this);
  }
  foo(); // window
  ```

- 隐式绑定

  通过某个对象进行调用，this 指向这个对象

  ```JavaScript
  function foo() {
    console.log(this.name);
  }

  const obj = {
    name: 'dudoit',
    say: foo
  }

  obj.say(); // dudoit
  ```

- 显式绑定

  隐式绑定的一个条件是，这个对象内要有某个函数的引用，例如：上面的 obj 对象中引用了 foo 函数

  如果不希望在对象内包括这个引用，就需要使用 **显式绑定明确要绑定的对象**

  **call()**

  ```JavaScript
  function foo() {
    console.log(this.name);
  }

  const obj = {
    name: 'dudoit',
  }

  foo.call(obj); // dudoit
  ```

  :::info 忽略显式绑定
  当 call() 中绑定的值为 `null` / `undefined` 时，**this 指向 window**
  :::

  **apply()**

  ```JavaScript
  function foo(num1, num2) {
    console.log(this.name);
    console.log(num1 + num2);
  }

  const obj = {
    name: 'dudoit',
  }

  foo.apply(obj, [10, 15]); // dudoit
  ```

  :::info call() 和 apply() 两者的差异
  call() 和 apply() 两者的差异表现在接收参数上。call() 接收的是一个个参数，可使用 ES6 剩余参数；apply() 接收一个数组
  :::

  **bind()**

  每次调用时都需要加上 `call()` / `apply()` 方法，如果在重复调用次数较高的情况下，`bind()` 是更好的选择

  ```JavaScript
  function foo() {
    console.log(this.name);
  }

  const obj = {
    name: 'dudoit',
  }

  const say = foo.bind(obj);
  say();  // dudoit
  ```

- new 绑定

  JavaScript 中的函数可以当作类的构造函数使用，使用 new 关键字会进行以下操作：

  创建一个新的对象；这个新对象会被绑定在函数调用的 this 上

  ```JavaScript
  function Person(name) {
    console.log(this);  // Person {}
    this.name = name;  // Person {name: "dudoit"}
  }

  const p = new Person("dudoit");
  ```

- 内置函数的绑定

  **setTimeout**

  setTimeout 中的 this 指向 window

  ```JavaScript
  setTimeout(function () {
    console.log(this); // window
  }, 1000);
  ```

  **forEach**

  forEach 的第二个参数可指定 this 指定的对象

  ```JavaScript
  const arr = [11, 22, 33];
  const obj = { name: 'dudoit' };
  arr.forEach(function (item) {
    console.log(this); // obj
  }, obj);
  ```

### 箭头函数中 this 的绑定规则

箭头函数中不适用上面的四种绑定规则，**根据外层作用域来决定 `this`**

## arguments

arguments 是一个对应于 **函数的参数** 的 类数组(array-like)对象

array-like 证明它不是一个数组，而是一个对象类型；它有数组的一些特殊的方法

```JavaScript
function foo(a, b, c) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log(arguments.length); // 3
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}

foo(1, 2, 3)
```

:::warning
箭头函数中不绑定 arguments，箭头函数会去上层作用域中查找
:::


## 纯函数

符合下面两条规则的函数就称为纯函数：

1. 传入相同的参数，返回的内容一致
2. 执行 **不会产生副作用** 的函数

副作用指：修改了全局变量，修改参数或者改变外部的存储

Array 内置对象上的 `slice()` 方法属于纯函数，而 `splice()` 由于会修改原数组，所以不是纯函数

纯函数的优势：可以放心地编写和使用

## 柯里化

传递给函数一部分参数去调用，再返回一个函数处理剩余的参数，这个过程称为柯里化

```JavaScript
function add(m, n) {
  return m + n
}
add(10, 20)

// 柯里化处理
function cAdd(m) {
  return function (n) {
    return m + n
  }
}
cAdd(10)(20)

// 箭头函数的简化
const cAdd2 = (m) => (n) => m + n
```

柯里化可以使每个函数的职责单一，分工明确

- 柯里化的复用

  ```JavaScript
  function makeAdder(num) {
    return function(count) {
      return num + count
    }
  }

  const add5 = makeAdder(5)
  const add10 = makeAdder(10)
  add5(10) // 15
  add5(20) // 25
  add10(10) // 20
  ```

- 利用这个特性，可以实现打印日志函数的实现

  ```JavaScript
  const log = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] [${message}]`)
  }

  const logNow = log(new Date())
  logNow("DEBUG")("debug 信息1xxxx")
  logNow("DEBUG")("debug 信息2xxxx")

  const logNowDebug = log(new Date())("DEBUG")
  logNowDebug("debug 信息1xxxx")
  logNowDebug("debug 信息2xxxx")
  ```

- 将普通函数转换为柯里化函数

  ```JavaScript
  function currying(fn) {
    return function (...args) {
      if (args.length >= fn.length) {
        // 如果传入的参数数量 大于等于 函数本身可接收的参数，直接执行此函数
        return fn.apply(this, args)
      } else {
        return function (...args2) {
          // 递归调用柯里化函数，并传入本次接收的参数
          return curried.apply(this, args.concat(args2))
        }
      }
    }
  }
  ```
## 面向对象

创建对象的两种方式：

- `const obj = new Object()`

- `const obj = {}`，字面量的形式

### Object.defineProperty()

`Object.defineProperty()` 可以定义一个新属性或修改一个对象的现有属性

```JavaScript
Object.defineProperty(obj, prop, descriptor)

// obj：定义属性的对象
// prop：定义属性的名称
// descriptor：定义或修改的属性描述符
```

2 种属性描述符：

- 数据属性描述符

  可定义的属性有：configurable 是否可删除 | enumerable 是否可枚举 | writable 是否可修改属性值 | value 属性值

  通过字面量定义对象时，以上属性默认值为：`true` | `true` | `true` | `value`

  通过属性描述符定义对象时，以上属性默认值为：`false` | `false` | `false` | `undefined`

- 存取属性描述符

  可定义的属性有：configurable 是否可删除 | enumerable 是否可枚举 | get 获取属性执行函数 | set 设置属性执行函数

  通过属性描述符定义对象时，以上属性默认值为：`false` | `false` | `undefined` | `undefined`

### Object.defineProperties()

同时定义多个属性或修改现有属性

```JavaScript
const obj = { _age: 18 }

Object.defineProperties(obj, {
  name: {
    writable: true,
    value: "dudoit"
  },
  age: {
    get: function() {
      return this._age
    }
  }
})
```

### 方法补充

获取对象的属性描述符：getOwnPropertyDescriptor | getOwnPropertyDescriptors

禁止添加新属性：preventExtensions

禁止配置和删除：seal

冻结、禁止修改现有属性值：freeze

### 创建多个对象

- 工厂模式

  ```JavaScript
  function createPerson(name, age) {
    return {
      name,
      age
    }
  }

  const p1 = createPerson("张三", 18) // { name: '张三', age: 18 }
  const p2 = createPerson("李四", 18) // { name: '李四', age: 18 }
  const p3 = createPerson("王五", 18) // { name: '王五', age: 18 }
  ```

  工厂模式的缺点：无法确认对象的类型

- 构造函数

  ```JavaScript
  function Person(name, age) {
    this.name = name
    this.age = age
  }

  const p1 = new Person("张三", 18) // Person { name: '张三', age: 18 }
  const p2 = new Person("李四", 18) // Person { name: '李四', age: 18 }
  ```

  构造函数的缺点：它会在每个对象中创建一个函数对象实例，占用内存

### 对象的原型

JavaScript 中，每个对象都一个内置属性 `[[Prototype]]`

获取这个属性的方法：属性 `__proto__` | `Object.getPrototypeOf()` 方法

### 函数的原型

所有函数上也有一个 `prototype` 属性

通过 new 创建对象时，对象内部的 `[[Prototype]]` 属性就会被构造函数的 `prototype` 赋值

```JavaScript
function Person() {}

const p1 = new Person()
const p2 = new Person()

p1.__proto__ === p2.__proto__ // true
p1.__proto__ === Person.prototype // true
```

原型对象 `Person.prototype` 上有一个属性 `constructor`，它指向当前函数对象

```JavaScript
function Person() {}

console.log(Person.prototype.constructor)  // [Function: Person]
```

### 解决构造函数的弊端 - 构造函数和原型组合

将共同的函数放在构造函数的 `prototype` 属性上

```JavaScript
function Person(name) {
  this.name = name
}

Person.prototype.eating = function () {}
Person.prototype.running = function () {}
```

## ES6 - Class