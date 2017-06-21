solution.js

Реализуйте и экспортируйте по умолчанию функцию которая принимает
на вход количество минут,а возвращает строку в формате чч:мм

Пример:

solution(60); // 01:00
solution(5); // 00:05
solution(15); // 00:15
solution(175); // 02:55
solution(67); // 01:07

Подсказки

Используйте функцию Math.floor(number) для округления до нижней границы

v.1

// BEGIN (write your solution here)
const clock = (num) => {
  if (num < 0 || num > 1440) {
    return 'Error, not correct value!';
  }

   let hours = Math.floor(num / 60);
   let minutes = num - (hours * 60);

   hours = (hours < 10) ? `0${hours}` : hours;
   minutes = (minutes < 10) ? `0${minutes}` : minutes;
   return `${hours}:${minutes}`;
};
export default clock;
// END

//Решение учителя

// BEGIN
export default (rawMinutes) => {
  const hours = Math.floor(rawMinutes / 60);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;

  const minutes = rawMinutes % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};
// END

