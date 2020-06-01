/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f(param){
    if(!param){
        throw new Error('Вы не ввели данные!'); 
    }
    if(typeof param !== 'number'){
        throw new Error('Вы ввели не корректные данные!');
    }
    
    return param ** 3;
}

console.log(f(2)); // 8

exports.f = f;
