##### CSS是如何工作的

1. 浏览器载入HTML文件。
2. 将HTML文件转化成一个DOM。
3. 浏览器拉取该HTML相关的大部分资源。
4. 浏览器拉取到CSS之后进行解析，根据选择器的不同类型分到不同的选择器中，基于它找到的不同的选择器，将不同的规则应用在对应的DOM的节点中，并添加节点依赖的样式（渲染树）。
5. 上述规则应用于渲染树之后，渲染树依照应该出现的结构进行布局。
6. 网页展示在屏幕上。

##### 选择器

为了样式化某些元素，通过选择器来选中HTML文档中的这些元素。

```CSS
selector {declaration1; declaration2; ... declarationN}
selector {property: value}
```

id选择器：以#来定义。

类选择器：以.来定义。

属性选择器：对带有指定属性的HTML元素设置样式。

##### 字体样式

###### 颜色

`color`属性：设置选中元素的前景内容的颜色。

###### 字体种类

`font-family`属性：允许为浏览器指定一个字体，将这些字体应用到选中的元素上。

字体栈：可使用多种字体，优先级按顺序排。没有其它选项时，段落将被赋予浏览器的默认衬线字体。

字体名称不止一个单词时需要用引号包裹。

###### 字体大小

`font-size`属性：调节字体的大小值。

常用单位px（像素）、em（设计的当前元素的父元素上设置的字体大小）、rem（HTML中根元素的字体大小）。

###### 字体样式

`font-style`：用来打开和关闭文本italic（斜体）。值包括：

​	`normal`：将文本设置为普通字体。

​	`italic`：如果斜体版本可用设置为斜体版本，不可用设置为模拟斜体版本。

​	`oblique`：设置为斜体字体的模拟版本。

`font-weight`：设置文字的粗体大小。值包括：

​	`normal`， `bold`：普通或者加粗的字体粗细。

​	`lighter`，`bolder`：比父元素粗体更细或更粗一步，可通过数值调整。

`text-transform`：允许设置要转换的字体。值包括：

​	`none`：防止任何转型。

​	`uppercase`：将所有文本转为大写。

​	`lowercase`：将所有文本转为小写。

​	`capitalize`：转换所有单词让其首字母大写。

​	`full-width`：将所有字形转换成全角。

`text-decoration`：设置/取消字体上的文本装饰。值包括：

​	`none`：取消已经存在的任何文本装饰。

​	`underline`：文本下划线。

​	`overline`：文本上划线。

​	`line-through`：删除线。

​	一次可接受多个值。

​	它由`text-decoration-line`, `text-decoration-style`和`text-decoration-color`构成。

###### 文字阴影

```scss
text-shadow: 4px 4px 5px red; 
```

四个属性分别为：水平偏移，垂直偏移，模糊半径，阴影的基础颜色

##### 文字布局

###### 文本对齐

`text-align`：控制文本如何与它所在的内容盒子对齐。

​	`left`：左对齐

​	`right`：右对齐

​	`center`：居中

​	`justify`：使文本展开，改变单词之间的差距，使所有文本行的宽度相同。

###### 行高

`line-height`：设置文本每行之间的高

###### 字母和单词间距

`letter-spacing`和`word-spacing`：设置字母间间距或单词间间距。

