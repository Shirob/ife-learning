##### 盒模型

###### 外部显示类型

块级盒子（block box）

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，绝大多数情况下盒子和父容器一样宽
- 每个盒子都会换行
- `width`和`height`属性可以发挥作用
- 内边距（padding），外边距（margin）和边框（border）会将其他元素从当前盒子周围“推开”

`<h1>`等和`<p>`默认情况下都是块级盒子。

内联盒子（inline box）

- 盒子不会产生换行
- `width`和`height`属性将不起作用
- 内边距、外边距、边框会被应用但是不会把其他处于`inline`状态的盒子推开

`<a>`、`<span>`、`<em>`、`<strong>`都是默认处于`inline`状态的。

通过对盒子`display`属性的设置（比如`inline`或者`block`）来控制盒子的外部显示类型。

###### 内部显示类型

可通过使用类似`flex`的`display`属性值来更改内部显示类型。

###### 盒模型的各个部分

- **Content box**：用来显示内容，大小可以通过设置`width`和`height`。
- **Padding box**：包围在内容区域外部的空白区域，大小通过`padding`相关属性设置。
- **Border box**：边框盒包裹内容和内边距，大小通过`border`相关属性设置。
- **Margin box**：最外面的区域，盒子和其他元素之间的空白区域，大小通过`margin`相关属性设置。

###### 标准盒模型

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

###### 替代盒模型

width = 350px, height = 150px

通过设置`box-sizing: border-box`来实现。



##### 浮动

`float`——浮动元素会脱离正常的文档布局流，并吸附到其父容器的一边。浮动内容仍然遵循盒子模型。

（看上去主要用于插图和首字下沉）

###### 多列浮动布局

```css
div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

###### 清除浮动

`clear: left`：停止任何活动的左浮动

`clear: right`：停止任何活动的右浮动

`clear: both`：停止任何活动的左右浮动

###### 浮动问题

**整个宽度难以计算**

`box-sizing`可更改盒模型，盒子的宽度取值为content+padding+border，而不仅是之前的content。

- `content-box` 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `border-box` 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。
- `border-box`不包含`margin`。

**页脚压在最长列上**

浮动的元素存在于正常的文档布局流之外。

**浮动项目的背景高度**

列高度不同，可以通过给所有的列固定`height`来解决。

