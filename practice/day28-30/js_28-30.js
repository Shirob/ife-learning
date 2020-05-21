//邮箱后缀List参考
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var input = document.getElementById("email-input");
var ul = document.getElementById("email-sug-wrapper");
//增加一个变量，存储当前选中的提示Li的序号
var nowSelectTipIndex = 0;

input.addEventListener("keyup", function(e) {
    //如果按键不是上下及回车重置选中状态
    judgeKey(e);
    //获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
    var liText = generateSug(xssProtect());
    add2SugWrapper(liText);
    //控制email-sug-wrapper的显示/隐藏状态
    ctrlDisplay(xssProtect());
});

function getUserInput() {
    //拿到input输入框的输入内容trim后返回
    var inp = input.value.trim();
    return inp;
}

//生成提示框中的提示内容
function generateSug(inp) {
    //获取用户输入
    var postfix = "";
    var list = new Array();
    //用户输入含有"@"
    if (inp.indexOf("@") != -1) {
        postfix = inp.substring(inp.indexOf("@") + 1)
        inp = inp.substring(0, inp.indexOf("@"));
        for (i = 0; i < postfixList.length; i++) {
            if (postfixList[i].indexOf(postfix) === 0) {
                var li = document.createElement("li");
                li.innerHTML = inp + "@" + postfixList[i];
                list.push(li);
            }
        }
        if (list.length == 0){
            for (i = 0; i < postfixList.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = inp + "@" + postfixList[i];
                list.push(li);
            }
        }
    } else {
    //遍历postfixList，把用户输入和每一个postfix进行结合成为每一个Li           
        for (i = 0; i < postfixList.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = inp + "@" + postfixList[i];
            list.push(li);
        }
    }
    //将第nowSelectTipIndex个Li的样式设置为被选样式
    list[nowSelectTipIndex].className = "checked";
    //返回生成的提示内容
    return list;
}

function removeLi() {
    //移除旧列表
    while (ul.hasChildNodes() && ul.firstChild != null) {
        ul.removeChild(ul.firstChild);
    }
}

function add2SugWrapper(list) {
    removeLi();
    //获取生成提示框中的提示内容，将内容添加到email-sug-wrapper中
    for (i = 0; i < list.length; i++) {
        ul.appendChild(list[i]);
    }
}

function ctrlDisplay(inp) {
    //控制email-sug-wrapper的显示/隐藏状态
    if (inp === "" || inp[0] === "@") {
        hidden();
    } else {
        display();
    }
}

function hidden() {
    //做具体隐藏提示框的操作
    ul.style.display = "none";
}

function display() {
    //做具体显示提示框的操作
    ul.style.display = "block";
}

//监听鼠标点击
ul.onclick = function(e) {
    var ev = e || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() === 'li' && target.click) { //被点击的是不是提示框中的Li节点
        //获取被点击Li对应的提示内容
        var choosing = decoding(target.innerHTML);
        //将内容放到input输入框中
        input.value = choosing;
        //隐藏提示框
        hidden();
        //点击后仍然聚焦input框
        input.focus()
    }
}

//监听鼠标移动
ul.onmouseover = function(e){
    var ev = e || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() === 'li') { 
        target.className = "checked";
    }
}

ul.onmouseout = function(e){
    var ev = e || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() === 'li') { 
        target.className = "";
    }
}

//xss防御攻击，编码转码
function xssProtect() {
    var inp = getUserInput();
    //动态创建一个容器标签元素
    var temp = document.createElement('div');
    //将要转换的字符串设置为这个元素的innerText(ie支持)或textContent(firefox、chrome支持)
    (temp.textContent != undefined) ? (temp.textContent = inp) : (temp.innerText = inp);
    //返回元素的innerHTML
    var output = temp.innerHTML;
    temp = null;
    return output; 
}

//xss防御攻击，编码解码
function decoding(text){
    //动态创建一个容器标签元素
    var temp = document.createElement("div");
    //然后将要转换的字符串设置为这个元素的innerHTML(ie，firefox, chrome都支持)
    temp.innerHTML = text;
    //最后返回这个元素的innerText(ie支持)或者textContent(firefox，chrome支持)，
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

//重置选中状态
function reset() {
    nowSelectTipIndex = 0;
}

function judgeKey(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode != 13 && e.keyCode != 38 && e.keyCode != 40) {
        reset();
    }
}

//判断四个特殊按键
input.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var aLi = ul.getElementsByTagName('li');
    if (ul.style.display = 'block') {
        if (e && e.keyCode === 27) { //esc
            //对用户输入进行全选
            input.select();
        }
        if (e && e.keyCode === 13) { //enter
            //从当前提示框中选第 nowSelectTipIndex个Li，将其HTML内容解码后填到input中
            input.value = decoding(aLi[nowSelectTipIndex].innerHTML);
            //隐藏提示框
            hidden();
        }
        if (e && e.keyCode === 38) { //up
            //e.preventDefault();
            aLi[nowSelectTipIndex].className = "";
            if (nowSelectTipIndex === 0) {
                nowSelectTipIndex = aLi.length - 1;
                aLi[nowSelectTipIndex].className = "checked";
            } else {
                nowSelectTipIndex -= 1;
                aLi[nowSelectTipIndex].className = "checked";
            }
        }
        if (e && e.keyCode === 40) { //down
            aLi[nowSelectTipIndex].className = "";
            if (nowSelectTipIndex === aLi.length - 1) {
                nowSelectTipIndex = 0;
                aLi[nowSelectTipIndex].className = "checked";
            } else {
                nowSelectTipIndex += 1;
                aLi[nowSelectTipIndex].className = "checked";
            }
        }
    }
}
//input框聚焦
input.focus()