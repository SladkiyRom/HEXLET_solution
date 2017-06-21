

Рациональное число — число, представляемое обыкновенной дробью m/n, числитель m — целое число, а знаменатель n — натуральное число, к примеру 2/3.
Формулы
Сложение

a/b + c/d = (a * d + b * c) / (b * d)

Вычитание

a/b - c/d = (a * d - b * c) / (b * d)

Умножение

a/b * c/d = (a * c) / (b * d)

Деление

a/b / c/d = (a * d) / (b * c)

Равенство

a/b = c/d, если a * d = c * b

rational.js

Реализуйте абстракцию для работы с рациональными числами, используя пары:

    Конструктор make(numer, denom).

    Селекторы numer (числитель) и denom (знаменатель).

    Функцию toString, возвращающую строковое представление рационального числа. Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.

    Предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).

    Функцию add, выполняющую сложение дробей.

    Функцию sub, выполняющую вычитание дробей.

    Функцию mul, выполняющую умножение дробей.

    Функцию div, выполняющую деление дробей.

Экспортируйте созданные функции.

Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.

Пример:

const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

toString(rat12); // '4 / 6'
isEqual(rat1, rat12); // true

add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21



v.1



// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);
export const numer = (make) => car(make);
export const denom = (make) => cdr(make);

export const toString = (make) => `${numer(make)} / ${denom(make)}`;

const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);
const rat11 = make(2, 3);

export const isEqual = (rat1, rat2) => {
    if (numer(rat1) * denom(rat2) === denom(rat1) * numer(rat2)) {
      return true;
    }
  return false;
};

export const add = (rat1, rat2) => {
  const result1 = (car(rat1) * cdr(rat2)) + (cdr(rat1) * car(rat2));
  const result2 = (cdr(rat1) * cdr(rat2));
  return cons(result1, result2);
};

export const sub = (rat1, rat2) => {
  const result1 = (car(rat1) * cdr(rat2)) - (cdr(rat1) * car(rat2));
  const result2 = (cdr(rat1) * cdr(rat2));
  return cons(result1, result2);
};

export const mul = (rat1, rat2) => {
  const result1 = (car(rat1) * car(rat2));
  const result2 = (cdr(rat1) * cdr(rat2));
  return cons(result1, result2);
};
export const div = (rat1, rat2) => {
  const result1 = (car(rat1) * cdr(rat2));
  const result2 = (cdr(rat1) * car(rat2));
  return cons(result1, result2);
};
// END

//Решение учителя

// BEGIN
export const make = (numer, denom) => cons(numer, denom);
export const numer = pair => car(pair);
export const denom = pair => cdr(pair);

export const add = (x, y) =>
  make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y));

export const sub = (x, y) =>
  make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y));

export const isEqual = (x, y) =>
  numer(x) * denom(y) === numer(y) * denom(x);

export const mul = (x, y) =>
  make(numer(x) * numer(y), denom(x) * denom(y));

export const div = (x, y) =>
  make(numer(x) * denom(y), denom(x) * numer(y));

export const toString = rat => `${numer(rat)} / ${denom(rat)}`;
// END
