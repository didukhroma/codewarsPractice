console.log('kyu-6-findTheUniqueNumber.js');
//1-ver
// const findUniq = arr =>
//     arr.filter((el, i, ar) => ar.filter(elem => elem === el).length === 1)[0];
//2-ver
// const findUniq = arr => {
//   let uniqueNumbers = arr.filter((el, i, ar) => ar.indexOf(el) === i);
//   let uniqArr = arr.filter(el => el === uniqueNumbers[0]);

//   return uniqArr.length === 1 ? uniqueNumbers[0] : uniqueNumbers[1];
// };
//3-ver
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
