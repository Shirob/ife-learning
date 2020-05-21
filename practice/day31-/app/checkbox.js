function generateCheckBox(div, data) {
    //生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    var allSelect = document.createElement("input");
    allSelect.setAttribute("type", "checkbox");
    allSelect.setAttribute("value", "0");
    allSelect.setAttribute("checkbox-type", "all");
    var text = document.createTextNode("全选");
    div.appendChild(allSelect);
    div.appendChild(text);
    
    //遍历参数对象，生成各个子选项checkbox的html，给一个自定义属性表示为子选项
    for (i = 0; i < data.length; i++) {
        var select = document.createElement("input");
        select.setAttribute("type", "checkbox");
        select.setAttribute("value", i + 1);
        select.setAttribute("checkbox-type", "single");
        var text = document.createTextNode(data[i].text)
        div.appendChild(select);
        div.appendChild(text);
    }

    div.onclick = function (event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        //如果是checkbox
        if (target.getAttribute("type") == "checkbox") {
            var len = div.childNodes.length;
            var checkBoxType = target.getAttribute("checkbox-type");
            var cnt = 0;
            if (checkBoxType == "all") {
                //做全选对应的逻辑：让所有的checkbox全部勾选上
                if (target.checked == true) {
                    for (i = 2; i < len; i += 2) {
                        div.childNodes[i].checked = true;
                        console.log(div.childNodes[i + 1]);
                    }
                } else {
                    target.checked = true;
                }
            } else { //单个的checkbox
                //在点击之前它是否是唯一一个被勾选的？如果是的话，阻止这次点击默认事件，或者立马又将其checked状态置为真；点击之后，是不是满足了全选状态，并对应修改全选CheckBox的状态
                for (i = 2; i < len; i += 2) {
                    if (div.childNodes[i].checked) {
                        cnt++;
                    }
                }
                if (cnt == len / 2 - 1 && allSelect.checked == false) {
                    allSelect.checked = true;
                } else if (cnt < len / 2 - 1 && cnt > 0) {
                    allSelect.checked = false;
                } else if (cnt == 0) {
                    target.checked = true;
                }
            }
            generateTable();
        }
    }
}
