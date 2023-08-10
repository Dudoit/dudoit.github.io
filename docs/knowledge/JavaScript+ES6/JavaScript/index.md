# JavaScript 基础


## 数组 Array

汇总常用的 Array 对象方法，如有缺失，可在 ES6 的数组小节中查询

📨 标记表示此数组方法将返回新的数组，不改变原数组

![Array.prototype](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/Array.prototype.png)

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

![javascript-push](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/javascript-push.png)

```JavaScript
onst animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);  // 4
console.log(animals);  // ["pigs", "goats", "sheep", "cows"]
```

### Array.prototype.unshift()

将指定元素添加到数组的开头，并返回数组的新长度

![javascript-unshift](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/javascript-unshift.png)

```JavaScript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));  // 5
console.log(array1);  // [4, 5, 1, 2, 3]
```

### Array.prototype.pop()

删除数组中最后一个元素，并返回该元素的值

![javascript-pop](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/javascript-pop.png)

```JavaScript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());  // "tomato"
console.log(plants);  // ["broccoli", "cauliflower", "cabbage", "kale"]
```

### Array.prototype.shift()

删除数组中第一个元素，并返回该元素的值

![javascript-shift](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/javascript-shift.png)

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

![javascript-splice](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/javascript-splice.png)

```JavaScript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);  // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
console.log(months);  // ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.slice() 📨

从已有的数组中返回区间内元素

![javascript-slice](https://cdn.jsdelivr.net/gh/Dudoit/resources@blog0.0.2/blog/images/javascript-slice.png)

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

### Array.prototype.reverse()

反转数组中的元素，并返回同一数组的引用

```JavaScript
const array = ['one', 'two', 'three'];
const reversed = array.reverse();
console.log('reversed:', reversed);  // ["three", "two", "one"]
console.log('array:', array);  // ["three", "two", "one"]
```

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

## 数组 Array ES6