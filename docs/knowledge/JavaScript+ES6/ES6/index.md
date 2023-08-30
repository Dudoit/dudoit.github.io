# ES6 基础知识

## Symbol

> 比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因

Symbol 值不是对象，所以也不能添加属性。它是一种类似于字符串的数据类型

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

### set()

`handler.set()` 方法用于 **设置属性值** 操作

`set()` 方法接收 4 个参数：`target` 目标对象；`property` 被获取的属性名；`value` 新属性值；`receiver` Proxy

```JavaScript
const p = new Proxy(target, {
  set: function(target, property, value, receiver) {}
});
```