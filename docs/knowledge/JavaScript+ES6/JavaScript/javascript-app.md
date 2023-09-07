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

## 字符串

### 字符串反转

```JavaScript
string.split('').reverse().join('')
```

### 去除字符串中的重复字符

```JavaScript
[...new Set(string)].join('')
```

## 格式化文件大小

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