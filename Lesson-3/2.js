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
    if(typeof param1 !== 'string' || typeof param2 !== 'string'){
        console.log('Error!!!');
    }
    let argument1 = param1.toLowerCase();
    let argument2 = param2.toLowerCase();
    let result = argument1.includes(argument2);
    if(result){
        console.log(true);
    }else{
        console.log(false);
    }
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
