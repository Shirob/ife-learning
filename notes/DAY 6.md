##### 定位——position

###### 布局理论

盒模型：默认情况下块级元素的内容宽度是其父元素宽度的100%，并且与其内容一样高。内联元素高宽与其内容高宽一样，无法设置高度或宽度。如果要以这种方式控制内联元素的大小，则需要将其设置为类似块级元素`display: block`。

正常的布局流：将元素放置在浏览器视口内的系统。默认情况下块级元素在视口中垂直布局——每个都将显示在上一个元素的下面的新行上，并且它们的外边距将分隔开它们。

内联元素表现不一样——它们不会出现在新行上；相反，它们互相之间以及任何相邻（或被包裹）的文本内容位于同一行上，只要在父块级元素的宽度内有空间可以这样做。如果没有空间则溢流的文本或元素将向下移动要新行。

如果两个相邻元素都在其上设置外边距，并且两个外边距接触，则两个外边距中的较大者保留，较小的一个消失——即外边距折叠。

###### 静态定位——`position: static`

每个元素获取的默认值——意味着“将元素放入它在文档布局流中的正常位置”，是默认行为。

###### 相对定位——`position: relative`

与静态定位相似，占据在正常的文档流中。`top`, `bottom`, `left`, `right`可精确指定将定位元素移动到的位置（相反方向移动）。

###### 绝对定位——`position: absolute`

（浮于文字上方）

绝对定位的元素不再存在于正常文档布局流中。如此可创建不干扰页面上其他元素的位置的隔离的UI功能。

元素位置已经改变——因为`top`,`bottom`,`left`和`right`以不同的方式在绝对定位。它们指定元素应距离每个包含元素的边的距离，而不是指定元素应该移入的方向。

###### `z-index`

`z-index`是对z轴的参考，可以更改堆叠顺序。默认情况下定位的元素都具有z-index为auto，实际上为0。更改为较高值可提高优先度。

###### 固定定位——`position: fixed`（流氓）

与绝对定位的工作方式完全相同。主要区别：绝对定位固定元素是相对于`<html>`元素或其最近的定位祖先，而固定定位固定元素则是相对于浏览器视口本身。

###### 粘性定位——`position: sticky`

相对位置和固定位置之间的混合，允许定位的元件像它被相对定位一样动作，直到其滚动到某一阈值点，之后变得固定。

##### 弹性盒子——flexbox

指定元素的布局为flexible。需要给这些flexible元素的父元素`display`设置一个特定值。

###### flex模型说明

![flex_terms.png](https://developer.mozilla.org/files/3739/flex_terms.png)

- 主轴（main axis）是沿着flex元素放置的方向延伸的轴（比如页面上的横向的行、纵向的列）。该轴的开始和结束被称为main start和main end。
- 交叉轴（cross axis）是垂直于flex元素放置方向的轴。该轴的开始和结束被称为cross start和cross end。
- 设置了`display: flex`的父元素被称为flex容器(flex container)。
- 在flex容器中表现为柔性的盒子的元素被称为flex项(flex item)。

###### `flex-direction`

可指定主轴方向——默认值为`row`，即按浏览器的默认语言方向排成一排。设置为`column`则为列布局。

也可用`row-reverse`和`column-reverse`值反向排列flex项目。

###### 换行

子代超出容器后，可添加声明`flex-wrap: wrap`。

###### flex-flow缩写

```css
flex-direction: row;
flex-wrap: wrap;
/*等价于*/
flex-flow: row wrap;
```

###### flex项的动态尺寸

```css
article {
  flex: 1;
}
article:nth-of-type(3) {
  flex: 2;
}
/* 第三个<article>元素占用了两倍的可用宽度 */
article {
  flex: 1 200px;
}
article:nth-of-type(3) {
  flex: 2 200px;
}
/* 每个flex项首先给出200px的可用空间，剩余的可用空间根据分配的比例共享 */
```

###### flex项的缩写属性

- 无单位比例，可以单独指定全写`flex-grow`属性的值。
- `flex-shrink`一般用于溢出容器的flex项。这指定了从每个flex项中取出多少溢出量，以阻止它们溢出它们的容器。
- 最小值。可以单独指定全写`flex-basis`属性的值。

###### 水平和垂直对齐

`align-items`控制flex项在交叉轴上的位置。

- 默认值为`stretch`，其会使所有flex项沿着交叉轴的方向拉伸以填充父容器。如果父容器在交叉轴方向上没有固定宽度（即高度），则所有flex项将变得与最长的flex项一样长。
- `center`值可以使这些项保持其原有高度，但会在交叉轴居中。
- `flex-start`，`flex-end`可以使flex项在交叉轴的开始或结束处对齐所有的值。

可用`align-self`属性覆盖`align-items`的行为，如`align-self: flex-end`。

`justify-content`控制flex项在主轴上的位置。

- 默认值是`flex-start`，这会使所有flex项都位于主轴的开始处。
- `flex-end`可让flex项到结尾处。
- `center`可让flex项在主轴居中。
- `space-around`可使所有的flex项沿着主轴均匀地分布，在任意一端都会留有一点空间。
- `space-between`和`space-around`相似，但不会在两端留下任何空间。

###### flex项排序——order属性

- 所有flex项默认的`order`值是0。
- `order`值大的flex项比order值小的在显示顺序中更靠后。
- 相同`order`值的flex项按源顺序显示。
- order可以设置负值。

###### flex嵌套





