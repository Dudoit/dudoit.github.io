# JavaScript 应用

## 字符串反转

```JavaScript
string.split('').reverse().join('')
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