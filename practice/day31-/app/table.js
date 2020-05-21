var region = document.getElementById("region-radio-wrapper");
var product = document.getElementById("product-radio-wrapper");

//判别选项
function checkedEle(checkBoxName) {
    var selected = [];
    for (i = 2; i < checkBoxName.childNodes.length; i += 2) {
        if (checkBoxName.childNodes[i].checked == true) {
            selected.push(checkBoxName.childNodes[i + 1].textContent);
        }
    }
    return selected;
}


//根据select选项获取数据
function getData(selectRegion, selectProduct) {
    var list = [];
    for (i = 0; i < sourceData.length; i++){
        if (selectRegion.indexOf(sourceData[i].region) != -1 && selectProduct.indexOf(sourceData[i].product) != -1) {
            list.push(sourceData[i]);
        }
    }
    return list;
}

//移除旧表格
function removeTable(wrapper) {
    if (wrapper.hasChildNodes() && wrapper.firstChild != null) {
        wrapper.removeChild(wrapper.firstChild);
    }
}

//渲染新的表格
function generateTable() {
    var wrapper = document.getElementById("table-wrapper");
    removeTable(wrapper);

    //获取数据
    var selectRegion = checkedEle(region);
    var selectProduct = checkedEle(product);

    //新建表格
    var table = document.createElement("table");
    table.border = "2";

    if (selectRegion.length == 1 && selectProduct.length > 1) {
        //地区选择了一个，商品选择了多个
        createTable1(table, selectRegion, selectProduct);
    } else if (selectProduct.length == 1 && selectRegion.length >= 1) {
        //商品选择了一个，地区选择了一个或多个
        createTable2(table, selectRegion, selectProduct);
    } else {
        //商品和地区都选择了多个
        createTable3(table, selectRegion, selectProduct);
    }
    wrapper.appendChild(table);
}

function createTable1(table, selectRegion, selectProduct) {
    var data = getData(selectRegion, selectProduct);
    var hLi = ["地区", "商品", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    //第一行
    var th = document.createElement("tr");
    for (i = 0; i < hLi.length; i++) {
        var li = document.createElement("th");
        li.innerHTML = hLi[i];
        th.appendChild(li);
    }
    table.appendChild(th);
    //单元格
    for (i = 0; i < data.length; i++) {
        var td = document.createElement("tr");        
        if (i == 0) {
            var reg = document.createElement("td");
            reg.innerHTML = data[i].region;
            reg.rowSpan = data.length;
            td.appendChild(reg);
        }
        var pro = document.createElement("td");
        pro.innerHTML = data[i].product;
        td.appendChild(pro);
        for (j = 0; j < 12; j++){
            var sale = document.createElement("td");
            sale.innerHTML = data[i].sale[j];
            td.appendChild(sale);
        }
        table.appendChild(td);
    }
}

function createTable2(table, selectRegion, selectProduct) {
    var data = getData(selectRegion, selectProduct);
    var hLi = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    //第一行
    var th = document.createElement("tr");
    for (i = 0; i < hLi.length; i++) {
        var li = document.createElement("th");
        li.innerHTML = hLi[i];
        th.appendChild(li);
    }
    table.appendChild(th);
    //单元格
    for (i = 0; i < data.length; i++) {
        var td = document.createElement("tr");
        if (i == 0) {
            var pro = document.createElement("td");
            pro.innerHTML = data[i].product;
            pro.rowSpan = data.length;
            td.appendChild(pro);
        } 
        var reg = document.createElement("td");
        reg.innerHTML = data[i].region;
        td.appendChild(reg);
        for (j = 0; j < 12; j++){
            var sale = document.createElement("td");
            sale.innerHTML = data[i].sale[j];
            td.appendChild(sale);
        }
        table.appendChild(td);
    }
}

function createTable3(table, selectRegion, selectProduct) {
    var data = getData(selectRegion, selectProduct);
    var hLi = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    //第一行
    var th = document.createElement("tr");
    for (i = 0; i < hLi.length; i++) {
        var li = document.createElement("th");
        li.innerHTML = hLi[i];
        th.appendChild(li);
    }
    table.appendChild(th);
    //单元格
    idx = 0;
    for (i = 0; i < selectProduct.length; i++) {
        for (j = 0; j < selectRegion.length; j++) {
            var td = document.createElement("tr");
            if (j == 0) {
                var pro = document.createElement("td");
                pro.innerHTML = data[idx].product;
                pro.rowSpan = selectRegion.length;
                td.appendChild(pro);
            }
            var reg = document.createElement("td");
            reg.innerHTML = data[idx].region;
            td.appendChild(reg);
            for (k = 0; k < 12; k++){
                var sale = document.createElement("td");
                sale.innerHTML = data[idx].sale[k];
                td.appendChild(sale);
            }
            table.appendChild(td);
            idx++;
        }
    }
}