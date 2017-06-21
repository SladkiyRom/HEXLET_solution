ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

    G -> C
    C -> G
    T -> A
    A -> U

solution.js

Реализуйте и экспортируйте функцию toRna, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

toRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'



import * as strings from './strings';

// BEGIN (write your solution here)
export const toRna = (str) => {
let rna = '';
for(let i = 0; i < strings.length(str); i += 1) {
  switch(str[i]) {
    case 'G':
      rna += 'C';
      break;
    case 'C':
      rna += 'G';
      break;
    case 'T':
      rna += 'A';
      break;
    case 'A':
      rna += 'U';
      break;
    }
  }

 return rna;
};
// END


//Решение учителя

// BEGIN
export const toRna = (n) => {
  let rna = '';
  for (let i = 0; i < strings.length(n); i++) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
    }
  }

  return rna;
};