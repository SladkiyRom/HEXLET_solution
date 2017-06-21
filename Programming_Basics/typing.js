
solution.js

Реализуйте и экспортируйте функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Сложите все входящие в него цифры до тех пор, 
пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

    3 + 8 = 11
    1 + 1 = 2

Результат: 2

Пример:

addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8

Подсказка

    Выделите процесс суммирования цифр в числе в отдельную функцию




v.2

import * as strings from './strings';

// BEGIN (write your solution here)
export const addDigits = (num) => {
  let result = num;
  if (result >= 10) {
    result = addDigits(sumDigits(String(num)));
  }

  return result;
};

const sumDigits = (str) => {
  let result = 0;
  for (let i = 0; i < strings.length(str); i++) {
    result += Number(str[i]);
  }

  return result;
};
// END

//Решение учителя

// BEGIN
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < strings.length(str); i++) {
    result += Number(str[i]);
  }

  return result;
};

export const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};
// END

v.1



import * as strings from './strings';

// BEGIN (write your solution here)
const sumOfNum = (num) => {
  let str = String(num);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (num > 0) {
      result += Number(str[i]);
    }
  }
  return result;
};
export const addDigits = (num) => {
  let str1 = sumOfNum(num);
  if (str1 < 10) {
    return str1;
  }
  return addDigits(str1);
};
// END

//Решение учителя

// BEGIN
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < strings.length(str); i++) {
    result += Number(str[i]);
  }

  return result;
};

export const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};
// END

