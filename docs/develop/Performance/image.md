# 图片优化

就图片这块来说，与其说我们是在做“优化”，不如说我们是在做“权衡”。因为我们要做的事情，就是去压缩图片的体积（或者一开始就选取体积较小的图片格式）。但这个优化操作，是以牺牲一部分成像质量为代价的。因此我们的主要任务，是尽可能地去寻求一个质量与性能之间的平衡点。

## 不同业务场景下的图片方案选型

时下应用较为广泛的 Web 图片格式： JPEG/JPG、PNG、WebP、Base64、SVG 等

## 前置知识：二进制位数与色彩的关系

在计算机中，像素用二进制数来表示。不同的图片格式中像素与二进制位数之间的对应关系是不同的。一个像素对应的二进制位数越多，它可以表示的颜色种类就越多，成像效果也就越细腻，文件体积相应也会越大。

一个二进制位表示两种颜色（0|1 对应黑|白），如果一种图片格式对应的二进制位数有 n 个，那么它就可以呈现 2^n 种颜色。

## JPEG/JPG

**特点：有损压缩、体积小、加载快、不支持透明**

JPG 最大的特点是有损压缩。这种高效的压缩算法使它成为了一种非常轻巧的图片格式。另一方面，即使被称为“有损”压缩，JPG的压缩方式仍然是一种高质量的压缩方式：当我们把图片体积压缩至原有体积的 50% 以下时，JPG 仍然可以保持住 60% 的品质。此外，JPG 格式以 24 位存储单个图，可以呈现多达 1600 万种颜色，足以应对大多数场景下对色彩的要求。

使用场景：JPG 图片经常作为 **大的背景图**、轮播图或 Banner 图出现

缺点：处理矢量图形和 Logo 等线条感较强、颜色对比强烈的图像时，人为压缩导致的图片模糊会相当明显；不支持透明

## PNG-8 与 PNG-24

**特点：无损压缩、质量高、体积大、支持透明**

PNG 是一种无损压缩的高保真的图片格式。8 和 24，这里都是二进制数的位数。8 位的 PNG 最多支持 256 种颜色，24 位可以呈现约 1600 万种颜色。

PNG 图片具有比 JPG 更强的色彩表现力，对线条的处理更加细腻，对透明度有良好的支持，**唯一的 BUG 就是体积太大**。

使用场景：小的 Logo、颜色简单且对比强烈的图片或背景等

## Base64

**特点：文本文件、依赖编码、小图标解决方案**

Base64 并非一种图片格式，而是一种编码方式。Base64 和雪碧图一样，是作为小图标解决方案而存在的，都是为了减少加载网页图片时对服务器的请求次数，从而提升网页性能

Base64 是一种用于传输 8Bit 字节码的编码方式，通过对图片进行 Base64 编码，我们可以直接将编码结果写入 HTML 或者写入 CSS，从而减少 HTTP 请求的次数

Base64 是类似这样的字符串：
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAMJG
```

浏览器原来是可以理解这个字符串的，它自动就将这个字符串解码为了一个图片，而不需再去发送 HTTP 请求

使用场景：非常小的 Logo 或 图标；图片的实际尺寸很小（小于 2kb）、更新频率低

::: warning
Base64 编码后，图片大小会膨胀为原文件的 4/3，如果将大体积文件也编码后会使体积明显增加，即便减少了 HTTP 请求，也无法弥补大体积的性能开销
:::

## WebP

**特点：年轻的全能型选手**

WebP 于 2010 年被提出，是 Google 专为 Web 开发的一种旨在加快图片加载速度的图片格式，它支持有损压缩和无损压缩

WebP 像 JPEG 一样对细节丰富的图片信手拈来，像 PNG 一样支持透明，甚至可以像 GIF 一样可以显示动态图片

缺点：兼容性差

使用场景：需要浏览器支持 WebP。即使很多浏览器不支持 WebP ，我们可以如何去使用它呢？

```
<img src="//img.alicdn.com/tps/i4/TB1CKSgIpXXXXccXXXX07tlTXXX-200-200.png_60x60.jpg_.webp" alt="手机app - 聚划算" class="app-icon">
```

类似淘宝的解决方案：.webp 前面，还跟了一个 .jpg 后缀！

这个图片至少存在 jpg 和 webp 两种格式，程序会根据浏览器的型号、以及该型号是否支持 WebP 这些信息来决定当前浏览器显示的是 .webp 后缀还是 .jpg 后缀

也可以由服务器根据 HTTP 请求头部的 Accept 字段来决定返回什么格式的图片

## 图片懒加载

图片懒加载的实现中，有两个关键的数值：**当前可视区域的高度，和元素距离可视区域顶部的高度**。

当前可视区域高度：window.innerHeight（IE9+）|| document.documentElement.clientHeight

元素距离可视区域顶部的高度：getBoundingClientRect().top

如果元素未在可视区域中，图片背景设置为 none，图片真实路径用 data-* 存储
```html
<div 
  data-src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/27/16619f449ee24252~tplv-t2oaga2asx-image.image"
  style="background-image: none; background-size: cover;"
>
</div>
```

```JavaScript
// 获取所有的图片标签
const imgs = document.getElementsByTagName('img')
// 获取可视区域的高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let num = 0
function lazyload(){
    for(let i=num; i<imgs.length; i++) {
        // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        let distance = viewHeight - imgs[i].getBoundingClientRect().top
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if(distance >= 0 ){
            // 给元素写入真实的src，展示图片
            imgs[i].src = imgs[i].getAttribute('data-src')
            // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
            num = i + 1
        }
    }
}
// 监听Scroll事件
window.addEventListener('scroll', lazyload, false);
```