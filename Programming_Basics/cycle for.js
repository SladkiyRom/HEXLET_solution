
solution.js

Реализуйте и экспортируйте функцию по умолчанию, 
которая считает сумму всех натуральных чисел меньших чем n (первый аргумент), 
которые делятся на числа a или b (второй и третий аргументы) без остатка. 
n - может быть только натуральным числом.

// 1 % 2 || 1 % 4
// 2 % 2 || 2 % 4
// ...
// 9 % 2 || 9 % 4
solution(10, 2, 4); // 20


v.1


// BEGIN (write your solution here)
const solution = (n, a, b) => {
  let result = 0;

  for (let i = 1; i < n; i++) {
    if (i % a === 0 || i % b === 0)
      result += i;
  }

  return result;
};
solution(10, 2, 4);
export default solution;
// END

//Решение учителя

// BEGIN
export default (num, divisor1, divisor2) => {
  let sum = 0;

  for (let i = 1; i < num; i += 1) {
    if (i % divisor1 === 0 || i % divisor2 === 0) {
      sum += i;
    }
  }

  return sum;
};
// END

