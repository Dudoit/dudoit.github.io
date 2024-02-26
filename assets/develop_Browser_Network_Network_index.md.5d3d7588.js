import{_ as s,o as a,c as e,O as n}from"./chunks/framework.51846e02.js";const g=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"develop/Browser+Network/Network/index.md","filePath":"develop/Browser+Network/Network/index.md"}'),o={name:"develop/Browser+Network/Network/index.md"},p=n(`<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><h2 id="http-状态码" tabindex="-1">HTTP 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;HTTP 状态码&quot;">​</a></h2><p><code>1xx</code> 类状态码属于提示信息，是协议处理中的一种中间状态，实际用到的比较少。</p><p><code>2xx</code> 类状态码表示服务器<strong>成功</strong>处理了客户端的请求，也是我们最愿意看到的状态。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">「200 OK」是最常见的成功状态码，表示一切正常。如果是非 HEAD 请求，服务器返回的响应头都会有 body 数据。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「204 No Content」也是常见的成功状态码，与 200 OK 基本相同，但响应头没有 body 数据。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「206 Partial Content」是应用于 HTTP 分块下载或断点续传，表示响应返回的 body 数据并不是资源的全部，而是其中的一部分，也是服务器处理成功的状态。</span></span></code></pre></div><p><code>3xx</code> 类状态码表示客户端请求的资源发生了变动，需要客户端用新的 URL 重新发送请求获取资源，也就是<strong>重定向</strong>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">「301 Moved Permanently」表示永久重定向，说明请求的资源已经不存在了，需改用新的 URL 再次访问。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「302 Found」表示临时重定向，说明请求的资源还在，但暂时需要用另一个 URL 来访问。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「304 Not Modified」不具有跳转的含义，表示资源未修改，重定向已存在的缓冲文件，也称缓存重定向，也就是告诉客户端可以继续使用缓存资源，用于缓存控制。</span></span></code></pre></div><p>301 和 302 都会在响应头里使用字段 Location，指明后续要跳转的 URL，浏览器会自动重定向新的 URL。</p><p><code>4xx</code> 类状态码表示客户端发送的<strong>报文有误</strong>，服务器无法处理，也就是错误码的含义。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">「400 Bad Request」表示客户端请求的报文有错误，但只是个笼统的错误。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「403 Forbidden」表示服务器禁止访问资源，并不是客户端的请求出错。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「404 Not Found」表示请求的资源在服务器上不存在或未找到，所以无法提供给客户端。</span></span></code></pre></div><p><code>5xx</code> 类状态码表示客户端请求报文正确，但是<strong>服务器处理时内部发生了错误</strong>，属于服务器端的错误码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">「500 Internal Server Error」与 400 类型，是个笼统通用的错误码，服务器发生了什么错误，我们并不知道。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「501 Not Implemented」表示客户端请求的功能还不支持，类似“即将开业，敬请期待”的意思。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「502 Bad Gateway」通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">「503 Service Unavailable」表示服务器当前很忙，暂时无法响应客户端，类似“网络服务正忙，请稍后重试”的意思。</span></span></code></pre></div><h2 id="强制缓存、协商缓存" tabindex="-1">强制缓存、协商缓存 <a class="header-anchor" href="#强制缓存、协商缓存" aria-label="Permalink to &quot;强制缓存、协商缓存&quot;">​</a></h2><ul><li><p>强制缓存</p><p>控制强制缓存的字段: <code>Expires</code> 和 <code>Cache-Control</code></p><p>在 HTTP/1.1 <code>Cache-Control</code> 已经代替 <code>Expires</code>，所以如果当两者同时存在时，<code>Cache-Control</code> 的优先级要大于 <code>Expires</code></p><div class="info custom-block"><p class="custom-block-title">Expires 💡</p><p>主要原因是 Expires 的值是一个时间的绝对值，例如：<code>expires: Mon, 16 Apr 2021 07:00:00 GMT</code>。所以 Expires 这种控制缓存原理采用事件的方式，客户端和服务端会因为某些原因（时区，精度不准确）导致误差的产生</p></div><p>在HTTP/1.1中，<code>Cache-Control</code> 是控制网页缓存最重要的规则</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public: 所有内容都将被缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">private: 所有内容只有客户端可以缓存（default）</span></span>
<span class="line"><span style="color:#A6ACCD;">no-cache: 客户端缓存内容，但是否使用缓存则需经过协商缓存的验证</span></span>
<span class="line"><span style="color:#A6ACCD;">no-store: 所有内容都不会被缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">max-age=xxx: 缓存内容将在xxx秒后失效</span></span></code></pre></div></li><li><p>协商缓存</p><p><span class="blue-text">强制缓存失效后</span>，浏览器携带缓存标识向服务器发起请求，由服务器决定（根据缓存标识）是否使用缓存</p><p>主要有以下两种情况：</p><p>a&gt; 协商缓存生效，返回 <code>304</code></p><p>b&gt; 协商缓存失效，返回 <code>200</code> 和请求结果</p><p>控制协商缓存的字段：<code>Last-Modified/If-Modified-Since</code> 和 <code>Etag/If-None-Match</code></p><p><code>Last-Modified</code> 和 <code>Etag</code> 是服务端返回给浏览器的字段</p><p><code>If-Modified-Since</code> 和 <code>Etag/If-None-Match</code> 则是浏览器传递给服务端的字段</p><p>优先级比较：<code>Etag</code> &gt; <code>Last-Modified</code></p><p><strong><code>Last-Modified</code> - 服务器最后被修改的时间</strong></p><p><strong><code>Etag</code> - 资源的唯一标识</strong></p></li><li><p>总结</p><p>强制缓存优先于协商缓存进行，若强制缓存生效则直接使用缓存，若不生效则进行协商缓存</p></li></ul>`,14),l=[p];function c(t,d,i,r,C,A){return a(),e("div",null,l)}const y=s(o,[["render",c]]);export{g as __pageData,y as default};