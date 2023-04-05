const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const assemblyElements = (photoDetails) => {
  photoDetails.forEach(({url, likes, comments, id, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    const messages = comments.map((message) => message.message);
    pictureElement.querySelector('.picture__comments').textContent = messages.length;
    pictureElement.dataset.photoId = id;
    pictureFragment.append(pictureElement);
  });

  pictureContainer.append(pictureFragment);
};

export {assemblyElements};
