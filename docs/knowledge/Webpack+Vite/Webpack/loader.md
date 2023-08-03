# 常见的 loader 配置

loader 用于对模块源代码的转换

## css-loader

解析和压缩 `.css` 文件

```Bash
npm install css-loader -D
```

## style-loader

将解析后的 CSS 插入到 DOM 中

```Bash
npm install style-loader -D
```

```JavaScript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        // loader 的执行顺序是从后向前的，所以 style-loader 要写在 css-loader 前面
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

## less-loader

使支持开发中的 Less 预处理器，使 less 自动转换为 css

```Bash
npm install less-loader -D
```

## less-loader

使支持开发中的 Less 预处理器，使 less 自动转换为 css

```Bash
npm install less-loader -D
```

## postcss-loader

PostCSS 是一个通过 JavaScript 来转换样式的工具，它可以实现一些 CSS 的转换和适配，比如自动添加浏览器前缀、css 样式重置。

```Bash
npm install postcss-loader -D
```

需要实现以上的功能不只要使用 `postcss-loader` ，还要使用一些插件

`postcss-preset-env`，它可以根据目标浏览器添加所需的内容

在根目录创建 `postcss.config.js` 配置

```JavaScript
module.exports = {
  plugins: [
    "postcss-preset-env"
  ]
}
```

## file-loader

要处理开发中的文件资源，我们也需要有对应的 loader：file-loader

file-loader 的作用就是帮助我们处理 import/require() 方式引入的一个文件资源，并且会将它放到我们输出的文件夹中；

安装 file-loader：
```Bash
npm install file-loader -D
```

### 合理地给图片命名？

webpack 给我们提供了大量的 PlaceHolders 来显示不同的内容，以下是一些常用的 placeholder：

```
[ext]：处理文件的扩展名；
[name]：处理文件的名称；
[hash]：文件的内容，使用 MD4 的散列函数处理，生成的一个 128 位的 hash 值（32个十六进制）；
[contentHash]：在 file-loader 中和 [hash] 结果是一致的；
[hash:<length>]：截图 hash 的长度，默认 32 个字符太长了；
[path]：文件相对于 webpack 配置文件的路径；
```

那么我们通常可以这样给图片命名
```JavaScript
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: {
    loader: "file-loader",
    options: {
      name: "img/[name].[hash:8].[ext]"，
      outputPath: "img"
    }
  },
},
```

### 加载字体文件

对于一些 eot、ttf、woff 等资源文件，也可以用 file-loader 来处理

```JavaScript
{
  test: /\.(woff2?|eot|ttf)$/i,
  use: {
    loader: "file-loader",
    options: {
      name: "font/[name].[hash:6].[ext]"，
      outputPath: "font"
    }
  },
},
```

## url-loader

url-loader 和 file-loader 的工作方式是相似的，但是可以将较小的文件，**转成 base64 的 URI**。

安装 url-loader：
```Bash
npm install url-loader -D
```

较小的图片文件在转为 base64 之后会和页面一起被请求，可以减少不必要的请求过程；

::: warning
如果将高质量的大文件图片或所有图片都用此方式加载，**反而会影响页面的首次加载速度**。
:::

设置图片大小转换为 base64 的阈值，属性 `limit`

```JavaScript
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: {
    loader: "url-loader",
    options: {
      limit: 10 * 1024, // 10 kb
      name: "img/[name].[hash:8].[ext]"，
      outputPath: "img"
    }
  },
},
```

## 资源模块

在 `webpack5` 之后，我们可以直接使用资源模块类型（asset module type）替换 file-loader、url-loader

资源模块类型

```
asset/resource: 发送一个单独的文件并导出 URL，用于替换 file-loader
asset/inline: 导出一个资源的 data URI，用于替换 url-loader
asset/source: 导出资源的源代码，用于替换 raw-loader
asset: 导出一个 data URI 和发送一个单独的文件之前自动选择，用于替换使用了 limit 的 url-loader
```

通常使用 asset 类型居多

```JavaScript
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: "asset",
  // generator 属性用于定义输出路径和文件名称
  generator: {
    filename: "img/[name].[hash:8].[ext]"
  },
  // parser 属性用于限制转换 base64 图片的大小
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024
    }
  }
}
```

## babel-loader

我们想要使用 ES6+ 的语法，想要使用 TypeScript，开发 React 项目，它们都是离不开Babel的语法转换、源代码转换等

使用 babel 必不可少的需要安装三个库：babel-loader、@babel/core、@babel/preset-env

安装 babel-loader：
```Bash
npm install babel-loader @babel/core @babel/preset-env
```

babel 需要插件才可以生效，我们这里可以使用预设 preset
```JavaScript
{
  test: /\.m?js$/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        ["@babel/preset-env"]
      ]
    }
  }
}
```
或者可以使用 `babel.config.json` 配置文件：
```JavaScript
// babel.config.json
module.exports = {
  presets: [
    ["@babel/preset-env"]
  ]
}
```
