import {createPhotoDescriptions} from './data.js';

const dataFotos = createPhotoDescriptions();
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

dataFotos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  const messages = comments.map((message) => message.message);
  pictureElement.querySelector('.picture__comments').textContent = messages.length;
  pictureFragment.append(pictureElement);
});

pictureContainer.append(pictureFragment);

export {dataFotos};
