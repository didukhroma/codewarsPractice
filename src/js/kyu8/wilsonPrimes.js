console.log('kyu8-wilsonPrimes');
const amIWilson = p => {
  let n = p - 1;
  let factorial = n => (n <= 1 ? 1 : factorial(n - 1) * n);
  let number = (factorial(n) + 1) / (p * p);

  return number % 1 === 0 ? true : false;
};
// console.log(amIWilson(5), true);
// console.log(amIWilson(9), false);
// console.log(amIWilson(6), false);
console.log(amIWilson(25), false);
// console.log(amIWilson(97), false);

const factorial = n => (n <= 1 ? 1 : factorial(n - 1) * n);

console.log(factorial(25));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(5));
// console.log(amIWilson(563));
