solution.js

Реализуйте и экспортируйте функцию isPowerOfThree которая определяет, является ли переданное число натуральной степенью тройки.
Например число 27 это третья степень (33), а 81 это четвертая (34).

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)

v.1

// BEGIN (write your solution here)
export const isPowerOfThree = (num) => {
  if (num === 1) {
    return true;
  }
  else if (num % 3 === 0) {
    return isPowerOfThree(num / 3);
  }

  return false;
};
// END

//Решение учителя

// BEGIN
export const isPowerOfThree = (num) => {
  let current = 1;
  while (current <= num) {
    if (current === num) {
      return true;
    }
    current *= 3;
  }

  return false;
};
// END

