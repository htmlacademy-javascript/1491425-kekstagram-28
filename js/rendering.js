import {createPhotoDescriptions} from './data.js';
import {imageModalOpen, renderingImage, generateComments} from './picture-modal.js';

const dataFotos = createPhotoDescriptions();
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const addPictures = () => {
  dataFotos.forEach((element) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.dataset.id = element.id;
    pictureFragment.append(pictureElement);
  });
  pictureContainer.append(pictureFragment);
};

const onPictureClicked = (evt) => {
  if (evt.target.closest('.picture')) {
    imageModalOpen();
    const desiredElement = evt.target.closest('.picture');
    const desiredObject = dataFotos.find((element) => element.id === Number(desiredElement.dataset.id));
    renderingImage(desiredObject);
    generateComments(desiredObject);
  }
};

pictureContainer.addEventListener('click', onPictureClicked);

export {addPictures};
