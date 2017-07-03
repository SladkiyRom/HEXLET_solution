
const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false

Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.

const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)

Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).

const numbers = l(3, 4, 5, 8);


v.1


eslint-https://ide-33395-instance-401744.exercise5.hexlet.io/?#disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

 // BEGIN (write your solution here)
 export const has = (list, num) => {
  if (isEmpty(list)) {
     return false;
    }
  if (head(list) === num) {
     return true;
    }

 return has(tail(list), num);
};

 export const reverse = (numbers) => {
  const iter = (acc, numbers) => {
    if (isEmpty(numbers)) {
      return acc;
   }

   return iter(cons(head(numbers), acc), tail(numbers));
};

  return iter(l(), numbers);
};

 export const concat = (list1, list2) => {
   if (isEmpty(list1)) {
    return list2;
   }

 return cons(head(list1), concat(tail(list1), list2));
};
// END

//Решение учителя

//BEGIN
export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
	}
  if (head(list) === element) {
    return true;
  }

 return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) =>
    (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

 return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};
//END
