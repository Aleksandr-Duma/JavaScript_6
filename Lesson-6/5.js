/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

const isArrayArgument = function(arg){
    if(!Array.isArray(arg)){
        throw new Error('Вы передали не массив!');
    }
}

const isFunctionArgument = function(arg){
    if(typeof arg !== 'function'){
        throw new Error('Вы передали не функцию!');
    }
}

const reduce = function(array, callback, initial){
    let startCount = initial;

    isArrayArgument(array);
    isFunctionArgument(callback);

    if(!initial){
        startCount = 0;
    }

    for(let i = 0; i < array.length; i++){
        callback(startCount, array[i], i, array);
        startCount += array[i];
    }

    return startCount;
}

try{
    const result = reduce(
        array,
        (accumulator, element, index, arrayRef) => {
            console.log(`${index}:`, accumulator, element, arrayRef);
    
            return accumulator + element;
        },
        INITIAL_ACCUMULATOR,
    );
    console.log(result); // 21

}catch(err){
    console.log(err.message);
}

exports.reduce = reduce;
