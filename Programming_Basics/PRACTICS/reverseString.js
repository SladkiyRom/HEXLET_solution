solution.js

Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverseString from './solution';

reverseString('str'); // rts
reverseString('hexlet'); // telxeh

Подсказки

Чтобы узнать длину строки, используйте функцию length из модуля strings:

strings.length('welcome'); // 7

Чтобы получить подстроку из строки, используйте функцию substr из модуля strings:

strings.substr('foo', 1, 2); // 'oo';

v.1

import * as strings from './strings';

// BEGIN (write your solution here) (write your solution here)
const reverseString = (str) => {
  let result = '';
  let i = strings.length(str) - 1;

  if (i < 0) {
    return result;
  }

  return str[i] + reverseString(strings.substr(str, 0, i--));
};
export default reverseString;
// END

//Решение учителя

// BEGIN (write your solution here)
const reverseString = (str) => {
  const length = strings.length(str);
  if (length === 0) {
    return str;
  }

  return str[length - 1] + reverseString(strings.substr(str, 0, length - 1));
};

export default reverseString;
// END

