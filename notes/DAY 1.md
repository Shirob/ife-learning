#### 基本概念

##### **前端**

***HTML***：描述网页的一种语言，一种标记语言。使用标记标签来描述网页。

HTML标签是由**尖括号**包围的关键词，通常**成对出现**。

HTML文档 = 网页，包含**HTML标签**和纯文本

HTML5：HTML的一种比较新的通行标准，利用浏览器实现。

XHTML：XML与XTML的杂交品种，在语法上与HTML不同。

***CSS***：规定样式的语言。html文档里用`<link>`标签将这些规定样式的CSS代码与表达内容语义的HTML代码关联起来。

代码格式为：`属性：值`

***Javascript***：给页面添加动态效果。浏览器可实现一些JS可用的工具，在html文件中用`<script>`关联进js文件即可。

##### **后端**

浏览器给服务器发送一个请求，利用HTTP协议，服务器响应。

***Web Server***：提供Web Service，实现客户端与服务器的交互。例如：服务器根据浏览器请求内容，按协议生成响应内容并返回。

Web Service为**协议+格式**的交流体系（如HTTP+HTML）。

Web Server除提供Web Service外还可兼顾提供缓存、平衡负载等功能。

常见的现成Web Server有Apache、Nginx和微软的IIS。

***PHP***：用来写服务器脚本的语言。

##### 一个普通网站访问的过程

1. 浏览器向服务器**发出一个HTTP请求**；
2. 服务器**接收到HTTP请求**，Web Server进行响应的初步处理，使用服务器脚本生成页面；
3. **服务器脚本**利用Web Framework调用本地和客户端传来的数据**生成页面**；
4. Web Server将生成页面作为HTTP响应的body，根据不同处理结果**生成HTTP header**，**发回**客户端；
5. 客户端接收到HTTP响应，**对HTML代码进行解析**；
6. 解析过程中遇到**引用的服务器上的资源**（额外的CSS、JS代码、图片、音视频、附件等），**再向Web Server发送请求**，Web Server找到对应文件，发送回来；
7. 浏览器**解析HTML包含的内容**，用得到的CSS代码和JS代码进行外观上的进一步渲染和处理；
8. 用户与页面**交互**时，JS代码做出一定反应，添加特效与动画；
9. 交互的过程中需要**向服务器索取或提交额外的数据**，一般不是跳转就是通过JS代码向Web Server发送请求，Web Server再用服务器脚本进行处理，把资源返回客户端，客户端用得到的资源来实现动态效果或其它改变。

##### **延伸阅读**

服务器脚本与Web Framework的选择热门：
* Python，对应常见的Framework包括知乎和Quora用到的Tornado，以及社区（包括Instagram、Pinterest）很成熟的Django等；
* Ruby，一般用Rails，用户包括Github、早期的Twitter；
* Javascript，主要是Node.js，Web Server、服务器脚本和浏览器脚本全都可以用Javascript来写，Node.js上最常用的Framework是Express；
* Erlang，擅长大规模并发，用户包括一些游戏公司的服务器，Whatsapp。

常见架构：
* LAMP = Linux + Apache + MySQL + PHP，普通网站里常见的架构；
* J2EE，Java世界的架构，通常企业用（银行、大型公司），常见搭配一种UNIX做操作系统，Apache做Web Server，Tomcat转换JSP到Java给服务器程序用，Oracle数据库等；
* ASP.NET，微软的架构，通常搭配Windows Server操作系统、SQL Server数据库、IIS做Web Server；
* MEAN = MongoDB（数据库）+ Express（Web Framework）+ Angular（前端的JS框架）+ Node.js（编写Web Server）。

##### **Flag**

虽然没指望年底能看完，尽量每天都能学一些吧