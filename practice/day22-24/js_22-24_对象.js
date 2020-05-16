var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    function findName(obj) {
        if (obj != null) {
            if (obj.name === name) {
                console.log(obj.id);
            }
            findName(obj.left);
            findName(obj.right);
        }
    }
    findName(tree);
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    function findId(obj) {
        if (obj != null) {
            if (obj.id === id) {
                console.log(obj.name);
            }
            findId(obj.left);
            findId(obj.right);
        }  
    }
    findId(tree);
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    function preOrder(obj) {
        if (obj == null)
            return;
        console.log(obj.name);
        preOrder(obj.left);
        preOrder(obj.right);
    }
    preOrder(tree);  
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    function inOrder(obj) {
        if (obj == null)
            return;
        inOrder(obj.left);
        console.log(obj.name);
        inOrder(obj.right);
    }
    inOrder(tree);
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    function postOrder(obj) {
        if (obj == null)
            return;
        postOrder(obj.left);
        postOrder(obj.right);
        console.log(obj.name);
    }
    postOrder(tree);
}