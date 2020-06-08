/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(){
    if(!arguments.length){
        throw new Error('Вы не ввели данные!');
    }
    let result = null;

    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'number'){
            throw new Error('Вы ввели не корректные данные!');
        }
        result += arguments[i];
    }

    return result;
}

try{
    console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
}catch(err){
    console.log(err.message);
}

exports.f = f;
