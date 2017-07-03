smallestDivisor.js

Реализуйте и экспортируйте по умолчанию функцию smallestDivisor, используя итеративный процесс. Функция должна находить минимальный делитель переданного числа.

Для этого достаточно последовательно проверять делимость, начиная с двойки. Если делитель не найден, значит число простое и делителем является само число.

Доп. условия: число, передаваемое в функцию, больше нуля (т.е. соответсвующую проверку делать не надо); делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

smallestDivisor(15); // 3
smallestDivisor(17); // 17


v.1

//BEGIN
const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
   }
    if (num % acc === 0) {
      return acc;
   }
   return iter(acc + 1);
};

 return iter(2);
};

export default smallestDivisor;
//END

//Решение учителя

//BEGIN
const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
  }
    if (num % acc === 0) {
      return acc;
  }
   return iter(acc + 1);
};

 return iter(2);
};

export default smallestDivisor;
//END
