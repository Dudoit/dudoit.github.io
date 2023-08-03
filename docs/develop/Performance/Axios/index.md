# Axios

基于 promise 可以用于 浏览器 和 node.js 的网络请求库。它提供了简单易用的 API，可以发送各种类型的请求（如 GET、POST、PUT、DELETE等），并处理响应数据。

安装 axios：

```Bash
npm install axios
```

使用 CDN 引入
```HTML
<!-- jsDeliv -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<!-- unpkg -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

```JavaScript
import axios from "axios";
```

## 请求配置

### 一些常见的请求配置

  - baseURL

  - timeout

  - headers


### 环境区分
  ::: code-group

  ```JavaScript [config.js]
  const TIME_OUT = 1000 * 30

  let BASE_URL
  if (process.env.NODE_ENV === 'development') {
    // 开发环境
    BASE_URL = 'https://dev.example.com/xxx';
  } else if (process.env.NODE_ENV === 'development') {
    // 生产环境
    BASE_URL = 'https://api.example.com/xxx';
  } else {
    // ...
  }

  export { BASE_URL, TIME_OUT }
  ```
  :::

## 请求/响应拦截器

### 拦截器的基本使用

- **添加拦截器 use**

  ```JavaScript
  // 请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 响应拦截器
  axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数，对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数，对响应错误做点什么
    return Promise.reject(error);
  });
  ```

- **移除拦截器 eject**

  ```JavaScript
  const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
  axios.interceptors.request.eject(myInterceptor);
  ```

### 封装自定义拦截器

::: code-group

  ```JavaScript [request.js]
  import axios from 'axios'

  class DDRequest {
    instance
    interceptors
    showLoading
    loading

    constructor(config) {
      this.instance = axios.create(config)
      this.interceptors = config.interceptors

      // 对应实例的拦截器
      this.instance.interceptors.request.use(
        this.interceptors.requestInterceptor,
        this.interceptors.requestInterceptorCatch
      )
      this.instance.interceptors.response.use(
        this.interceptors.responseInterceptor,
        this.interceptors.responseInterceptorCatch
      )

      // 公共拦截器
      this.instance.interceptors.request.use(
        (config) => {
          if (this.showLoading) {
            this.loading = ElLoading.service({
              lock: true,
              text: '正在请求数据....',
              background: 'rgba(0, 0, 0, 0.5)'
            })
          }
          return config
        },
        (err) => {
          return err
        }
      )

      this.instance.interceptors.response.use(
        (res) => {
          // 将loading移除
          this.loading?.close()

          const data = res.data
          if (data.returnCode === '-1001') {
            console.log('请求失败~, 错误信息')
          } else {
            return data
          }
        },
        (err) => {
          // 将loading移除
          this.loading?.close()

          // 例子: 判断不同的HttpErrorCode显示不同的错误信息
          if (err.response.status === 404) {
            console.log('404的错误~')
          }
          return err
        }
      )
    }

    request(config) {
      return new Promise((resolve, reject) => {
        if (config.interceptors.requestInterceptor) {
          config = config.interceptors.requestInterceptor(config)
        }

        this.instance
          .request(config)
          .then((res) => {
            if (config.interceptors.responseInterceptor) {
              res = config.interceptors.responseInterceptor(res)
            }
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }

    get(config) {
      return this.request({ ...config, method: 'GET' })
    }

    post(config) {
      return this.request({ ...config, method: 'POST' })
    }

    delete(config) {
      return this.request({ ...config, method: 'DELETE' })
    }

    patch(config) {
      return this.request({ ...config, method: 'PATCH' })
    }

  }

  export default DDRequest
  ```
:::

## API 接口文件格式

```JavaScript
// 引入已经封装好的 Axios
import DDRequest from '@/service';

// 罗列所有相关接口地址
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
}

// 逐个导出 API 方法
export function APIaccountLogin(account) {
  return DDRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function APIuserInfoById(id) {
  return DDRequest.get({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
```