# 响应式原理

## 什么是响应式？

假设，初始化变量 `role` 的值为 `student`，如果我们将 `role` 的值更改为 `teacher`：

那么部分权限的值可能也会随之更改：职位、部门、班级等

```JavaScript
function roleChange(person) {
  person.position = ''
  person.department = ''
  // ...
}

member.role = 'teacher'
roleChange(member)
```

## Proxy 封装自动监听函数

上面的示例是在用户的 `role` 发生改变时手动执行了 `roleChange()` 函数

如果我们想在对 `role` 做出变更后<span class="blue-text">自动处理其他值</span>的行为，可以使用 `Proxy` 中的劫持函数

```JavaScript{5-13,20-21}
const member = {
  name: 'dudoit',
  role: 'student'
}
const memberProxy = new Proxy(member, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    roleChange(receiver)
  }
})

function roleChange(person) {
  console.log(person)
  // ...
}

// 使用 Proxy 代理对象
memberProxy.role = 'teacher'
```

## 收集依赖

```JavaScript
class Depend() {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

const member = {
  name: 'dudoit',
  role: 'student'
}

const memberProxy = new Proxy(member, {
  get: function(target, key, receiver) {
    const depend = getDepend(target, key)
    depend.addDepend(reactiveFn)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(function() {
  console.log(memberProxy.role, "role")
})
```