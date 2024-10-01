// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let letters = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      letters.push(str[i]);
    }
  }
  let reversedLetters = '';
  for (let i = letters.length - 1; i >= 0; i--) {
    reversedLetters += letters[i];
  }
  
  return reversedLetters;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
