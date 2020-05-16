var arrNum = [43, 54, 4, -4, 84, 100, 58, 27, 140];

//数字排序，从小到大
function compareNumbers1(a, b) {
    return a - b;
}

//数字排序，从大到小
function compareNumbers2(a, b) {
    return b - a;
}

arrNum.sort(compareNumbers1);
console.log(arrNum);
arrNum.sort(compareNumbers2);
console.log(arrNum);

var arrString = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane']; 

arrString.sort();
console.log(arrString);
console.log(arrString.reverse());

var arrTwoNum = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];

function compareNumberGroups(a, b) {
    return b[1] - a[1];
}

arrTwoNum.sort(compareNumberGroups);
console.log(arrTwoNum);

var arrObj = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

function compareObj(a, b) {
    return a.value - b.value;
}

arrObj.sort(compareObj);
console.log(arrObj);