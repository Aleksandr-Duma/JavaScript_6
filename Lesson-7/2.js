/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

const isArrayArgument = function(arg){
    if(!Array.isArray(arg)){
        throw new Error('Вы передали не массив!')
    }
};

const flatArray = function(arr){
    let array = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
          array = array.concat(flatArray(arr[i])); 
        }else{
            array.push(arr[i]);
        }
    }

    return array;
};

const collect = function(arr){
    
    let result = 0;
    let arrayFlatten = flatArray(arr);
    
    isArrayArgument(arr);

    result = arrayFlatten.reduce(function(accum, elem){
        if(!Array.isArray(elem) && typeof elem !== 'number'){
            throw new Error('Елемент не является ни числом, ни массивом!');
        }
        return accum + elem;
    }, 0);

    return result;
}

try{
    const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
    console.log(collect(array1)); // 12

    const array2 = [[[[[1, 2]]]]];
    console.log(collect(array2)); // 3

    const array3 = [[[[[1, 2]]], 2], 1];
    console.log(collect(array3)); // 6

    const array4 = [[[[[]]]]];
    console.log(collect(array4)); // 0

    const array5 = [[[[[], 3]]]];
    console.log(collect(array5)); // 3

}catch(err){
    console.log(err.message);
}

exports.collect = collect;
