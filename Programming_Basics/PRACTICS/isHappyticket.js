Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
isHappyTicket.js

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как в числового,
так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true

Подсказки

Преобразовать число в строку можно с помощью функции String:

String(1234); // "1234"

Преобразовать строку в число можно с помощью функции Number:

Number("456"); // 456

Используйте функцию length из модуля strings чтобы узнать длину строки:

strings.length('hello'); // 5

Используйте функцию substr из модуля strings чтобы получить подстроку из строки:

strings.substr('hello', 0, 4); // "hell"

v.1

import * as strings from './strings';

// BEGIN (write your solution here) (write your solution here)
const isHappyTicket = (num) => {
const str = String(num);

const n1 = strings.substr(str,0, 1);
const n2 = strings.substr(str,1, 1);
const n3 = strings.substr(str,2, 1);
const n4 = strings.substr(str,3, 1);
const n5 = strings.substr(str,4, 1);
const n6 = strings.substr(str,5, 1);

const leftstr = Number(n1) + Number(n2) + Number(n3);
const rigthstr = Number(n4) + Number(n5) + Number(n6);
if (leftstr === rigthstr) {
  return true;
  }

 return false;
};
export default isHappyTicket;
// END

//Решение учителя

// BEGIN (write your solution here)
const sumDigits = (numberString) => {
  let sum = 0;
  for (let i = 0; i < strings.length(numberString); i += 1) {
    sum += Number(numberString[i]);
  }
  return sum;
};

export default (number) => {
  const numberString = String(number);

  const leftPart = strings.substr(numberString, 0, 3);
  const rightPart = strings.substr(numberString, 3);

  return sumDigits(leftPart) === sumDigits(rightPart);
};
// END

