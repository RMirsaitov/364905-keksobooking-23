function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const RandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return RandomNum;
}
getRandomInt();

function getRandomIntFloat(min, max, floatNumber) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const RandomNumFloat = (Math.random() * (max - min + 1) + min).toFixed(
    floatNumber
  );
  return RandomNumFloat;
}
getRandomIntFloat();
