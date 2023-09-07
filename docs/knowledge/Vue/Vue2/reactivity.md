# Vue2 的响应式原理

https://v2.cn.vuejs.org/v2/guide/reactivity.html

当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。

每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

![Vue2 data](https://v2.cn.vuejs.org/images/data.png)

## 对象和数组的限制

- 对象

  由于 JavaScript 的限制，Vue 无法检测 property 的添加或移除。所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的

  ```JavaScript
  var vm = new Vue({
    data:{
      a:1
    }
  })

  // `vm.a` 是响应式的

  vm.b = 2
  // `vm.b` 是非响应式的
  ```

  对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式 property。

  ```JavaScript
  Vue.set(vm.someObject, 'b', 2)
  // 或者使用 Vue.set 的别名：vm.$set
  this.$set(this.someObject,'b',2)
  ```

- 数组

  Vue 不能检测以下数组的变动：

  1. 当利用索引直接设置一个数组项时，例如：`list[index] = newValue`
  2. 当你修改数组的长度时，例如：`list.length = newLength`

  ```JavaScript
  var vm = new Vue({
    data: {
      items: ['a', 'b', 'c']
    }
  })
  vm.items[1] = 'x' // 不是响应性的
  vm.items.length = 2 // 不是响应性的
  ```
  
  <span class="blue-text">解决方法：</span>

  ```JavaScript
  // 1. Vue.set
  Vue.set(vm.items, indexOfItem, newValue)
  vm.$set(vm.items, indexOfItem, newValue)
  // 2. Array.prototype.splice
  vm.items.splice(indexOfItem, 1, newValue)
  ```

  直接使用 splice 修改数组，和修改数组长度的需求同理：

  ```JavaScript
  vm.items.splice(newLength)
  ```

## 声明响应式 property

由于 Vue 不允许动态添加根级响应式 property，所以你必须在初始化实例前声明所有根级响应式 property，哪怕只是一个空值：

```JavaScript
var vm = new Vue({
  data: {
    // 声明 message 为一个空值字符串
    message: ''
  },
  template: '<div>{{ message }}</div>'
})
// 之后设置 `message`
vm.message = 'Hello!'
```

如果未在 data 选项中声明 message，Vue 将警告你渲染函数正在试图访问不存在的 property。