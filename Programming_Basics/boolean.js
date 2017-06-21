isBigOdd.js

Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход целое число и:

Возвращает true в том случае, если переданный параметр это нечетное число, которое больше или равно 1001.
Возвращает false в остальных случаях.

v.2

// BEGIN (write your solution here)
const isBigOdd = (num) => {
  return (num % 2 !== 0 && num >= 1001);
};
export default isBigOdd;
// END

//Решение учителя

// BEGIN
export default num => num % 2 !== 0 && num > 1000;
// END

v.1

// BEGIN (write your solution here)
export const isBigOdd = (n) => {
  return (n > 1001 || n === 1001 ) && (n % 2 !== 0);
};
isBigOdd(1003)
// END

//Решение учителя

// BEGIN
export const isBigOdd = num => num % 2 !== 0 && num > 1000;
// END

