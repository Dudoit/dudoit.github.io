
## defineAsyncComponent() 异步组件

异步组件，它在运行时是懒加载的。

利于 webpack 分包，优化首屏加载速度

```Vue
<script>
import { defineAsyncComponent } from "vue"; 

const AsyncHome = defineAsyncComponent(() => import("./Home.vue"))
</script>
```