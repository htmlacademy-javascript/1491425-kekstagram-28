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

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, getNumber, findDuplicates, checkStringLength, shuffleArray, debounce};
