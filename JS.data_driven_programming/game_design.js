solution.js
Допишите логику функции run, которая содержит ядро игрового движка.

Алгоритм
1.Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0,
  то обновляем лог и возвращаем наружу. Игра закончена.

2.В ином случае, берем рандомную карту, вычисляем урон,
  записываем новое здоровье, а также добавляем строчку в лог, используя формат.

const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;

3.Повторяем

  Подсказки:

  -Параметр order в функции iter нужен для определения того,
   какой игрок сейчас атакует.
  -Формат записи лога cons(cons(health1, health2), message).
  -Используйте функцию random для выбора карты из колоды.

  v.1

  import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
  import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

  const run = (player1, player2, cards) => {
    const iter = (health1, name1, health2, name2, order, log) => {
// BEGIN (write your solution here
     if (health1 <= 0 || health2 <= 0) {
        log = consList(cons(cons(health1, health2), 'Game over!'), log);
        return log;
     }
     const card = random(cards);
     const damage = cdr(card); //function
     const cardName = car(card);

     let message = '';
     if (order === 1) {
     health2 = health2 - damage();
     message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
     }
     if (order === 2) {
     health1 = health1 - damage();
     message = `Игрок '${name2}' применил '${cardName}' против '${name1}' и нанес урон '${damage}'`;
     }
     log = consList(cons(cons(health1, health2), message), log);

     return iter(health1, name1, health2, name2, order === 2 ? 1 : 2, log);
// END
     };
     const startHealth = 10;
     const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
     return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
     };

     export default cards =>
     (name1, name2) =>
     run(name1, name2, cards);

     //Решение учителя

// BEGIN
if (health1 <= 0) {
return consList(cons(car(head(log)), `${name1} был убит`), log);
}
const card = random(cards);
const cardName = car(card);
const damage = cdr(card)();
const newHealth = health2 - damage;

const message = `Игрок '${name1}' применил '${cardName}'
против '${name2}' и нанес урон '${damage}'`;
let stats;
if (order === 1) {
stats = cons(cons(health1, newHealth), message);
} else if (order === 2) {
stats = cons(cons(newHealth, health1), message);
}
const newLog = consList(stats, log);
return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);

