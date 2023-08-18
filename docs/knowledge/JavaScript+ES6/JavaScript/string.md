<script setup>
import cdnImg from '/.vitepress/components/cdnImg.vue';
</script>

# String 内置对象

## 🧶 String - 字符串

<cdnImg src="String.prototype" alt="String.prototype" />

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

返回由指定的 UTF-16 代码单元序列创建的字符串

```JavaScript
const n = String.fromCharCode(65);  // A
```

### String.prototype.replace() 📨

在字符串中查找匹配的子串，并替换与正则表达式匹配的子串。原始的字符串不会改变

```JavaScript
const p = 'over the lazy dog.';

console.log(p.replace('dog', 'monkey'));
// "over the lazy monkey."

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// "over the lazy ferret."
```

### String.prototype.split()

通过搜索模式将字符串分割成一个有序的子串列表

```JavaScript
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);  // "fox"

const chars = str.split('');
console.log(chars[8]);  // "k"

const strCopy = str.split();
console.log(strCopy);  // ["The quick brown fox jumps over the lazy dog."]
```

### String.prototype.toLowerCase() 📨

字符串值转为小写

```JavaScript
"ALPHABET".toLowerCase()  // "alphabet"
```

### String.prototype.toUpperCase() 📨

字符串值转为大写

```JavaScript
"alphabet".toUpperCase()  // "ALPHABET"
```

### String.prototype.toString()

返回一个字符串

```JavaScript
const stringObj = new String('foo');

stringObj  // String { "foo" }
stringObj.toString()  // "foo"
```

## 🧵 String - ES6

<cdnImg src="String-es6" alt="String-es6" />

### String.prototype.includes()

是否找到了参数字符串

```JavaScript
const s = 'Hello world!';

s.includes('o') // true
s.includes('Hello', 6) // false
```

### String.prototype.startsWith()

字符串是否在原字符串的头部

```JavaScript
const s = 'Hello world!';

s.startsWith('Hello') // true
s.startsWith('world', 6) // true
```

### String.prototype.endsWith()

字符串是否在原字符串的尾部

```JavaScript
const s = 'Hello world!';

s.endsWith('!') // true
s.endsWith('Hello', 5) // true
```

### String.prototype.at()

返回参数指定位置的字符，支持负索引

```JavaScript
const str = 'hello';
str.at(1) // "e"
str.at(-1) // "o"
```

### String.prototype.repeat()

将原字符串重复 `n` 次

```JavaScript
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

### String.prototype.padStart()

字符串补全长度，头部补全

```JavaScript
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
```

### String.prototype.padEnd()

字符串补全长度，尾部补全

```JavaScript
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```

### String.prototype.trimStart()

消除字符串头部的空格

```JavaScript
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
```

### String.prototype.trimEnd()

消除字符串尾部的空格

```JavaScript
const s = '  abc  ';

s.trim() // "abc"
s.trimEnd() // "  abc"
```

### String.fromCodePoint()

`String.fromCodePoint()` 方法，可以识别大于 `0xFFFF` 的字符，弥补了 `String.fromCharCode()` 方法的不足

```JavaScript
String.fromCodePoint(0x20BB7)  // "𠮷"
```

### String.raw()

斜杠都被转义的字符串，往往用于模板字符串

```JavaScript
String.raw`Hi\n${2+3}!`
// 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"

String.raw`Hi\u000A!`;
// 实际返回 "Hi\\u000A!"，显示的是转义后的结果 "Hi\u000A!"
```

### String.prototype.codePointAt()

能够正确处理 4 个字节储存的字符，返回一个字符的码点

```JavaScript
let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271
s.codePointAt(2) // 97
```

### String.prototype.replaceAll() 📨

字符串的实例方法 replace() 只能替换第一个匹配

如果要替换所有的匹配，不得不使用正则表达式的 `g` 修饰符

```JavaScript
'aabbcc'.replace(/b/g, '_')  // 'aa__cc'
```

`replaceAll()` 方法，可以一次性替换所有匹配

```JavaScript
'aabbcc'.replaceAll('b', '_')  // 'aa__cc'
```


`$&`：匹配的字符串。

<code>$&#96;</code> ：匹配结果前面的文本。

`$'`：匹配结果后面的文本。

`$n`：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。

`$$`：指代美元符号$。


```JavaScript
// $& 表示匹配的字符串，即`b`本身
'abbc'.replaceAll('b', '$&')
// 'abbc'

// $` 表示匹配结果之前的字符串
// 对于第一个`b`，$` 指代`a`
// 对于第二个`b`，$` 指代`ab`
'abbc'.replaceAll('b', '$`')
// 'aaabc'

// $' 表示匹配结果之后的字符串
// 对于第一个`b`，$' 指代`bc`
// 对于第二个`b`，$' 指代`c`
'abbc'.replaceAll('b', `$'`)
// 'abccc'

// $1 表示正则表达式的第一个组匹配，指代`ab`
// $2 表示正则表达式的第二个组匹配，指代`bc`
'abbc'.replaceAll(/(ab)(bc)/g, '$2$1')
// 'bcab'

// $$ 指代 $
'abc'.replaceAll('b', '$$')
// 'a$c'
```

