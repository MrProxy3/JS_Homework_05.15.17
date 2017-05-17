/*Написати функцію, яка буде виводити переданий масив з вказаним кроком. Величина кроку також передається, як аргумент.
 (Приклад виклику: printArray([1,2,3,4,5,6, 7], 3). Перший аргумент масив, який буде виведено,
 а другий - крок. Тобто виводом буде 1,4,7)*/


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function stepArr(arr, step) {
    var printArr = [];
    for (var i = 0; i < arr.length; i += step) {
        printArr.push(arr[i]);
    }
    return printArr;
}

var expected = stepArr(arr, 2);

console.log(expected);
