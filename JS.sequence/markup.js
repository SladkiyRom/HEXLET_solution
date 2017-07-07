

Реализуйте базовый интерфейс для создания html. Он включает в себя следующие функции:

make - конструктор.
node - создает новый тег. Содержит два элемента, имя тега и его содержимое. Дополнительно реализуйте селекторы тега: name и value
append - добавляет элемент в список.
toString - возвращает текстовое представление html

  	import { make, append, toString, node } from './html-tags';

		const dom1 = make();
		const dom2 = append(dom1, node('h1', 'hello, world'));
		const dom = append(dom2, node('h2', 'header2'));

// <h1>hello, world</h1><h2>header2</h2>
// toString(dom);
//
// Экспортируйте все созданные функции.
//


v.1

//eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
//eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const make = () => l();

export const node = (name, value) => cons(name, value);
export const name = (node) => car(node);
export const value = (node) => cdr(node);

export const append = (list, item) => consList(item, list);

export const toString = (html) => {
   if (isEmpty(html)) {
     return '';
  }
  const content = head(html);
  const tag = name(content);
 return `${toString(tail(html))}<${tag}>${value(content)}</${tag}>`;
};
//END

//Решение учителя

//BEGIN
export const make = () => l();
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

export const name = element => car(element);
export const value = element => cdr(element);

export const toString = (elements) => {
	if (isEmpty(elements)) {
	   return '';
	}
	const element = head(elements);
  const tag = name(element);
 return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};
//END




		
