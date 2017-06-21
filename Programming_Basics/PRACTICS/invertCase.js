solution.js

Реализуйте и экспортируйте функцию invertCase,
которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!') // hELLO, wORLD!
invertCase('I loVe JS') // i LOvE js

v.1

import * as strings from './strings';

// BEGIN (write your solution here)
export const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i] ) {
      result += str[i].toLowerCase();
    }
    else if (str[i].toLowerCase() === str[i]) {
      result += str[i].toUpperCase();
    }
    else{
      result += str[i];
    }
  }

  return result;
};
// END

//Решение учителя

// BEGIN
export const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i += 1) {
    const upper = str[i] === strings.toUpperCase(str[i]);
    result += upper ? strings.toLowerCase(str[i]) : strings.toUpperCase(str[i]);
  }

  return result;
};
// END

