/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

// Функция для проверки входных данных.

const isCorrectArgument = function(arg1, arg2){
    if(!Array.isArray(arg1)){
        throw new Error('Вы передали не массив!');
    }
    if(typeof arg2 !== 'function'){
        throw new Error('Вы передали не функцию!');
    }

    return arg1 , arg2;
}

// Main function //
const myForEach = function(param1, param2){
    isCorrectArgument(param1, param2);

    param2(param1);

}

// testFunction //
const text = function(param, index){
    for(let i = 0; i < param.length; i++){
        let res = param[i] * 10;
        // console.log(res);
        index = i;
        console.log(res + " " + index + '-index');
    }
}
// call our function //
myForEach(array, text);


////////////////////////////////////////////////////////////////////////////

// const result = forEach(array, (element, index, arrayRef) => {
//     console.log(`${index}:`, element, arrayRef);
// });

// console.log(result); // undefined

// exports.forEach = forEach;
