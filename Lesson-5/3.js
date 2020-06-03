/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(par1, par2, par3){
    if(!arguments.length){
        throw new Error('Вы не ввели данные!');
    }
    if(par3 === 0){
        throw new Error('На ноль делить нельзя!');
    }
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'number'){
            throw new Error('Вы ввели не корректные данные!');  
        }
    }
    
    return (par1 - par2) / par3;
}

console.log(f(9, 3, 2)); // 3


exports.f = f;
