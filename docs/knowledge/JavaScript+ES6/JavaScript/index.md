# JavaScript 基础


## 数组 Array

汇总常用的 Array 对象方法，如有缺失，可在 ES6 的数组小节中查询

📧 标记表示此数组方法将返回新的数组，不改变原数组

### Array.prototype.concat() 📧

用于合并两个或多个数组

```JavaScript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);  // ["a", "b", "c", "d", "e", "f"]
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

### Array.prototype.map() 📧

### Array.prototype.push()

向数组的末尾添加一个或更多元素，并返回新的长度

```JavaScript
onst animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);  // 4
console.log(animals);  // ["pigs", "goats", "sheep", "cows"]
```

### Array.prototype.unshift()

将指定元素添加到数组的开头，并返回数组的新长度

```JavaScript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));  // 5
console.log(array1);  // [4, 5, 1, 2, 3]
```

### Array.prototype.pop()

删除数组中最后一个元素，并返回该元素的值

```JavaScript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());  // "tomato"
console.log(plants);  // ["broccoli", "cauliflower", "cabbage", "kale"]
```

### Array.prototype.shift()

删除数组中第一个元素，并返回该元素的值

```JavaScript
const array = [1, 2, 3];

console.log(array.shift());  // 1
console.log(array);  // [2, 3]
```

### Array.prototype.splice()

添加或删除数组中的元素，`splice()` 会改变原始数组

```JavaScript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.slice() 📧

从已有的数组中返回区间内元素

```JavaScript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));  // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));  // ["camel", "duck"]
console.log(animals.slice(-2));  // ["duck", "elephant"]
console.log(animals.slice(2, -1));  // ["camel", "duck"]
console.log(animals.slice());  // ["ant", "bison", "camel", "duck", "elephant"]
```