/*Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре. */

function checkForSpam(str) {
  'use strict';
  // Write code under this line
  let checkedString = str.toLowerCase();
  let strCheck = '';
  let wordToSearch1 = 'sale';
  let wordToSearch2 = 'spam';
  if (checkedString.includes(wordToSearch1)) {
    strCheck = true;
  } else if (checkedString.includes(wordToSearch2)) {
    strCheck = true;
  } else {
    strCheck = false;
  }
  return strCheck;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// console.log('[SPAM] How to earn fast money?'.toLowerCase().includes('spam'));
