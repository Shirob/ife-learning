var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
var scoreArray = []
function obj2Arr() {
    for (ele in scoreObject) {
        scoreArray.push([ele, scoreObject[ele].Math, scoreObject[ele].English, scoreObject[ele].Music]);
    }
}

obj2Arr();
console.log(scoreArray);

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

var menuObject = {}

function arr2Obj(softNum = -1) {
    let newObj = new Object;
    for(let i in menuArr){
        if(menuArr[i][2] == softNum){
            newObj[menuArr[i][0]] = {
                "name" : menuArr[i][1],
                "subMenu" : arr2Obj(menuArr[i][0])
            };
        }
    }
    return newObj;
}

menuObject = arr2Obj();
console.log(menuObject);
