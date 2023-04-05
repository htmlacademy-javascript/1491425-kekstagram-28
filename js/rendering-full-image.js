import {photoDetails} from './main.js';
import {isEscapeKey, isEnterKey, createComment} from './util.js';
const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const clearComments = () => {
  while (socialComments.firstChild) {
    socialComments.removeChild(socialComments.firstChild);
  }
};

const onImageOpenScreen = (evt) => {
  if (evt.target.closest('.picture')) {
    const thumbnail = evt.target.closest('.picture');
    const idElement = photoDetails.find((item) => item.id === Number(thumbnail.dataset.id));
    bigPicture.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    bigPictureImg.src = idElement.url;
    likesCount.textContent = idElement.likes;
    commentsCount.textContent = idElement.comments.length;
    socialCaption.textContent = idElement.description;
    socialCommentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    clearComments();
    createComment(idElement.comments, socialComments);
  }
};

picturesContainer.addEventListener('click', onImageOpenScreen);

const closePhoto = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

bigPictureClose.addEventListener('click', () => {
  closePhoto();
  document.body.classList.remove('modal-open');
});

bigPictureClose.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closePhoto();
  }
  document.body.classList.remove('modal-open');
});
