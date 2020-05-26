/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(param){
    if(typeof param !== 'string'){
        throw new Error('Не правильные входные данные!');
    }
    let firstLetter = param.charAt(0).toUpperCase();
    let string = param.substr(1).toLowerCase();
    let result = firstLetter + string;

        console.log(result);
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(' '); // ''

exports.upperCaseFirst = upperCaseFirst;
