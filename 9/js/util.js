const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const getNumber = (value) => {
  let newNumber = '';

  if (typeof(value) === 'number') {
    value = String(value);
  } else {
    value = value.replaceAll(' ', '');
  }

  for (let i = 0; i < value.length; i++) {
    if (value[i] >= 0) {
      newNumber += value[i];
    }
  }

  if (newNumber === '') {
    return NaN;
  }

  return Number(newNumber);
};

const findDuplicates = (arr) => {
  const arrSet = new Set(arr);
  return arrSet.size === arr.length;
};

const checkStringLength = (string, lengthLimit) => string.length <= lengthLimit;

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement, isEscapeKey, getNumber, findDuplicates, checkStringLength};
