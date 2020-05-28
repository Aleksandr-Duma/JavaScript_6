/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(param1, param2){
    if(arguments.length !== checkSpam.length){
        throw new Error('Не верное количество входных данных!');
    }
    if(typeof param1 !== 'string'){
        throw new Error('Не правильный первый параметр!');
    }
    if(typeof param1 !== 'string'){
        throw new Error('Не правильный второй параметр!');
    }
    
    let argument1 = param1.toLowerCase();
    let argument2 = param2.toLowerCase();

    if(argument1.includes(argument2)){
        console.log(true);
    }else{
        console.log(false);
    }
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
