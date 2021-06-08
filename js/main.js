function getRandomInt(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  if (max <= min) {
    throw new Error('Максимальное число не должно быть меньше или равно минимальному!');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();

function getRandomIntFloat(min, max, floatNumber) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  if (max <= min) {
    throw new Error('Максимальное число не должно быть меньше или равно минимальному');
  }
  return (Math.random() * (max - min + 1) + min).toFixed(floatNumber);
}
getRandomIntFloat();
