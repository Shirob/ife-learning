function getBar(data) {
    // 拿到柱状图中的最大值Max
    var max = data[0];
    for (var i in data) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    // 定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    var w = 550,
        h = max + 60,
        axisX = 500,
        axisY = max + 10,
        startX = 25,
        startY = max + 35;
    // 定义好每一个柱子的宽度及柱子的间隔宽度
    var barWidth = 32,
        interval = 9;
    // 定义好柱子颜色，轴的颜色
    var barColor = "#0DAFF4",
        axisColor = "rgb(0,99,99)";

    // 根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var percent = 1;
 
    var svgStart = '<svg width=' + w + ' height=' + h + ' version="1.1" xmlns="http://www.w3.org/2000/svg">';
    var svgEnd = '</svg>';
    // 绘制横轴及纵轴
    var row = "<line x1=" + startX + " y1=" + startY + " x2=" + (startX + axisX) + " y2=" + startY + ' style="stroke:' + axisColor + ';stroke-width:1"/>';
    var col = "<line x1=" + startX + " y1=" + startY + " x2=" + startX + " y2=" + (startY - axisY) + ' style="stroke:' + axisColor + ';stroke-width:1"/>';
    // 遍历数据，计算将要绘制柱子的高度和位置，绘制每一个柱子
    var svgT = svgStart + row + col;
 
    for (i = 0; i < data.length; i++) {
 
        let rectStartX = startX + interval * (i + 1) + barWidth * i;
        let rectStartY = startY - data[i];
 
        let bar = "<rect x=" + rectStartX + " y=" + rectStartY + " width=" + barWidth + " height=" + data[i] + ' style="fill:' + barColor + ';stroke-width:1;stroke:rgb(0,0,0)"/>';
        svgT += bar;
    }
    svgT += svgEnd;
 
    return svgT;
}