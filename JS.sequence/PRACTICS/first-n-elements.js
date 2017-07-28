
Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список, состоящий из первых n элементов исходного (переданного вторым параметром) списка.
Остальные детали работы функции демонстрирует нижеприведённый код:

take(3, l()); // ()
take(3, l(1, 2)); // (1, 2)
take(1, l(7, 2)); // (7)

v.1

mport { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const take = (acc, list) => {
  if (isEmpty(list) || acc === 0) {
    return l();
  }

  return cons(head(list), take(acc - 1, tail(list)));
};
export default take;
// END


Решение учителя

:
// BEGIN
const take = (count, list) => {
  if (isEmpty(list) || count === 0) {
    return l();
  }

  return cons(head(list), take(count - 1, tail(list)));
};

export default take;
// END
