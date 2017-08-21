card.js

Реализуйте и экспортируйте обобщенную функцию damage.

generic.js

Реализуйте функцию getMethod, 
которая производит поиск конкретной реализации функции для переданного типа.

simpleCard.js

Реализуйте интерфейс типа simpleCard.

Подсказки:

	В percentCard.js можно подсмотреть пример использования.
	Обратите внимание в модуле generic.js на следующую строчку: let methods = l();. 
	Именно здесь определяется та самая виртуальная таблица, 
	механизм работы с которой подробно описан в текстовой части этого урока.


v.1


 -------------
|simpleCard.js|
|			  |
 -------------

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
const defmethod = definer('SimpleCard');

const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));

//Решение учителя

// BEGIN
const defmethod = definer('SimpleCard');

const make = (name, damagePoints) =>
  attach('SimpleCard', cons(name, damagePoints));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
// END


 -----------
|generic.js |
|		    |
 -----------


import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const iter = (methods) => {
    if(isEmpty(methods)) {
      return methods;
    }
    if(typeTag(obj) === typeTag(head(methods)) && methodName === car(contents(head(methods)))) {
      return cdr(contents(head(methods)));
    }
    return iter(tail(methods));
  };
  return iter(methods);
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };

 //Решение учителя

// BEGIN
  const currentType = typeTag(obj);
  const iter = (elements) => {
    if (isEmpty(elements)) {
      return null;
    }
    const element = head(elements);
    if (currentType === typeTag(element)) {
      const method = contents(element);
      if (methodName === car(method)) {
        return cdr(method);
      }
    }

    return iter(tail(elements));
  };

  return iter(methods);
  // END


  -----------
 | cards.js  |
 |           |
  -----------


  import { getMethod } from './generic'; // eslint-disable-line
import { contents } from './type'; // eslint-disable-line

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
export const damage = (self, health) =>
  getMethod(self, 'damage')(contents(self), health);
// END

//Решение учителя

// BEGIN
export const damage = (self, health) =>
  getMethod(self, 'damage')(contents(self), health);
// END