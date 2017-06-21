
Программист, который работал на проекте до вас,
разбросал все функции связанные с математическими вычислениями
по разным файлам с именами numbers1, numbers2 и numbers3.
Причем имена функций тоже сделал странными, все функции
в файле numbers2 заканчиваются на двойку, например sum2.

Вы быстро поняли что это неудобно и нужно создать единый интерфейс
для доступа к ним (говорят фасад). Для этого необходимо импортировать
все функции из всех перечисленных модулей в новый модуль в файле math.js.

math.js

Задача состоит в том чтобы файл math.js вобрал в себя все функции
из трех описанных выше фаайлов и выставил их наружу под следующими
именами: pow, sum, sub, sqrt и multi.
А так же экспортировал функцию cube по умолчанию.

В этом задании специально не сказано где какая функция и под каким именем лежит.
А так же не сказано как они все экспортируются.
Цель этого задания в том чтобы вы хорошо разобрались с системой модулей,
что очень упростит вашу жизнь в дальнейшем.
Огромная просьба не подсматривать решение и подумать самостоятельно,
а в случае чего задать вопрос в комьюнити.

Не забудьте проанализировать файл в с тестами,
чтобы понять как используется модуль math.js.

v.1



// BEGIN (write your solution here)
import sqrt2 from './numbers3';
export const sqrt = sqrt2;
import { sum2 as sm, sub2 as sb, pow2 as pw } from './numbers2';
export const sum = sm;
export const pow = pw;
export const sub = sb;
import multi2 from './numbers2';
export const multi = multi2;
import cube2 from './numbers1';
const cube = cube2;
export default cube;
// END

//Решение учителя

// BEGIN
import cube from './numbers1';
import sqrt3 from './numbers3';
import multi2, { pow2, sub2, sum2 } from './numbers2';

export default cube;
export const pow = pow2;
export const sub = sub2;
export const sum = sum2;
export const sqrt = sqrt3;
export const multi = multi2;
// END

