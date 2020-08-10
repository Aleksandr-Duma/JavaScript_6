/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение

const isFunctionArgument = function(param){
    for(let i = 0; i < param.length; i++){
        if(typeof param[i] !== 'function'){
            throw new Error('Один из аргументов не является функцией');
        };
    };
};

const calculate = (...functions) =>{

    isFunctionArgument(functions);

    let resultNum = functions[0]();
    let functionsAll = functions.slice(1);

    for(let i = 0; i < functionsAll.length; i++){
        resultNum = functionsAll[i](resultNum);
        if(!resultNum){
            throw new Error('Функция не вернула значения!');
        };
    };

    return resultNum;
};

try{
    const result = calculate(
        () => {
            return 7;
        },
        prevResult => {
            return prevResult + 4;
        },
        prevResult => {
            return prevResult * 5;
        }
    );
    
    console.log(result); // 55

}catch(err){
    console.log(err.message);
}

exports.calculate = calculate;
