# 组件间通信

## 父组件向子组件传递数据

Props 是在组件上注册的 attribute

普通值的传递：

::: code-group

```Vue [parent.vue]
<template>
  <child name="dudoit" />
</template>
```

```Vue [child.vue]
<script>
export default {
  props: ['name', 'myMessage']
}
</script>
```

:::

响应式的传递 + 验证：

::: code-group

```Vue [parent.vue]
<template>
  <child :name="userInfo.name" :sex="userInfo.sex"/>
  <!-- 相等 -->
  <child v-bind="userInfo"/>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "111",
        sex: 1
      }
    }
  }
}
</script>
```

```Vue [child.vue]
<script>
export default {
  props: {
    // 类型检查
    name: String,
    sex: Number,

    // 类型检查 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: (value) => {
        return value >= 0
      }
    }

    // 注意：当类型是对象时，由于对象是引用类型，所以要用函数定义
    info: {
      type: Object,
      default() {
        return { name: "", sex: 1 }
      }
    }
  }
}
</script>
```

:::


## 子组件向父组件传递数据

::: code-group

```Vue [parent.vue]
<template>
  <child @check="childCheck" />
</template>
```

```Vue [child.vue]
<script setup>
export default {
  emits: ['check'],
  created() {
    this.$emit('check')
  }
}
</script>
```

:::

## 依赖注入（根组件向子组件传递数据）

一个父组件相对于其所有的后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。

`provide` 提供依赖；`inject` 注入依赖

![依赖注入](https://cn.vuejs.org/assets/provide-inject.3e0505e4.png)

### Provide

```Vue
<script>
export default {
  provide: {
    name: "xxx",
    age: 11
  }
}
</script>
```

```Vue
<script>
// 需要使用data中的数据时
export default {
  provide() {
    return {
      name: "xxx",
      age: this.age
    }
  }

  provide() {
    return {
      name: "xxx",
      age: computed(() => this.age)
    }
  }
}
</script>
```

### Inject

```Vue
<script>
export default {
  inject: ["name", "age"]
}
</script>
```

## EventBus 事件总线