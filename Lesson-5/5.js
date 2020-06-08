/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isPositive = function(n){
    if(typeof n !== 'number'){
        throw new Error('Вы ввели не число!');
    }

    return n >= 0 ? true: false;
}

try{
    console.log(isPositive(-3));
}catch(err){
    console.log(err.message);
}

// isPositive(-3); // false
// isPositive(3); // true

exports.isPositive = isPositive;
