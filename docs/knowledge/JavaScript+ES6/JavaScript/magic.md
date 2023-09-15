# JavaScript 中神奇的操作

## 一元加减操作符

一元加减操作符 应用到 非数值，其效果与 Number() 转型函数一样

```JavaScript
const numberValue = '100'
const stringValue = 'max'
const booleanValue = true
const dateValue = new Date

+numberValue // 100
+stringValue // NaN
+booleanValue // 1
+dateValue // 1694487802624
```
