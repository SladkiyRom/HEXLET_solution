

solution.js

Реализуйте функцию reverse, которая переворачивает строку. Например:

reverse('hello, world!'); // !dlrow ,olleh

Подсказки

    Длина строки str находится так: str.length
    Не забудьте: индексы начинаются с 0, но длина — это реальная длина. 
    Так что индекс последнего символа не совпадает с длиной строки.





v.1

// BEGIN (write your solution here)
const reverse = (str) => {
  let result = "";
  let i = str.length - 1;
  while (i !== -1) {
    result = result + str[i];
    i = i - 1;
  }
  return result;
};
// END

export default reverse;

//Решение учителя

// BEGIN
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }

  return result;
};
// END

