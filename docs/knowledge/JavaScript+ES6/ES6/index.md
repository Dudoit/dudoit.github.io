# ES6 基础知识

## 模板字符串

```JavaScript
const message = `my name is ${name}, number is ${ number * 2 }, height ${ computedHeight() }`
```

## 函数默认值

```JavaScript
function s(name = 'dudoit', age = 10) {}
```

## 函数的剩余参数

```JavaScript
function s(name, age, ...info) {
  console.log(name, age) // dudoit 25
  console.log(info) // [1.78, 130]
}
s('dudoit', 25, 1.78, 130)
```

剩余参数和arguments的区别？

剩余参数只包含没有对应形参的实参，arguments 包含所有传递的实参
arguments 不是真正的数组，剩余参数是数组可以使用数组的方法

## 展开运算符

```JavaScript
const names = ['du', 'zhao', 'li']
const name = 'dudoit'

console.log(...names) // ['du', 'zhao', 'li']
console.log(...name) // ['d', 'u', 'z', 'h', 'a', 'o', 'l', 'i']

const stu = { name: 'dudoit', age: 18 }
const obj = { ...stu, height: 1.78 }

// 浅拷贝
const copyStu = { ...stu }
```

## 数值的表示

0b 二进制、0O 八进制、0X 十六进制

## Symbol

> 比如冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixins 模式），新方法的名字就有可能与现有方法产生

Symbol 值不是对象，所以也不能添加属性。它是一种类似于字符串的数据类型

```JavaScript
const s1 = Symbol()
const s2 = Symbol()

const obj = {
  [s1]: "abc",
  [s2]: "cba"
}

// 新增属性
obj[s3] = "ccc"

const s4 = Symbol()
Object.defineProperty(obj, s4, {
  enumerable: true,
  value: 'fff'
})

// 不能通过 .语法 获取属性值，将得到 undefined

// 使用 Symbol 作为 key 的属性名，Object.keys
// 可通过 Object.getOwnPropertySymbol(obj) 获取

// 创建两个相同的 symbol
const s1 = Symbol.for('aaa')
const s2 = Symbol.for('bbb')
console.log(s1 === s2) // true
```

## Set/WeakSet

### Set

Set 是一个类似数组的数据结构，**用于存储唯一的值**

Set 接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

```JavaScript
// 数组
const set = new Set([1, 2, 3, 4, 4]);
// 类数组
const set = new Set(document.querySelectorAll('div'));
```

:::info 小知识点 💡
Set 中可以加入 `NaN`；由于对象的特殊性（引用类型），Set 中的对象总是不相等的
:::

- size

  Set 属性：返回 Set 实例中值的个数

  ```JavaScript
  let s = new Set();
  s.add(1).add(2).add(2);
  s.size // 2
  ```

- add

  add(value)：添加值，返回 Set

  ```JavaScript
  let s = new Set();
  s.add(1).add(2).add(2);
  s.size // 2
  ```

- delete

  delete(value)：删除某个值，返回 布尔值

- has

  has(value)：检索 set 中是否包含 value，返回 布尔值

- clear

  clear()：清除所有成员

- keys/values/entries/forEach

  ```JavaScript
  let set = new Set(['red', 'green', 'blue']);

  for (let item of set.keys()) {
    console.log(item);
  }
  // red
  // green
  // blue

  for (let item of set.values()) {
    console.log(item);
  }
  for (let x of set) {
    console.log(x);
  }
  // red
  // green
  // blue

  for (let item of set.entries()) {
    console.log(item);
  }
  // ["red", "red"]
  // ["green", "green"]
  // ["blue", "blue"]
  ```

### WeakSet

WeakSet 结构与 Set 类似，有两个区别：

- WeakSet 的值只能是对象和 Symbol 值
- WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用

## Map/WeakMap

### Map

### WeakMap

## Object.entries

获取对象的特殊格式

```JavaScript
const obj = {
  name: '111',
  age: 12
}

const objEntries = Object.entries(obj)
// [['name', '111']. ['age', 12]]

// 这种结构方便做遍历操作
objEntries.forEach(item => {
  console.log(item[0], item[1])
})
```

## 运算符

### ??

空值运算符

```JavaScript
const result = data ?? "default value"
```

`??` 和 `||` 的区别在于，`??` 能够赋予 `0` 和 空字符串

### ?.

可选链

```JavaScript
result?.data?.name
```

## Class

创建类的两种方式：

```JavaScript
// 类的声明
class Person {}
// 类的表达式
const Person = class {}
```

### 实例方法

`construtor` 函数会执行如下操作：

1. 在内存中创建一个新的对象
2. 对象内部的 `[[prototype]]` 属性被赋值为该类的 `prototype` 属性
3. 构造函数内部的 this，会指向新创建的对象
4. 执行构造函数内的代码
5. 如果构造函数没有返回非空对象，返回创建的对象


```JavaScript
class Person {
  construtor(name, age) {
    this.name = name
    this.age = age
  }

  running() {}
}
```

### 访问器方法

```JavaScript
class Person {
  construtor(name, age) {
    this.name = name
    this.age = age
  }

  set height(newHeight) {}

  get heigth() {
    return this._height
  }
}
```

### 静态方法

静态方法是指不需要类的实例调用，类可以直接调用的方法

```JavaScript
class Person {
  construtor(name) {
    this.name = name
  }

  static create() {
    return new Person()
  }
}
Person.create()
```

### 类的继承

```JavaScript
class Person {}

class Student extends Person {
  // 继承父类的属性
  construtor() {
    super(name)
  }

  studying() {
    super.think()
  }
}
```


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

### handler.set()

`handler.set()` 方法用于 **设置属性值** 操作

`set()` 方法接收 4 个参数：`target` 目标对象；`property` 被获取的属性名；`value` 新属性值；`receiver` Proxy

```JavaScript
const p = new Proxy(target, {
  set: function(target, property, value, receiver) {}
});
```

### handler.has(target, key)

in 捕获器

### handler.deleteProperty(target, key)

delete 捕获器

## Reflect

receiver 用于改变原对象中 this 的指向，使其指向代理对象，方便监听内部属性的每一次改变

```JavaScript
// 执行 Student 函数中的内容，但创建的对象为 Person 对象
const p1 = Reflect.construct(Student, ['why', 20], Person)
console.log(p1.__proto__ === Person.prototype)
```