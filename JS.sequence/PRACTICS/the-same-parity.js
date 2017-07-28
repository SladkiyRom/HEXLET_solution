olution.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список и возвращает новый, состоящий из элементов, у которых такая же четность, как и у первого элемента входного списка.

sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)

sameParity(l()); // ()


v.1

// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export default (list) => {
  if (isEmpty(list)) {
    return l();
  }
  if (head(list) % 2 !== 0) {
    return filter((element => (element % 2 !== 0)), list);
  }
  if (head(list) % 2 === 0) {
    return filter((element => (element % 2 === 0)), list);
  }
};
// END


Решение учителя


// BEGIN
export default (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const first = head(list);

  return filter(value => Math.abs(first % 2) === Math.abs(value % 2), list);
};
// END
