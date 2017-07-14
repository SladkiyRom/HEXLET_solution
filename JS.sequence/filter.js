

Реализуйте функцию filter для библиотеки html-tags, используя итеративный процесс:

import { node, append, make, filter, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter((element) =>
	!is('h1', element), html3);

//<p>content</p>
htmlToString(processedHtml);

Реализуйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

import { toString as pairToString } from 'hexlet-pairs-data';
import { make, append, node } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is live'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

pairToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is live');


v.1

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, elements) => {
 const iter = (item, acc) => {
  if (isEmpty(item)) {
    return reverse(acc);
  }

   if (func(head(item))) {
     return cons(head(item), filter(func, tail(item)));
  }
  return filter(func, tail(item));
 };
 return iter(elements, l());
};

export const quotes = elements => {
  const list = filter(elements => is('blockquote', elements), elements);
  const item = l();
	  if (isEmpty(list)) {
	    return item;
	  }
	 return cons(value(head(list)), quotes(tail(list)));
};

//END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
 }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
 }
 return cons(element, removeHeaders(tailElements));
};

//Решение учителя

//BEGIN

export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
  }
  const item = head(items);
  const newAcc = func(item) ? cons(item, acc) : acc;
   return iter(tail(items), newAcc);
 };

 return iter(elements, l());
};

export const quotes = (elements) => {
  const filtered = filter(element => is('blockquote', element), elements);
  const result = map(element => value(element), filtered);
  return result;
};
//END
