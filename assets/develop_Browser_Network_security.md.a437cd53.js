import{_ as e,o,c as r,O as t}from"./chunks/framework.51846e02.js";const h=JSON.parse('{"title":"安全","description":"","frontmatter":{},"headers":[],"relativePath":"develop/Browser+Network/security.md","filePath":"develop/Browser+Network/security.md"}'),a={name:"develop/Browser+Network/security.md"},s=t('<h1 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h1><h2 id="什么是-xss-如何防止-xss-攻击" tabindex="-1">什么是 XSS ？如何防止 XSS 攻击？ <a class="header-anchor" href="#什么是-xss-如何防止-xss-攻击" aria-label="Permalink to &quot;什么是 XSS ？如何防止 XSS 攻击？&quot;">​</a></h2><p>XSS（跨站脚本攻击）是一种常见的网络安全漏洞，攻击者通过注入恶意脚本代码到网页中，使得这些代码在用户浏览器端执行。攻击者可以利用XSS漏洞获取用户的敏感信息，如登录凭证、个人资料等，或者在受害者的浏览器上执行恶意操作。</p><p>为了防止XSS攻击，可以采取以下几种措施：</p><p>输入验证和过滤：对所有用户提交的输入进行严格验证和过滤，包括表单输入、URL 参数、Cookie 等。确保只允许有效的数据输入，并对特殊字符进行转义处理，尤其是在插入数据库、输出到网页或终端时。</p><p>输出编码：在将用户的输入数据输出到网页上时，确保进行正确的编码处理，防止浏览器将其误解为可执行的脚本代码。根据不同的上下文，可以使用HTML实体编码（如将 &lt; 编码为 &lt;）、JavaScript编码（如将 &#39; 编码为 &#39;）等。</p><p>设置HTTP头的Content Security Policy（CSP）：通过设置CSP，可以限制网页的资源加载，禁止执行内联脚本或通过非法的来源加载脚本。这有助于减少XSS攻击的风险。</p><p>使用HTTP-only Cookie：将重要的用户凭证（如session ID）存储为HTTP-only Cookie，这样就可以防止恶意脚本通过document.cookie来获取敏感信息。</p><p>按需使用安全的JavaScript库和框架：借助一些安全的JavaScript库和框架，如React、Angular、Vue.js等，可以自动地对输出进行适当的编码和转义，从而减少XSS攻击的风险。</p><p>持续安全审查和漏洞扫描：定期对网站进行安全审查和漏洞扫描，及时修复可能存在的XSS漏洞。</p><h2 id="什么是-csrf-如何防止-csrf-攻击" tabindex="-1">什么是 CSRF ? 如何防止 CSRF 攻击？ <a class="header-anchor" href="#什么是-csrf-如何防止-csrf-攻击" aria-label="Permalink to &quot;什么是 CSRF ? 如何防止 CSRF 攻击？&quot;">​</a></h2><p>CSRF（Cross-Site Request Forgery，跨站请求伪造）是一种与用户身份验证相关的安全漏洞。攻击者通过篡改用户的合法请求，以用户的名义发送恶意请求到目标网站，从而利用受害者的权限执行恶意操作。</p><p>为了防止CSRF攻击，可以采取以下几种措施：</p><p>使用CSRF令牌：在用户进行敏感操作（如修改账户信息、更改密码等）之前，服务器生成唯一且随机的CSRF令牌，并将其嵌入到表单或请求中。在验证请求时，服务器会验证表单中的CSRF令牌与用户会话中的令牌是否一致，从而确保请求是合法的。</p><p>同源限制：Web浏览器遵循同源策略，即JavaScript只能访问同源（协议、域名、端口号完全相同）的内容。因此，在网站设计中，应该避免在同一域名下同时处理来自不同源的请求。</p><p>验证来源头Referer：服务器可以验证请求头中的Referer字段，确保请求来源于合法的网站。然而，这种方式并不可靠，因为攻击者可能会篡改请求头中的Referer字段。</p><p>双重提交 Cookie：服务器返回时，在用户的Cookie中设置一个随机生成的Cookie值，并将其同时存储于会话中。在每次请求中，该Cookie将作为参数或者请求头的一部分随请求发送到服务器端，服务器验证请求中的Cookie与会话中的Cookie是否一致，从而判断请求的合法性。</p><p>配置同源策略：可以通过配置服务器响应的HTTP头，设置SameSite属性为Strict或者Lax，限制Cookie的跨站使用，降低CSRF攻击的风险。</p><p>定期更改敏感操作的密码和凭证：即使CSRF攻击成功，攻击者也无法持续操作，因为密码和凭证的周期性更改会迅速使攻击者的攻击失效。</p><p>持续安全审查和漏洞扫描：定期审查和测试应用程序的安全性，包括CSRF漏洞的检测和修复。</p>',20),p=[s];function i(S,c,n,l,C,_){return o(),r("div",null,p)}const u=e(a,[["render",i]]);export{h as __pageData,u as default};