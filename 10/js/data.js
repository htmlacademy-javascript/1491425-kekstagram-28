/* import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const MIN_ID = 1;
const MAX_ID = 25;
const getIdPhoto = createRandomIdFromRangeGenerator(MIN_ID, MAX_ID);

const URL_MIN = 1;
const URL_MAX = 25;
const getUrlPhoto = createRandomIdFromRangeGenerator(URL_MIN, URL_MAX);

const PHOTO_DESCRIPTIONS = [
  'Пустой пляж на фоне красивого отеля.', 'Указатель, где находится пляж', 'Место, куда хочется вернуться', 'Обожаю море на фоне заката', 'Оригинальное блюдо) Очень вкусно!',
  'Моя "девочка", Matte Black McLaren 650S', 'Мой десерт', 'Кисель из свежих ягод', 'Неожиданный гость на пляже))', 'Органайзеры для обуви своими руками',
  'Clevelander Hotel - Майами-Бич, США', 'Audi A5 на окраине города', 'Рыба с овощами', 'Необычный фотопроект Котосуши', 'Гигантские музыкальные тапочки',
  'Вид с борта самолета', 'Симфонический оркестр', 'chevrolet impala 64', 'тапочки с подсветкой', 'Вечерний пляж майами',
  'САМАЯ ВКУСНАЯ КУРИНАЯ ГРУДКА В МУЛЬТИВАРКЕ', 'Самый красивый закат', 'Сухопутные крабы', 'Рок концерт', 'Экскурсии на Бали'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_ID_COMMENT = 1;
const MAX_ID_COMMENT = 25;
const getIdComment = createRandomIdFromRangeGenerator(MIN_ID_COMMENT, MAX_ID_COMMENT);

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 6;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Liam', 'Noah', 'Oliver', 'Elijah', 'James', 'William',
  'Benjamin', 'Lucas', 'Henry', 'Theodor', 'Jack', 'Levi',
  'Alexander', 'Jackson', 'Mateo', 'Daniel', 'Michael',
  'Mason', 'Sebastian', 'Ethan', 'Logan', 'Owen', 'Samuel',
  'Jacob', 'Asher'
];

const NUMBER_OBJECTS = 25;

const getUserComment = () => ({
  id: getIdComment(),
  avatar: `img/avatar-${getRandomInteger(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const getPhotoDescription = () => ({
  id: getIdPhoto(),
  url: `photos/${getUrlPhoto()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInteger(1, 6)}, getUserComment),
});

const createPhotoDescriptions = () => Array.from({length: NUMBER_OBJECTS}, getPhotoDescription);

export {createPhotoDescriptions};
 */
