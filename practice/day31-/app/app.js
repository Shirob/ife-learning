var region = document.getElementById("region-radio-wrapper");
var product = document.getElementById("product-radio-wrapper");

generateCheckBox(region, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华北"
}, {
    value: 3,
    text: "华南"
}]);

generateCheckBox(product, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
}, {
    value: 3,
    text: "智能音箱"
}]);