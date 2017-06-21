Рассмотренный в уроке способ создания пар, не является единственно возможным,
даже если мы говорим только про реализацию на функциях.
pairs.js

Напишите и экспортируйте функции car и cdr, основываясь на том,
как реализована функция cons:

const cons = (x, y) => f => f(x, y);

Подсказки

    Все дело в хитрых функциях, которые вызывают другие функции и
    передают в них функции ;)
    Задача проще чем кажется, каждая функция это одна короткая строчка.

v.1



/* eslint-disable no-unused-vars */
export const cons = (x, y) => m => m(x, y);

// BEGIN (write your solution here)
export const car = fun => fun((x, y) => x);
export const cdr = fun => fun((x, y) => y);
// END

//Решение учителя

// BEGIN
export const car = z => z((x, y) => x);
export const cdr = z => z((x, y) => y);
// END

