/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

Object.defineProperty(person, 'salary', {
    get: function(){
        let date = new Date();
        let ourDay = date.getDate();
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        let deltaDay = lastDay - ourDay;
        
        if(deltaDay > 20){
            return 'Good salary';
        }else{
            return 'Bad salary';
        } 
    }
})

console.log(person.salary);

person.salary; // good salary

exports.person = person;
