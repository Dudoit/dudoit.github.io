# DOM & BOM

## DOM

文档对象模型（DOM，Document Object Model），提供与文档交互的方法和接口

## BOM

浏览器对象模型（BOM），提供与浏览器交互的方法和接口

### window

### location

  `location.href`：当前加载页面的完整 URL，相当于 👇

  `location.protocol` + `//` + `location.host` + `location.pathname` + `location.search`

  `location.host` 相当于 👉 `location.hostname` + `:` + `location.port`

- 查询字符串 URLSearchParams

  先前在处理 location.search 的值获取参数时，自定义函数：


  `URLSearchParams` 提供了一套标准 API 来应对这个问题

  ```JavaScript
  const qs = location.search
  const searchParams = new URLSearchParams(qs)

  // toString
  searchParams.toString() // name=dudoit
  // has
  searchParams.has('name') // true
  // get
  searchParams.get('name') // dudoit
  // set
  searchParams.set('name', 'dudo')
  // delete
  searchParams.delete('name')

  for (let param of searchParams) {
    console.log(param) // ["name", "dudo"]
  }
  ```

- 操作地址

  立即启动导航到新 URL 的操作，同时在浏览器历史记录中增加一条记录

  ```JavaScript
  // assign
  location.assign("https://www.baidu.com")

  // window.location
  window.location = "https://www.baidu.com"
  // location.href （常用）
  location.href = "https://www.baidu.com"
  ```

  跳转，但不新增记录，也不能回到前一页

  ```JavaScript
  location.replace = "https://www.baidu.com"
  ```

  重新加载

  ```JavaScript
  location.reload()
  // 强制刷新
  location.reload(true)
  ```

### navigator

### screen

### history
