# CSS 理解

## 层叠

CSS - Cascading Style Sheets 层叠样式表

- Cascading 层叠
- Style Sheets 样式表

样式表用于规定声明的集合，声明中可能会产生冲突；层叠 的作用就是 <span class="p-b-txt">解决冲突</span>

**层叠三大规则**

样式表来源 > 选择器优先级 > 源码位置

:::info 好的代码 📝
1. 选择器尽量少用 id （不利于 CSS 的复用；且优先级较高不利于后续样式覆盖）
2. 尽量不要用 !important （后续的扩展和灵活性降低）
3. 自己编写的样式加载在引用库后面 （保证自己的样式生效）
:::

## 继承

<span class="p-txt">大部分具有继承特性的属性跟文本相关</span>

color、font、font-family、font-size、font-weight、font-style、line-height、letter-spacing、text-align、text-indent、white-space

- inherit 关键字

```CSS
h1 {
  font-size: 28px;
}

.card {
  font-size: 24px;
}

.card h1 {
  font-size: inherit;
}
```

## CSS 的值和单位


## 特殊样式

- 三角形

```CSS
.triangle-bottom {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border: 50px solid pink;
}
```

- 固定比例的矩形

```CSS
.ratio-box {
  /* width 是父元素宽度的 100% */
  width: 100%;
  height: 0;
  padding: 0;
  /* padding-bottom 是父元素宽度的 75% */
  padding-bottom: 75%;
}
```

- 渐变边框

```CSS
.awesome-border {
  width: 150px;
  height: 100px;
  border: 8px solid transparent;
  border-radius: 12px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image:
    linear-gradient(to right, #fff, #fff),
    linear-gradient(135deg, #e941ab, #a557ef);
}
```

## 常规流布局

- 块级格式化上下文

- 内联格式化上下文

## z-index

:::info 好的代码 📝
使用 css 变量管理 z-index 的值：
--z-loading-indicator: 100;
--z-nav-menu: 200;
--z-dropdown-menu: 300;
--z-model-backdrop: 400;
--z-model-body: 410;
:::

## 响应式设计

响应式应遵循的原则：

1. 优选流式布局，如百分比、flex、grid
2. 使用响应式图片，匹配尺寸，节省带宽
3. 使用媒体查询为不同的设备类型做适配
4. 给移动端设备设置简单、统一的视口
5. 使用相对长度，em、rem、vw 作为长度度量

### 媒体查询

媒体查询允许某些样式只在页面 <span class="p-txt">满足特定条件时</span> 才生效

```CSS
@media screen and (min-width: 320px) {}
```

### 相对长度的使用

- **em**

  在非 font-size 属性中使用是相对于自身的字体大小

  在 font-size 上使用是相对于父元素的字体大小（由于 font-size 的继承特性，多重嵌套。通常不这么使用）

  应用场景：展示区域根据字号的不同，做出缩放调整

  ```CSS
  /* <div class="font-small paragraph"></div> */
  /* <div class="font-large paragraph"></div> */

  .font-small {
    font-size: 12px;
  }

  .font-large {
    font-size: 20px;
  }

  .paragraph {
    padding: 1em;
    border-radius: 0.5em;
    line-height: 1.5em;
  }
  ```

- **rem**

根元素字体大小，通过 伪类:root 或者 html选择器 选定

VScode 插件 - px2rem ：利用插件指令完成全局转换（设计图默认 750px，转换基准 75px）


- **vw & vh**

需要确保 `scale=1` ，保持视口和屏幕宽度一致

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

VScode 插件 - px2vw ：利用插件指令完成全局转换（设计图默认 750px）

## CSS 预处理器

使用 CSS 预处理器的本质是为了 <span class="p-txt">提高研发效率</span>

- 预处理器如何提高研发效率？

  1. 设置自定义变量：提高可复用性

  2. 嵌套、作用域：避免全局污染、结构层次清晰、减少复杂组合选择器

  3. mixins、继承：提高可复用、可维护性

  4. 操作符、条件/循环语句、自定义函数：提高编程能力、增加灵活性

  ```LESS
  @primary-font-size: 24px; /* 默认字体大小 */
  @primary-blue: #245bdb; /* 默认蓝色 */
  @width: 54px; /* 默认字体大小 */
  @height: @width + 10px; /* 使用变量和逻辑语句 */
  .title {
    width: @width; /* 使用变量 */
    height: @height;
    font-size: @primary-font-size;
    color: @primary-blue;

    .&-desc {
      @font-size: 12px;
      font-size: @font-size;
    }
  }
  ```

  ```SCSS
  @function column-width($col, $total) {
    @return percentage($col/$total);
  }
  .col-1 {
    width: column-width(1, 10); /* width: 10% */
  }
  .col-3 {
    width: column-width(3, 10); /* width: 30% */
  }
  ```

## CSS 后处理器

常见的后处理器框架 postcss

## CSS 模块化

CSS Module 是为了解决 全局污染问题，本质上是保证样式集合对应的选择器是唯一的。常见的方案：

- BEM 命名规范

  通过 `.header-btn__prev`、`.header-btn__next` 的命名规范约束开发者

- vue-loader 的 scoped

  通过编译，在元素上添加 data-xxx 的唯一属性，CSS 属性添加选择器 `[data-xxx]` 的方式实现样式隔离

- CSS Modules

  通过编译的方式，转换唯一命名（css-loader、postcss-module）

## 参考文献

掘金 - 字节前端训练营

https://bytedance.feishu.cn/file/BsO2btmpEoCxgcxu4DwcwuM0nfg