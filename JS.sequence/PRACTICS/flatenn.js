flatten.js
Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.

const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

// (1, 2, 3, 5, 4, 3, 2)
flatten(list);

v.1

// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const flatten = (list) => {
  const iter = (elements, acc) => {
  if (isEmpty(elements)) {
    return acc;
  }
  return reduce((element, acc) => !isList(element) ? cons(element, acc)
  : iter(element, acc), acc, reverse(elements));
 };
 return iter(list, l());
};
export default flatten;
// END


Решение учителя


// BEGIN
const flatten = (list) => {
  const removeList = (elements, accumulator) =>
    reduce((element, acc) =>
      (!isList(element) ? cons(element, acc) : removeList(element, acc)), accumulator, elements);

  return reverse(removeList(list, l()));
};

export default flatten;
// END
