'use strict';
const arr = [];
let number;
let element;
let sum = 0;

 do {
   number = prompt('Введите число');
   if (!isNaN(number))
     {
   arr.push(Number(number));
     }
  if (isNaN(number)) 
  {
    alert('Было введено не число, попробуйте еще раз');
  }
 }
  while (number!==null)
  if (arr.length>0) {
    for (element of arr) {
      sum = sum + element;
    }
    alert(`Общая сумма чисел равна ${sum}`);
  }
