solution.js

Реализуйте функцию которая считает площадь треугольника на основе известной стороны и прилегающих к ней углов.
Углы задаются в градусах. Экспортируйте ее по умолчанию.

Формула: Если известна одна сторона треугольника и два прилежащих к ней угла,
то площадь данного треугольника вычисляется, как половина квадрата данной стороны умноженная на дробь,
в числителе которой, произведение синусов прилежащих углов, а в знаменателе синус противолежащего угла.

Противолежащий угол вычисляется по формуле: 180 - сумма двух известных углов.

solution(3, 60, 60); // 3.89711431703

Подсказки:

Так как тригонометрические функции в Math работают с радианами,
вам будет необходимо преобразовывать градусы в радианы.
Напишите для этого вспомогательную функцию. Формула для расчета: градусы * пи / 180

v.1

// BEGIN (write your solution here)
const radians = (degres) => {
  return degres * Math.PI / 180;
};

export default (side, angle1, angle2) => {
  const sin1 = Math.sin(radians(angle1));
  const sin2 = Math.sin(radians(angle2));
  const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));
  return (side * side) / 2 * ((sin1 * sin2) / sin3);
};
// END

//Решение учителя

// BEGIN
const radians = (degrees) => {
    return degrees * Math.PI / 180;
};

export default (side, angle1, angle2) => {
  const sin1 = Math.sin(radians(angle1));
  const sin2 = Math.sin(radians(angle2));
  const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));
  return (1 / 2) * side * side * ((sin1 * sin2) / sin3);
};

// END

