'use strict';

//Задание №1

function checkStringLength (string, lengthLimit) {
  return string.length <= lengthLimit;
}

checkStringLength('Электродвигатель', 16);

//Задание №2

function checkPalindrome (string) {
  let newString = '';

  string = string.toLowerCase().replaceAll(' ', '');

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString === string;
}

checkPalindrome('топот'); //true
checkPalindrome('ДовОд'); //true
checkPalindrome('Кекс'); //false
checkPalindrome('Лёша на полке клопа нашёл '); //true

//Задание №3

function getNumber (value) {
  let newNumber = '';

  if (typeof(value) === 'number') {
    value = String(value);

    for (let i = 0; i < value.length; i++) {
      if (value[i] >= 0) {
        newNumber += value[i];
      }
    }
  } else {
    value = value.replaceAll(' ', '');

    for (let i = 0; i < value.length; i++) {
      if (value[i] >= 0) {
        newNumber += value[i];
      }
    }

    if (newNumber === '') {
      return NaN;
    }
  }

  return Number(newNumber);
}

getNumber('2023 год'); //Результат: число 2023
getNumber('ECMAScript 2022'); //Результат: число 2022
getNumber('1 кефир, 0.5 батона'); //Результат: число 105
getNumber('а я томат'); //Результат: NaN
getNumber(2023); //Результат: число 2023
getNumber(-1); //Результат: число 1
getNumber(1.5); //Результат: число 15

