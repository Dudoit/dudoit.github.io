# CSS 面试

## CSS3 的新特性有哪些

**边框属性**

border-radius 圆角边框

border-image 图片边框

**gradients 渐变属性**

- linear-gradients 线性渐变

```CSS
{
  /* 从左至右 */
  background-image: linear-gradient(to right, red , yellow);
  /* 从右至左 */
  background-image: linear-gradient(-90deg, red , yellow);
  /* 透明度 */
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
  /* 重复渐变 */
  background-image: repeating-linear-gradient(yellow 10%, green 20%); 
}
```

- radial-gradients 径向渐变

```CSS
{
  /* 均匀分布 */
  background-image: radial-gradient(red, yellow, green);
  /* 比例分布 */
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
  /* 圆形渐变形状，默认为椭圆 ellipse */
  background-image: radial-gradient(circle, red, yellow, green);
}
```

**2D 转换（移动、旋转、缩放、倾斜）**

```CSS
{
  /* 移动 */
  transform: translate(50px, 100px);
  /* 旋转 */
  transform: rotate(30deg);
  /* 缩放 */
  transform: scale(30deg);
  /* 倾斜 */
  transform: skew(30deg);
}
```

**@media 媒体查询**

针对不同媒体类型（电脑、平板、手机、屏幕阅读器、打印机），定制不同的样式

```CSS
@media screen and (max-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

**@font-face 字体**

```CSS
/* 普通文本样式 */
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}

/* 粗体文本样式 */
@font-face {
  font-family: myFirstFont;
  src: url(sansation_bold.woff);
  font-weight: bold;
}
 
div {
  font-family: myFirstFont;
}
```

## 页面导入样式时，使用 link 和 @import 有什么区别

link 会在页面进入时并行加载，@import 引用的 css 会在页面加载后再加载

link 兼容性好于 @import，@import 只在 IE5 以上才能识别

link 方式的权重大于 @import

## 盒模型

盒模型是描述元素布局和尺寸的概念，每个元素都可以视为一个矩形盒子，一个盒子由 `内容 content`、`内边距 padding`、`边框 border`、`外边距 margin` 四部分组成。

标准盒模型：width = 内容宽度（content）+ 内外边距 + 边框

IE 盒模型：width = 内容宽度（content + border + padding） + 外边距

使用 border-box 可以将标准盒模型转换为 IE 盒模型

标准盒模型：`box-sizing: content-box`；IE 盒模型：`box-sizing: border-box`

## 隐藏元素的几种方法、visibility 和 display 的差别

`visibility: hidden`：变更元素的可见性，所以元素占用的空间实际上仍然存在。

`display: none`：元素不可见，且不占用文档空间。

`opacity: 0`：设置元素透明度，CSS3 属性。

`position: absolute`：设置一个很大的定位，使元素定位在可见区域外。

`transform: scale(0)`：将元素无限缩小，使元素不可见。

`height: 0`：使元素高度为 0。

`<div hidden="hidden">`： HTML5 属性，效果和 display: none 相同。

visibility 和 opacity 会触发浏览器的重绘，而 display 会触发浏览器的重排和重绘。

## 选择器 ~ 和 + 的区别

`~` 选择器：作用于符合条件的当前元素后的**同级元素**；**匹配多个**

`+` 选择器：作用于符合条件的当前元素后的**同级元素**；**匹配单个**

```HTML
<div class="box"></div>
<p class="a"></p>
<span class="b"></span>
<p class="c"></p>
<span class="d"></span>

.box ~ p  ：可以选中box下的所有 p 元素 (a & c)
.box + span ：则匹配选中 box 相邻下符合条件的第一个元素 (b)
```

## animation 动画

`animation` 是以下 8 个属性的简写：

| 属性 | 描述 | 默认值 |
| --- | --- | --- |
| animation-name | @keyframes 动画名称 | none |
| animation-duration | 动画完成一个周期需要的时间 | 0 |
| animation-delay | 动画开始运动时间 | 0 |
| animation-timing-function | 动画运动的速度 | ease |
| animation-fill-mode | 动画完成时的样式 | none |
| animation-iteration-count | 动画的运动次数 | 1 |
| animation-direction | 动画的运动方向 | normal |
| animation-play-state | 控制动画的运动和暂停 | running |

`animation-delay`：**delay 为正值时**，表示延迟 n 秒后执行；**若 delay 为负值**，则动画立即运动，且从第 n 秒开始。（ `animation-duration` 的值必须是 正数 或 0 ，所以不会有其他情况 ）

`animation-timing-function`：

常见值的说明

![image.png]()

ease：先加速后减速；linear： 匀速；ease-in：逐渐加速；ease-out: 逐渐减速；ease-in-out: 先慢后快再慢

可以自己体验一下 [贝塞尔曲线](https://cubic-bezier.com/) 的运动速度

`animation-fill-mode`：forwards 保留动画的最后一个关键帧；backwards 立即应用第一个关键帧样式；both 遵循 forwards 和 backwards 两者都保留。

`animation-iteration-count`：infinite 无限循环播放；甚至可以是浮点数，0.5；负值无效。

## transition 过渡

过渡是元素从一种样式逐渐转变为另一种样式的效果。

`transition` 是以下 4 个属性的简写：

| 属性 | 描述 | 默认值 |
| --- | --- | --- |
| transition-property | 需要过渡的属性名称 | 0 |
| transition-duration | 过渡需要的时间 | 0 |
| transition-timing-function | 过渡效果的速度 | ease |
| transition-delay | 过渡效果开始延迟的时间 | 0 |

## position 定位

`相对定位 relative`：定位原点是该元素本身所在的位置，可以通过 top、left 等属性改变垂直或水平的位置，使该元素相对它的原点移动。无论是否移动，元素仍占据原来的空间。

`绝对定位 absolute`：定位原点是最近一级已定位（relative、absolute）父元素的左上角，绝对定位使元素与文档流无关，不占据空间。

`固定定位 fixed`：定位原点相对于浏览器窗口定位，即使窗口滚动也不会移动。固定定位使元素位置与文档流无关，不占据空间。

`默认定位 static`：默认值，没有定位，不会被 top、left 等属性影响。

`黏性定位 sticky`：top、bottom、left、right 四个值中只取一个。未超出阈值时为相对定位，超出阈值后为固定定位。sticky 只在父元素中有效果，需要包装父元素高度大于 sticky 元素；父元素不能使用 overflow: hidden 和 overflow: auto 属性；新属性兼容性差。

`继承 inherit`：继承父元素的 position 属性。

## IFC & BFC

### IFC

IFC（Inline Formatting Context） 是内联格式化上下文，也叫行内格式化上下文。

IFC 的特性：内部元素水平排列、水平间距由 margin、padding、border 决定；如果 IFC 中的内容超出 IFC 的宽度，内联元素会被强制换行。

### BFC

BFC（Block Formatting Context） 是块级格式化上下文，是 CSS 中的一种渲染环境，是一个独立的渲染区域。

BFC 的特性：内部块级元素垂直方向排列，一个接一个地布局；BFC 区域不会与浮动元素重叠；BFC 包含浮动元素的高度；BFC 中的子元素不会影响到外层元素。

BFC 的触发条件（满足以下条件之一即可）：

```
1. 根元素 "html"
2. display: inline-block, flex, table-cell, table-caption
3. position: absolute, fixed
4. float 的值不为 "none"
5. overflow 的值不为 "visible" (例: auto, hideen, scroll)
```

### BFC 的应用 📦

**1. BFC 清除浮动**

当一个元素设置浮动时，若其父元素没有设置高度，那么会导致父元素高度塌陷。通过创建 BFC 可以清除浮动，使父元素可以正确地包裹该元素。

```CSS
.parent {
  overflow: hidden;  /* 创建BFC，清除浮动 */
}
```

**2. BFC 自适应两栏布局**

左侧栏固定宽度，右侧自适应填充剩余的空间，可以使用 BFC 实现

```HTML
<div class="container">
  <div class="left">左侧栏</div>
  <div class="right">右侧栏</div>
</div>
```
```css
.container {
  overflow: hidden; /* 创建BFC */
}

.left {
  width: 200px; /* 左侧栏固定宽度 */
  float: left;
}
```

## 清除浮动有哪些方法

**BFC**

上面 BFC 中提到的，创建 BFC，给父级添加 `overflow: hidden`


**clearfix 伪类清除浮动**

为父元素添加一个 clearfix 的类，这个类的伪类中包含 `clear: both` 属性：

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

**使用额外的块级元素**

在浮动元素后面添加一个空的块级元素 div ，并使用 clear 属性将其清除浮动

```html
<div style="clear:both;"></div>
```

**使用 flexbox 布局**

将父元素的 display 属性设置为 `flex` 或 `inline-flex`

```css
.parent {
  display: flex;
}
```

## Flex

Flexbox 是一种用于创建弹性布局的 CSS 模块，主要为了方便地实现响应式设计。

Flexbox 的一些属性：`flex-direction`、`flex-wrap`、`flex-flow`、`justify-content`、`align-items`、`align-self`、`align-content`、`order`、`flex-grow`、`flex-grow`、`flex-shrink`、`flex-basis`

**flex 和 inline-flex 的区别**

`display: flex` 会将 Flex 容器设置为块级元素，占据一行的宽度

`display: inline-flex` 将 Flex 容器设置为内联元素，宽度根据内容自适应。

**flex: 1 代表什么**

flex 是 `flex-grow`、`flex-shrink`、`flex-basis` 的简写形式，默认值分别为 0，1，auto

flex-grow： 定义项目的放大比例，决定项目在容器中的可用空间分配

flex-shrink： 定义项目的缩小比例，决定项目在容器中空间不足时的缩小程度

flex-basis： 定义项目的初始大小

当 flex: 1 时，相当于

```css
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
```

## 圣杯布局

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>圣杯布局</title>
</head>

<style>
  .container {
    padding: 0 300px 0 200px;
  }

  .center {
    float: left;
    background-color: yellow;
    width: 100%;
  }

  .left {
    float: left;
    width: 200px;
    background-color: green;
    margin-left: -100%;
    position: relative;
    left: -200px;
  }

  .right {
    float: left;
    width: 300px;
    margin-left: -300px;
    background-color: grey;
    position: relative;
    right: -300px;
  }
</style>

<body>
  <div class="container">
    <div class="center">中间区域</div>
    <div class="left">左侧区域</div>
    <div class="right">右侧区域</div>
  </div>
</body>

</html>
```

## 双飞翼布局

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>双飞翼布局</title>
</head>
<style>
  .container {
    width: 100%;
    float: left;
    background-color: green;
  }

  .center {
    margin-left: 200px;
    margin-right: 300px;
  }

  .left {
    width: 200px;
    float: left;
    background-color: yellow;
    margin-left: -100%;
  }

  .right {
    width: 300px;
    float: left;
    background-color: grey;
    margin-left: -300px;
  }
</style>

<body>
  <div class="container">
    <div class="center">center</div>
  </div>
  <div class="left">left</div>
  <div class="right">right</div>
</body>

</html>
```

## 重排 reflow 和 重绘 repaint

**重排**：当渲染树中的一部分因为元素的 **规模尺寸、布局、隐藏** 发生变化时而需要重新计算元素的位置和大小，并对页面重新布局。

**重绘**：当渲染树中一些元素需要更新属性，仅需要重新绘制**元素的外观风格**，而不影响布局。例如颜色，背景，边框，透明度等。

**重绘不一定会导致重排，重排必定会导致重绘**

重排和重绘会消耗大量的计算资源和时间，尽量减少其频率的发生。

导致重排的一些情况：添加/删除/更新 DOM 节点、移动 DOM 节点、调整窗口大小等

减少重排的方式：使用 CSS 类名批量修改样式，避免大量使用 stlye 属性；使用绝对定位和固定定位时，移动元素位置不影响页面布局；减少使用 table 
布局。