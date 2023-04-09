//Задание №2
function checkPalindrome (string) {
  let newString = '';

  string = string.toLowerCase().replaceAll(' ', '');

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString === string;
}

checkPalindrome('топот');

//Задание №4

function createsFileAddresses (prymaryString, minLength, secondaryString) {

  while (prymaryString.length < minLength) {

    if (secondaryString.length <= minLength - prymaryString.length) {
      prymaryString = secondaryString + prymaryString;
    } else {
      secondaryString = secondaryString.slice(0, minLength - prymaryString.length);
      prymaryString = secondaryString + prymaryString;
    }
  }

  return prymaryString;
}

createsFileAddresses();
