##### 圣杯布局和双飞翼布局

###### 即中间盒子自适应，左右侧盒子固定的结构

基本HTML和CSS结构

```html
<header>
    <h4>Header内容区</h4>
</header>
<div class="container">
	<div class="middle">
		<h4>中间弹性区</h4>
	</div>
	<div class="left">
    	<h4>左边栏</h4>
	</div>
	<div class="right">
    	<h4>右边栏</h4>
	</div>
</div>
<footer>
    <h4>Footer内容区</h4>
</footer>
```

```css
header{
    width: 100%;
    height: 40px;
    background-color: darkseagreen;
}
.container{ 
    height:200px;
    overflow:hidden;
}
.middle{
    width: 100%;
    height: 200px;
    background-color: deeppink;
    float:left;
}
.left{ 
    width: 200px;
    height: 200px;
    background-color: blue;
    float:left;
}
.right{
    width: 200px;
    height: 200px;
    background-color: darkorchid;
    float:left;
}
footer{
    width: 100%;
    height: 30px;
    background-color: darkslategray;
}
```

利用负边距布局让两边的盒子上去（左右盒子浮于中间盒子上方）

```css
.left{
	margin-left: -100%;
}
.right{
	matgin-left: -200px;
}
```

让中间自适应的盒子安全显示

```css
.container{
	padding: 0 200px;
}
.left{
	position: relative;
	left: -200px;
}
.right{
	position: relative;
	right: -210px;
}
```



##### 七种实现左侧固定，右侧自适应两栏布局的方法

HTML布局

```html
<div class="wrapper" id="wrapper">
  <div class="left">
    左边固定宽度，高度不固定 </br> </br></br></br>高度有可能会很小，也可能很大。
  </div>
  <div class="right">
    这里的内容可能比左侧高，也可能比左侧低。宽度需要自适应。</br>
    基本的样式是，两个div相距20px, 左侧div宽 120px
  </div>
</div>
```

基本样式

```css
.wrapper {
    padding: 15px 20px;
    border: 1px dashed #ff6c60;
}
.left {
    width: 120px;
    border: 5px solid #ddd;
}
.right {
    margin-left: 20px;
    border: 5px solid #ddd;
}
```

###### 双`inline-block`方案

通过`width: calc(100% - 140px)`来动态计算右侧盒子的宽度。

```css
.wrapper-inline-block {
    box-sizing: content-box;
    font-size: 0;    // 消除空格的影响
}
.wrapper-inline-block .left,
.wrapper-inline-block .right {
    display: inline-block;
    vertical-align: top;    // 顶端对齐
    font-size: 14px;
    box-sizing: border-box;
}
.wrapper-inline-block .right {
    width: calc(100% - 140px);
}
```

###### 双`float`方案



```css
.wrapper-double-float {
    overflow: auto;        // 清除浮动
    box-sizing: content-box;
}
.wrapper-double-float .left,
.wrapper-double-float .right {
    float: left;
    box-sizing: border-box;
}
.wrapper-double-float .right {
    width: calc(100% - 140px);
}
```

