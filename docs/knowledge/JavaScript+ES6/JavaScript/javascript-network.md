# 网络请求

使用 XMLHttpRequest 对象、处理 XMLHttpRequest 事件、Ajax、Fetch API

## AJAX

AJAX -> Asynchronous JavaScript And XML

AJAX 的主要贡献是可以实现在<span style="color: rgb(5, 117, 197)">不刷新页面的情况下从服务器获取数据</span>，格式并不一定是XML。


## XHR

把 AJAX 推到历史舞台上的关键技术是 XMLHttpRequest（XHR）对象

最早由微软发明，后被其他浏览器借鉴。XHR 出现之前，AJAX 的通信必须通过一些黑科技实现。XHR 为发送服务器请求和获取响应提供了合理的接口。

### XMLHttpRequest

构造函数生成 XHR 对象

```JavaScript
let xhr = new XMLHttpRequest();
```

- **open()**

接收 3 个参数：请求类型；请求 URL；是否异步

```JavaScript
xhr.open("get", "example.php", false);
```

调用 `open()` 不会实际发送请求，只是为发送请求做好准备

- **send()**

调用 `send()` 之后，请求就会发送到服务器

```JavaScript
xhr.open("get", "example.txt", false);
xhr.send(null);  // null 在某些浏览器中是必需的
```

**收到服务器响应**

收到服务器响应后，XHR 对象的以下属性会被赋值

```
responseText：作为响应体返回的文本
responseXML：如果响应的内容类型是"text/xml"或"application/xml"，那就是包含响应数据的XML DOM文档
status：响应的 HTTP 状态
statusText：响应的 HTTP 状态描述
```

**检查响应是否返回成功**
```JavaScript{4-9}
xhr.open("get", "example.txt", false);
xhr.send(null);

// HTTP 状态码为 2xx 表示成功；HTTP状态码是 304，表示资源是从浏览器缓存中拿取的
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  alert(xhr.responseText);
} else {
  alert("Request was unsuccessful: " + xhr.status);
}
```

**监听请求/响应过程**

上面需要通过对 XHR 的状态判断响应结果再做进一步处理，实际上是同步的过程，消耗时间

**但大部分情况下最好使用异步请求**，XHR 对象有一个 readyState 属性，表示当前处在请求/响应过程的哪个阶段：

```
0：未初始化（Uninitialized）。尚未调用 open() 方法。
1：已打开（Open）。已调用 open() 方法，尚未调用 send() 方法。
2：已发送（Sent）。已调用 send() 方法，尚未收到响应。
3：接收中（Receiving）。已经收到部分响应。
4：完成（Complete）。已经收到所有响应，可以使用了。
```

设置监听函数：

通过 readyState 属性的值判断请求/响应是否完成，以及进行下一步的处理

```JavaScript{2-12}
let xhr = new XMLHttpRequest();
// onreadystatechange 事件处理程序应该在调用 open() 之前赋值
xhr.onreadystatechange = function() {
  // 一般来说，我们唯一关心的 readyState 值是 4，表示数据已就绪
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(xhr.responseText);
    } else {
      alert("Request was unsuccessful: " + xhr.status);
    }
  }
};
xhr.open("get", "example.txt", false); // [!code --]
xhr.open("get", "example.txt", true); // [!code ++]
xhr.send(null);
```

- **abort()**

在收到响应之前如果想取消异步请求，可以调用 `abort()` 方法

```JavaScript
xhr.abort();
```

### HTTP 头部

XHR 对象会通过一些方法暴露与请求和响应相关的头部字段

- XHR 请求

```
Accept：浏览器可以处理的内容类型。
Accept-Charset：浏览器可以显示的字符集。
Accept-Encoding：浏览器可以处理的压缩编码类型。
Accept-Language：浏览器使用的语言。
Connection：浏览器与服务器的连接类型。
Cookie：页面中设置的Cookie。
Host：发送请求的页面所在的域。
Referer：发送请求的页面的URI。注意，这个字段在HTTP规范中就拼错了，所以考虑到兼容性也必须将错就错。（正确的拼写应该是Referrer。）
User-Agent：浏览器的用户代理字符串
```

自定义请求头可以使用 setRequestHeader() 方法，**必须在 open()、send() 之间调用**

```JavaScript{2}
xhr.open("get", "example.php", true);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null);
```

- XHR 响应

getResponseHeader()，getAllResponseHeaders() 可以获得指定或全部响应头

```JavaScript
let myHeader = xhr.getResponseHeader("MyHeader");
let allHeaders = xhr.getAllResponseHeaders();
```

### GET 请求

```JavaScript
xhr.open("get", "example.php?name1=value1&name2=value2", true);
```

### POST 请求

```JavaScript{7-9}
function submitData() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    //...
  };
  xhr.open("post", "postexample.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let form = document.getElementById("user-info");
  xhr.send(serialize(form));
}
```

POST 请求相比 GET 请求要占用更多资源

### 跨域资源共享

XHR只能访问与发起请求的页面在同一个域内的资源；这个安全限制可以防止某些恶意行为

跨源资源共享（CORS，Cross-Origin Resource Sharing）定义了浏览器与服务器如何实现跨源通信

## Fetch API

XHR 对象被普遍认为比较难用，而 Fetch API 从诞生以后就成为了 XHR 更现代的替代标准。Fetch API 支持期约（promise）和 服务线程（service worker），已经成为极其强大的Web开发工具。

XMLHttpRequest 可以选择异步，**而 Fetch API 则必须是异步**。Fetch API 本身是使用 JavaScript 请求资源的优秀工具，同时这个API也能够应用在服务线程（service worker）中，提供拦截、重定向和修改通过fetch()生成的请求接口。

### 基本用法

```JavaScript
fetch('bar.txt')
  .then((response) => {
    console.log(response);
  });
```

读取响应
```JavaScript
fetch('bar.txt')
 .then((response) => response.text())
 .then((data) => console.log(data));
```

处理状态码和请求失败
```JavaScript
fetch('/bar')
.then((response) => {
  console.log(response.status); // 200
  console.log(response.statusText); // OK
});
```

```JavaScript
fetch('/hangs-forever')
  .then((response) => {
    console.log(response);
  }, (err) => {
    console.log(err);
  });
```

### Fetch 自定义选项

| 键   | 值   |
|--------|--------|
| body | 指定使用请求体时请求体的内容 |
| cache | 用于控制浏览器与 HTTP 缓存的交互 |
| credentials | 用于指定在外发请求中如何包含 cookie |
| headers | 用于指定请求头部 |
| integrity | 用于强制子资源完整性 |
| keepalive | 用于指示浏览器允许请求存在时间超出页面生命周期 |
| method | 用于指定 HTTP 请求方法 |
| mode | 用于指定请求模式 |
| redirect | 用于指定如何处理重定向响应 |
| referrer | 用于指定 HTTP 的 Referer 头部的内容 |
| referrerPolicy | 用于指定 HTTP 的 Referer 头部 |
| signal | 用于支持通过 AbortController 中断进行中的 fetch() 请求 |

### Fetch 请求模式

- 发送 JSON 请求

  ```JavaScript{5}
  let payload = JSON.stringify({
    foo: 'bar'
  });
  let jsonHeaders = new Headers({
    'Content-Type': 'application/json'
  })

  fetch('/send-me-json', {
    method: 'POST', // 发送请求体时必须使用一种 HTTP 方法
    body: payload,
    headers: jsonHeaders
  });
  ```

- 在请求体中发送参数

  ```JavaScript{3}
  let payload = 'foo=bar&baz=qux';
  let paramHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  fetch('/send-me-params', {
    method: 'POST',
    body: payload,
    headers: paramHeaders
  });
  ```

- 发送文件 FormData

  ::: code-group

  ```JavaScript [单个文件上传]
  let imageFormData = new FormData();
  let imageInput = document.querySelector("input[type='file']");
  imageFormData.append('image', imageInput.files[0]);
  fetch('/img-upload', {
    method: 'POST',
    body: imageFormData
  });
  ```

  ```JavaScript{2} [多个文件上传]
  let imageFormData = new FormData();
  let imageInput = document.querySelector("input[type='file'][multiple]");
  for (let i = 0; i < imageInput.files.length; ++i) {
    imageFormData.append('image', imageInput.files[i]);
  }
  fetch('/img-upload', {
    method: 'POST',
    body: imageFormData
  });
  ```
  :::

- 加载 Blob 文件

  ```JavaScript
  const imageElement = document.querySelector('img');
  fetch('my-image.png')
    .then((response) => response.blob())
    .then((blob) => {
      imageElement.src = URL.createObjectURL(blob);
    });
  ```

- 发送跨源请求

  如果代码不需要访问响应， 可以发送 `no-cors` 请求。适合发送探测请求或者将响应缓存起来

  ```JavaScript
  fetch('//cross-origin.com', { method: 'no-cors' })
    .then((response) => console.log(response.type)); // opaque，无法读取响应内容
  ```

- 中断请求

  `abortController.abort()` 会中断所有网络传输

  ```JavaScript
  let abortController = new AbortController();
  fetch('wikipedia.zip', { signal: abortController.signal })
    .catch(() => console.log('aborted!'));
  // 10毫秒后中断请求
  setTimeout(() => abortController.abort(), 10);
  ```