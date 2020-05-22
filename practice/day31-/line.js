function getLine(data) {
    //拿到折线图中的最大值Max
    var max = data[0];
    for (var i in data) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    //定义好折线图绘制区域的高度，宽度，轴的高度，宽度
    var w = 550,
        h = max + 60,
        axisX = 500,
        axisY = max + 10,
        startX = 25,
        startY = max + 35;
    //定义好每一个数据点的直径，颜色，线的颜色，宽度
    var pointDiam = 12,
        pointColor = "#0DAFF4",
        lineWidth = 3,
        lineColor = "rgb(0,99,99)";
    //定义好每两个数据点之间的横向间隔距离
    var interval = 9,
        distance = 32;

    //根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var percent = 1;
    
    var canvas = document.createElement("canvas");
    canvas.id = "lineCanvas";
    canvas.width = w;
    canvas.height = h;

    // 绘制横轴及纵轴
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + axisX, startY);
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, startY - axisY);
    ctx.stroke();

    // 遍历数据，计算将要绘制数据点的坐标，绘制数据点
    for (i = 0; i < data.length; i++) {
        let pointStartX = startX + interval * (i + 1) + distance * (i + 0.5);
        let pointStartY = startY - data[i];

        ctx.beginPath();
        ctx.fillStyle = pointColor;
        ctx.arc(pointStartX, pointStartY, pointDiam / 2, Math.PI*2, 0, true);
        ctx.fill();
        if (i != 0) {
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;
            ctx.moveTo(pastPointX, pastPointY);
            ctx.lineTo(pointStartX, pointStartY);
            ctx.stroke();
        }
        var pastPointX = pointStartX;
        var pastPointY = pointStartY;
    }

    return canvas;
}