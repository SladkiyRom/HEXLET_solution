
logic.js

Экспортируйте тройку True, False, If, используя только функции,
внутри которых только функции. ;)
То есть нельзя пользоваться встроенными в язык if, а также true/false.

Пример:

import { If, True, False } from './logic';

If(True)('one')('two'); // one
If(False)('one')('two'); // two

Из вызовов выше можно сразу увидеть, что If это функция,
внутри которой матрешка из двух функций.

v.1

// BEGIN (write your solution here)
export const If = bool => one => two => bool(one, two);
export const True = (one, two) => one;
export const False = (one, two) => two;
// END

//Решение учителя

// BEGIN
export const True = x => () => x;
export const False = () => y => y;

export const If = f => f;
// END

