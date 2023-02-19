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
