# 生命周期

`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeUnmount`、`unmounted`、`activated`、`deactivated` 钩子在服务器端渲染期间不会被调用

## beforeCreate

在组件实例初始化完成之后立即调用

会在实例初始化完成、props 解析之后、`data()` 和 `computed` 等选项处理之前立即调用

## created

在组件实例处理完所有与状态相关的选项后调用

当这个钩子被调用时，以下内容已经设置完成：响应式数据、计算属性、方法和侦听器。然而，此时挂载阶段还未开始，因此 `$el` 属性仍不可用。

## beforeMount

在组件被挂载之前调用

当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。

## mounted

在组件被挂载之后调用

## beforeUpdate

在组件即将因为一个响应式状态变更而更新其 DOM 树之前调用

## updated

在组件因为一个响应式状态变更而更新其 DOM 树之后调用

## beforeUnmount

在一个组件实例被卸载之前调用

## unmounted

在一个组件实例被卸载之后调用

## activated

若组件实例是 `<KeepAlive>` 缓存树的一部分，当组件被插入到 DOM 中时调用

## deactivated

若组件实例是 `<KeepAlive>` 缓存树的一部分，当组件从 DOM 中被移除时调用。