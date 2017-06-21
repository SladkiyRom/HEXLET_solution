solution.js

Реализуйте и экспортируйте функцию smallestDivisor
используя итеративный процесс (императивно).
Функция должна находить минимальный делитель переданного числа.

Для этого достаточно последовательно проверять делимость начиная с двойки.
Если делитель не найден, значит число простое и делителем является само число.

Если переданное число меньше единицы,
то функция должна вернуть NaN.

smallestDivisor(15); // 3
smallestDivisor(17); // 17

smallestDivisor(0); // NaN
smallestDivisor(-3); // NaN


// BEGIN (write your solution here)
export const smallestDivisor = (numb) => {
  let a = 2;
  if (numb < 1) {
  return NaN;
  }
  else if (numb === 1) {
      a = 1;
    return a;
  }
  while (a <= numb) {
    if (numb % a === 0)
     return (a);
     a = (a + 1);
  }

  return a;
};
smallestDivisor(0);
// END

//Решение учителя

// BEGIN
export const smallestDivisor = num => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return num;
  }
  let divisor = 2;

  while (num % divisor !== 0) {
    divisor = divisor + 1;
  }

  return divisor;
};
// END

