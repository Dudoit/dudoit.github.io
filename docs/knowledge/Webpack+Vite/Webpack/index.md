webpack 是如何确定文件入口的？

事实上，当我们运行 webpack 时，webpack 会查找当前目录下的 src/index.js 作为入口；如果当前项目中没有存在 src/index.js 文件，那么会报错。

我们也可以通过在根目录下创建 webpack.config.js 文件，配置入口和出口

```JavaScript
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "buildle.js",
    path: path.resolve(__dirname, "./dist")
  }
}
```

Mode 配置

Mode配置选项，可以告知webpack使用响应模式的内置优化

默认值：production

可选值有：'none' | 'development' | 'production'

| 选项   | 描述   |
|--------|--------|
| development | 会将 DefinePlugin 中的 process.env.NODE_ENV 的值设置为 development，为模块和 chunk 启用有效名称 |
| production | 会将 DefinePlugin 中的 process.env.NODE_ENV 的值设置为 production，为模块和 chunk 启用确定性的混淆名称 |
| none | 不使用任何默认优化选项 |


## resolve 模块

**extensions**：解析到文件时自动添加扩展名

默认值：['.wasm', '.mjs', '.js', '.json']

**alias**：路径别名

配置格式：

```JavaScript
resolve: {
  extensions: [".js", ".json", ".jsx", ".ts", ".vue"],
  alias: {
    "@": resolveApp("./src"),
    pages: resolveApp("./src/pages")
  }
}
```