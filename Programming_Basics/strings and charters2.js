
solution.js

Реализуйте и экспортируйте по умолчанию функцию reverse,
которая переворачивает строку.

Пример:

reverse('hello, world!'); // !dlrow ,olleh

Подсказки

    Для подсчета длины строки используйте функцию length из модуля strings.
    Пример: strings.length('cat'); // 3

v.1

import * as strings from './strings';

// BEGIN (write your solution here)
const reverse = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

return result;
};
reverse('java script');
export default reverse;
// END

//Решение учителя

// BEGIN
export default (str) => {
  let i = strings.length(str) - 1;

  let result = '';
  while (i >= 0) {
    result += str[i];
    i -= 1;
  }

  return result;
};
// END

