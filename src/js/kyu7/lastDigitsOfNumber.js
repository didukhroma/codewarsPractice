console.log('kyu-7-lastDigitsOfNumber.js');

// const lastDigit = (n, d) =>
//   d <= 0
//     ? []
//     : d > String(n).length
//     ? String(n)
//         .split('')
//         .map(el => Number(el))
//     : String(n)
//         .split('')
//         .slice(-d)
//         .map(el => Number(el));

const lastDigit = (n, d) => String(n).split('').splice(-d, d).map(Number);

console.log('d > 0');
console.log(lastDigit(1, 1), [1]);
console.log(lastDigit(123767, 4), [3, 7, 6, 7]);
console.log(lastDigit(0, 1), [0]);
console.log(lastDigit(34625647867585, 10), [5, 6, 4, 7, 8, 6, 7, 5, 8, 5]);
console.log('-------------------------------------');

console.log('d <= 0');
console.log(lastDigit(1234, 0), []);
console.log(lastDigit(24134, -4), []);
console.log('-------------------------------------');
console.log('d > number of digits in n');
console.log(lastDigit(1343, 5), [1, 3, 4, 3]);
