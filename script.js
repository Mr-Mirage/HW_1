// Реализовать алгоритм, который будет находить сумму квадратов всех элементов массива!  
// {3, 6, 4, 7, 2, 1, 9}


// Создать массив из чисел
// перебрать их в цикле for
// создать переменную со значением 0
// каждый раз даём переменной значение i в квадрате и выводим в консоль результат


// const array = [3, 6, 4, 7, 2, 1, 9];

// for(let i = 0; i < array.length; i ++){
//     let square = 0;
//     square = array[i] **2;
//     console.log(square);
// }


// Найти индекс заданного числа в массиве: {3, 6, 4, 7, 2, 1, 9}
// Алгоритм на вход должен получать любой массив и одну цифру, индекс которой требуется найти.

// получаем массив из чисел
// получаем число индекс которого нужно найти
// получаем индекс этого числа
// выводим в консоль результат
// если такого числа в массиве нет то результат будет -1!

let array = [3, 6, 4, 7, 2, 1, 9];

let number = 7;

let index = array.indexOf(number);

console.log(index);