// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

////////////////// Решение №1 //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// const result = [];
// for(let i = arr.length-1; i >= 0; i--){
//     result[result.length] = arr[i];
// }
// console.log(result); 

////////////////// Решение №2 с применением сортировки //////////////////

const arr = [1, 2, 3, 4, 5, 6];

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j-1]){
                let max = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = max;
            }     
        } 
    }
    console.log(arr);
    
    
    
    
