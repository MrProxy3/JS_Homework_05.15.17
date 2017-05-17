/*Написати функцію, яка буде шукати найбільший елемент в масиві.*/


var expected = lowestValue(4, 24, 978, 43, 1, 65, 998, 443, 2, 33);

console.log(expected);


function lowestValue() {
    var arg = arguments;
    var highest = arg[0];

    for (var i = 1; i < arg.length; i++) {
        if (highest < arg[i]) {
            highest = arg[i];
        }
    }
    return highest;
}


