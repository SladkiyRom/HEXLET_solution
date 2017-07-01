sumSquareDifference.js

Сумма квадратов
первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы
первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов
первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference,
которая принимает аргумент n и
возвращает разницу между квадратом суммы и
суммой квадратов первых n натуральных чисел.

v.1



// BEGIN (write your solution here) (write your solution here)
const sumSquare = (num) => {
  if (num <= 1) {
    return num;
  }
  return (num * num) + sumSquare(num - 1);
};
sumSquare(5);

const squareSum = (num) => {
  let result = 0;
  while (num >= 1) {
    result += num;
    num--;
  }
return result ** 2;
};

const sumSquareDifference = (num) => {
  if (num === 1) {
    return 0;
  }

  return squareSum(num) - sumSquare(num);
};
// END

export default sumSquareDifference;

//Решение учителя

// BEGIN (write your solution here)
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }

  return sum * sum;
};

const sumSquareDifference = n =>
  squareOfSum(n) - sumOfSquares(n);
// END

