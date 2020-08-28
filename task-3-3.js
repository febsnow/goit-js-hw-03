/*Задача 2-3
Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке. */

function findLongestWord(string = '') {
  // Write code under this line
  let result = '';
  let text = string.split(' ');
  // let result = text[0];

  for (i = 0; i < text.length; i += 1) {
    result = result.length > text[i].length ? result : text[i];
  }
  // for (const word of text) {
  //   if (result.length > word.length) {
  //     result = result;
  //   } else {
  //     result = word;
  //   }
  // }
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
