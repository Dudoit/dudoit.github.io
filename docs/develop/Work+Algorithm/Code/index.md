# 手写代码

## call

```JavaScript
Function.prototype.mycall = function (thisBings, ...args) {
  thisBings = thisBings ? Object(thisBings) : window
  thisBings.fn = this

  const result = thisBings.fn(...args)
  delete thisBings.fn

  return result
}
```

## apply

```JavaScript
Function.prototype.myapply = function (thisBings, args) {
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

## bind

```JavaScript
Function.prototype.mybind = function (thisBings, bindArgs) {
  thisBings = thisBings ? Object(thisBings) : window
  thisBings.fn = this

  return function(...newArgs) {
    const args = [...bindArgs, ...newArgs]
    return thisBings.fn(...args)
  }
}
```

## 防抖函数 debounce

```JavaScript
function debounce(fn, delay) {
  let timer = null

  function _debounce(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }

  return _debounce
}
```

## 节流函数 throttle

```JavaScript
function throttle(fn, wait, option = { leading: true, trailing: false }) {
  let previous = 0
  let timer = null
  const { leading, trailing } = option

  function _throttle(...args) {
    const nowTime = +new Date()
    if (!previous && !trailing) previous = nowTime
    
    if (nowTime - previous > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      fn.apply(this, args)
      previous = nowTime
      return
    }

    const remaining = wait - (nowTime - previous)
    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null
        previous = !leading ? 0 : +new Date()
        fn.apply(this, args)
      }, remaining)
    }
  }

  return _throttle
}
```

## 深拷贝的实现

### `JSON.parse(JSON.stringify())`

```JavaScript{2}
const obj = { name: 'dudoit' }
const newObj = JSON.parse(JSON.stringify(obj))
```

缺陷：

- 无法处理函数和 undefined
- 无法处理循环引用
- 无法处理一些特殊对象（RegExp、Error、Date）
- 对象的原型链上的属性会丢失

### deepClone

```JavaScript{15}
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue) {
  // 简单数据类型 直接返回原值
  if (!isObject(originValue)) {
    return originValue
  }

  // 复杂数据类型 判断类型为数组还是对象
  const cloneObject = Array.isArray(originValue) ? [] : {};
  for (const key in originValue) {
    cloneObject[key] = deepClone(originValue[key])
  }

  return cloneObject;
}
```

## Promise

### all

实现思路：

1. `all()` 方法接收一组 Promise
2. 如果这组 Promise 全部执行成功，则按顺序返回 Promise 的结果
3. 如果出现失败的结果，立即返回

```JavaScript
static all(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let fulfilledTimes = 0

    const pushResult = (_index, _value) => {
      results[_index] = _value
      fulfilledTimes++
      if (fulfilledTimes === promises.length) {
        resolve(results)
      }
    }

    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise.then(res => {
          pushResult(index, res)
        }).catch(err => {
          reject(err)
        })
      } else {
        pushResult(index, res)
      }
    })
  })
}
```