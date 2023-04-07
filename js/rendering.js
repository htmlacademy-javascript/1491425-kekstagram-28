import {createPhotoDescriptions} from './data.js';
import {imageModalOpen, renderImage, addComments, loadComments, commentsList} from './picture-modal.js';

const dataFotos = createPhotoDescriptions();
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
let addedComments = [];

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
    renderImage(desiredObject);
    const comments = desiredObject.comments;
    addedComments = addedComments.concat(comments);
    addComments(comments);
    if (commentsList.children.length === desiredObject.comments.length) {
      commentsLoader.classList.add('hidden');
      addedComments = [];
    }
    commentsCounter.innerHTML = `${commentsList.children.length} из <span class="comments-count">${desiredObject.comments.length}</span> комментариев`;
  }
};

const onLoaderClick = () => {
  loadComments(addedComments);
  commentsCounter.innerHTML = `${commentsList.children.length} из <span class="comments-count">${addedComments.length}</span> комментариев`;
  if (addedComments.length === commentsList.children.length) {
    addedComments = [];
    commentsLoader.classList.add('hidden');
  }
};

pictureContainer.addEventListener('click', onPictureClicked);

export {addPictures, onLoaderClick, commentsCounter};
