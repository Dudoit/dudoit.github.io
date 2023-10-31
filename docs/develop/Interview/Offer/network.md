# 网络

## HTTP 和 HTTPS 的区别

| 区别         | HTTP      | HTTPS                    |
| ------------ | --------- | ------------------------ |
| URL          | `http://` | `https://`               |
| 端口         | 80        | 443                      |
| 安全         | 不安全    | 安全                     |
| OSI 网络模型 | 应用层    | 安全传输机制工作在传输层 |
| 加密         | 无法加密  | 对传输的数据加密         |
| 证书         | 无需证书  | CA 机构颁发的 SSL 证书   |

### 为什么 HTTPS 是安全的？

HTTPS 在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。

HTTP 的建立在 TCP 三次握手后可以进行 HTTP 报文传输；而 HTTPS 在 TCP 三次握手后，还需要 SSL/TLS 的握手，才能进行加密报文传输。

## XSS、CSRF

- XSS

  XSS（Cross-Site Scripting，跨站脚本攻击）：它会在 WEB 页面中插入恶意脚本，当用户浏览该页面时，执行这些代码，从而盗取用户信息（Cookie，token）、破坏页面结构、重定向到其他网站。

  XSS 攻击的三种类型：存储型、DOM 型、反射型

  预防方式：尽量不使用 `innerHtml` 插入 HTML 内容；url 参数使用 `encodeURIComponent` 方法转义

- CSRF

  CSRF（Cross-site request forgery，跨站请求伪造）：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

  预防方式：添加验证码；使用 token；Referer 识别

## 强制缓存、协商缓存

