
```Dart
main() {

}

// 无返回值的方法
void main() {}

// 变量声明
// 自动推断类型
var str = 'this is var';
// 提前声明类型
String str = 'this is var';
int number = 1234

// 命名规则
// 变量名称必须由数字、字母、下划线和美元符号组成
// 标识符开头不能是数字
// 标识符不能是保留字和关键字

// 常量
// const 值不变 一开始就得赋值
// final 开始不赋值，只能赋值一次

const PI = 3.14159;

final ABC = 2222
final time = new DateTime.now()
```

```Dart
// 多行文本
String str = '''
12345
'''

// 字符串拼接
String str1 = 'hello'
String str2 = 'world'

print(str1 + str2)
print("$str1 $str2")


// 数字类型
int a = 123
double b = 123.3

// 布尔类型
bool flag = true
bool flag = false

// 数组/集合类型
var list = ["213", 123, true]
// list.length
// list[0]
var list = <String>["123", "123"]
var list = <int>[123, 123]

list.add("123123")

// 固定长度的集合
var list = List.filled(2, "");

// Maps 定义方式
var person = {
  "name": "zhang"
  "age": 20
}

print(person["name"])

var p = new Map();

p["name"] = 'li';
p["age"] = 123;


// 类型判断
var str = 123;
str is String
str is int

// 逻辑运算符
bool b1 = true
// 取反
!b1
b1 && b2
b1 || b2

// 赋值运算符
int b = 10
// b 如果为空，赋值100
b ??= 100

// 条件表达式
var a;
var b = a ?? 10;

// 类型转换
String str = '123'
var num = int.parse(str);
var num = double.parse(str);

num.toString();

try {

} catch () {

}

// ----  List 常用属性  ----
// length 长度
// reversed 翻转
// isEmpty 是否为空
// isNotEmpty 是否不为空
// ----  List 常用方法  ----
// add 增加
// addAll 拼接数组
// indexOf 查找
// remove 删除，传入具体值
// removeAt 删除，传入索引值
// fillRange 修改
// insert(index, value) 指定位置插入
// insertAll(index, list) 指定位置插入 list
// toList() 类型转换
// join() List 转字符串
// split() 字符串转 List
// forEach/map/where/any/every 循环


// ----  Map 常用属性  ----
// length 长度
// reversed 翻转
// isEmpty 是否为空
// isNotEmpty 是否不为空
// ----  List 常用方法  ----
// addAll 添加属性
// remove 删除，传入 key 值 person.remove("name")
list.forEach((value) {
  print("$value");
})

var newList = list.forEach((value) {
  return value * 2
})

var newList = list.where((value) {
  return value > 100
})
```

<!-- 
阿里云 flutter 播放器下载流程
1. 获取要下载视频的 vid/auth 等播放凭证，做相应转换后保存起来
2. 将数据再一次格式化后，使用 downloadMangar 添加下载，并增加列表项
3. 开始下载

--------
simple: 通过prepare获取数据源，格式化数据源后作为参数传入 start 开始下载，通过 listen 监听进度
 -->