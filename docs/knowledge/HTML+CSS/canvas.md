# Canvas

## 什么是 Canvas

首先，什么是 `Canvas` ？简单来说 `Canvas` 是 `HTML5` 中推出的一个新标签，并可以结合使用 `Javascript` 在页面上实现丰富的图形操作的一项新技术。在早期的时候，页面上如果想要播放视频，或者做一些小游戏，都要使用到 `Flash` ，然而 `Flash` 这个东西使用复杂，实现起来需要额外的制作成本，所以浏览器急需一种原生支持的视频或者图像处理的技术，于是 `Canvas` 就应运而生了。

## 基础使用

### 创建 Canvas 的两种方式

- Canvas 标签创建

  ```HTML
  <body>
    <canvas width="600" height="400"></canvas>
  </body>
  ```

- JavaScript 创建

  ```JavaScript
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 400
  document.body.append(canvas)
  ```

:::info 小知识点 💡
不要使用 CSS 定义 Canvas 的大小，这样会导致图像比例失常
:::

### Context 画笔

- **绘制一条直线**

  `moveTo`：画笔移动到直线起点

  `lineTo`：画笔移动到直线终点

  `stroke`：让画笔绘制线条

  ```JavaScript
  const canvas = document.createElement('canvas')
  canvas.width = 500;
  canvas.height = 100;
  document.body.append(canvas);
  const context = canvas.getContext('2d')

  context.moveTo(100, 50);
  context.lineTo(300, 100);
  context.stroke();
  ```

  <canvas ref="canvas1" width="500" height="100"></canvas>

- **绘制一条折线**

  只需要重复调用 `lineTo` 就可以实现

  ```JavaScript{7-11,13-15}
  const canvas = document.createElement('canvas')
  canvas.width = 500;
  canvas.height = 100;
  document.body.append(canvas);
  const context = canvas.getContext('2d')

  const point = [
    { x: 200, y: 30 },
    { x: 300, y: 80 },
    { x: 400, y: 50 },
  ]
  context.moveTo(100, 20);
  point.forEach(item => {
    context.lineTo(item.x, item.y)
  })
  context.stroke();
  ```

  <canvas ref="canvas2" width="500" height="100"></canvas>

- **绘制粗细、颜色**

  ```JavaScript
  // lineWidth 线条宽度
  context.lineWidth = 5

  // strokeStyle 线条样式
  context.strokeStyle = "pink"
  ```

  <canvas ref="canvas3" width="500" height="100"></canvas>

- **线性渐变**

  ```JavaScript
  // createLinearGradient(start.x, start.y, end.x, end.y)
  const gradient = context.createLinearGradient(100, 20, 400, 50);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(0.5, "pink");
  gradient.addColorStop(1, "orange");
  context.strokeStyle = gradient;
  context.stroke();
  ```

  <canvas ref="canvas4" width="500" height="100"></canvas>




<script setup>
import { ref, onMounted } from 'vue'

const canvas1 = ref()
const canvas2 = ref()
const canvas3 = ref()
const canvas4 = ref()

onMounted(() => {
  runCtx1(canvas1)
  runCtx2(canvas2)
  runCtx3(canvas3)
  runCtx4(canvas4)
})

const runCtx1 = (canvas) => {
  const ctx = canvas.value.getContext('2d')
  ctx.moveTo(100, 20)
  ctx.lineTo(300, 80)
  ctx.stroke()
}

const runCtx2 = (canvas) => {
  const ctx = canvas.value.getContext('2d')

  const point = [
    { x: 200, y: 30 },
    { x: 300, y: 80 },
    { x: 400, y: 50 },
  ]

  ctx.moveTo(100, 20)
  point.forEach(item => {
    ctx.lineTo(item.x, item.y)
  })
  ctx.stroke()
}

const runCtx3 = (canvas) => {
  const ctx = canvas.value.getContext('2d')

  const point = [
    { x: 200, y: 30 },
    { x: 300, y: 80 },
    { x: 400, y: 50 },
  ]
  ctx.lineWidth = 5
  ctx.strokeStyle = "pink"
  ctx.moveTo(100, 20)
  point.forEach(item => {
    ctx.lineTo(item.x, item.y)
  })
  ctx.stroke()
}

const runCtx4 = (canvas) => {
  const ctx = canvas.value.getContext('2d')

  const point = [
    { x: 200, y: 30 },
    { x: 300, y: 80 },
    { x: 400, y: 50 },
  ]
  const gradient = ctx.createLinearGradient(100, 20, 400, 50);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(0.5, "pink");
  gradient.addColorStop(1, "orange");

  ctx.lineWidth = 5
  ctx.strokeStyle = gradient;

  ctx.moveTo(100, 20)
  point.forEach(item => {
    ctx.lineTo(item.x, item.y)
  })
  ctx.stroke()
}
</script>