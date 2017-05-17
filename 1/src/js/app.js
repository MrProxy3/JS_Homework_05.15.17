/*Написати функцію, яка буде виводити переданий їй масив через 1 елемент.*/


var arr = [455, 7, 5, 7, 6, 3, 5];

function arrLikeElem() {
    var args = arguments;
    var x = [];
    for (var i = 0; i < args.length; i++) {
        x.push(args[i]);
    }
    return x;
}

var expected = arrLikeElem(arr);
console.log(expected);
