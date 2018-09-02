'use strict';
let arr = [];
let number;
let element;
let sum = 0;

 do {
   number = prompt('Введите число');
   if (number!==null && !isNaN(number))
     {
   arr.push(Number(number));
     }
 }
  while (number!==null && !isNaN(number))
  if (arr.length>0) {
    for (element of arr) {
      sum = sum + element;
    }
    alert(`Общая сумма чисел равна ${sum}`);
  }
console.log(sum);