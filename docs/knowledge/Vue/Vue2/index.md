

## 🍨 组件实例

### $attrs

一个包含了组件所有透传 attributes 的对象。

是指<span class="blue-text">由父组件传入，且没有被子组件声明</span>为 props 或是组件自定义事件的 attributes 和事件处理函数。

### $emit

在当前组件触发一个自定义事件

```Vue
<script>
export default {
  created() {
    this.$emit('foo')
    this.$emit('bar', 1, 2, 3)
  }
}
</script>
```

### $refs

在组件中想要直接获取到元素对象或者子组件实例，在 Vue 中尽量不要使用 DOM 操作；我们可以给元素或者组件绑定一个 ref 的 attribute 属性；

### $parent

当前组件可能存在的父组件实例，如果当前组件是顶层组件，则为 `null`。

### $root

当前组件树的根组件实例。如果当前实例没有父组件，那么这个值就是它自己。

### $el

该组件实例管理的 DOM 根节点。

`$el` 直到组件**挂载完成 (mounted)** 之前都会是 `undefined。`

### $refs、$parent、$root、$el 综合示例

::: code-group

```Vue [Home.vue]
<template>
  <div>
    <!-- 绑定到一个元素上 -->
    <h2 ref="title">哈哈哈</h2>

    <!-- 绑定到一个组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>

    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ["abc", "cba"]
      }
    },
    methods: {
      btnClick() {
        console.log(this.$refs.title);

        // 拿到 navBar 组件的 Proxy 实例
        console.log(this.$refs.navBar);
        console.log(this.$refs.navBar.message);
        this.$refs.navBar.sayHello();

        // $el 获取 DOM 元素
        console.log(this.$refs.navBar.$el);
      }
    }
  }
</script>
```

```Vue [NavBar.vue]
<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "我是NavBar中的message"
      }
    },
    methods: {
      sayHello() {
        console.log("Hello NavBar");
      },
      getParentAndRoot() {
        console.log(this.$parent);
        console.log(this.$root);
      }
    }
  }
</script>
```

:::