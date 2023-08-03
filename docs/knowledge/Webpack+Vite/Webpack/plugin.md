# 常见的 plugin 配置

Plugin 是 webpack 的另一个核心，用于执行更广泛的任务。例如打包优化、资源管理、环境变量注入等。

## CleanWebpackPlugin

功能：生成新的打包文件时，自动删除上一次打包的文件夹

安装 CleanWebpackPlugin：
```
npm install clean-webpack-plugin -D
```

配置 CleanWebpackPlugin：
```JavaScript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}
```

## HtmlWebpackPlugin

功能：对入口文件 index.html 进行打包处理

安装 HtmlWebpackPlugin：
```
npm install html-webpack-plugin -D
```

配置 HtmlWebpackPlugin：
```JavaScript
const { HtmlWebpackPlugin } = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // 可以使用 htmlWebpackPlugin.options.title 读取到该信息
      title: "webpack案例",
      // 指定模板路径
      template: "./public/index.html"
    })
  ]
}
```

## DefinePlugin

功能：用于配置全局常量，语法 <%= BASE_URL %> （该插件为Webpack内置插件，无需安装）

配置 DefinePlugin：
```JavaScript
const { DefinePlugin } = require("webpack");

module.exports = {
  plugins: [
    new DefinePlugin({
      BASE_URL: "'./'"
    })
  ]
}
```

## CopyWebpackPlugin

功能：将 public 目录下的文件复制到 dist 文件夹中

安装 CopyWebpackPlugin：
```
npm install copy-webpack-plugin -D
```

配置 CopyWebpackPlugin：
```JavaScript
const { CopyWebpackPlugin } = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: "public",
        globOptions: {
          ignore: [
            "**/.DS_Store",
            "**/index.html",
          ]
        }
      }]
    })
  ]
}
```

规则：
```
from：设置从哪一个源中开始复制；
pto：复制到的位置，可以省略，会默认复制到打包的目录下；
pglobOptions：设置一些额外的选项，其中可以编写需要忽略的文件：
  .DS_Store：mac目录下回自动生成的一个文件；
  index.html：也不需要复制，因为我们已经通过HtmlWebpackPlugin完成了index.html的生成；
```

## CommonsChunkPlugin

用于避免 chunks 之间的重复依赖

::: warning
从 webpack4 开始，CommonsChunkPlugin 已被 SplitChunksPlugin 取代
:::

## SplitChunksPlugin

SplitChunksPlugin 开箱即用，分离公共的第三方模块以及业务代码

默认配置：

```JavaScript
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

## DllPlugin

CommonsChunkPlugin 每次构建时都会重新构建一次 vendor；出于对效率的考虑，我们更多是使用 DllPlugin

作用和 optimization.splitChunk 的作用相似，都是用某种方法拆分 bundles，可以大幅度提升构建速度

这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。