console.log('kyu-6-playingWithDigits');

function digPow(n, p) {
  // ...
  let sumDigits = String(n)
    .split('')
    .reduce(
      (acc, el) => {
        acc.sum += Math.pow(el, acc.pow);
        acc.pow += 1;
        return acc;
      },
      { sum: 0, pow: p },
    ).sum;
  return (sumDigits / n) % 1 === 0 ? sumDigits / n : -1;
}

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
