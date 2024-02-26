<script setup>
import cdnImg from '/.vitepress/components/cdnImg.vue';
</script>

# CSS

## CSS 权重计算

CSS 选择器：ID 选择器、类选择器、标签选择器、通配符选择器

!important > 行内样式 > ID 选择器 > 类选择器 > 标签选择器 > 通配符选择器

## 伪类和伪元素的区别

伪类：用于在已有元素发生用户行为导致的某种状态时，为其添加对应样式。例如：`:hover`、`:active`、`:visited`

伪元素：用于创建本不在文档中的内容，为其添加样式，元素实际不在文档树中。例如：`::before`、`::after`

CSS3 规范中要求用单冒号表示伪类，双冒号表示伪元素，主要的区别在于：有没有**创建**一个文档树之外的元素

## 重排 reflow 和 重绘 repaint

重排：当渲染树中的一部分因为元素的 <span class="blue-text">尺寸、布局、隐藏</span> 发生变化时而需要重新计算元素的位置和大小，并对页面重新布局。

重绘：当渲染树中一些元素需要更新属性，仅需要重新绘制<span class="blue-text">元素的外观风格</span>，**而不影响布局**。例如颜色，背景，边框，透明度等。

<p class="p-txt">重绘不一定会导致重排，重排必定会导致重绘</p>

导致重排的一些情况：添加/删除/更新 DOM 节点、移动 DOM 节点、调整窗口大小等

重排和重绘都会消耗大量的计算资源和时间，尽量减少其频率的发生。

减少重排的方式：使用 CSS 类名批量修改样式，避免大量使用 stlye 属性；使用绝对定位和固定定位时，移动元素位置不影响页面布局；减少使用 table 布局。

## z-index

<cdnImg src="offer-css-zindex" />

## 盒模型

盒模型是描述元素布局和尺寸的概念，每个元素都可以视为一个矩形盒子

盒子由 `内容 content`、`内边距 padding`、`边框 border`、`外边距 margin` 4 部分组成

我们通常说的盒模型有两种<span class="blue-text">（蓝色字体为内容宽度）</span>：

- 标准盒模型 <i class="p-txt">content-box</i>

  标准盒模型的尺寸 width = <span class="blue-text">content</span> + padding + border + margin

- 怪异盒模型（IE 盒模型）<i class="p-txt">border-box</i>

  怪异盒模型的尺寸 width = <span class="blue-text">content + padding + border</span> + margin

两种盒模型可以通过设置 `box-sizing` 属性相互转换

## position 定位

`相对定位 relative`：定位原点是该元素本身的位置，可通过 top、left 等属性改变水平或垂直位置，使它相对原点移动。<span class="blue-text">元素仍占据空间</span>

`绝对定位 absolute`：定位原点是最近一级已定位元素（除了 static 属性）的左上角。<span class="blue-text">脱离文档流，元素不占据空间</span>

`固定定位 absolute`：定位原点是相对于浏览器窗口的，即使窗口滚动也不会移动。<span class="blue-text">脱离文档流，元素不占据空间</span>

`默认定位 static`：默认值，没有定位，不会被 top、left 影响

`黏性定位 sticky`：top、right、bottom、left 4 个值中只取一个。未超出阈值时为相对定位，超出阈值后为固定定位。sticky 只有在父元素中有效果，父元素的高度需要大于 sticky 元素的高度；父元素不能使用 `overflow: hidden`、`overflow: auto` 属性


## 垂直居中

- flex

  ```CSS
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

- position + transform

  宽高未知的情况下使用 transform

  ```CSS
  .parent {
    position: relative;
  }

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```

- position + margin

  宽高已知的情况下使用 margin

  ```CSS
  .parent {
    position: relative;
  }

  .son {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
  }
  ```

- top/right/bottom/left 0 auto

  ```CSS
  .parent {
    position: relative;
  }

  .son {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  ```

## BFC

BFC （Block Formatting Context）块级格式化上下文，是 CSS 中的一种渲染环境，一个独立的渲染区域

BFC 的特性：

```
1. 内部块级元素垂直方向排列
2. 在同一个 BFC 内，两个相邻的元素 margin 会发生折叠
3. BFC 区域不会与浮动元素重叠
4. BFC 包含浮动元素的高度
5. BFC 中的子元素不会影响到外层元素
```

BFC 的触发条件（满足以下条件之一即可）：

```
1. 根元素 html
2. display: inline-block，flex，table-cell，table-caption
3. position: absolute，fixed
4. float 的值不为 none
5. overflow 的值不为 visible（例：auto，hidden，scroll）
```

BFC 解决的问题：父元素塌陷、外边距重叠、清除浮动

## 清除浮动的方法

清除浮动主要用于 **解决父元素塌陷** 的问题

- BFC

  创建 BFC ，给父元素添加 `overflow: hidden` 的属性值

- clearfix 伪元素清除浮动

  为父元素添加一个 `clearfix` 的类名，为这个类添加包含 `clear: both` 的属性值

  ```CSS
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  ```

- 使用额外的块级元素

  在浮动元素后面添加一个空的 div，并添加 clear 属性

  ```HTML
  <div style="clear:both;"></div>
  ```

- 使用 flex 布局

  将父元素的 `display` 属性设为 `flex` 或者 `inline-flex`

## Flex

Flex 是一种创建弹性布局的 CSS 模块，可以方便地实现**响应式设计**

- flex 属性

flex 是 `flex-grow`、`flex-shrink`、`flex-basis` 的简写，默认值为 `0, 1, auto`

`flex: 1` 代表了在 flex 容器中分配剩余空间，三个属性的值为 `1, 1, 0`

## 隐藏元素的 7 种方法

`visibility: hidden`：变更元素的可见性，元素占用的空间仍然存在

`display: none`：元素不可见，不占用文档空间

`opactiy: 0`：设置元素透明度，CSS 3 属性

`position: absolute`：设置一个很大的定位，使元素在可见区域外

`transform: scale(0)`：将元素无限缩小，使元素不可见

`height: 0`: 将元素高度设为 0

`<div hidden="hidden">`：HTML5 属性，效果和 `display: none` 相同

<span class="blue-text">visibility 和 opactiy 会触发浏览器的重绘，display 会触发浏览器的重排和重绘</span>

## 自适应的正方形

- vw

  ```CSS
  .box {
    width: 10vw;
    height: 10vw;
  }
  ```

- padding 百分比计算

  ```CSS
  .box {
    width: 10%;
    height: 0;
    padding-bottom: 10%; 
  }
  ```

## 三角形

- border

  创建一个宽高为 0 的块级元素；绘制边框；给特定边框使用透明色

  ```CSS
  .triangle {
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-top: 30px solid pink;
  }
  ```

- clip-path

  ```CSS
  .triangle {
    width: 30px;
    height: 30px;
    background-color: pink;
    clip-path: polygon(0 0, 0 30, 30 0);
    transform: rotate(45deg);
  }
  ```