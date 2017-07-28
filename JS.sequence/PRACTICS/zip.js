
Напишите и экспортируйте по умолчанию функцию zip, которая принимает на вход два списка и возвращает третий, в котором каждый элемент это список элементов исходных списков, стоящих на тех же позициях.

const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);

//  ((1, 2), (5, 3), (3, 2), (8, 1))
const result = zip(list1, list2);
Как видно из примера, если списки различаются по длине, то длина результирующего списка равна длине короткого списка.


import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (list1, list2) => {
  const iter = (items1, items2, acc) => {
    if (isEmpty(items1) || isEmpty(items2)) {
      return acc;
    }
    const headers = l(head(items1), head(items2));
    return cons((acc ,headers), zip(tail(items1), tail(items2)));
  };
  return iter(list1, list2, l());
};
export default zip;
// END


Решение учителя


// BEGIN
const zip = (list1, list2) => {
  const iter = (first, last, acc) => {
    if (isEmpty(first) || isEmpty(last)) {
      return acc;
    }

    const newAcc = cons(l(head(first), head(last)), acc);
    return iter(tail(first), tail(last), newAcc);
  };

  return reverse(iter(list1, list2, l()));
};

export default zip;
// END
