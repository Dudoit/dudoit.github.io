# 打包优化

涉及网络层面涉及的过程主要有：DNS 解析、TCP 连接、HTTP 请求/响应

前端力所能及大多是处理 HTTP 连接

HTTP 优化考虑这两大内容：**减少请求次数；减少单次请求所花费的时间**

## Webpack 优化

**不要让 loader 做太多事情**

`babel-loader` 常用来转译 ES6、Typescript 等高级语法

常见的优化方式就是用 include 和 exclude 规避无需转译的内容

```JavaScript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

除此之外，可以开启转译结果缓存，将有效提高 babel-loader 的工作效率

```JavaScript
loader: 'babel-loader?cacheDirectory=true'
```