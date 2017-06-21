
myMathModule.js

В файле myMathModule.js:

    Создайте функцию getTriangleArea которая принимает два аргумента h и b  
    и вычисляет площадь треугольника по формуле 
    A = 1/2 * h * b, где h — высота, а b — основание треугольника.

    Пример:

    getTriangleArea(5, 10) === 25;
    getTriangleArea(15, 12) === 90;

    Экспортируйте функцию.

solution.js

В файле solution.js:

    Импортируйте getTriangleArea из модуля myMathModule.
    Создайте функцию, которая принимает аргумент n 
    и возвращает площадь треугольника высотой n 
    и основанием <strong>n<sup>2</sup>/2</strong>. Используйте функцию square.
    Экспортируйте функцию по умолчанию.



v.1

export const getTrianglePerimeter = (a, b, c) => a + b + c;

// BEGIN (write your solution here)
export const getTriangleArea = (h, b) => {
  return 1/2 * h * b;
};
// END

//Решение учителя

// BEGIN
export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};
// END


import square from './square';

// BEGIN (write your solution here)
import getTrianglArea from './myMathModule';

const areaTriangle = (n) => {
  return 1/2 * n *square(n)/2;
};
areaTriangle(5);

export default areaTriangle;
// END

//Решение учителя

// BEGIN
import { getTriangleArea } from './myMathModule';

const solution = n => getTriangleArea(n, square(n) / 2);

export default solution;
// END

