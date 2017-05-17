/*Написати функцію, яка буде шукати найменший елемент в масиві.*/


var expected = lowestValue(4, 24, 978, 43, 65, 998, 443, 2, 33);

console.log(expected);


function lowestValue() {
    var arg = arguments;
    var lowest = arg[0];

    for (var i = 1; i < arg.length; i++) {
        if (lowest > arg[i]) {
            lowest = arg[i];
        }
    }
    return lowest;
}


