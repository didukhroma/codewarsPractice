// input data
const arr1 = [2, 7, 11, 15];
const target1 = 9;
const arr2 = [3, 2, 4];
const target2 = 6;
const arr3 = [3, 3];
const target3 = 6;

// function 1
// const nums = (arr, target) => {
//   return arr.reduce((result, el, index, arr) => {
//     for (let i = index + 1; i < arr.length; i++) {
//       if (index === i) continue;
//       if (el + arr[i] === target) {
//         result.push(index, i);
//         break;
//       }
//       continue;
//     }
//     return result;
//   }, []);
// };

// function2
const nums = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.length !== 0) break;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j);
        break;
      }
      continue;
    }
  }
  return result;
};
//
//console log
console.log(nums(arr1, target1));
console.log(nums(arr2, target2));
console.log(nums(arr3, target3));
