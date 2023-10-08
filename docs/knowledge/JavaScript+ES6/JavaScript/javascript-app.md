# JavaScript 应用

## 类型判断

### 对象

```JavaScript
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}
```

## 数组

### 去重

```JavaScript
[...new Set(array)]
```

### 重组对象

```JavaScript
const array = [
  {
    key: 'name',
    value: '111'
  },
  {
    key: 'age',
    value: '222'
  },
]

array.reduce((pre, cur) => {
  pre[cur.key] = cur.value || ''
  return pre
}, {})

// { name: '111', age: '222' }
```

## 字符串

### 随机字符串

```JavaScript
function randomString(length) {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = length; i > 0; --i) {
    result += str[Math.floor(Math.random() * str.length)]
  }
  return result
}
```

### 字符串反转

```JavaScript
string.split('').reverse().join('')
```

### 去除字符串中的重复字符

```JavaScript
[...new Set(string)].join('')
```

## 复写

### setTimeout 实现 setInterval

```JavaScript
/**
 * 
 * @param {Number} delay 延迟时间
 * @param {Function} fn 函数
 */
function setInter(s, fn) {
  let timeOut = (s,fn) => {
    setTimeout(() => {
      fn()
      timeOut(s, fn)
    }, s)
  }
  timeOut(s, fn)
}
```

### setTimeout 实现 setInterval

```JavaScript
/**
 * 多次执行
 * @param {Function} func 函数
 * @param {Number} delay 延迟时间
 * @param {Number} times 执行次数
 */
function interval(func, delay, times) {
  var interv = function() {
    if (typeof times === "undefined" || times-- > 0) {
      setTimeout(interv, delay)
      try {
        func.call(null)
      } catch(e) {
        times = 0
        throw e.toString()
      }
    }
  };
  setTimeout(interv, delay)
}
```

## 业务

### 时间格式化

```JavaScript
function dateFormat(fmt, date) {
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
  }
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
    }
  }
  return fmt
}
```

### 校验手机号

```JavaScript
/**
 * 校验手机号
 * @param {String} phone 11位的手机号码
 */
function checkPhone(phone) {
  if (!/^1[3-9]\d{9}$/.test(phone)) return false
  return true
}
```

### 隐藏手机号中间 4 位

```JavaScript
/**
 * 隐藏手机号中间 4 位
 * @param {String} phone 11位的手机号码
 */
function hidePhone(phone) {
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
```

### 邮箱格式验证

```JavaScript
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = pattern.test(email);
  return isValid;
}
```

### 格式化文件大小

```JavaScript
/**
 * 格式化文件大小, 输出成带单位的字符串
 * @param {Number} size 文件大小
 */
function formatFileSize(size) {
  const units = ['B', 'K', 'M', 'G', 'TB'];
  let fileSize = parseInt(size);
  for (let i = 0; fileSize >= 1024; i++) {
    fileSize /= 1024;
    units.shift();
  }
  return fileSize.toFixed(1) + units[0];
}
```

## 是否为外部链接

```JavaScript
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
```

## 通用 UI 框架处理方法

### 数据处理状态提示

```JavaScript
// 引用消息提示框
import { Message } from '@arco-design/web-vue'

/**
 * 状态处理
 * @param {String} status 数据状态
 * @param {String} text 说明文字
 * @param {Function} callbackFn 回调函数，通常为刷新数据方法
 * @returns 返回值
 */
function handleDataStatusMessage(status: string, text: string, callbackFn?: any) {
  switch (status) {
    case 'success':
      Message.success(text)
      callbackFn && callbackFn()
      break;
    case 'warning':
      Message.warning(text)
      callbackFn && callbackFn()
      break;
    case 'error':
      Message.error(text)
      callbackFn && callbackFn()
      break;
    default:
      Message.info(text)
      callbackFn && callbackFn()
  }
}
```