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

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createComment = (arr, container) => {
  arr.forEach((item) => {
    const listItem = makeElement('li', 'social__comment');
    const picture = makeElement('img', 'social__picture');
    picture.src = item.avatar;
    picture.alt = item.name;
    listItem.appendChild(picture);
    const commentText = makeElement('p', 'social__text', item.message);
    listItem.appendChild(commentText);
    container.appendChild(listItem);
  });
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement, isEscapeKey, isEnterKey, createComment};
