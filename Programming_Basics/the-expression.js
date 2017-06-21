solution.js

Реализуйте функцию square, которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.

Переиспользуйте ваши функции там где это возможно.

square(10); // 100
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4




v.3

// BEGIN (write your solution here)
const square = (num) => {
  return num * num;
 };
const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
 };
const squareSumOfSquares = (num1, num2) => {
  return square(sumOfSquares(num1, num2));
};
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

//Решение учителя

// BEGIN
const square = (num) => {
  return num * num;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};

const squareSumOfSquares = (num1, num2) => {
  return square(sumOfSquares(num1, num2));
};
// END

v.2

// BEGIN (write your solution here)
const square = (a) => {
  return a * a;
};
const sumOfSquares = (a, b) => {
  return square(a) + square(b);
};
const squareSumOfSquares = (a, b) => {
  return square(sumOfSquares(a, b));
};
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

//Решение учителя

// BEGIN
const square = (num) => {
  return num * num;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};

const squareSumOfSquares = (num1, num2) => {
  return square(sumOfSquares(num1, num2));
};
// END

v.1

// BEGIN (write your solution here)
const square = (a) => {
  return a * a;
};
square(10);
const sumOfSquares = (f, g) => {
  return square(f) + square(g);
};
sumOfSquares(10, -9);
const squareSumOfSquares = (c, d) => {
  return square(square(c) + square(d));
};
squareSumOfSquares(1, 1);
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

//Решение учителя

// BEGIN
const square = (num) => {
  return num * num;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};

const squareSumOfSquares = (num1, num2) => {
  return square(sumOfSquares(num1, num2));
};
// END

