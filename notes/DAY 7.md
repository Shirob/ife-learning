##### 复习

布局：`display`

`display`值：`block`（块级元素）或`inline`（行内元素）；

`block`：`div`，`p`，`form`，`header`，`footer`，`section`；

`inline`：`span`，`a`；

`none`：`script`，在不删除元素的情况下隐藏或显示元素。

设置块级元素的`width`可以防止它从左到右撑满整个容器，设置左右外边距为`auto`可以使其水平居中。当浏览器窗口比元素的宽度还要窄时会显示一个水平滚动条来容纳页面。

```css
#main {
  width: 600px;
  margin: 0 auto; 
}
```

使用`max-width`代替`width`可以使浏览器更好地处理小窗口的情况。

```css
#main {
  max-width: 600px;
  margin: 0 auto; 
}
```

盒模型：宽度，内边距，边框，外边距

```css
.simple {
  width: 500px;
  margin: 20px auto;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border-width: 10px;
}
```

`box-sizing: border-box`：内边距和边框不会再增加其宽度。

`position`属性：

​	`static`：默认值，不会被特殊定位；

​	`relative`：表现与static一样，设置四大方位属性会使其偏离正常位置；

​	`fixed`：相对于视窗来定位，即使页面滚动也会停留在相同的位置；

​	`absolute`：相对于最近的“positioned”祖先元素定位。

float属性：浮动

clear属性：控制浮动

overflow属性：清除浮动

百分比宽度：包含块的计量单位

`display: inline-block`：实现与浮动相同效果。

- `vertical-align`会影响到`inline-block`元素，可将其设置为top；
- 需要设置每一列的宽度；
- 如果HTML源代码中有空格，列与列之间会有空隙。

`column`：多列布局

```css
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

`flexbox`：弹性盒子

```css
.container {
  display: -webkit-flex;
  display: flex;
}
.initial {
  -webkit-flex: initial;
          flex: initial;
  width: 200px;
  min-width: 100px;
} /*空间足够时宽度为200px，不足时会变窄，但最窄为100px*/
.none {
  -webkit-flex: none;
          flex: none;
  width: 200px;
} /*无论窗口如何变化，宽度一直为200px*/
.flex1 {
  -webkit-flex: 1;
          flex: 1;
} /*占满剩余宽度的1/3*/
.flex2 {
  -webkit-flex: 2;
          flex: 2;
} /*占满剩余宽度的2/3*/

.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
} /*垂直居中布局*/
```