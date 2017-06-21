points.js

/*Реализуйте и экспортируйте следующие функции для работы с точками:

    quadrant - функция, которая вычисляет квадрант, в котором находится точка.
    Ниже приведена схема, показывающая номера квадрантов на плоскости.

        +
      2 | 1
        |
+----------------+
        |
      3 | 4
        +

const point = makePoint(1, 5);
quadrant(point); // 1
quadrant(makePoint(3, -3)); // 4

Если точка не принадлежит ни одному квадранту, то функция должна возвращать null.

symmetricalPoint - функция, возвращающая новую точку, симметричную относительно начала координат.
Такая симметричность означает, что меняются знаки у x и y.

symmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)

distance - функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)

distance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28 */



// eslint-disable-next-line
import { makePoint, getX, getY } from 'hexlet-points';

// BEGIN (write your solution here)
export const quadrant = (point) => {
  let result = 0;
  if (getX(point) === 0 || getY(point) === 0) {
    return null;
  }
  if (getX(point) > 0 && getY(point) > 0) {
    result = 1;
  }
  if (getX(point) < 0 && getY(point) < 0) {
    result = 3;
  }
  if (getX(point) > 0 && getY(point) < 0) {
    result = 4;
  }
  if (getX(point) < 0 && getY(point) > 0) {
    result = 2;
  }
 return result;
 };
export const symmetricalPoint = (point) => {
   return makePoint(-getX(point), -getY(point));
  };


//Решение учителя

// BEGIN
export const quadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export const symmetricalPoint = point => makePoint(-getX(point), -getY(point));

export const distance = (point1, point2) => {
  const dX = getX(point2) - getX(point1);
  const dY = getY(point2) - getY(point1);
  return Math.sqrt((dX ** 2) + (dY ** 2));
};
// END

