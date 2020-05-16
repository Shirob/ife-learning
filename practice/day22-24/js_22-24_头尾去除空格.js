/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";
    // do something
    //var s = new String(str);
    for (i = 0; i < str.length; i++) {
        if (str[i] != ' ' && str[i] != "　") {
            result = str.substring(i);
            break;
        }
    }
    for (i = result.length - 1; i >= 0; i--) {
        if (result[i] != ' ' && result[i] != "　") {
            result = result.substring(0, i + 1);
            break;
        }
    }
    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    // do something
    var j = -1;
    for (i = 0; i < str.length; i++) {
        if (i == 0 || str[i] != result[j]) {
            result += str[i];
            j++;
        } 
    }
    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc