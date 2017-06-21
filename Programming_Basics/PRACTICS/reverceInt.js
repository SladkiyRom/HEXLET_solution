solution.js

Реализуйте и экспортируйте функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число

reverseInt(13); // 31
reverseInt(-123); // -321

v.1

import * as strings from './strings';

// BEGIN (write your solution here)
import * as substr from './strings';
export const reverseInt = (num) => {
let str = String(num);
let result = '';

if (str[0] === '-') {
  result += '-';
  str = str.substr(1, strings.length(str) - 1);
}

for (let i = strings.length(str) - 1; i >= 0; i--) {
  result += str[i];
}
 if( Number(result) === false) {
   result === true;
 }

 return Number(result);
};
// END

//Решение учителя

// BEGIN
export const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = strings.length(numAsStr) - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i--;
  }
  const reversedModule = Number(reversedStr);

  return num > 0 ? reversedModule : -reversedModule;
};
// END

