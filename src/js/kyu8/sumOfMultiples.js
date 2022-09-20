console.log('kyu8 sumOfMultiples');

function sumMul(n, m) {
  if (n === m || n > m) return 'INVALID';
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
