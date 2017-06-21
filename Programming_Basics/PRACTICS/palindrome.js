Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: радар, топот.
isPalindrome.js

Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:

import isPalindrome from './isPalindrome';

isPalindrome('radar'); // true
isPalindrome('a'); // true
isPalindrome('abs'); // false

Подсказки

Используйте функцию length из модуля strings , чтобы узнать длину строки:

strings.length('hello'); // 5

Используйте функцию substr из модуля strings , чтобы получить подстроку из строки:

strings.substr('hello', 0, 4); // "hell"

v.1

import * as strings from './strings';

// BEGIN (write your solution here) (write your solution here)
const isPalindrome = (str) => {
  const firstsimbol = strings.substr(str, 0, 2);
  const lastsimbol = str[strings.length(str) - 1] + str[strings.length(str) - 2];
    if ((firstsimbol === lastsimbol) || (strings.length(str) === 1)) {
      return true;
    }
    else return false;
};
export default isPalindrome;
// END

//Решение учителя

// BEGIN (write your solution here)
const isPalindrome = (string) => {
  if (strings.length(string) <= 1) {
    return true;
  }
  if (string[0] !== string[strings.length(string) - 1]) {
    return false;
  }

  return isPalindrome(strings.substr(string, 1, strings.length(string) - 2));
};

export default isPalindrome;
// END

