Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: 
a^2 + 2ab + b^2 (a2 означает "a в степени 2" или "а в квадрате").

squareOfSum(2, 3) // 25

Подсказка: в JavaScript нет оператора ^, поэтому вам нужно будет придумать как возвести число в квадрат.

v.1

// BEGIN (write your solution here)
const squareOfSum = (a, b) => {
return  (a * a) + (2 * a * b) + (b * b);
};
// END

export default squareOfSum;

//Решение учителя

// BEGIN
const squareOfSum = (a, b) => {
  return (a * a) + (2 * a * b) + (b * b);
};
// END

