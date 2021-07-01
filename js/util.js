// Генерируем пололжительное число из заданного диапазона
const getRandomNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const upper = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  const randomResult = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(randomResult);
};

// Генерируем пололжительное число из заданного диапазона с плавающей точкой
const getRandomNumberFloat = (minNumberFloat, maxNumberFloat, digits = 1) => {
  const lowerFloat = Math.min(Math.abs(minNumberFloat), Math.abs(maxNumberFloat));
  const upperFloat = Math.max(Math.abs(minNumberFloat), Math.abs(maxNumberFloat));
  const result = Math.random() * (upperFloat - lowerFloat) + lowerFloat;
  return result.toFixed(digits);
};

// Получаем случайный елемента из массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// Получаем часть массива случайной длины
const getRandomArraySlice = (elements) => elements.slice(0, getRandomNumber(1, elements.length));

export {getRandomNumber, getRandomNumberFloat, getRandomArrayElement, getRandomArraySlice};
