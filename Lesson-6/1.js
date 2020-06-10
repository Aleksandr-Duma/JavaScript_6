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

const isArrayArgument = function(param){
    if(!Array.isArray(param)){
        throw new Error('Вы передали не массив!');
    }
}

const isFunctionArgument = function(param){
    if(typeof param !== 'function'){
        throw new Error('Второй аргумент не является функцией!');
    }
}

const forEach = function(arg1, callback){

    isArrayArgument(arg1);
    isFunctionArgument(callback);

    for(let i = 0; i < arg1.length; i++){
        callback(arg1[i], i, arg1);
    }
}

try{
    const result = forEach(array, function(element, index, arrayRef){
            console.log(`${index}:`, element, arrayRef);
    });
    console.log(result); // undefined

}catch(err){
    console.log(err.message);
}

exports.forEach = forEach;
