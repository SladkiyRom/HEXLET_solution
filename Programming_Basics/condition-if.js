check.js

Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход результат хоккейного матча и исход,
который предполагался. Если счет был угадан верно,
то функция должна вернуть 2,
если исход был угадан верно (победа первой команды, ничья, поражение первой команды),
то функция должна вернуть 1, во всех остальных случаях функция возвращает 0.

Функция принимает на вход четыре параметра: a, b, c, d.
Эти параметры, на самом деле,
являются результатами (реальным и предполагаемым) игры хоккейной команды: a:b - реальный счет, c:d - предполагаемый.

Примеры:

result(1, 2, 1, 2) === 2; // 1:2 - реальный счет, 1:2 - предполагаемый
result(1, 3, 1, 2) === 1; // 1:3 - реальный счет, 1:2 - предполагаемый
result(4, 3, 0, 0) === 0; // 4:3 - реальный счет, 0:0 - предполагаемый


v.2

// BEGIN (write your solution here)
export default (a, b, c, d) => {
  if (a === c && b === d) {
    return 2;
  }
  else if (a > b && c > d || a === b && c === d || a < b && c < d ) {
    return 1;
  }
  else return 0;

};
// END

//Решение учителя

// BEGIN
export default (a, b, c, d) => {
  if (a === c && b === d) {
    return 2;
  } else if ((a > b && c > d) || (a < b && c < d) || (a === b && c === d)) {
    return 1;
  }

  return 0;
};
// END

v.1

// BEGIN (write your solution here)
export const check = (a, b, c, d) => {
  if ((a === c) && (b === d)) {
    return 2;
  }
  else if (((a > b) && (c > d)) || ((a < b) && (c < d)) ||
  ((a === b) && (c === d))) {
    return 1;
  }
  else {
    return 0;
  }
};
// END

//Решение учителя

// BEGIN
export const check = (a, b, c, d) => {
  if (a === c && b === d) {
    return 2;
  } else if (a > b && c > d || a < b && c < d || a === b && c === d) {
    return 1;
  }

  return 0;
};
// END

