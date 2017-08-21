simpleCard.js
	Реализуйте интерфейс simpleCard, основываясь на реализации percentCard.

solution.js
	Реализуйте функцию run, используя тип данных object для хранения элементов внутри списка log.


v.1


 ===============
| simpleCard.js |
|               |
 ===============


 // BEGIN (write your solution here)
const make = (name, damage) =>
  ({
    name,
    damage: health => damage
  });
  export default make;
// END


 ===============
|  solution.js  |
|               |
 ===============


import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards, customRandom) => {
  // BEGIN (write your solution here)
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const gameOver = head(log);
      gameOver.message = `${name1} был убит`;
      return consList(gameOver, log);
    }

    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;
    const stats = {
      message: `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`
    };


    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name1, health1, name2, order === 1 ? 2 : 1, newLog);
  };
  // END

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);	