/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

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

const every = function(arg1, callback){
    let returnBoolean = null;

    isArrayArgument(arg1);
    isFunctionArgument(callback);
    
    for(let i = 0; i < arg1.length; i++){ 
        const resultInner = callback(arg1[i], i, arg1);

        if(!resultInner){
            returnBoolean = false;
            break;
        }else{
            returnBoolean = true;
        }  
    }

    return returnBoolean;
};

 try{
    const result = every(array, function(element, index, arrRef){
        console.log(`${index}:`, element, arrRef);
        
        return typeof element === 'number';
    });
    console.log(result); // true

 }catch(err){
    console.log(err.message);
 }

exports.every = every;
