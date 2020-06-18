/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const isValidFirstArgument = function(arg){
    if( typeof arg !== 'number' && 
        typeof arg !== 'string' && 
        typeof arg !== 'object' &&
        !Array.isArray(arg)) {
            throw new Error('Первый аргумент не является валидным!');
    }
};

const isValidSecondArgument = function(arg){
    if(typeof arg !== 'number'){
        throw new Error('Второй аргумент не является валидным!');
    }
};

const createArray = function(arg1, arg2){
    const newArray = [];

    isValidFirstArgument(arg1);
    isValidSecondArgument(arg2);

    for(let i = 0; i < arg2; i++){
        newArray.push(arg1);
    }

    return newArray;
}

try{
    const result = createArray('x', 5);
    console.log(result); // [ x, x, x, x, x ]

}catch(err){
    console.log(err.message);
}

exports.createArray = createArray;
