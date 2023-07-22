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