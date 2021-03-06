/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

// Функция для выбора дня неделии
function switchDay(x){
    let ourDay = null;
    
    switch(x){
        case 1:
            ourDay = 'Воскресенье';
            break;
        case 2: 
            ourDay = 'Понедельник';
            break;
        case 3:
            ourDay = 'Вторник';
            break;
        case 4:
            ourDay = 'Среда';
            break;
        case 5:
            ourDay = 'Четверг';
            break;
        case 6:
            ourDay = 'Пятница';
            break;
        case 7:
            ourDay = 'Суббота';
    }

    return ourDay;
}

// Функция для валидации входных данных.
function isCorrectArgument(arg){
    if(!arg){
        throw new Error('Вы не ввели данные!');
    };
    if(typeof arg !== 'number'){
        throw new Error('Вы ввели не корректные данные!');
    };
    if(arg <= 0 || arg > 7){
        throw new Error('Дней недели только семь !!!');
    };
    return arg;
}

// Наша основная функция
function f(param){
    return switchDay(isCorrectArgument(param)); 
};

try{
    console.log(f(5));
}catch(err){
    console.log(err.message);
}

// f(1); // Воскресенье
// f(4); // Среда

exports.f = f;
