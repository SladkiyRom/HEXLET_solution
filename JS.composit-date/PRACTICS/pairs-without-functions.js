
Пары неотрицательных чисел можно представить,
используя только числа и арифметические операции.
Для этого можно считать, что пара это 2^a * 3^b;

Функции car и cdr при этом будут просто вычислять,
соответственно, кратность двойки и тройки в разложении своего аргумента
на простые сомножители.

pairs.js

Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:

    cons
    car
    cdr

Пример:

const pair = cons(5, 8);
car(pair); // 5
cdr(pair); // 8

Подсказки

    Так как по условию задания пара это, в конечном счете, число,
    то для получения из него исходных значений (a и b)
    следует применить разложение на множители.

 v.1


// BEGIN (write your solution here)
export const cons = (a, b) => (2 ** a) * (3 ** b);

export const car = (a) => {
  let i = 0;
  while (a % 2 === 0) {
    i++;
    a /= 2;
  }

 return i;
};

export const cdr = (b) => {
  let i = 0;
  while (b % 3 === 0) {
    i++;
    b /= 3;
  }

 return i;
};
// END

//Решение учителя

// BEGIN
const factor = (base, value) => {
  if (value % base !== 0) {
    return 0;
  }
  return 1 + factor(base, value / base);
};

export const cons = (a, b) => (2 ** a) * (3 ** b);
export const car = pair => factor(2, pair);
export const cdr = pair => factor(3, pair);
// END

