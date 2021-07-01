import {getRandomNumber, getRandomNumberFloat, getRandomArrayElement, getRandomArraySlice} from './util.js';

const TITLES = ['The Shining Studio', 'Cozy Room in the Big Apple', 'The Gem Studio', 'The Gem of Midtown', 'Hotel Hugo', 'Superior Queen Room', 'Bright Full Floor Loft', 'Hotel 48 Lex', 'The Watson Hotel', 'Pod Hotel BK'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const AVATARS = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png', 'img/avatars/user09.png', 'img/avatars/user10.png'];
const quantityAds= 10;


// Генерируем объявление
const generateAd = () => {
  const coordinates = {
    lat: getRandomNumberFloat(35.65000, 35.70000, 5),
    lng: getRandomNumberFloat(139.70000, 139.80000, 5),
  };
  /* Генерируем индекс для URL
  const createAuthor = (index) => {
    const avatar = `img/avatars/user${(index).padStart(2,'0')}.png`;
    return avatar;
  };*/

  return {
    author: {
      avatar: getRandomArrayElement(AVATARS),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${coordinates.lat}, ${coordinates.lng}`,
      price: getRandomNumber(2000, 15000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(TIME),
      checkout: getRandomArrayElement(TIME),
      features: getRandomArraySlice(FEATURES),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at orci augue. Duis tincidunt sed magna a hendrerit. Curabitur ac.',
      photos: getRandomArraySlice(PHOTOS),
    },
    location: coordinates,
  };
};
// Генерируем массив из случайных объявлений
const generateAdsArray = () => new Array(quantityAds).fill(null).map(() => generateAd());
// eslint-disable-next-line no-console
console.log(generateAdsArray());
