import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const fullScreenImageDisplay = document.querySelector('.big-picture');
const exitFullScreenImage = fullScreenImageDisplay.querySelector('.big-picture__cancel');
const imageComments = fullScreenImageDisplay.querySelector('.social__comment-count');
const commentsDownloadButton = fullScreenImageDisplay.querySelector('.comments-loader');
const fullScreenImage = fullScreenImageDisplay.querySelector('.big-picture__img');
const likesCount = fullScreenImageDisplay.querySelector('.likes-count');
const commentsCount = fullScreenImageDisplay.querySelector('.comments-count');
const photoDescription = fullScreenImageDisplay.querySelector('.social__caption');
const commentsList = fullScreenImageDisplay.querySelector('.social__comments');
const commentItem = fullScreenImageDisplay.querySelector('.social__comment');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imageModalClose(evt);
  }
};

const imageModalOpen = () => {
  fullScreenImageDisplay.classList.remove('hidden');
  imageComments.classList.add('hidden');
  commentsDownloadButton.classList.add('hidden');
  body.classList.add('modal-open');
  exitFullScreenImage.addEventListener('click', imageModalClose);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const renderingImage = (obj) => {
  fullScreenImage.querySelector('img').src = obj.url;
  likesCount.textContent = obj.likes;
  commentsCount.textContent = obj.comments.length;
  photoDescription.textContent = obj.description;
};

const generateComments = (obj) => {
  commentsList.innerHTML = '';
  obj.comments.forEach((subObj) => {
    const newComment = commentItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = subObj.avatar;
    newComment.querySelector('.social__picture').alt = subObj.name;
    newComment.querySelector('.social__text').alt = subObj.message;
    commentsList.append(newComment);
  });
};

function imageModalClose (evt) {
  evt.preventDefault();
  fullScreenImageDisplay.classList.add('hidden');
  body.classList.remove('modal-open');
  exitFullScreenImage.removeEventListener('click', imageModalClose);
  document.removeEventListener('keydown', onDocumentKeyDown);
}

export {imageModalOpen, renderingImage, generateComments};
