
bug 列表

https://www.yuque.com/dudoit/uzrb71/fbxgiic75290u0gt/edit#3CcZ

## IOS 端 Safari 浏览器使用 window.open() 方法失效

起因：用户在移动端无法导出 PDF 文件，但使用电脑测试正常

主要原因：Safari 浏览器有一些安全策略，禁止在回调函数中执行 window.open() 方法，以防页面不断弹出窗口

  ```JavaScript
  例如：
  
  1. 有效打开：提前获取了文件地址，然后通过点击触发下载就可以生效
    window.open(url)
  2. 无效打开如果你是先发送请求获取地址，然后请求的成功回调里触发下载就不会生效：
    axios.get('xxx').then((url) => {
      window.open(url, '_blank');
    });
  ```

解决方案：

方法一：先打开一个空白页，再更新它的地址

```JavaScript
let onWindow = window.open('', '_blank');
axios.get('xxxx').then((url) => {
  onWindow.location = url;
});
```

方法二：超链接打开

```JavaScript
axios.get('xxx').then((url) => {
let a = document.createElement('xxx');
  a.setAttribute('href', url);
  document.body.appendChild(dom);
  a.click();
  a.remove()
});
```

方法三：使用 window.location

```JavaScript
axios.get('xxxx').then((url) => {
  window.location.href = url;
});
```
