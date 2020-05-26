/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

function truncate(param1, param2){
    if(typeof param1 !== 'string' || typeof param2 !== 'number'){
        throw new Error('Не правильные входные данные!');
    }
    let stringLength = param1.length;
    let maxLength = param2;
   
    if(stringLength >= maxLength){
        let res = param1.substring(0, maxLength - 3) + '...';
        console.log(res);  
    }else{
        console.log(param1);
    }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
