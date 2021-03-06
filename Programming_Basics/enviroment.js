Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки
и возвращают true/false. Сравнение идет по количеству заглавных 
символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов 
и в данном задании считаются заглавными.

Примеры:

greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true

comparers.js

Допишите необходимые части функций для того, чтобы заработали функции lessThan,
greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

    Если первая строка больше второй, то возвращается 1.
    Если вторая строка больше первой, то возвращается -1.
    Иначе возвращается 0.

Подсказки

    Функция bigLettersCount принимает на вход строку str и высчитывает количество 
    заглавных символов в ней.
    Вычисление длины строки: strings.length(str).
    Перевод строки в верхний регистр strings.toUpperCase(str).
    Проверка на то, что символ в верхнем регистре: strings.toUpperCase(char) === char;




v.1

import * as strings from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() || str[i] === " ")
    result++;
  }
  return result;
  // END
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (secondCount > firstCount) {
    return -1;
  }
  else {
    return 0;
  }
  // END
};

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;

//Решение учителя

  // BEGIN
  let result = 0;
  for (let i = 0; i < strings.length(str); i += 1) {
    if (strings.toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }

  return result;
  // END  // BEGIN
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;



v.2

import * as strings from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let counter = 0;
  for (let i = 0; i < strings.length(str); i++) {
    if (str[i] === strings.toUpperCase(str[i]) || str[i] === ' ') {
      counter += 1;
    }
  }
  return counter
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  else if (firstCount <  secondCount) {
    return -1;
  }
  return 0;
  // END
};

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;

//Решение учителя

  // BEGIN
  let result = 0;
  for (let i = 0; i < strings.length(str); i += 1) {
    if (strings.toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }

  return result;
  // END  // BEGIN
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END

