<script setup>
import cdnImg from '/.vitepress/components/cdnImg.vue';
</script>

# Array 内置对象

## 🧶 Array - 数组

汇总常用的 Array 对象方法，如有缺失，可在 ES6 的数组小节中查询

📨 标记表示此数组方法将返回新的数组，不改变原数组

<cdnImg src="Array.prototype" alt="Array.prototype" />

### Array.isArray()

判断一个对象是否为数组

```JavaScript
Array.isArray([1, 3, 5])      // true
Array.isArray('[]')           // false
Array.isArray(new Array(5))   // true
```

### Array.prototype.indexOf()

返回数组中第一次出现给定元素的下标；不存在则返回 -1

```JavaScript
const birds = ['🦆', '🐓', '🦅', '🦜', '🐓'];

birds.indexOf('🐓')      // 1
birds.indexOf('🐓', 2)   // 4
birds.indexOf('🦩')      // -1
```

### Array.prototype.lastIndexOf()

返回数组中给定元素最后一次出现的索引；不存在则返回 -1

```JavaScript
const birds = ['🦆', '🐓', '🦅', '🦜', '🐓'];

birds.lastIndexOf('🐓')      // 4
birds.lastIndexOf('🐓', 2)   // 1
```

### Array.prototype.every()

检测数组 **所有** 元素是否都符合指定条件

```JavaScript
const isBelowThreshold = (currentValue) => currentValue < 40

const array = [1, 30, 39, 29, 10, 13]

array.every(isBelowThreshold)  // true
```

### Array.prototype.some()

检测数组中是否 **至少有一个** 元素符合指定条件

```JavaScript
const array = [1, 2, 3, 4, 5]

const even = (element) => element % 2 === 0

array.some(even)  // true
```

### Array.prototype.filter() 📨

创建给定数组一部分的浅拷贝，包含符合条件的所有元素

```JavaScript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);  // ["exuberant", "destruction", "present"]
```

### Array.prototype.forEach()

对数组的每个元素执行一次给定的函数

```JavaScript
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));
// "a"
// "b"
// "c"
```

### Array.prototype.map() 📨

创建一个新数组，由原数组中的每个元素都调用一次提供的函数后的返回值组成

```JavaScript 
const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);  // [2, 8, 18, 32]
```

### Array.prototype.reduce()

reducer 逐个遍历数组元素，每一步都将当前元素的值与前一步的结果相加

```JavaScript
const array1 = [1, 2, 3, 4];  // 0 + 1 + 2 + 3 + 4

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);  // 10
```

### Array.prototype.reduceRight()

和 reduce() 功能一致，累加的顺序反转

```JavaScript
const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);  // [4, 5, 2, 3, 0, 1]
```

### Array.prototype.concat() 📨

用于合并两个或多个数组

```JavaScript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);  // ["a", "b", "c", "d", "e", "f"]
```

### Array.prototype.push()

向数组的末尾添加一个或更多元素，并返回新的长度

<cdnImg src="javascript-push" alt="javascript-push" />

```JavaScript
onst animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);  // 4
console.log(animals);  // ["pigs", "goats", "sheep", "cows"]
```

### Array.prototype.unshift()

将指定元素添加到数组的开头，并返回数组的新长度

<cdnImg src="javascript-unshift" alt="javascript-unshift" />

```JavaScript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));  // 5
console.log(array1);  // [4, 5, 1, 2, 3]
```

### Array.prototype.pop()

删除数组中最后一个元素，并返回该元素的值

<cdnImg src="javascript-pop" alt="javascript-pop" />

```JavaScript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());  // "tomato"
console.log(plants);  // ["broccoli", "cauliflower", "cabbage", "kale"]
```

### Array.prototype.shift()

删除数组中第一个元素，并返回该元素的值

<cdnImg src="javascript-shift" alt="javascript-shift" />

```JavaScript
const array = [1, 2, 3];

console.log(array.shift());  // 1
console.log(array);  // [2, 3]
```

### Array.prototype.splice()

添加或删除数组中的元素，`splice()` 会改变原始数组

`splice()` 接收 3 参数：
  - `start`：从何处添加/删除元素
  - `deleteCount`（可选）：从 start 开始删除的元素数量
  - `item1, ..., itemN`（可选）：要添加到数组的新元素

<cdnImg src="javascript-splice" alt="javascript-splice" />

```JavaScript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);  // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
console.log(months);  // ["Jan", "Feb", "March", "April", "May"]
```

ES6 的 `toSpliced()` 和其效果一致，<span class="blue-text">且不会改变原数组</span>

### Array.prototype.slice() 📨

从已有的数组中返回区间内元素

<cdnImg src="javascript-slice" alt="javascript-slice" />

```JavaScript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));  // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));  // ["camel", "duck"]
console.log(animals.slice(-2));  // ["duck", "elephant"]
console.log(animals.slice(2, -1));  // ["camel", "duck"]
console.log(animals.slice());  // ["ant", "bison", "camel", "duck", "elephant"]
```

### Array.prototype.sort()

对数组的元素进行排序。默认排序是将元素转换为字符串，按照 UTF-16 码元值升序排序。

```JavaScript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);  // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);  // [1, 100000, 21, 30, 4]

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => b.value - a.value);
```

ES6 的 `toSorted()` 和其效果一致，<span class="blue-text">且不会改变原数组</span>


### Array.prototype.reverse()

反转数组中的元素，并返回同一数组的引用

```JavaScript
const array = ['one', 'two', 'three'];
const reversed = array.reverse();
console.log('reversed:', reversed);  // ["three", "two", "one"]
console.log('array:', array);  // ["three", "two", "one"]
```

ES6 的 `toReversed()` 和其效果一致，<span class="blue-text">且不会改变原数组</span>

### Array.prototype.join()

将数组用指定的分隔符进行分隔

```JavaScript
const elements = ['Fire', 'Air', 'Water'];

elements.join()    // "Fire,Air,Water"
elements.join('')  // "FireAirWater"
elements.join('-') // "Fire-Air-Water"
```

### Array.prototype.toString()

返回一个字符串，表示指定的数组及其元素

```JavaScript
const array1 = [1, 2, 'a', '1a'];

array1.toString()  // "1,2,a,1a"
```

## 🧵 Array - ES6

<cdnImg src="Array-es6" alt="Array-es6" />

### Array.prototype.find()

`find()` 方法，用于找出第一个符合条件的数组成员；如果没有，返回 `undefined`

`find()` 的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 `true` 的成员，返回该成员

```JavaScript
[1, 4, -5, 10].find((n) => n < 0) // -5

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

### Array.prototype.findIndex()

`findIndex()` 方法，返回第一个符合条件的数组成员的位置，如果没有，返回 `-1`

```JavaScript
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```

`find()` 、`findIndex()` 都可以接受第二个参数，用来绑定回调函数的 `this` 对象

```JavaScript
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
```

### Array.prototype.findLast()

和 `find()` 方法用法一样，只是从数组结尾开始向前查询

### Array.prototype.findLastIndex()

和 `findIndex()` 方法用法一样，只是从数组结尾开始向前查询

### Array.prototype.includes()

`includes()` 方法返回一个布尔值，表示某个数组是否包含给定的值

```JavaScript
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
// 第二个参数表示搜索的起始位置，默认为 0；如果第二个参数为负数，则表示倒数的位置
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

封装兼容性方法：

```JavaScript
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false
```

### Array.prototype.at()

解决 JavaScript 不支持数组的负索引的问题

```JavaScript
const arr = [5, 12, 8, 130, 44];
arr.at(-2) // 130
```

### Array.prototype.entries()

```JavaScript
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

### Array.prototype.keys()

```JavaScript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1
```

### Array.prototype.values()

```JavaScript
for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'
```

### Array.prototype.group()

成员分组

```JavaScript
const array = [1, 2, 3, 4, 5];

array.group((num, index, array) => {
  return num % 2 === 0 ? 'even': 'odd';
});
// { odd: [1, 3, 5], even: [2, 4] }
```

### Array.prototype.groupToMap()

用法和 `group()` 一致；区别只是返回值是一个 Map 结构，而不是对象

```JavaScript
const array = [1, 2, 3, 4, 5];

const odd  = { odd: true };
const even = { even: true };
array.groupToMap((num, index, array) => {
  return num % 2 === 0 ? even: odd;
});
//  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }
```

### Array.prototype.toSpliced() 📨

和 `splice()` 方法一样，只是其不改变原数组

```JavaScript
const array = [1, 2, 3, 4];
array.toSpliced(1, 2, 5, 6, 7) // [1, 5, 6, 7, 4]
array // [1, 2, 3, 4]
```

### Array.prototype.with()

相当于 `splice(index, 1, value)`，用来将指定位置的成员替换为新的值

```JavaScript
const correctionNeeded = [1, 1, 3];
correctionNeeded.with(1, 2) // [1, 2, 3]
correctionNeeded // [1, 1, 3]
```

### 扩展运算符

```JavaScript
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
```

### Array.from()

用于将两类对象转为真正的数组：类似数组的对象和可遍历的对象

```JavaScript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES6 的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

### Array.of()

用于将一组值，转换为数组

```JavaScript
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

// of() 主要目的，是为了弥补数组构造函数 Array() 的不足
Array(3, 11, 8) // [3, 11, 8]
Array(3) // [, , ,]
```

`Array.of()` 基本上可以用来替代 `Array()` 或 `new Array()`，并且不存在由于参数不同而导致的重载。它的行为非常统一：

```JavaScript
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]
```

### Array.prototype.flat() 📨

用于将嵌套的数组 “拉平”，变成一维的数组

```JavaScript
[1, 2, [3, 4]].flat()  // [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat(2)  // [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)  // [1, 2, 3]
```

### Array.prototype.flatMap() 📨

对原数组的每个成员执行一个函数（相当于执行 `Array.prototype.map()`），然后对返回值组成的数组执行 `flat()` 方法

```JavaScript
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

### Array.prototype.toReversed() 📨

和 `reverse()` 方法一样，只是其不改变原数组

```JavaScript
const sequence = [1, 2, 3];
sequence.toReversed() // [3, 2, 1]
sequence // [1, 2, 3]
```

### Array.prototype.toSorted() 📨

和 `sort()` 方法一样，只是其不改变原数组

```JavaScript
const outOfOrder = [3, 1, 2];
outOfOrder.toSorted() // [1, 2, 3]
outOfOrder // [3, 1, 2]
```

### Array.prototype.fill()

使用给定值，填充数组

```JavaScript
['a', 'b', 'c'].fill(7)  // [7, 7, 7]

new Array(3).fill(7)  // [7, 7, 7]

['a', 'b', 'c'].fill(7, 1, 2)  // ['a', 7, 'c']
```

### Array.prototype.copyWithin()

当前数组内部，将指定位置的成员复制到其他位置

- target：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

```JavaScript
[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1)  // [4, 2, 3, 4, 5]
```