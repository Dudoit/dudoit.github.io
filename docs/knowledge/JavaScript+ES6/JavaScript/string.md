# String 内置对象

## 🧶 String - 数组

### String.prototype.charAt()

返回在指定位置的字符

```JavaScript
const sentence = 'The quick brown.';
const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// "The character at index 4 is q"
```

### String.prototype.charCodeAt()

返回在指定的位置的字符的 Unicode 编码

```JavaScript
const sentence = 'The quick brown.';
const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// "The character code 113 is equal to q"
```

### String.prototype.indexOf()

返回某个指定的字符串值在字符串中首次出现的位置

```JavaScript
const str = "Hello world, welcome to the universe.";
const n = str.indexOf("welcome");  // 13
```

### String.prototype.lastIndexOf()

和 `indexOf()` 用法一样，搜索时从后向前搜索

```JavaScript
const str = "I am from runoob，welcome to runoob site.";
const n = str.lastIndexOf("runoob");  // 28
```

### String.prototype.match()

检索字符串与正则表达式进行匹配的结果

```JavaScript
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;

paragraph.match(regex)  // ["T", "I"]
```

### String.prototype.search()

检索字符串与正则表达式进行匹配的结果

```JavaScript
const str = "hey JudE";
const re = /[A-Z]/g;
const re2 = /[.]/g;
str.search(re)  // 4
str.search(re2) // -1
```

### String.prototype.concat()

将字符串参数连接到调用的字符串，并返回一个新的字符串

```JavaScript
const str1 = 'Hello';
const str2 = 'World';

str1.concat(' ', str2)   // "Hello World"
str2.concat(', ', str1)  // "World, Hello"
```

### String.prototype.slice() 📨

提取某个字符串的一部分

```JavaScript
const str = 'The quick brown fox jumps over the lazy dog.';

str.slice(31)      // "the lazy dog."
str.slice(4, 19)   // "quick brown fox"
str.slice(-4)      // "dog."
str.slice(-9, -5)  // "lazy"
```

### String.prototype.trim() 📨

从字符串的两端清除空格

```JavaScript
const greeting = '   Hello world!   ';

greeting.trim()  // "Hello world!";
```

### String.fromCharCode()

### String.prototype.replace()

### String.prototype.split()

### String.prototype.toLowerCase()

### String.prototype.toUpperCase()

### String.prototype.toString()

## 🧵 String - ES6

### String.prototype.includes()

### String.prototype.startsWith()

### String.prototype.endsWith()

### String.prototype.at()

### String.prototype.repeat()

### String.prototype.padStart()

### String.prototype.padEnd()

### String.prototype.trimStart()

### String.prototype.trimEnd()

### String.fromCodePoint()

### String.raw()

### String.prototype.codePointAt()

### String.prototype.replaceAll()
