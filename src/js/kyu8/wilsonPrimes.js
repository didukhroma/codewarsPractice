// const amIWilson = p => {
//   let n = p - 1;
//   let factorial = n => (n <= 1 ? 1 : factorial(n - 1) * n);
//   let number = (factorial(n) + 1) / (p * p);

//   return number % 1 === 0 ? true : false;
// };
// console.log(amIWilson(5));
// console.log(amIWilson(6));

const factorial = n => {
  if (n === 0 || n === 1) return 1;

  return n;
};
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
// console.log(amIWilson(563));
