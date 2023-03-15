console.log('kyu-7-mysteriosSingularityNumber.js');

function realNumbers(n) {
  // your code here
  let res = [];
  let primeNumber = 1;
  for (let i = 0; i <= n; i++) {
    if (res.length === 0) res = [...res, 1, 2, 3];
    if (i % 2 === 0) {
      primeNumber = 6 * i - 1;
    } else primeNumber = 6 * i + 1;
    if (primeNumber < 0) continue;
    if (primeNumber > n) break;
    res.push(primeNumber);
  }
  return res;
}

console.log(realNumbers(5), 1);
console.log(realNumbers(10), 2);
