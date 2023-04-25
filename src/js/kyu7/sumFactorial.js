console.log('kyu-7-sumFactorial');

// const factorial = n => (!(n > 1) ? 1 : factorial(n - 1) * n);
// const sumFactorial = arr =>
//   arr.reduce((acc, el) => {
//     return acc + factorial(el);
//   }, 0);

const funcSum = num => (num === 0 || num === 1 ? 1 : num * funcSum(num - 1));
const sumFactorial = arr => arr.reduce((tot, el) => (tot += funcSum(el)), 0);

console.log(sumFactorial([4, 6]), 744);
console.log(sumFactorial([5, 4, 1]), 145);
