const TITLES = ['The Shining Studio', 'Cozy Room in the Big Apple', 'The Gem Studio', 'The Gem of Midtown', 'Hotel Hugo', 'Superior Queen Room', 'Bright Full Floor Loft', 'Hotel 48 Lex', 'The Watson Hotel', 'Pod Hotel BK'];
const AVATARS  = [];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const quantityAds= 10;

// Генерируем число из заданного диапазона
const getRandomNumber = (valueFrom, valueUpTo, digits = 0) => {
  const lower = Math.min(Math.abs(valueFrom), Math.abs(valueUpTo));
  const upper = Math.max(Math.abs(valueFrom), Math.abs(valueUpTo));
  const randomResult = Math.random() * (upper - lower + 1) + lower;
  return randomResult.toFixed(digits);
};

// Заполняем массив URL для аватаров с помощью цикла
for (let counter = 1; counter <= quantityAds; counter++) {
  if (counter < 10) {
    AVATARS.push(`img/avatars/user0${counter}.png`);
  } else {AVATARS.push(`img/avatars/user${counter}.png`);
  }
}

// Получаем случайный елемента из массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// Получаем часть массива случайной длины
const getArrayRandomSlice = (elements) => elements.slice(0, getRandomNumber(1, elements.length));


// Генерируем объявление
const generateAd = () => {
  const coordinates = {
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5),
  };

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
      features: getArrayRandomSlice(FEATURES),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at orci augue. Duis tincidunt sed magna a hendrerit. Curabitur ac.',
      photos: getArrayRandomSlice(PHOTOS),
    },
    location: coordinates,
  };
};

// Генерируем массив из случайных объявлений
const generateAdsArray = () => new Array(quantityAds).fill(null).map(() => generateAd());

// eslint-disable-next-line no-console
console.log(generateAdsArray());
