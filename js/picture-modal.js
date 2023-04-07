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
    сloseImageModal (evt);
  }
};

const imageModalOpen = () => {
  fullScreenImageDisplay.classList.remove('hidden');
  imageComments.classList.add('hidden');
  commentsDownloadButton.classList.add('hidden');
  body.classList.add('modal-open');
  exitFullScreenImage.addEventListener('click', сloseImageModal);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const renderImage = (image) => {
  fullScreenImage.querySelector('img').src = image.url;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  photoDescription.textContent = image.description;
};

const generateComments = (comment) => {
  commentsList.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();
  comment.comments.forEach((elementComment) => {
    const newComment = commentItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = elementComment.avatar;
    newComment.querySelector('.social__picture').alt = elementComment.name;
    newComment.querySelector('.social__text').textContent = elementComment.message;
    commentsFragment.append(newComment);
  });
  commentsList.append(commentsFragment);
};

function сloseImageModal (evt) {
  evt.preventDefault();
  fullScreenImageDisplay.classList.add('hidden');
  body.classList.remove('modal-open');
  exitFullScreenImage.removeEventListener('click', сloseImageModal);
  document.removeEventListener('keydown', onDocumentKeyDown);
}

export {imageModalOpen, renderImage, generateComments};
