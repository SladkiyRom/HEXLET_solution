solution.js

Реализуйте функцию sequenceSum, которая находит сумму последовательности целых чисел. 
Последовательность задается тремя значениями: begin - начало последовательности, end - конец последовательности, step - шаг. 
Например: begin = 2, end = 6, step = 2, дает нам такую последовательность 2, 4, 6. Сумма такой последовательности будет: 12.

import { sequenceSum } from './solution';

sequenceSum(1, 5, 1); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(1, 5, 3); // 1 + 4 = 5

В файле test.js можно посмотреть все варианты параметров, с которыми будет вызвана ваша функция.


export const sequenceSum = (begin, end, step) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return 0;
  }

  return begin + sequenceSum(begin + step, end, step);
  // END
};

//Решение учителя

  // BEGIN
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
  // END

