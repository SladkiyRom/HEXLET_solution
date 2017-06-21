
rectangles.js

Реализуйте абстракцию (набор функций) для работы с прямоугольниками,
стороны которого всегда параллельны осям. При такой постановке,
достаточно знать только три параметра для однозначного задания
прямоугольника на плоскости: координаты левой-верхней точки, ширину и высоту.
Зная их, мы всегда можем построить прямоугольник одним единственным способом.

  |
4 |    точка   ширина
  |       *-------------
3 |       |            |
  |       |            | высота
2 |       |            |
  |       --------------
1 |
  |
  |---------------------------
0    1   2   3   4   5   6   7

Основной интерфейс:

    makeRectangle (конструктор) - создает прямоугольник.
    Принимает параметры: левую-верхнюю точку, ширину и высоту.
    Селекторы startPoint, width и height

Вспомогательные функции для выполнения расчетов:

    square - возвращает площадь прямоугольника (a * b).
    perimeter - возвращает периметр прямоугольника (2 * (a + b)).
    containsTheOrigin - проверяет,
    принадлежит ли центр координат прямоугольнику
    (не лежит на границе прямоугольника, а находится внутри).
    Чтобы в этом убедиться, достаточно проверить,
    что все точки прямоугольника лежат в разных квадрантах.

Так как это интерфейсные функции, то они должны быть экспортированы. Если этого не сделать, система модулей js не даст ими воспользоваться.

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------
const p = makePoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);

// Вычисление площади прямоугольника
square(rectangle); // 20;

perimeter(rectangle); // 18
containsTheOrigin(rectangle); // false

containsTheOrigin(makeRectangle(makePoint(-4, 3), 5, 4)); // true
containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2)); // false
containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8)); // false

v.1



// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);
export const width = rectangle => car(cdr(rectangle));
export const height = rectangle => cdr(cdr(rectangle));

export const square = rectangle => width(rectangle) * height(rectangle);
export const perimeter = rectangle => (2 * (width(rectangle) + height(rectangle)));

export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));
  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END

//Решение учителя

// BEGIN
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);
export const height = rectangle => cdr(cdr(rectangle));
export const width = rectangle => car(cdr(rectangle));

export const square = rectangle => height(rectangle) * width(rectangle);
export const perimeter = rectangle => 2 * (height(rectangle) + width(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END

