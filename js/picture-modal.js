import { isEscapeKey } from './util.js';
import {onLoaderClick, commentsCounter} from './render-pictures.js';

const body = document.querySelector('body');
const fullScreenImageDisplay = document.querySelector('.big-picture');
const exitFullScreenImage = fullScreenImageDisplay.querySelector('.big-picture__cancel');
const commentsLoader = fullScreenImageDisplay.querySelector('.comments-loader');
const fullScreenImage = fullScreenImageDisplay.querySelector('.big-picture__img');
const likesCount = fullScreenImageDisplay.querySelector('.likes-count');
const commentsCount = fullScreenImageDisplay.querySelector('.comments-count');
const photoDescription = fullScreenImageDisplay.querySelector('.social__caption');
const commentsList = fullScreenImageDisplay.querySelector('.social__comments');
const commentItem = fullScreenImageDisplay.querySelector('.social__comment');
let commentsStep = 5;

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    сloseImageModal (evt);
  }
};

const imageModalOpen = () => {
  fullScreenImageDisplay.classList.remove('hidden');

  body.classList.add('modal-open');
  exitFullScreenImage.addEventListener('click', сloseImageModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  commentsLoader.addEventListener('click', onLoaderClick);
};

const renderImage = (image) => {
  fullScreenImage.querySelector('img').src = image.url;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  photoDescription.textContent = image.description;
};

const renderComments = (picture) => {
  const commentsFragment = document.createDocumentFragment();
  picture.forEach((comment) => {
    const newComment = commentItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentsFragment.append(newComment);
  });
  commentsList.append(commentsFragment);
};

const addComments = (commentsArray) => {
  commentsList.innerHTML = '';
  const commentsToAdd = commentsArray.slice(0, commentsStep);
  renderComments(commentsToAdd);
};

const loadComments = (obj) => {
  commentsStep += 5;
  renderComments(obj.slice(commentsList.children.length, commentsStep));
};

function сloseImageModal (evt) {
  evt.preventDefault();
  fullScreenImageDisplay.classList.add('hidden');
  body.classList.remove('modal-open');
  exitFullScreenImage.removeEventListener('click', сloseImageModal);
  document.removeEventListener('keydown', onDocumentKeyDown);
  commentsStep = 5;
  commentsLoader.removeEventListener('click', onLoaderClick);
  commentsLoader.classList.remove('hidden');
  commentsCounter.innerHTML = '';
}

export {imageModalOpen, renderImage, addComments, loadComments, commentsList};
