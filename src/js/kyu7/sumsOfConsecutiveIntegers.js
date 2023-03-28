console.log('kyu-7-sumsOfConsecutiveIntegers.js');

// function position(x, y, n) {
// TODO: return consecutive integer at requested position

//   const sum = (num, startNum) =>
//     startNum === num ? num : startNum + sum(num, startNum + 1);
//   let smm = sum(n, 1);
//   let arr = [];
//   let sum = 0;
//   for (let i = 1; i < x; i++) {
//     sum += i;
//   }

//   let startNum = (y - sum) / x;
//   for (let i = 0; i < x; i++) {
//     arr.push(startNum);
//     startNum++;
//   }

//   return arr[n];
// }

// best solution
function position(x, y, n) {
  return y / x - (x - 1) / 2 + n;
}

console.log(position(4, 14, 3), 5);
console.log(position(2, 25, 0), 12);
console.log(position(7, 749, 5), 109);
console.log(position(3, -9, 1), -3);
console.log(position(5, 0, 0), -2);
