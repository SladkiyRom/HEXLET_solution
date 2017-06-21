
solution.js

Реализуйте и экспортируйте по умолчанию функцию, 
которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!

Подсказки

    Вычисление длины строки: strings.length(str).
    Перевод строки/буквы в верхний регистр strings.toUpperCase(str).

v.1

import * as strings from './strings';

// BEGIN (write your solution here)
export default (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    }
    else {
      result += str[i];
    }
  }
  return result;
};
// END

//Решение учителя

// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? strings.toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END

v.2


import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i++)

  (i === 0 || str[i - 1] === ' ') ? result += toUpperCase(str[i]) : result += str[i];

 return result;
};
export default solution;
// END

//Решение учителя

// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END

