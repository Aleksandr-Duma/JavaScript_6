/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isEven = function(n){
    if(typeof n !== 'number'){
        throw new Error('Вы ввели не число!');
    }
    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
}

try{
    console.log(isEven(3));
}catch(err){
    console.log(err.message);
}

// isEven(3); // false
// isEven(4); // true

exports.isEven = isEven;
