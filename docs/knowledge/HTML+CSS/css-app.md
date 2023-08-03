# CSS 应用

## 淘宝样式初始化

```CSS
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
  margin: 0;
  padding: 0;
}

body, button, input, select, textarea {
  font: 12px/1.5tahoma, arial;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
}

address, cite, dfn, em, var {
  font-style: normal;
}

code, kbd, pre, samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 12px;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset, img {
  border: 0;
}

button, input, select, textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## 三角形的实现

实现步骤：创建一个块级元素；设置宽高为 0 的元素再绘制边框；给特定边框使用透明色

```CSS
{
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top: 50px solid pink;
}
```