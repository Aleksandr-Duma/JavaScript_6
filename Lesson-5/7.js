/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение

// Функция для валидации входных данных.
const isCorrectArgument = function(x){
    if(typeof x !== 'number'){
        throw new Error('Вы ввели не число!');
    }
    if(x < 1){
        throw new Error('Вы ввели число меньше 1 !!!');
    }
    return x;
}

// Наша основная функция
const getDivisors = function(n){
    isCorrectArgument(n);
    let num = n;
    let arr = new Array(num);
    let arrResult = [];
    
    for(let i = 0; i <= num; i++){
        arr[i] = i;
        let res = num / arr[i];
        if(num % arr[i] === 0){
            arrResult.unshift(res);
        }
    } 

    return arrResult;     
}

try{
    console.log(getDivisors(12));
}catch(err){
    console.log(err.message);
}

// getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
