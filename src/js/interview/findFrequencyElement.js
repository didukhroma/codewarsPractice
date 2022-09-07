let arr = ['hello', 'world', 'java', 'hello', 'java'];

const countWordInArr = array => {
  const result = array.reduce((acc, word) => {
    // ver 1
    // Object.keys(acc).indexOf(word) === -1 ? (acc[word] = 1) : (acc[word] += 1);
    // ver 2
    // acc.hasOwnProperty(word) ? (acc[word] += 1) : (acc[word] = 1);
    // ver 3 for eslint
    Object.prototype.hasOwnProperty.call(acc, word)
      ? (acc[word] += 1)
      : (acc[word] = 1);
    return acc;
  }, {});
  return result;
};

console.log(
  '🚀 ~ file: findFrequencyElement.js ~ line 20 ~ countWordInArr(arr)',
  countWordInArr(arr),
);
