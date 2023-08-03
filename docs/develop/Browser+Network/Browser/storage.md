# Cookie Storage IndexedDB 客户端存储

## Cookie

起源：由 网景公司 发明，起初用于客户端存储会话信息。

服务器在响应 HTTP 请求时，通过发送 `Set-Cookie`，在 HTTP 头部存储会话信息。

```HTTP
HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie: name=value
Other-header: other-header-value

/* 浏览器会存储Set-Cookie中的内容，并在之后的每个请求中添加Cookie发送给服务器 */
GET /index.jsl HTTP/1.1
Cookie: name=value
Other-header: other-header-value 
```

### Cookie 的构成

- 名称
- 值
- 域：cookie有效的域，`.dudoit.top` 标识对 `dudoit.top` 的所有子域都有效
- 路径：指定路径发送，`/user` 路径即cookie只能由 `http://dudoit.top/user` 访问
- 过期时间：默认关闭浏览器会删除cookie，手动设置时间可持久保留至设置时间
- 安全标志：非键值对形式，设置属性后，只能通过安全链接访问，即https

```HTTP
HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com; path=/; secure
Other-header: other-header-value 
```

实际发送给服务器的只有名称/值的键值对；域、路径、过期时间、安全标志不会。

HttpOnly

禁止 JavaScript 操作 cookie（为避免跨域脚本(xss)攻击，通过javascript的document.cookie无法访问带有HttpOnly标记的cookie。）

### JavaScript 中的 Cookie

- 设置 cookie （BOM）

  通过BOM中的document.cookie属性可以为页面设置cookie

  ```JavaScript
  // 基本使用
  document.cookie = "name=dudoit"; 

  // 使用encodeURIComponent()编码
  document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("dudoit");

  // 添加额外信息
  document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("Nicholas") + "; domain=.dudoit.top; path=/";
  ```

- 设置 cookie（CookieUtil）

  ```JavaScript
  // CookieUtil 辅助函数
  class CookieUtil {
    static get(name) {
      let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
      if (cookieStart > -1){
        let cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1){
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
      }
      return cookieValue;
    }
  
    static set(name, value, expires, path, domain, secure) {
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toGMTString()}`;
      }
      if (path) {
        cookieText += `; path=${path}`;
      }
      if (domain) {
        cookieText += `; domain=${domain}`;
      }
      if (secure) {
        cookieText += "; secure";
      }
      document.cookie = cookieText;
    }
    
    static unset(name, path, domain, secure) {
      CookieUtil.set(name, "", new Date(0), path, domain, secure);
    }
  }; 
  ```
  ```JavaScript
  CookieUtil.get("name"); // 取得给定名称的 cookie 值
  CookieUtil.set("name", "dudoit"); // 设置 cookie
  CookieUtil.unset("name"); // 删除 cookie
  ```

### Cookie 的限制

> Cookie 的本职工作并非本地存储，而是 "维持状态"

- 不超过 300 个 cookie
- 每个 cookie 不超过 4096 字节，即 **4kb**
- 每个域不超过 20 个 cookie，不超过 81 920 字节

每次都会携带在 http 头中，过量的 cookie 会损耗性能

### Cookie 使用注意事项

- HTTP-only 可以在浏览器和服务器设置，但只能在服务器上读取，减少 XSS 攻击
- SameSite 规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击
- cookie 会作为请求头发送给服务器，为避免性能问题 cookie 最好**只保存必要信息**
- **不要在cookie中存储敏感信息**，用户标识等信息应加密存储

## Web Storage

起源：是网页超文本应用技术工作组在 Web Applications 1.0 规范中提出

> Web Storage 的目的是解决通过客户端存储不需要频繁发送回服务器的数据时使用 cookie 的问题

### Storage

```JavaScript
clear(): 删除所有值
setItem(name): 设置name的值
getItem(name): 获取name的值
key(index): 获取index位置的名称
removeItem(name): 删除name键值对
```

<p style="color: rgb(5, 117, 197)">Storage 类型只能存储字符串，所以获取的值也是字符串形式</p>

### sessionStorage

sessionStorage 只存储会话数据，数据只会存储到浏览器关闭

独立打开同一个窗口同一个页面或一个 Tab，sessionStorage 也是不一样的

### localStorage

> 取代 globalStorage 在客户端持久存储数据

```JavaScript
// 存储的两种方式
localStorage.setItem("name", "dudoit"); 
localStorage.name= "dudoit";

// 获取的两种方式
const name = localStorage.getItem("name");
const name = localStorage.name;
```
存储在 localStorage 中的数据只有通过 JavaScript 删除或用户手动清除

数据不受页面刷新影响，也不会因关闭窗口、标签页或重新启动浏览器而丢失

### 存储事件

当 Storage 发送变化，即 **设置值**、**删除值**、**清空值** 时，都会触发 storage 事件

sessionStorage 和 localStorage 都会触发 storage 事件，但 storage 不会区分两者

```JavaScript
window.addEventListener("storage", (event) => {
  alert(`Storage changed for ${event.domain}`);
});

domain: 存储变化对应的域
key: 被设置或删除的建
newValue: 键被设置的新值，若键被删除则为null
oldValue: 键变化之前的值
```

### 限制

每个源 5MB 空间限制

## IndexedDB

当遇到大规模的、结构复杂的数据时，Web Storage 也爱莫能助。IndexedDB，一个运行在浏览器上的非关系型数据库。

### IndexedDB 的特点

- 键值对储存，IndexedDB 内部采用对象仓库（object store）存放数据。
- 异步，ndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作（与 LocalStorage 形成对比，后者的操作是同步的）。
- 支持事务，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。
- 同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。
- 存储空间大，一般来说不少于 250MB，甚至没有上限。
- 支持二进制储存，仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。


参考资料：https://tool.4xseo.com/a/38223.html