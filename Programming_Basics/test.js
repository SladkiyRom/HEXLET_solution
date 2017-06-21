test.js

Проверьте с помощью утверждений (asserts) правильность работы функции factorial,
которая вычисляет факториал переданного числа.
Определение факториала можно прочитать в википедии.

Несколько примеров:

factorial(0); // 1
factorial(1); // 1
factorial(5); // 120

Кроме основных проверок (на работу с произвольными числам),
не забудьте также добавить проверку на пограничные случаи (вызов с параметром 0 и 1).

Подсказки

assert(<expression>) проверяет, что результат <expression> является истиной.
assert.equal(<actual>, <expected>) проверяет,
что <actual> и <expected> равны (проверка на нестрогое равенство ==)

v.2

import assert from 'assert';
import { factorial } from './implementations';

// Example
assert.equal(factorial(3), 6);

// BEGIN (write your solution here)
assert(factorial(3), 6);
assert(factorial(5), 120);
assert(factorial(0), 1);
assert(factorial(1), 1);
assert.equal(factorial(3), 6);
assert.equal(factorial(5), 120);
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
// END

//Решение учителя

// BEGIN
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(4), 24);
// END

v.1



import assert from 'assert';
import { factorial } from './implementations';

assert(Number.isNaN(factorial(-3)));
assert(Number.isNaN(factorial('not number')));
assert(Number.isNaN(factorial(0.2)));

// BEGIN (write your solution here)
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);
// END

//Решение учителя

// BEGIN
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(3), 6);
// END

