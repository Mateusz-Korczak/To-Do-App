const strContains = function (firstString, secondString) {
  console.log('firstString', firstString);
  console.log('secondString', secondString);
  return firstString.toLowerCase().includes(secondString.toLowerCase());
};

export default strContains;
