# HTML

## `<srcipt>`

将 JavaScript 插入 HTML 的主要方法是使用 `<script>` 标签，常见属性：

- async：立即异步下载脚本

- defer：延迟执行，延迟到文档完全被解析后执行

- src：外部代码文件

- type：默认值是 `text/javascript`，当其值为 `module` 时，代码会被当成 ES6 模块

## `<noscript>`

`<noscript>` 被用于给不支持 JavaScript 的浏览器提供替代内容

满足以下任意条件，包含在 `<noscript>` 中的内容就会被渲染：

- 浏览器不支持脚本

- 浏览器对脚本的支持被关闭（禁用 JavaScript）

```HTML
<body>
  <noscript>
    <p>This page requires a JavaScript-enabled browser.</p>
  </noscript>
</body>
```