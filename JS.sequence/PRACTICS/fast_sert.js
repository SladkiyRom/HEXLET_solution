sort.js
Реализуйте и экспортируйте по умолчанию функцию sort,
которая сортирует переданный массив по возрастанию

sort(l(3, 3, 0, -1, 0, 4, -5));
// (-5, -1, 0, 0, 3, 3, 4)

Алгоритм
Быстрая сортировка, сортировка Хоара (англ. quicksort),
часто называемая qsort (по имени в стандартной библиотеке языка Си) — широко известный алгоритм сортировки,
 разработанный английским информатиком Чарльзом Хоаром во время его работы в МГУ в 1960 году.

Общая идея алгоритма состоит в следующем:

   1.Выбрать из списка элемент, называемый опорным.
     Это может быть любой из элементов списка или же число,
     вычисленное на основе значений элементов.

   2.Сравнить все остальные элементы с опорным и переставить их в списке так,
     чтобы разбить список на три непрерывных отрезка,
     следующих друг за другом: «меньшие опорного», «равные» и «большие».

   3.Для отрезков «меньших» и «больших» значений выполнить рекурсивно ту же последовательность операций,
    если длина отрезка больше единицы.

 На практике список обычно делят не на три,
 а на две части: например, «меньшие опорного» и «равные и большие»;
 такой подход в общем случае эффективнее, так как упрощает алгоритм разделения.

v.1

 // eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const basic = head(list);

  if (filter(element => (element < basic), list) === l()) {
    return list;
  }

  const less = filter(element => (element < basic), list);
  const equal = filter(element => (element === basic), list);
  const more = filter(element => (element > basic), list);
  return concat(sort(less), concat(equal, sort(more)));
};
export default sort;
//END

//Решение учителя

// BEGIN
const sort = (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const divisor = head(list);
  const rest = tail(list);

  const left = filter(value => value <= divisor, rest);
  const right = filter(value => value > divisor, rest);

  return concat(sort(left), cons(divisor, sort(right)));
};

export default sort;
// END
