Счастливые числа

Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. Например:

7 => 72 = 49, 49 => 42 + 92 = 16 + 81 = 97, 97 => 92 + 72 = 81 + 49 = 130, 130 => 12 + 32 + 02 = 10, 10 => 12 + 02 = 1.

Вывод: исходное число 7 - счастливое.
isHappyNumber.js

Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет.
Количество итераций процесса поиска необходимо ограничить числом 10.

Воспользуйтесь вспомогательной функцией sumDigits, которая принимает на вход число и возвращает "сумму квадратов цифр" этого числа.

v.1

import { length } from './strings';

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (num) => {
  const iter = (num, counter) => {
    if (sumDigits(num) === 1) {
      return true;
    }
    if (counter > 10) {
      return false;
    }

   return iter(sumDigits(num), counter += 1);
  };
 return iter(num, 1);
};
export default isHappyNumber;
// END

//Решение учителя

// BEGIN
export default (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};
// END

