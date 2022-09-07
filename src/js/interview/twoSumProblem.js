let ar = [1, 2, 3, 4, 6, 7, 8, 9];

const findSumElem = (array, value) => {
  let result = [];
  let allSum = {};
  array.forEach(element => {
    for (let i = 0; i < array.length; i++) {
      if (i === array.indexOf(element)) continue;
      if (element + array[i] === value) allSum[i] = [element, array[i]];
      continue;
    }
  });
  console.log(allSum);
  return result;
};

console.log(findSumElem(ar, 9));
