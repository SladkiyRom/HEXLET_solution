union.js
Напишите и экспортируйте функцию по умолчанию union, которая принимает на вход два списка и возвращает третий, являющийся объединением уникальных значений двух исходных списков.

const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);

const result = union(list1, list2);
// (2, 3, 1, 7, 5, 8, 9)

v.1

// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const union = (list1, list2) => {
  if (isEmpty(list1, list2)) {
    return l();
  }
  const newList = reduce((element, acc) => cons(element, acc), list2, reverse(list1));
  const result = reduce((element, acc) => has(acc, element) ? acc : cons(element, acc), l(), newList);
  return reverse(result);
};
export default union;
// END


Решение учителя


// BEGIN
export default (list1, list2) => {
  const appendUniq = (base, list) => {
    const result = reduce((value, acc) =>
      (has(acc, value) ? acc : cons(value, acc)),
      reverse(base), list);
    return reverse(result);
  };

  return appendUniq(appendUniq(l(), list1), list2);
};
// END
