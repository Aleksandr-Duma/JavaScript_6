/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

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

const filter = function(array, callback){
    const newArray = [];

    isArrayArgument(array);
    isFunctionArgument(callback);

    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            newArray.push(array[i]);
        }
    }

    return newArray;
};

try{
    const filteredArray = filter(array, function(element, index, arrayRef){
        console.log(`${index}:`, element, arrayRef);

        return element === 'Добрый вечер!'; //['Добрый вечер!']
    });
    console.log(filteredArray);

}catch(err){
    console.log(err.message);
};

exports.filter = filter;
