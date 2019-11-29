##### 背景样式

###### 背景颜色

`background-color`：定义了CSS中任何元素的背景颜色。

半透明：`background-color: rgba(x,y,z,0.5);`

###### 背景图片

`background-image`：允许在元素的背景中显示图像。

`background-repeat`：用于控制图像的平铺行为。

​		`no-repeat`—不重复。 `repeat`—在两个方向重复。

​		`repeat-x`—水平重复。 `repeat-y`—垂直重复。

`background-size`：调整背景图像的大小，可设置长度或百分比值。

​		`cover`—使图像足够大完全覆盖盒子区，同时仍然保持宽高比。

​		`contain`—浏览器将使图像的大小适合盒子内。

`background-position`：允许选择背景图像显示其应用到的盒子中的位置。

​		框的左上角是(0,0)，最常见的背景位置值有两个单独的值——水平值，垂直值，也可使用百分比。

​		也可以使用像`top`和`right`这样的关键字，也可使用4-value语法指示到盒子的某些边的距离。

`background-position`是`background-position-x`和[`background-position-y`的简写，它们允许您分别设置不同的坐标轴的值。 



##### 边框

```css
.box { 
  border: 1px solid black; 
}                 /* 为一个框的所有边设置边框 */
/*等价于*/
.box { 
  border-width: 1px; 
  border-style: solid; 
  border-color: black; 
} 

.box { 
  border-top: 1px solid black; 
}                 /* 只设置盒子的一个边 */
/*等价于*/
.box { 
  border-top-width: 1px; 
  border-top-style: solid; 
  border-top-color: black; 
} 
```

###### 圆角

```css
.box {
  border-radius: 10px;
}					/* 使一个盒子的四个角都有10px的半径 */

.box {
  border-top-right-radius: 1em 10%;
}			 /* 使右上圆角的水平半径为1em，垂直半径为10% */
```



##### 列表

无序列表：`<ul>`定义了无序列表，`<li>`定义列表项目。

有序列表：`<ol>`定义了有序列表，`<li>`定义列表项目。

定义列表：`<dl>`定义了定义列表，`<dt>`定义列表中的项目，`<dd>`描述列表中的项目。

###### 列表特定样式

`list-style-type`：设置用于列表元素的marker（圆点、符号、自定义计数器样式）

`list-style-position`：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。

`list-style-image`：允许为项目符号使用自定义图片。然而这个属性在控制项目符号的位置，大小方面是有限的。

故使用下面这种方法插入自定义符号。

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```



##### 链接

通过将文本转换为`<a>`元素内的链接来创建基本链接。

`href`属性可包含希望链接指向的网址。

`title`属性包含关于链接的补充有用信息。

###### 块级链接

图像转换为链接：

```html
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
```

###### 链接状态

- `a:link`：未访问过的默认状态。
- `a:visited`：已经被访问过了。
- `a:hover`：用户的光标刚好停留在这个链接。
- `a:focus`：链接被选中的时候。
- `a:active`：链接被激活的时候。

###### 链接样式

```css
a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}  
/*使用a选择器取消了默认的文本下划线和链接被选中时的轮廓，并为每个链接添加了少量的内边距*/
a:link {
  color: #265301;
}
/*设置未访问过的链接的颜色变化*/
a:visited {
  color: #437A16;
}
/*设置访问过的链接的颜色变化*/
a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}
/*设置选中的链接的不同背景颜色*/
a:hover {
  border-bottom: 1px solid;     
  background: #CDFEAA;
}
/*设置悬停的链接的不同背景颜色*/
a:active {
  background: #265301;
  color: #CDFEAA;
}
/*链接被激活的配色方案*/
```



##### 选择器相关

选择器的分组：逗号可将需要分组的选择器分开。

选择器的继承：子元素从父元素继承属性。

派生选择器：依据元素在其位置的上下文关系来定义样式。

**伪类选择器**：选择处于特定状态的元素，例如类型的第一个元素。`:pseudo-class-name`

​	属于元素本身的属性，即一些无需添加单独class的情况。

​	simple：`:first-child`，`：last-child`， `:only-child`， `:invalid`。

​	user-action：`:hover`，`:focus`

**伪元素**：如同在标记中添加了一个全新的html元素，而不是一个类。以::开头。`::pseudo-element-name`

​	创建一些文档语言无法创建的虚拟元素。比如描述元素内容的第一个字母或第一行(`::first-letter`，`::first-line`)，或者创建源文档不存在的内容，比如使用`::before`或`::after`。

###### **组合**

后代选择器：`body article p`

子选择器：`article > p`，选中直接子后代。

相邻兄弟选择器：`p + img`，用于选择与层次结构相同级别的另一个元素相邻的内容。

非相邻兄弟选择器：`p ~ img`，用于选择与层次结构相同级别的另一个元素的所有内容。

###### 冲突规则

**层叠**：当应用到两条同级别的规则到另一个元素的时候，写在后面的就是实际使用的规则。

**优先级**：类选择器>元素选择器。

**继承**：父元素上的css属性可被子元素继承，但子元素的属性有更高的优先级。