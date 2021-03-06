/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f(param){
    if(!Array.isArray(param)){
        throw new Error('Вы передали не массив!')
    }
    if(param.length === 0){
        throw new Error('Вы передали пустой массив!')
    }
    let result = param.splice(0, 1).join('');

        console.log(result); 
    if(param.length !== 0){

        f(param);
    }     
}

try{
    f([1, 2, 3]);
}catch(err){
    console.log(err.message);
}

// 1
// 2
// 3

exports.f = f;
