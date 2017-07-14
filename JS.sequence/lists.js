

Реализуйте функцию map для библиотеки html-tags. Реализация должна быть рекурсивной с использованием итеративного процесса.

import { make, append, node, value, is } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
	  }
  return element;
}, dom3);

Реализуйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

import { make, append, node, value, is, toString as htmlToString } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
htmlToString(mirror(dom3));


v.1

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

//BEGIN(write your solution here)
export const map = (b2p, elements) => {
	const iter = (b2p, elements) => {
    if (isEmpty(elements)) {
      return l();
    }

    const newElement = b2p(head(elements));
    return cons(newElement, map(b2p, tail(elements)));
	 };

  return iter (b2p, elements);
};

export const mirror = (html) => {
  if (isEmpty(html)) {
   return l();
  }
 const element = head(html);
 const tag = name(element);
 const Mirror = reverseStr(value(element));
 return cons(node(tag, Mirror), mirror(tail(html)));
};
//END

export const b2p = (elements) => {
	if (isEmpty(elements)) {
	  return l();
	}

	let newElement;
	const element = head(elements);
	if (is('blockquote', element)) {
	  newElement = node('p', value(element));
	} else {
	  newElement = element;
	}

  return cons(newElement, b2p(tail(elements)));
};

// BEGIN
// Рекурсивный процесс
// export const map = (func, elements) => {
//    if (isEmpty(elements)) {
//      return l();
//    }
//
//    return cons(func(head(elements)), map(func, tail(elements)));
//  };
//
//Итеративный процесс (рекурсивно)

export const map = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
 };

 return iter(elements, l());
};

export const mirror = elements =>
  map(element => node(name(element), reverseStr(value(element))), elements);

//END	
