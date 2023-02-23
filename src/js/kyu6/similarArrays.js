console.log('kyu-6-similarArrays');

const arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, '4'];

function arraysSimilar(arr1, arr2) {
  let result = false;
  let sortedArr1 = arr1.sort((a, b) => a - b);
  let sortedArr2 = arr2.sort((a, b) => a - b);

  if (sortedArr1.length !== sortedArr2.length) {
    return result;
  }

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      result = false;
      break;
    } else {
      result = true;
      continue;
    }
  }
  // TODO: Implement your arraysSimilar
  return result;
}

console.log(arr1);
console.log(arraysSimilar(arr2, arr3));
console.log(arraysSimilar(arr3, arr4));
