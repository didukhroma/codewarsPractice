console.log('kyu-5-zeroToEnd');

// function moveZeros(arr) {
//   let sortedArr = arr.filter(el => el !== 0);
//   const idx = arr.length - sortedArr.length;
//   for (let i = 0; i < idx; i++) {
//     sortedArr.push(0);
//   }
//   return sortedArr;
// }

const moveZeros = arr => [
  ...arr.filter(el => el !== 0),
  ...arr.filter(el => el === 0),
];

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
